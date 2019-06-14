const dotenv = require('dotenv').config();
const jwtValidator = require('../libs/jwt.js');

let auth = {};

auth.options ={
    issuer: process.env.ISSUER,
    subject: process.env.SUBJECT,
    audience: process.env.AUDIENCE,
};

auth.checkLoggedInUser = (token) => {
    return jwtValidator.verify(token, this.options);
};

auth.loginUser = (payload) => {
    return jwtValidator.sign(payload, this.options);
}

module.exports = auth;