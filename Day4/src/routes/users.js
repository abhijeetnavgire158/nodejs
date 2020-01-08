const express = require('express');

const router = express.Router();

router.use(function(req, res, next) {
    console.log('Route Level middleware');
    next();
});

router.get('/', function(req, res, next) {
    console.log('Get user List');
    res.send('HII');
});

router.get('/:id', function(req, res, next) {
    console.log('Get specific user info');
    res.send(`Get user information -> ID =  ${req.params.id}`);
});

module.exports = router;