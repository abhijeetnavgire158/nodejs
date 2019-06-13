const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const _ = require('lodash');
const Boom = require('boom');
const util = require('util');
var bcrypt = require('bcryptjs');
const User = require('../models/user.model.js');

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
        if (error) {
            console.log('ERROR ' + error + ' sds ');
            return Boom.badImplementation('something went wrong.');
        }
    }
};

module.exports = {
    signup: userController.signup
}