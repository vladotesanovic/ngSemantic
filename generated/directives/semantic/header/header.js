/// <reference path="../../../../typings/angular2/angular2.d.ts" />
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
var HeaderDirective = (function () {
    function HeaderDirective() {
        this.items = new Array();
        this.items.push({ link: "#/about", title: "About" });
    }
    HeaderDirective = __decorate([
        angular2_1.Component({
            properties: ["title:title"],
            selector: "header"
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            template: "<div class=\"ui stackable menu fixed\">\n    <div class=\"ui container\">\n        <a href=\"#/\" class=\"header item\">\n            <img class=\"logo\" src=\"/assets/images/semantic.png\">&amp;\n            <img class=\"logo second\" src=\"/assets/images/angular.png\">\n            {{title}}\n        </a>\n        <a *ng-for=\"var menu of items\" href=\"{{menu.link}}\" class=\"item\">{{menu.title}}</a>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderDirective);
    return HeaderDirective;
})();
exports.HeaderDirective = HeaderDirective;

//# sourceMappingURL=../../../directives/semantic/header/header.js.map