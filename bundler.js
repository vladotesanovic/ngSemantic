var path = require('path');
var Builder = require('systemjs-builder');
var bundleName = name = "ng-semantic";

var builder = new Builder();
var config = {
    baseURL: '.',
    transpiler: 'typescript',
    typescriptOptions: {
        module: 'cjs'
    },
    map: {
        "typescript": './node_modules/typescript/lib/typescript.js',
        "@angular": path.resolve('node_modules/@angular')
    },
    paths: {
        '*': '*.js'
    },
    meta: {
        'node_modules/@angular/*': { build: false }
    }
};

builder.config(config);

// development
builder
    .bundle(bundleName, path.resolve(__dirname, 'bundles/', name + '.js'), { minify: false, mangle: false, rollup: false, sourceMaps: true })
    .then(function() {
        console.log('Build complete.');
    })
    .catch(function(err) {
        console.log('Error', err);
    });

// production
builder
    .bundle(bundleName, path.resolve(__dirname, 'bundles/', name + '.min.js'), { minify: true, mangle: true, rollup: true, sourceMaps: false })
    .then(function() {
        console.log('Minified build complete.');
    })
    .catch(function(err) {
        console.log('Error', err);
    });