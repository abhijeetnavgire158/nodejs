const path = require('path');
const express = require('express');

const app = express();
const router = express.Router();


router.use(function(req, res, next) {
    console.log('Router leve middleware');
    next();
});

router.get('/', function(req, res, next) {
    console.log('Method Call');
    res.send("WELL COME TO GOA!");
    //res.render('index.html');
    next();
});

