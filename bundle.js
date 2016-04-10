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
        typescript: './node_modules/typescript/lib/typescript.js',
        angular2: path.resolve('node_modules/angular2'),
        rxjs: path.resolve('node_modules/rxjs')
    },
    paths: {
        '*': '*.js'
    },
    meta: {
        'node_modules/angular2/*': { build: false },
        'node_modules/rxjs/*': { build: false }
    }
};

builder.config(config);

builder
    .bundle(bundleName, path.resolve(__dirname, 'bundles/', name + '.js'), { minify: false, sourceMaps: true })
    .then(function() {
        console.log('Build complete.');
    })
    .catch(function(err) {
        console.log('Error', err);
    });

builder
    .bundle(bundleName, path.resolve(__dirname, 'bundles/', name + '.min.js'), { minify: true, sourceMaps: true })
    .then(function() {
        console.log('Minified build complete.');
    })
    .catch(function(err) {
        console.log('Error', err);
    });