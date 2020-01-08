let http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'content-type' : 'text/plain'});
    response.end('HELLO WORLD');
}).listen(8081);

console.log('Server Running at http://127.0.0.1:8081/');
