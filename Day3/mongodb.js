let dotenv = require('dotenv').config();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

MongoClient.connect(process.env.DB_CONNECTION_URL, {useNewUrlParser: true}, function(error, client) {
    if (error) {
        return console.error(error);
    }
    console.log("DB Connected");
    const db = client.db(process.env.DATABASE_NAME);
    db.collection('users').insertOne({
        firstName: "Rahul",
        lastName: "Nikam",
        contactNo: "9534213690",
        email: "rahul4@gmail.com"
    });
});