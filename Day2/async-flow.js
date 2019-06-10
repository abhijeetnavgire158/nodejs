let async = require('/usr/lib/node_modules/async');

var function_1 = function (call_back_function) {

    console.log("Function_1 execute.");

    call_back_function(null, "function_1");
}

var function_2 = function (call_back_function) {

    console.log("Function_2 execute.");

    call_back_function(null, "function_2");
}

var function_3 = function (call_back_function) {

    console.log("Function_3 execute.");

    call_back_function("error in function_3", "function_3");
}

var function_4 = function (call_back_function) {

    console.log("Function_4 execute.");

    call_back_function(null, "function_4 yahha");
}

var function_5 = function (call_back_function) {

    console.log("Function_5 execute.");

    call_back_function(null, "function_5");
}

var function_array = [function_1, function_2, function_4, function_3, function_4, function_5];

async.series(function_array, function(error, results){
    console.log("Async series method.");

    console.log(results);

    if(error)
    {
        console.log(error);
    }
});



async.waterfall([
    function(callback) {
        console.log('First Function ');
        callback(null, 1, 2);
    },
    function(arg1, arg2, callback) {
        console.log('second Function ' + arg1 + ' ' + arg2);
        callback(null, 3);
    },
    function(arg, callback) {
        console.log('third Function ' + arg);
        callback('error in 3rd function', 4);
    },
    function(arg, callback) {
        console.log('fourth Function ' + arg);
        callback(null, 4);
    },
], function(error, result) {
    console.log('error: ' + error);
    console.log('result: ' + result);
}

);





async.parallel([
    function(callback) {
        console.log("parallel Function one execute ");
        setTimeout(function(){
            console.log("parallel Function one timeout.")
            callback('', 'parallel Function one');
        }, 300);
    },
    function(callback) {
        console.log("parallel Function two execute");
        setTimeout(function(){
            console.log("parallel Function two timeout.")
            callback('', 'parallel Function two');
        }, 1500);
    },
    function(callback) {
        console.log("parallel Function three execute");
        setTimeout(function(){
            console.log("parallel Function three timeout.")
            callback('', 'parallel Function three');
        }, 100);
    }
], function(error, result) {
    console.log('error: ' + error);
    console.log(result);
});