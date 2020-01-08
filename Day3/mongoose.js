const mongoose = require('mongoose');
let _ = require('lodash');
let dotenv = require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION_URL, {dbName: process.env.DATABASE_NAME}, function(error, client) {
    if (error) {
        return console.error('Unable to connect');
    }
    console.log('connection established');

    const Schema = mongoose.Schema;
    const TaskSchema = new Schema({
        title: {type: String, required: true},
        description: String,
        date: {type: Date, required: true}
    });

    var Task = mongoose.model('tasks', TaskSchema);
    var task = new Task({
        title: "Task5",
        date: new Date(2019, 6, 21)
    });
    var error = task.validateSync();
    if (_.isUndefined(error)) {
        task.save(function(err) {
            if (err) {
                return console.log('ERROR');
            }
            console.log("Save Data");
        });
    } else {        
        console.log('VAlidation Failed');
    }    
});