var fs = require('fs');
const child_process = require('child_process');

for (i = 0; i <=2; i++) {
    var workprocess = child_process.exec('node support.js '+i, function(error, stdout, stderr) {
        if (error) {
            console.error(error.stack);
            console.error(error.signal);
            console.error(error.code);
            return false;
        }
        console.log('stdout ' + stdout);
        console.log('stderr ' + stderr);        
    });

    workprocess.on('exit', function(code) {
        console.log('Child process exited with exit code ' + code);  
    });
}
