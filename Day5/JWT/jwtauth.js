const fs   = require('fs');
const jwt  = require('jsonwebtoken');

// PAYLOAD
var payload = {
    data1: "Data 1",
    data2: "Data 2",
    data3: "Data 3",
    data4: "Data 4",
};

var privateKEY = fs.readFileSync('./private.key');
var publicKEY = fs.readFileSync('./public.key');

var i  = 'Cuelogic';          // Issuer 
var s  = 'cuelogic@mailinator.com';        // Subject 
var a  = 'http://cuelogic.in'; // Audience
// SIGNING OPTIONS
var signOptions = {
 issuer:  i,
 subject:  s,
 audience:  a,
 expiresIn:  "12h",
 algorithm:  "RS256"
};

var token = jwt.sign(payload, privateKEY, signOptions);

console.log(token);

var verifyOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  ["RS256"]
   };

var legit = jwt.verify(token, publicKEY);

console.log("\nJWT verification result: " + JSON.stringify(legit));

