const dotenv = require('dotenv').config();
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const boom = require('boom');
const hapi = require('@hapi/hapi');
const Vision = require('vision');

let init = async function() {
    console.log(process.env.PORT);
    console.log(process.env.HOST);
    const server = hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });

    server.ext({
        type: 'onRequest',
        method: function (request, h) {

            // Change all requests to '/test'
            console.log('OnRequest Call');
            //request.setUrl('/users');
            return h.continue;
        },
    });

    server.ext([{
        type: 'onPreAuth',
        method: function(request, h){
            console.log('onPreAuth Call');
            return h.continue;
        }
    },{
        type: 'onCredentials',
        method: function(request, h) {
            console.log('OnCredentials Call');
            return h.continue;
        }
    }]);

    server.events.on('log', function(event, tags) {
        if (tags.test) {
            console.log(`Server Log : Test -> ${event.data}`);
        }
    });

    server.events.on('request', function(event, tags) {
        //console.log(`Request Log : Error -> ${tags.data}`);        
    });


    const users = {
        abhijeet: {
            username: 'abhijeet',
            password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
            name: 'abhijeet navgire',
            id: '2133d32a'
        }
    };

    const validate = async (request, username, password) => {       
        const user = users[username];
        if (!user) {
            return boom.badRequest('There is no user with this name');
        }

        const isValid = await bcrypt.compare(password, user.password);
        const credentials = { id: user.id, name: user.name };

        return { isValid, credentials };
    };

    await server.register(require('hapi-auth-basic'));
    await server.register(Vision);
    server.auth.strategy('simple', 'basic', { validate });

    server.route({
        method: 'GET',
        path: '/',
        options: {
           auth: 'simple'
        },
        handler: function (request, h) {

            return 'welcome';
        }
    });

    server.route({
        method: 'GET',
        path: '/users',
        handler: function(request, reply) {            
            return 'HAPI!'
        }
    });

    server.route({
        method: 'GET',
        path: '/people',
        handler: function(request, reply) {            
            return 'HAPI people!'
        }
    });

    server.views({
        engines: {
            jade: require('jade')
        },
        relativeTo: __dirname,
        path: 'templates',
    });

    server.route({
        method: 'POST',
        path: '/users/{id}',
        handler: function(request, h) {
            console.log(request.params);
            request.log('error', 'Event Error User');
            return h.view('index');
        },
        options:{
            validate: {
                params: {
                    id: Joi.number().min(1).max(10).required()
                },
                query: {
                    name: Joi.string().min(2).max(50).required(),
                },
                payload: {
                    tags: Joi.array()
                }
            }
        }
    });
    server.log(['test', 'event'], 'Server getting started');

    const options = {
        ops: {
            interval: 1000
        },
        reporters: {
            xyz: [
                {
                    module: '@hapi/good-squeeze',
                    name: 'Squeeze',
                    args: [{ log: '*', response: '*' }]
                },
                {
                    module: '@hapi/good-console'
                },
                'stdout'
            ]
        }
    };

    await server.register({
        plugin: require('@hapi/good'),
        options,
    });

    await server.start(function(error) {
        if (error) throw error;

        console.log('Sever is running');
    });
};

init();