var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("rndstr", salt);

console.log(bcrypt.compareSync("B4c0/\/", hash));
console.log(bcrypt.compareSync("rndstr", hash));

let s = bcrypt.hash('123456', 10, function(error, hash) {
    console.log('HASSS : ' +hash);
});

bcrypt.compare('123456', '$2a$10$i4jt6fbXg3jwyK78oQIVI.G.B8uV4y7PquvANcG.qWPsT3p8mCK7.', function(error, result) {
    if (error) {
        console.error(error);
    }

    if (result) {
        console.log("Login Successfully");
    } else {
        console.log("Password Not match");
    }
});

const hashPassword = bcrypt.hashSync('123456', 10);

const result = bcrypt.compareSync('123456', hashPassword);
// result == true or result == false

if (result) {
    console.log("Login Successfully");
} else {
    console.log("Password Not match");
}