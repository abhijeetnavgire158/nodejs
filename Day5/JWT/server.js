const fs = require('fs');
const hapi = require('@hapi/hapi');
const jwt = require('jsonwebtoken');

const server = hapi.server({
    port: 8081,
    host: 'localhost'
});

const privateKey = fs.readFileSync('./private.key');
const publicKey = fs.readFileSync('./public.key');

const init = async function() {
    // bring your own validation function
    const validate = async function (decoded, request) {
        console.log('validate function gets call');
        if (request.payload.username === 'admin' && request.payload.password === 'admin') {
            return { isValid: true };
        } else {
            return { isValid: false };
        }
    };

    await server.register(require('hapi-auth-jwt2'));
    server.auth.strategy('token', 'jwt', {
        key: 'NeverShareYourSecret',
        validate: validate,
        verifyOptions: { algorithms: [ 'HS256' ] }
    });

    server.route({
        method: 'POST',
        path: '/login',
        handler: function(request, h) {
            console.log(request.payload);
            let token = null;
            if (request.payload.username === 'admin' && request.payload.password === 'admin') {
                token = jwt.sign({username: request.payload.username}, 'NeverShareYourSecret', { 
                    expiresIn:   24  *  60  *  60,
                    algorithm: 'HS256'
                });
            } else {
                return h.response({
                    message: "Username & password not match"
                }).code(404);
            }
            return h.response({
                message: "Authenticated",
                token: token
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/getusers',
        config: { auth: 'token' },
        handler: async function(request, h) {
            return h.response('get user list');//.header("Authorization", request.headers.authorization);
        },
        
    });
    server.start();
}

init();