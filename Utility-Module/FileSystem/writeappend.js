let fs = require('fs');

let filePath = './input2.txt';

let openfile = fs.open(filePath, 'w+', function(error, fd) {
    if (error) {
        console.error(error);
    }
    console.log("File opened successfully!");

    fs.close(fd, function(err) {
        if (err) {
            console.error(err);
        }
    });
});

fs.writeFile(filePath, 'New String Added', function(error) {
    if (error) {
        console.error(error)
    }

    fs.readFile(filePath, function(err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log(data.toString());
        }
    });
});


fs.appendFile(filePath, " Append more content!", function(error){
    if (error) {
        console.error(`Error While appending file content `);
        console.error(error);
    }

    fs.appendFileSync(filePath, " Synch Data Added");
});

data = fs.readFile(filePath, function(error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log("After Read data :" + data.toString());
    }
});




