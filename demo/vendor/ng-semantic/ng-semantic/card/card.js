"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var SemanticCard = (function () {
    function SemanticCard() {
    }
    __decorate([
        core_1.Input("image"), 
        __metadata('design:type', String)
    ], SemanticCard.prototype, "image", void 0);
    __decorate([
        core_1.Input("title"), 
        __metadata('design:type', String)
    ], SemanticCard.prototype, "title", void 0);
    __decorate([
        core_1.Input("subtitle"), 
        __metadata('design:type', String)
    ], SemanticCard.prototype, "subtitle", void 0);
    SemanticCard = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-card"
        }),
        core_1.View({
            template: "<div class=\"image\">\n    <img src=\"{{image}}\">\n  </div>\n  <div class=\"content\">\n    <a class=\"header\">{{title}}</a>\n    <div class=\"meta\">\n      <span class=\"date\">{{subtitle}}</span>\n    </div>\n    <div class=\"description\">\n      <ng-content select=\"conntent\"></ng-content>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <ng-content select=\"extra\"></ng-content>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticCard);
    return SemanticCard;
}());
exports.SemanticCard = SemanticCard;
