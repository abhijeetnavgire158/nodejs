const Joi = require('@hapi/joi');

const userSignupSchema = Joi.object().keys({
    username: Joi.string().min(6).max(50).required(),
    password: Joi.string().min(6).required(),
    firstname: Joi.string().min(2).max(50).required(),
    lastname: Joi.string().min(2).max(50).required()
});

const userUpdateSchema = Joi.object().keys({
    firstname: Joi.string().min(2).max(50).required(),
    lastname: Joi.string().min(2).max(50).required()
});

module.exports = {
    userSignupSchema: userSignupSchema,
    userUpdateSchema: userUpdateSchema
}