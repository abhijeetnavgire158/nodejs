var os = require("os");

console.log(`Temp Dir : ${os.tmpdir()}`);
console.log(`Hostname : ${os.hostname()}`);
console.log(`OS Type : ${os.type()}`);
console.log(`OS Platform : ${os.platform()}`);
console.log(`Total Mem : ${os.totalmem()}`);
console.log(`Free Mem : ${os.freemem()}`);