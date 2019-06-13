const dotenv = require('dotenv').config();
var bcrypt = require('bcryptjs');
const hapi = require('@hapi/hapi');


const init = async () => {
    const server = hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "Hello World";
        }
    });

    server.route({
        method: 'GET',
        path: '/{id}',
        handler: (request, h) => {
            return `Product ID ${request.params.id} . Product name ${request.query.name}`;
        }
    });

    await server.start(function(error) {
        if (error) throw error;

        console.log('Server running at:', server.info.uri);
    });
};

init();