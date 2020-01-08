let util = require('util');

let subjects = {
    subject1: "subject1",
    subject2: "subject2",
    subject3: "subject3",
    numbers: 45,
    ts: {
        t1: "t1",
        t2: "t2"
    },
    45: 45

}
console.log(util.inspect(subjects));

console.log(util.inspect(subjects, true, 5, true));

console.log('IS Array');
console.log(util.isArray([])); //true
console.log(util.isArray(new Array)); //true
console.log(util.isArray({})) // false

console.log('IS Date');
console.log(util.isDate(new Date()));
console.log(util.isDate({}));

console.log('IS Error');
let error = new Error('Error');
console.log(util.isError(error));