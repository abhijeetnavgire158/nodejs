var moment = require('moment');

var momentDate = moment(new Date());
console.log(momentDate);


var date = momentDate.toDate();
console.log(date);

console.log(moment.isDate(date));

var now = moment.now();
console.log(now);
console.log(moment().format("MMMM Do YYYY"));


var a = moment([2018, 0, 15]);
var b = moment([2018, 0, 17]);
var c = moment([2019, 0, 17]);

console.log(a.from(b));
console.log(a.from(c));
console.log(c.from(a));
