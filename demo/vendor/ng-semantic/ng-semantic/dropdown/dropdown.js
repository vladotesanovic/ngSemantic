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
require("semantic-ui/dist/components/dropdown.min");
require("semantic-ui/dist/components/dimmer.min");
var SMDropdownDirective = (function () {
    function SMDropdownDirective(el) {
        this.el = el;
    }
    SMDropdownDirective.prototype.onClick = function () {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }
        jQuery(".ui.dropdown").dropdown();
    };
    SMDropdownDirective = __decorate([
        core_1.Directive({
            selector: "[sm-dir-dropdown]",
            host: {
                "(click)": "onClick()"
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SMDropdownDirective);
    return SMDropdownDirective;
}());
exports.SMDropdownDirective = SMDropdownDirective;
var SemanticDropdown = (function () {
    function SemanticDropdown() {
    }
    __decorate([
        core_1.Input("selector"), 
        __metadata('design:type', String)
    ], SemanticDropdown.prototype, "selector", void 0);
    __decorate([
        core_1.Input("title"), 
        __metadata('design:type', String)
    ], SemanticDropdown.prototype, "title", void 0);
    SemanticDropdown = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-dropdown"
        }),
        core_1.View({
            template: "<div class=\"ui dropdown {{selector}}\">\n                    <div class=\"text\">{{title}}</div>\n                    <i class=\"dropdown icon\"></i>\n                    <div class=\"menu\">\n                        <ng-content></ng-content>\n                    </div>\n               </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticDropdown);
    return SemanticDropdown;
}());
exports.SemanticDropdown = SemanticDropdown;
