const Joi = require('@hapi/joi');
const UserController = require('../controllers/user.controller.js');

module.exports = [{
    method: 'POST',
    path: '/api/users',
    handler: UserController.signup,
    // options: {
    //     validate: {
    //         payload: {
    //             username: Joi.string().min(6).max(50)
    //         }
    //     }
    // }
}];