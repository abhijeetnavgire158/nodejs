const Joi = require('@hapi/joi');

const authenticateUserSchema = Joi.object({
    username: Joi.string().min(6).max(50).required(),
    password: Joi.string().min(6).required()
});

module.exports = authenticateUserSchema;