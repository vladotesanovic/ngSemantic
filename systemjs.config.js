/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var paths = {
        'npm:': 'node_modules/'
    };

    var map = {
        'app': 'demo/app', // 'dist',


        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

        // other libraries
        'rxjs': 'npm:rxjs',
        'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
        'ng-semantic': './',
        'Prism': 'demo/vendor/prismjs',


    };

    var packages = {
        app: {
            main: './bootstrap.js',
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js'
        },
        'angular2-in-memory-web-api': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'ng-semantic': {
            main: './ng-semantic.js',
            defaultExtension: 'js'
        },
        'Prism': {
            main: './prism.js',
            defaultExtension: 'js'
        }
    };

    var config = {
        paths: paths,
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
