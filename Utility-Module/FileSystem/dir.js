let fs = require('fs');

let errorMessage = function(error) {
    if (error) {
        console.error(error);
    }
}
// fs.mkdir('./temp', function(error) {
//     if (error) {
//         console.error(error);
//     }
// });
if (!fs.existsSync('./temp')) {
    fs.mkdirSync('./temp');
}

if (!fs.existsSync('./temp/test')) {
    fs.mkdir('./temp/test', function(error) {
        errorMessage(error);
    });
}

fs.open('./temp/test/test.txt', 'w+', function(error) {
    errorMessage(error);
});

fs.readdir('./temp', function(error, files) {
    if (error) {
        console.error(error);
    } else {
        console.log(files);

        files.forEach(function(file) {
            console.log(`File : ${file}`);
            fs.stat('./temp/'+file, function(error, stat) {
                if (error) {
                    console.error(error);
                } else {
                    console.log(`File Size : ${stat.size}`);
                    console.log(`isDirectory : ${stat.isDirectory()}`);
                }
            });
        });
    }
});

