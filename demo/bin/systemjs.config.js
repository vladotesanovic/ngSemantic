/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app':                        'demo/app', // 'dist',
        '@angular':                   'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs':                       'node_modules/rxjs',
        'Prism':                      'demo/vendor/prismjs'
    };

    var paths = {
        'ng-semantic':                'bundles'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                          { main: 'bootstrap.js',  defaultExtension: 'js' },
        'rxjs':                         { defaultExtension: 'js' },
        'angular2-in-memory-web-api':   { defaultExtension: 'js' },
        'Prism':                        { main: 'prism.js', defaultExtension: 'js' }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];

    // Add package entries for angular packages
    ngPackageNames.forEach(function(pkgName) {
        packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
    });

    packages['ng-semantic'] = { main: 'ng-semantic.js', defaultExtension: 'js' };

    var config = {
        map: map,
        paths: paths,
        packages: packages
    };

    System.config(config);

})(this);