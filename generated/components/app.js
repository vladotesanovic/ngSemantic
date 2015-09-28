/// <reference path="../../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var router_1 = require("angular2/router");
var home_1 = require("../components/home/home");
var about_1 = require("../components/about/about");
var menu_1 = require("../components/menu/menu");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: "app"
        }),
        angular2_1.View({
            directives: [router_1.RouterOutlet, router_1.RouterLink, menu_1.MenuComponent],
            templateUrl: "./templates/shared/master.html"
        }),
        router_1.RouteConfig([
            { as: "home", component: home_1.HomeComponent, path: "/" },
            { as: "about", component: about_1.AboutComponent, path: "/about" }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;

//# sourceMappingURL=../components/app.js.map