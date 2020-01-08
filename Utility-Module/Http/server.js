let fs = require('fs');
let url = require('url');
let http = require('http');

http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    fs.readFile(pathname.substr(1), function(error, data) {
        if (error) {
            console.error(error);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
            response.end();
        }
    });
}).listen(8081);

console.log('Server Start');