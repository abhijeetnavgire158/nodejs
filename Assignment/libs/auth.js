const user = require('../models/user.model.js');
const bcrypt = require('bcryptjs');

let getLoginUserInfo = async function(userName, password) {
    let userInfo = await user.findOne({userName: userName}).then((user) => {
        if (!user) {
            return null;
        }

        if(!bcrypt.compareSync(password, user.password)) {
            return null;
        }

        return user;
    });

    return userInfo;
};

module.exports = getLoginUserInfo;