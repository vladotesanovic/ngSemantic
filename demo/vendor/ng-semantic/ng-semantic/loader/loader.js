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
var SemanticLoader = (function () {
    function SemanticLoader() {
        this.complete = false;
    }
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticLoader.prototype, "class", void 0);
    __decorate([
        core_1.Input("text"), 
        __metadata('design:type', String)
    ], SemanticLoader.prototype, "text", void 0);
    __decorate([
        core_1.Input("complete"), 
        __metadata('design:type', Boolean)
    ], SemanticLoader.prototype, "complete", void 0);
    SemanticLoader = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-loader",
            template: "<div *ngIf=\"!complete\" class=\"ui active dimmer {{class}}\">\n    <div [ngClass]=\"{text: text}\" class=\"ui loader\">{{text}}</div>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticLoader);
    return SemanticLoader;
}());
exports.SemanticLoader = SemanticLoader;
