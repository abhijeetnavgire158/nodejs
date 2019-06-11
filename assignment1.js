var http = require('http');
var dotenv = require('dotenv').config();

console.log('PORT ' + dotenv.parsed.PORT);
console.log('LISTEN PORT ' +process.env.LISTEN_PORT);

const server = http.createServer(function(request, response) {
    response.writeHead(200, {'content-type': 'text/plain'});
    response.end("Assignment of Day 2");
});

server.listen(process.env.LISTEN_PORT);
console.log("Server Started");