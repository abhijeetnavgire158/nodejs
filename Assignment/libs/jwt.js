const fs = require('fs');
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

const publicKey = fs.readFileSync('../config/keys/public.key');
const privateKey = fs.readFileSync('../config/keys/private.key');

module.exports = {
    sign: (payload, options) => {
         // Token signing options
        var signOptions = {
            issuer: options.issuer,
            subject: options.subject,
            audience: options.audience,
            expiresIn: "30d",    // 30 days validity
            algorithm: "RS256"
        };

        return jwt.sign(payload, privateKey, signOptions);
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
            return jwt.verify(token, publicKey, verifyOptions);
        } catch (error) {
            return false;
        }
    },
    decode: (token) => {
        return jwt.decode(token, {complete: true});
    }
};