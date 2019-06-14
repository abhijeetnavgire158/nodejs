const https = require('https');
const express = require('express');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert')
};

var app = express();

app.get('/', function(req, res) {
    res.send('HEllo World');
});

https.createServer(options, app).listen(8081);