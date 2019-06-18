const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const _ = require('lodash');
const Boom = require('boom');
const util = require('util');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model.js');
const UserActivity = require('../models/useractivity.model.js');
const getLoginUserInfo = require('../libs/auth.js');
const jwtValidator = require('../libs/jwt.js');
const userSchema = require('../schemas/user.schema.js');
const userService = require('../libs/userservice.js');

const userController = {};


/**
 *
 * @param {request} request
 * @param {response} h
 *
 * user registration/signup api.
 */
userController.signup = async function(request, h) {
    let errors = Joi.validate(request.payload, userSchema.userSignupSchema, function(error) {
         if (error) return error;
    });
    if (errors) {
        util.log(errors);

        return Boom.badRequest('Invalid inputs');
    }

    let newUser = new User({
        userName: request.payload.username,
        password: bcrypt.hashSync(request.payload.password, 12),
        firstName: request.payload.firstname,
        lastName: request.payload.lastname
    });

    try {
        let saveUser = await newUser.save();
        return h.response({ user: _.omit(saveUser, ['password']) }).code(201);
    } catch (error) {       
        console.log('ERROR ' + error);
        return Boom.badImplementation('something went wrong.');
    }
};

/**
 *
 * @param {request} request
 * @param {response} h
 *
 * get all users list.
 */
userController.list = async function(request, h) {
    console.log('LIST');
    let response = User.find({}, { password: 0, userName: 0}, function(error, users) {
        if (error) {
            return h(error).code(404);
        }
        return h.response(users);
    });
    console.log(`Get All Users list`);

    return response;
};

/**
 *
 * @param {request} request
 * @param {response} h
 *
 * show the particular user info
 */
userController.show = async function(request, h) {
    let response = User.find({_id: request.params.id}, { password: 0, userName: 0}, function(error, users) {
        if (error) {
            return h(error).code(404);
        }
        return h.response(users);
    });

    return response;
};

userController.update = async function(request, h) {
    let errors = Joi.validate(request.payload, userSchema.userUpdateSchema, function(error) {
        if (error) return error;
    });
    if (errors) {
        return Boom.badRequest('Invalid inputs');
    }

    let data = {
        firstName: request.payload.firstname,
        lastName: request.payload.lastname
    }
    let result = await userService.updateUserInfo(request.params.id, data);
    if (!result.hasOwnProperty('ok')) {
        return Boom.badImplementation('something went wrong. user information is not updated.');
    }

    return h.response({ message: "User information updated successfully" });
};

userController.login = async function(request, h) {
    let userName = request.payload.username;
    let password = request.payload.password;
    let userInfo = await getLoginUserInfo(userName, password)
    if (userInfo) {
        jwtPayload = {
            id: userInfo._id,
            userName: userInfo.userName,
            valid: true
        }

        let token = await jwtValidator.genrateToken(jwtPayload);
        let activity = await userService.saveUserActivity(userInfo._id, request);
        return h.response({
            id: userInfo._id,
            userName: userInfo.userName,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            token: token
        });
    }

    return  Boom.unauthorized('invalid username or password');
};

userController.inactiveUsers = async function(request, h) {
    let dt = userService.getInactiveLoginDate();
    let response = await UserActivity.find({loginDate: {$lt: dt}}).populate('users').exec();

    return h.response({response});
};

module.exports = {
    signup: userController.signup,
    list: userController.list,
    login: userController.login,
    show: userController.show,
    update: userController.update,
    inactiveUsers: userController.inactiveUsers
}