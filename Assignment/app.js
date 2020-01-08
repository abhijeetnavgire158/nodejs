const dotenv = require('dotenv').config();
const util = require('util');
const hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const validate = require('./libs/validate.js');

const init = async () => {
    //connect to DB
    const dbOptions = {dbName: process.env.DB_NAME, useNewUrlParser: true};
    mongoose.connect(process.env.DB_CONNECTION_URL, dbOptions, function(error) {
        if (error) {
            return util.error('Unable to connect');
        }
        util.log('Database connected successfully');
    });

    //setup server config & start server.
    const server = hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });
    await server.register(require('hapi-auth-jwt2'));
    server.auth.strategy('token', 'jwt', {
        key: process.env.SECRET_KEY,
        validate: validate,
        verifyOptions: { algorithms: [ 'HS256' ] }
    });
    server.auth.default('token');

    let userRoutes = require('./routes/user.route.js');
    server.route(userRoutes);

    await server.start(function(error) {
        if (error) throw error;

        util.log('Server is running.');
    });
};

init();