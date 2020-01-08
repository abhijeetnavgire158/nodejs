const Joi = require('@hapi/joi');
const UserController = require('../controllers/user.controller.js');

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
        method: 'GET',
        path: '/api/users/{id}',
        handler: UserController.show
    },
    {
        method: 'POST',
        path: '/api/login',
        config: { auth: false },
        handler: UserController.login
    },
    {
        method: ['PUT', 'PATCH'],
        path: '/api/users/{id}',
        handler: UserController.update
    },
    {
        method: 'GET',
        path: '/api/inactiveusers',
        handler: UserController.inactiveUsers
    }
];