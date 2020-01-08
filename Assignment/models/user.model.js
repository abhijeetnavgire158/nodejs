const _ = require('lodash');
const mongoose = require('mongoose');

//setter method
let toLower = function(value) {
    return _.toLower(value);
};

const UserSchema = new mongoose.Schema({
    userName: {type: String, unique: true, minlength: 6, maxlength: 15},
    password: {type: String},
    firstName: {type: String, minlength: 2, maxlength: 50, set: toLower},
    lastName: {type: String, minlength: 2, maxlength: 50, set: toLower}
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
