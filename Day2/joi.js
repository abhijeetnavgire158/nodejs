let Joi = require('joi');

let schema = Joi.object().keys({
    username: Joi.string().alphanum().min(4).max(10).required(),
    password: Joi.string().alphanum().min(6).max(15).required(),
    birthyear: Joi.number().integer().min(1990).max(2013)
});

let user1 = {
    username: "AbhijeetNavgire",
    password: "1234"
};

Joi.validate(user1, schema, function(error, value) {
    if (error) {
        console.log(error);
    }
    console.log(value);
});

var result = Joi.validate(user1, schema);
console.log(result.error.details);
