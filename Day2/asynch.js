let async = require('/usr/lib/node_modules/async');

var task_arr = [
    {name: 'task_1', delay: 500},
    {name: 'task_2', delay: 1200},
    {name: 'task_3', delay: 200}
];

// async.each(task_arr, function(task, callback){

//     console.log("Execute task : " + task.name);

//     setTimeout(function(){
//         console.log("Task timeout : " + task.name);
//         callback(null, task.name);
//     }, task.delay);
// }, function(error) {
//     if(error==undefined)
//     {
//         console.log("No error.");
//     }else
//     {
//         console.log("The error message is " + error);
//     }

// });

// Execute every task in task array by order (one by one).
// async.eachSeries(task_arr, function(task, callback){

//     console.log("Execute task : " + task.name);

//     setTimeout(function(){
//         console.log("Task timeout : " + task.name);
//         // Must invoke the callback function, otherwise this function will be executed only with the first item in collection.
//         callback(null, task.name);
//     }, task.delay);

// },function(error){
//     console.log(error);
// });

async.eachLimit(task_arr, 2, function(task, callback){

    console.log("Execute task : " + task.name);

    setTimeout(function(){
        console.log("Task timeout : " + task.name);
        // Must invoke the callback function, otherwise this function will be executed only with the first item in collection.
        callback(null, task.name);
    }, task.delay);

},function(error){
    console.log(error);
});