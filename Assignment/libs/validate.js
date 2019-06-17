const user = require('../models/user.model.js');

let validate = async function (decoded, request) {   
    console.log('validate function gets call');
    let userInfo = await user.findOne({_id: decoded.id});

    if (userInfo) {
        return { isValid: true };
    } else {
        return { isValid: false };
    }
};

module.exports = validate;