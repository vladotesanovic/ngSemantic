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
var SemanticDimmer = (function () {
    function SemanticDimmer() {
    }
    __decorate([
        core_1.Input("selector"), 
        __metadata('design:type', String)
    ], SemanticDimmer.prototype, "selector", void 0);
    SemanticDimmer = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-dimmer",
            template: "<div class=\"ui {{selector}} dimmer\">\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticDimmer);
    return SemanticDimmer;
}());
exports.SemanticDimmer = SemanticDimmer;
var SMDimmerDirective = (function () {
    function SMDimmerDirective() {
    }
    SMDimmerDirective.prototype.toggleDimmer = function () {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }
        jQuery(".ui.dimmer." + this.data)
            .dimmer('toggle');
    };
    SMDimmerDirective = __decorate([
        core_1.Directive({
            host: {
                "(click)": "toggleDimmer()"
            },
            inputs: [
                "data: sm-dir-dimmer"
            ],
            selector: "[sm-dir-dimmer]"
        }), 
        __metadata('design:paramtypes', [])
    ], SMDimmerDirective);
    return SMDimmerDirective;
}());
exports.SMDimmerDirective = SMDimmerDirective;
