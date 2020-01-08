const path = require('path');
const express = require('express');

let userRouter = require('./routes/users.js');

const app = express();
const router = express.Router();

app.use('/users', userRouter);

console.log(__filename);
console.log(__dirname);

const publicDirPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicDirPath));

//Application Level: Execute each time
app.use(function(req, res, next) {
    console.log('This middleware call each time.');
    next();
});

//Application level : specific to route
app.use('/help', function(req, res, next) {
    console.log('Middleware call');
    next();
});

app.use('/help', function(req, res, next) {
    console.log('Continuous  Middleware 1');
    next();
}, function(req, res, next) {
    console.log('Continuous  Middleware 2');
    next();
});

//Error Handling
app.use(function(err, req, res, next) {
    console.error(err.stack);
    next();
});

router.use(function(req, res, next) {
    console.log('Each Router');
    next();
});

app.get('', (req, res) => {
    res.send("Welcome to Expressjs Tutorial!");
});

app.get('/help', (req, res) => {
    res.send({
        name: "Abhijeet Navgire",
        age: 28
    });
});

app.get('/contact', (req, res) => {
    res.send({
       address: "Pune",
       phone: "8149213690"
    });
});

app.listen(8081, function() {
    console.log('server is up on 8081');
});

