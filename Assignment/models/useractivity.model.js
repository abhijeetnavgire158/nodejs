const _ = require('lodash');
const mongoose = require('mongoose');


//setter method
let toLower = function(value) {
    return _.toLower(value);
};

const userActivitySchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    ipAddress: {type: String},
    uaString: {type: String, set: toLower},
    loginDate: {type: Date, default: new Date()}
});

const UserActivity = mongoose.model('usersactivity', userActivitySchema);

module.exports = UserActivity;