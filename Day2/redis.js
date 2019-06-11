var redis = require('redis');

// var client = redis.createClient(); // 127.0.0.1 & 6379 default hostname & port
var client = redis.createClient(8654);

client.on('connect', function() {
    console.log('Connected');
});

client.on('error', function(error) {
    console.log('Error :: ' + error);
});

client.set('framework', 'nodejs');

client.get('framework', function(err, reply) {
    console.log(reply);
})