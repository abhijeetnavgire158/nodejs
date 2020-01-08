const Joi = require('@hapi/joi');

const schema = {
    a: Joi.string().valid(['abhi', 'abhijeet']),
    b: Joi.string().required()
};

const {error, value} = Joi.validate({a: "df"},  schema);



console.log('Error::');
console.log(error);
console.log('Value::');
console.log(value);
Joi.validate({a: 'abhi'}, schema, function(error, value) {
    if (error) {
        //throw error
        console.log(error.message);
    }

    console.log(value);

});
console.log('describe');
console.log(Joi.describe(schema));

console.log(Joi.attempt('x', Joi.string(), 'is not a number'));