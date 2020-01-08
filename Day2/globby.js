var globby = require('globby');

//only js

globby(['**/*.js', '!node_modules']).then(paths => {
    console.log('only js file excluding node_modules folder');
    console.log(paths);
});


globby(['**/*', '!node_modules', '!*.js']).then(function(paths) {
    console.log('Other than js file excluding node_modules folder');
    console.log(paths);
});

