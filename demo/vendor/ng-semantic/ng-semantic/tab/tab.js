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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("angular2/core");
var SemanticTab = (function () {
    function SemanticTab() {
    }
    __decorate([
        core_1.Input("tab"), 
        __metadata('design:type', String)
    ], SemanticTab.prototype, "dataDatab", void 0);
    __decorate([
        core_1.Input("title"), 
        __metadata('design:type', String)
    ], SemanticTab.prototype, "title", void 0);
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticTab.prototype, "class", void 0);
    SemanticTab = __decorate([
        core_1.Component({
            selector: "sm-tab",
            template: "<ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticTab);
    return SemanticTab;
}());
exports.SemanticTab = SemanticTab;
var SemanticTabs = (function () {
    function SemanticTabs(tabs, elementRef) {
        this.elementRef = elementRef;
        this.tabs = tabs;
    }
    SemanticTabs.prototype.ngAfterViewInit = function () {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }
        jQuery(".menu.tabular .item").tab({
            childrenOnly: true,
            context: jQuery(this.elementRef.nativeElement)
        });
    };
    SemanticTabs = __decorate([
        core_1.Component({
            selector: "sm-tabs",
            template: "<div class=\"ui top attached tabular menu\">\n  <a class=\"item\" [ngClass]=\"{active: i === 0}\" *ngFor=\"#tab of tabs; #i = index\" attr.data-tab=\"{{tab.dataDatab}}\">{{tab.title}}</a>\n</div>\n<ng-content></ng-content>\n"
        }),
        __param(0, core_1.Query(SemanticTab)), 
        __metadata('design:paramtypes', [core_1.QueryList, core_1.ElementRef])
    ], SemanticTabs);
    return SemanticTabs;
}());
exports.SemanticTabs = SemanticTabs;
