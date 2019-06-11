var schedule = require('node-schedule');

var j = schedule.scheduleJob('50 * * * *', function() {
    console.log('The answer to life, the universe, and everything!');
});

//Date-Based scheduling 
var date = new Date(2019, 5, 11, 12, 4);

schedule.scheduleJob(date, function() {
    console.log('Date Based scheduling.');
});

var rule = new schedule.RecurrenceRule();
rule.minute = 1;

schedule.scheduleJob(rule, function() {
    console.log('Every 42 min');
});

var obj = schedule.scheduleJob({hour: 14, minute: 10, dayOfWeek: 2}, function() {
    console.log('Sundat at 2:10 PM');
});


obj.cancel();
obj.cancelNext(true);

schedule.scheduleJob("* * * * *", function() {
    console.log("running a task every minute");
  });