/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require("angular2/angular2");
var router_1 = require("angular2/router");
var router_2 = require("angular2/router");
var app_1 = require("./components/app");
angular2_1.bootstrap(app_1.AppComponent, [
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_2.LocationStrategy).toClass(router_2.HashLocationStrategy)
]);

//# sourceMappingURL=bootstrap.js.map