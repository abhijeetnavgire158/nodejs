var jwt = require('jsonwebtoken');

//synch
var token = jwt.sign({foo: "bar"}, 'shhh');
console.log('Default SHA 256 : ' + token);

//var token2 = jwt.sign({foo: "bar"}, 'shhh', {algorithm: "RS256"});
//console.log('RS 256 : ' + token2);

//async
jwt.sign({foo: "bar"}, 'shhh', function(error, token) {
    console.log(token);
});

var verify = jwt.verify(token, 'shhh');
console.log("Verify " + verify.foo);

jwt.verify(token, 'shhh', function(error, decode) {
    if (error) {
        console.log('verify errrrror--');
        console.error(error);
        return false;
    }

    console.log(decode);
});


try {
    //wrong-secret key
    var decode = jwt.verify(token, 'wwe');
} catch(error) {
    console.log('Invalid Token');
    console.error(error);
}

var decodeJwt = jwt.decode(token);
console.log('Decode JWT without secret key');
console.log(decodeJwt);