/// <reference path="../../../typings/angular2/angular2.d.ts" />
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
var array_1 = require("../../pipes/array");
var semantic_1 = require("../../directives/semantic/semantic");
var ToDo = (function () {
    function ToDo() {
    }
    return ToDo;
})();
var HomeComponent = (function () {
    function HomeComponent() {
        this.item = new ToDo();
        this.items = new Array();
        this.menus = ["Rachel", "Lindsay", "Matthew", "Jenny Hess", "Veronika Ossi", "Christian Rocha", "Mat"];
    }
    HomeComponent.prototype.addTodo = function () {
        this.items.push(this.item);
        this.item = new ToDo();
    };
    HomeComponent = __decorate([
        angular2_1.Component({
            selector: "home-component"
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.FORM_DIRECTIVES, semantic_1.SEMANTIC_DIRECTIVES],
            pipes: [array_1.ArrayFilterPipe],
            templateUrl: "./templates/components/home/home.html"
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=../../components/home/home.js.map