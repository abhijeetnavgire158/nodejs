var convert = require('../app.js');
var assert = require('assert');

describe('Array', function() {
    describe('indexOF', function(){
        it('should return -1 ', function(){
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

describe('Math', function() {
    it('multiply 3*3 is 9', function() {
        assert.equal(9, 3*3);
    });

    it('(3-4)*8 is -8', function() {
        assert.equal(-8, (3 - 4) * 8);
    });
});

describe('Temperature Conversion', function() {
    describe('cToF', function() {
        it('should convert -40 celsius to -40 fahrenheit', function() {
            assert.equal(-40, convert.cToF(-40));
        });

        it('should convert 0 celsius to 32 fahrenheit', function() {
            assert.equal(32, convert.cToF(0));
        });

        it('should return undefined if no temperature is input', function() {
            assert.equal(undefined, convert.cToF(''));
        });
    });

    describe('fToC', function() {
        it('should convert to -40 fahrenheit to -40 celsius', function() {
            assert.equal(-40, convert.fToC(-40));
        });

        it('should convert 32 fahrenheit to 0 celsius', function() {
            assert.equal(0, convert.fToC(32));
        });

        it('should return undefined if no temperature is input', function() {
            assert.equal(undefined, convert.fToC(''));
        });
    });
});
