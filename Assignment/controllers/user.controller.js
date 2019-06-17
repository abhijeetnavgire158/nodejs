const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const _ = require('lodash');
const Boom = require('boom');
const util = require('util');
var bcrypt = require('bcryptjs');
const User = require('../models/user.model.js');
const getLoginUserInfo = require('../libs/auth.js');
const jwtValidator = require('../libs/jwt.js');

const userController = {};



userController.signup = async function(request, h) {
    const userSchema = require('../schemas/user.schema.js');
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

userController.login = async function(request, h) {
    let userName = request.payload.username;
    let password = request.payload.password;
    let userInfo = await getLoginUserInfo(userName, password)
    if (userInfo) {
        console.log(userInfo._id);
        jwtPayload = {
            id: userInfo._id,
            userName: userInfo.userName,
            valid: true
        }

        let token = await jwtValidator.genrateToken(jwtPayload);

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

module.exports = {
    signup: userController.signup,
    list: userController.list,
    login: userController.login
}