let util = require('util');

util.debug('HHH');

let json = {
    sub1: "Subject1",
    sub2: "Subject2",
    sub3: "Subject3",
}

util.debug(json);
//util.debug is deprecated. Use console.error instead.
console.error(json);
console.error('Error message');