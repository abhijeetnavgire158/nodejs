let querystring = require('querystring');

const obj1=querystring.parse('name=abhijeet&company=cuelogic');  
//const obj1=querystring.decode('name=abhijeet&company=cuelogic');

console.log(obj1);
console.log(`Name ${obj1.name}`);
console.log(`Company ${obj1.company}`);

let options = {
    fname: "Abhi",
    lname: "Navgire",
    company: "Cue Logic"
}

let querystr = querystring.stringify(options);
//let querystr = querystring.encode(options);

console.log(querystr);