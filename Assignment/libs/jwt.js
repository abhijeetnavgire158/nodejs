const fs = require('fs');
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

module.exports = {
    genrateToken: async (payload, options) => {
         // Token signing options
        var signOptions = {         
            expiresIn: "30d",    // 30 days validity
            algorithm: ["RS256"]
        };
        console.log('ww');
        console.log(secretKey);
        let token = '';
        try {
            token = await jwt.sign(payload, secretKey);
        } catch (error) {
            console.log('Error');
        }

        return token;
    },
    verify: (token, options) => {
        var verifyOptions = {
            issuer: options.issuer,
            subject: options.subject,
            audience: options.audience,
            expiresIn: "30d",
            algorithm: ["RS256"]
        };

        try {
            return jwt.verify(token, secretKey, verifyOptions);
        } catch (error) {
            return false;
        }
    },
    decode: (token) => {
        return jwt.decode(token, {complete: true});
    }
};