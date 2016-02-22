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
var SemanticButton = (function () {
    function SemanticButton() {
        this.disabled = false;
    }
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticButton.prototype, "class", void 0);
    __decorate([
        core_1.Input("icon"), 
        __metadata('design:type', String)
    ], SemanticButton.prototype, "icon", void 0);
    __decorate([
        core_1.Input("disabled"), 
        __metadata('design:type', Boolean)
    ], SemanticButton.prototype, "disabled", void 0);
    SemanticButton = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-button"
        }),
        core_1.View({
            template: "<button [ngClass]=\"{icon: icon}\" [attr.disabled]=\"disabled ? true : null\" class=\"ui {{class}} button\">\n  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n    <ng-content></ng-content>\n</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticButton);
    return SemanticButton;
}());
exports.SemanticButton = SemanticButton;
