var fs = require('fs');

fs.unlink('input2.txt', (err) => {
    if (err) {
        fs.writeFile('input2.txt', 'This text added after delete the file', (err) => {
            if (err) {
                console.log(err);
            }
            console.log('new File Created.');
        });
        return console.log(err);
    }
    console.log('File is deleted successfully.');
});

console.log('Program End');