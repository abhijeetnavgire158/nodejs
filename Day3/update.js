var dotenv = require('dotenv').config();
var mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

MongoClient.connect(process.env.DB_CONNECTION_URL, {useNewUrlParser: true}, function(error, client) {
    if (error) {
        return console.error(error);
    }

    const db = client.db(process.env.DATABASE_NAME);
    let id = mongodb.ObjectId("5cffb0c9a20ab05b444c07d3");
    let collection = db.collection('tasks');
    collection.updateOne({"_id": id}, {$set: {title: "Task 6"}});
    var data = collection.find({}).toArray(function(error, result) {
        console.log(result);
    });
    var data2 = collection.find({title: "Task 6"}).toArray(function(error, result) {
        console.log(result);
    });

    collection.remove({title: "Task5"}, function(error, result) {
        console.log(result.result.n);
    });

    collection.deleteOne({title: "Task4"}, function(error, result) {
        if (error) {
            return console.error(error);
        }

        console.log(result.result.n + 'Records Deleted');
    });
    

    client.close();
});