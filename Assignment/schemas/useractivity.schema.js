const Joi = require('@hapi/joi');

const userActivitySchema = Joi.object().keys({
    user_id: Joi.string().required(),
    ip_address: Joi.string().min(6).required(),
    ua_string: Joi.string().min(2).max(50).required(),
    login_date: Joi.date()
});

module.exports = userActivitySchema;