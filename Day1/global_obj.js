console.log(`Current Execution: ${__filename}`);
console.log(`Current Directory of executing script: ${__dirname}`);
//console.log(global);
console.error("Error Message");
console.warn("Warning Message");
setTimeout(function() {
    console.log('Out side process');
}, 1000);

process.on('exit', function(code) {
    setTimeout(function() {
        console.log('Before Exit Program');
    }, 100);
    console.log(`About to exit ${code}`);
});
//code 0 means no async operations are pending.
console.info('End Program');