const dotenv = require('dotenv').config();
const Boom = require('boom');
const User = require('../models/user.model.js');
const UserActvity = require('../models/useractivity.model.js');

/**
 *
 * @param {string} id
 * @param {request} request
 */
async function saveUserActivity(id, request) {
    console.log(request.info);
    let userActvity = new UserActvity({
        userId: id,
        ipAddress: request.info.remoteAddress,
        uaString: request.headers['user-agent']
    });

    try {
        return await userActvity.save();
    } catch (error) {
        return Boom.badImplementation('something went wrong.');
    }
}

/**
 *
 * @param {string} id
 * @param {object} data
 */
async function updateUserInfo(id, data) {
    let result = await User.updateOne({"_id": id},data);
    return result;
}

/**
 * return the date with substract inactive days 
 */
function getInactiveLoginDate() {
    var dt = new Date();
    dt = dt.setDate(dt.getDate() - process.env.INACTIVEDAYS);
    return dt;
}

module.exports = {
    saveUserActivity: saveUserActivity,
    updateUserInfo: updateUserInfo,
    getInactiveLoginDate: getInactiveLoginDate
}