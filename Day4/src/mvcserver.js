const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const employeeRouter = require('./routes/employee.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/employees', employeeRouter);


//Connection option we can set
const option = {dbName: process.env.DATABASE_NAME, useNewUrlParser: true};
mongoose.connect(process.env.DB_CONNECTION_URL, option, function(error) {
    if (error) {
        return console.error('Unable to connect');
    }
});


app.listen(8081, function() {
    console.log('Server is running');
});