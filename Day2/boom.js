var Boom = require('boom');
var fs = require('fs');
var s = new Boom('Error', {statusCode: 404});
console.log(s.output);

err = new Error("Error 1");
var boomifyError = Boom.boomify(err, {statusCode: 403});

console.log(boomifyError.output);

fs.readFile('./input.txt', function(error, data) {
    if (error) {
        console.error(Boom.notFound("File Not Found").output);
        return false;
    }
    console.log(data.toString());
})
