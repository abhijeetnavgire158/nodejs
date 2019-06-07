var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectionHandler = function() {
    console.log('Connection successfully established!');

    eventEmitter.emit('data_received');
};
eventEmitter.on('connection', connectionHandler);
eventEmitter.on('connection', function() {
    console.log('1');
});
eventEmitter.on('connection', function() {
    console.log('2');
});

var dataReceived = function() {
    console.log('Data received successfully');
};
eventEmitter.on('data_received', dataReceived);

eventEmitter.emit('connection');

var onceEventHandler = function() {
    console.log('Once event get fired');
};
eventEmitter.once('onceevent', onceEventHandler);
eventEmitter.emit('onceevent');
eventEmitter.emit('onceevent');

console.log(eventEmitter.listenerCount('connection'));
eventEmitter.removeListener('connection', connectionHandler);
eventEmitter.emit('connection');

console.log('Program Ended');