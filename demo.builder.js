var SystemBuilder = require('systemjs-builder');
var builder = new SystemBuilder();

builder.loadConfig('systemjs.config.js')
    .then(function(){
        var outputFile = './demo/vendor/bundle.min.js';
        return builder.buildStatic('app', outputFile, {
            minify: true,
            mangle: true,
            rollup: true
        });
    })
    .then(function() {
        console.log('bundle built successfully!');
    });