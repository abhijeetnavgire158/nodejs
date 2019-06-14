const https = require('https');
const fs = require('fs');

let options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert')
};

https.createServer(options, function(req, res) {
    res.end("Welcome to goa!");
}).listen(8081);