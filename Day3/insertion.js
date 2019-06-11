var dotenv = require('dotenv').config();
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
MongoClient.connect(process.env.DB_CONNECTION_URL, {useNewUrlParser: true}, function(error, client) {
    if (error) {
        console.error(error);
        return console.log('Unable to connect DB');
    }

    console.log('DB Connected Successfully');
    const db = client.db(process.env.DATABASE_NAME);
    // db.collection('tasks').insertOne({
    //     title: "Task1",
    //     description: "Task Description",
    //     date: new Date(2019, 6, 12, 12)
    // }, (error, result) => {
    //     if (error) {
    //         return console.error("Unable to insert record");
    //     }

    //     console.log("Task Added Successfully");
    //     console.info(result.ops);
    // });

    db.collection('tasks').insertMany([{
            title: "Task2",
            description: "Task2 Description",
            date: new Date(2019, 6, 13, 12)
        }, {
            title: "Task3",
            description: "Task3 Description",
            date: new Date(2019, 6, 14, 12)
        }], (error, result) => {
            if (error) {
                console.log(error);
            }
            console.log("Task Added Successfully");
            console.log(result.ops);
    });
});