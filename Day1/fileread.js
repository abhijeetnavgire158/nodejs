let fs = require('fs');
let data = fs.readFileSync('input.txt');

fs.readFile('input.txt', function(err, data) {
  if (err) {
      console.error(err);
  } else {
      console.log(data.toString());
  }
});

console.log('Synch ' + data.toString());
console.log('File Reads Ends');