var exec = require('child_process').exec;

exec('./mybat.bat', function(error, stdout, stderr) {
    if (error) {
        console.error(error);
        return false;
    }
    console.log(stdout);
});