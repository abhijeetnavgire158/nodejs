const path = require('path');
const express = require('express');

const app = express();
const employeeRouter = require('./routes/employee.js');




//set view path
app.set('views', path.join(__dirname, 'views'));
//set view engine
app.set("view engine", "jade");

app.get('/', function(req, res, next) {
    res.render('sample', {title: 'sample'});
});

app.use('/employees', employeeRouter);

app.get('/users', function(req, res, next) {
    res.render('userlist', {title: 'User List', userlist: [
        {name: "Abhijeet Navgire"},
        {name: "Rahul Nikam"},
        {name: "Krishna Rajam"},
        {name: "Mukesh Ambani"},
    ]});
});

app.listen(8081, function() {
    console.log('Server is running');
});