var divideSync = function(x, y) {
    if (y === 0) {
        return new Error(`we can't divide number to 0.`);
    }
    
    return (x / y);
}

try {
    var result1 = divideSync(4, 0);
    console.log(`${result1}`);

    var result2 = divideSync(4, 2);
    console.log(`${result2}`);
} catch(error) {
    console.error(error);
}




var divideAsync = function(x, y, callback) {
    if (y == 0) {
        callback(new Error(`we can't divide number to 0.`));
    } else {        
        callback(null, x/y);
    }
}

divideAsync(4, 2, function(err, data) {
    if (err) {
        //handel errors here
        console.error(err);
    } else {
        //after process result
        console.log(data);
    }
});

