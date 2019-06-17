const Joi = require('@hapi/joi');
const UserController = require('../controllers/user.controller.js');
const authenticateUserSchema = require('../schemas/authenticateUser.schema.js');
module.exports = [
    {
        method: 'POST',
        path: '/api/users',
        handler: UserController.signup,
        options: {
            validate: {
                payload: {
                    username: Joi.string().min(6).max(50)
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/api/users',
        config: { auth: 'token' },
        handler: UserController.list
    },
    {
        method: 'POST',
        path: '/api/login',
        config: { auth: false },
        handler: UserController.login
    }
];