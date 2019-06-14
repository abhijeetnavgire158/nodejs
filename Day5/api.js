const dotenv = require('dotenv').config();
const hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const User = require('./model/user.model.js');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

const server = hapi.server({
    host: process.env.HOST,
    port: process.env.PORT
});

//connect to DB
const dbOptions = {dbName: process.env.DB_NAME, useNewUrlParser: true};
mongoose.connect(process.env.DB_CONNECTION_URL, dbOptions, function(error) {
    if (error) {
        return console.error('Unable to connect');
    }
    console.log('Database connected successfully');
});

async function saveUser(request) {
    let newUser = new User({
        userName: request.payload.username,
        password: bcrypt.hashSync(request.payload.password, 12),
        firstName: request.payload.firstname,
        lastName: request.payload.lastname
    });

    result = await newUser.save();
    console.log(result);
    return result;
}

async function deleteUser(id) {
    let result = await User.deleteOne({"_id": id});
    console.log('Deleted');
    console.log(result);
    return result;
}

async function updateUser(id, data) {
    let result = await User.update({"_id": id},data);
    console.log('Update Record');
    console.log(result);
    return result;
}

server.route([
    {
        method: 'GET',
        path: '/users',
        handler: function(request, reply) {
            let response = User.find({}, function(err, users) {
                if (err) {
                    return reply(err).code(404);
                }
                return reply.response(users);
            });

            return response;            
        }
    },
    {
        method: 'GET',
        path: '/users/{id}',
        handler: function(request, reply) {
            let response = User.findOne({"_id": request.params.id}, { password: 0}, function(error, user) {
                if (error) {
                    reply(error).code(404);
                }
                return reply.response(user);
            }); 
            console.log(`Get User information - id = ${request.params.id}`);

            return response;
        }
    },
    {
        method: 'POST',
        path: '/users',
        handler: async function(request, h) {
            let userinfo = await saveUser(request);          
            userinfo = _.omit(userinfo, 'password');           
            return h.response(userinfo);
        }
    },
    {
        method: 'DELETE',
        path: '/users/{id}',
        handler: async function(request, h) {
            await deleteUser(request.params.id);
            return `Delete user - id = ${request.params.id}`;
        }
    },
    {
        method: ['PUT', 'PATCH'],
        path: '/users/{id}',
        handler: async function(request, h) {
            let data = {
                firstName: request.payload.firstname,
                lastName: request.payload.lastname
            }

            result = await updateUser(request.params.id, data);
            return `Update user - id = ${request.params.id}`;
        }
    }
]);

server.start(function(error) {
    if (error) return console.log(error);

    console.log('Server is running');
});