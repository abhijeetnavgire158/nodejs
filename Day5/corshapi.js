const hapi = require('@hapi/hapi');

const server = hapi.server({
    host: 'localhost',
    port: 8081,
    routes: {
        //cors: true
        cors: {
            origin: ["*"],
            headers: ["Accept", "Content-Type"],
            additionalHeaders: ["X-Requested-With"]
        }
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, h) {
        return 'HH';
    }
});
server.start();