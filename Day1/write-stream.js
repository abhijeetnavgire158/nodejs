var fs = require('fs');

var writeStream = fs.createWriteStream('input2.txt');

writeStream.write('Hello World!');
writeStream.end();

writeStream.on('finish', function() {
    console.log('Data write successfully');
});

writeStream.on('error', function(error) {
    console.log(error);
});

console.log(__filename);