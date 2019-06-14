var _ = require('lodash');
var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {type: String, unique: true, minlength: 6, maxlength: 15},
    password: {type: String},
    firstName: {type: String, minlength: 2, maxlength: 50},
    lastName: {type: String, minlength: 2, maxlength: 50}
});


UserSchema.methods.checkPassword = function(pass) {
    return bcrypt.compareSync(pass ,this.password);
};

const User = mongoose.model('users', UserSchema);

module.exports = User;
