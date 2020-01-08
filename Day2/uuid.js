var uuid = require('uuid/v4');

console.log(uuid());

const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
const newuuid = uuid('Hello, World!', MY_NAMESPACE);
console.log(newuuid);

const newuuid2 = uuid('Hello, World!', MY_NAMESPACE);
console.log(newuuid2);