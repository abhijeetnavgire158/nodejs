let assert = require('chai').assert;

let name = 'Abhijeet navgire';
let age = 28;
let stud = {
    name: 'ab',
    age: 28
}

describe('name var', function() {
    it('name var type should be string', function() {
        assert.typeOf(name, 'string');
    });

    it('name  equal to Abhijeet Navgire)', function() {
        assert.equal('Abhijeet navgire', name);
    });
    
});

describe('object assertion', function() {
    it('Object Equals', function() {
        assert.notDeepEqual({ tea: 'green', lastName: 'ss' }, { tea: 'jasmine', name: 'ab' });
    });

    it('stud is an object', function() {
        assert.isObject(stud);
    });
});




