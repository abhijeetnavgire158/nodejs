const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    res.end("WELCOME CORS");
});

app.listen(8081, function(error) {
    console.log(error);
});