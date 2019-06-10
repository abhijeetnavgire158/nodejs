var util = require("util");
var events = require("events");
function MyStream() {
    events.EventEmitter.call(this);
}

util.inherits(MyStream, events.EventEmitter);

MyStream.prototype.log = function(data) {
    this.emit("log", data);
}
var stream = new MyStream();

console.log(stream instanceof events.EventEmitter);
console.log(MyStream.super_ === events.EventEmitter);

stream.on("log", function(data) {
    console.log('log data: "' + data + '"');
})

stream.log("It works!"); 