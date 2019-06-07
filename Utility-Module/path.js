var path = require('path');

console.log(`${path.normalize('//Utility-Module/')}`);
console.log(`${path.join('/Utility-Module/', '/os.js')}`);
console.log(`${path.resolve('index2.txt')}`);
console.log(`${path.isAbsolute(path.resolve('index2.txt'))}`);
console.log(`${path.dirname(__filename)}`);
console.log(`${path.basename(__filename)}`);
console.log(`${path.extname(path.resolve('index2.txt'))}`);