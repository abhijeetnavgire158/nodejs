var Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));
fs.readFile('../Day1/input.txt', function(err, data) {
    console.log('---------- readFile ');
    console.log(data.toString());
});

var data = fs.readFileSync('../Day1/input.txt');
console.log('---------- readFileSync');
console.log(data.toString());

fs.readFileAsync('../Day1/input.txt').then(function(data) {
    console.log('---------- readFileAsync');
    console.log(data.toString());
});




