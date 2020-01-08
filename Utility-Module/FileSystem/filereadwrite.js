let fs = require('fs');

var filedata = fs.readFileSync('./input.txt');

fs.readFile('./input.txt', function(error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log(`readFile() Data ${data}`);
    }
});

console.log('-----------------Sync ------------');
console.log(`readFileSync() Data ${filedata}`);
console.log('-----------------Done Sync ------------');
