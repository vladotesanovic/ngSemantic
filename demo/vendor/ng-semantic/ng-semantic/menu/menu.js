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
var SemanticMenu = (function () {
    function SemanticMenu() {
    }
    __decorate([
        core_1.Input("logo"), 
        __metadata('design:type', String)
    ], SemanticMenu.prototype, "logo", void 0);
    SemanticMenu = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-menu"
        }),
        core_1.View({
            template: "\n<a href=\"#/\" *ngIf=\"logo\" class=\"header item\">\n    <img class=\"logo\" alt=\"{{title}}\" src=\"{{logo}}\">\n</a>\n\n<ng-content></ng-content>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticMenu);
    return SemanticMenu;
}());
exports.SemanticMenu = SemanticMenu;
