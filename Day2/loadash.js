var _ = require('lodash');

var version = _.VERSION;
console.log('Version ' + version);

words = ['sky', 'wood', 'forest', 'falcon', 'pear', 'ocean', 'universe'];

var firstWord =_.first(words);
console.log(`first word ${firstWord} & last word ${_.last(words)}`);

var c1 = _.chunk(words, 2);
console.log(c1);

var c2 = _.chunk(words, 3);
console.log(c2);

console.log(`Random ${_.random(2, 4, false)}`);