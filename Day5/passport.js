const dotenv = require('dotenv').config();
const util = require('util');
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('./model/user.model.js');
const session = require('express-session');


//connect to DB
const dbOptions = {dbName: process.env.DB_NAME, useNewUrlParser: true};
console.log(process.env.DB_CONNECTION_URL);
mongoose.connect(process.env.DB_CONNECTION_URL, dbOptions, function(error) {
    if (error) {
        return util.error('Unable to connect');
    }
    util.log('Database connected successfully');
});


const app =express();
// app.use(express.json(false)); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret: 'secrettexthere',
    saveUninitialized: true,
    resave: true
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new LocalStrategy(
    function(username, password, done) {      
        User.findOne({userName: username}, function(err, user) {
            console.log(username);
            if (err) return done(err);
            if(!user) {
                return done(null, false, {message: "Incorrect Username"});
            }
            if (!user.checkPassword(password)) {
                return done(null, false, {message: "Incorrect password"});
            }

            return done(null, user, {message: "Login Successfully done"});
        })
    }
));

app.get('/', loggedIn, function(req, res) {
    console.log('Loggin');
    console.log(req.isAuthenticated());
    res.send("HOME PAGE");
});

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {      
    res.redirect('/');
});

function loggedIn(req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
}

app.listen(8081);