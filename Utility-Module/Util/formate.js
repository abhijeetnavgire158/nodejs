let util = require('util');
let fname = 'mukesh';
let lname = 'ambani';
let age = 47;
let songs = {
    song1: "song1",
    song2: "song2"
}

let format1 = util.format('My Name is %s %s', fname, lname);
let format2 = util.format('Age : %d', age);
let format3 = util.format('favourite songs : %j', songs);

console.log(format1);
console.log(format2);
console.log(format3);