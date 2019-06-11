var minimist = require('minimist');

var argvs = minimist(process.argv);
console.log(argvs._);

console.log("Child Process 1 " + process.argv[2] + " executed.");
console.log("Child Process 2 " + process.argv[3] + " executed.");

console.log("Child Process (minimist) 1 " + argvs._[2] + " executed.");
console.log("Child Process (minimist) 2 " + argvs._[3] + " executed.");
