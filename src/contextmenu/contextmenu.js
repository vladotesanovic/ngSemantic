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
var core_1 = require("@angular/core");
var SemanticContextMenuComponent = (function () {
    function SemanticContextMenuComponent() {
        this._position = { x: 0, y: 0 };
        this.show = false;
    }
    Object.defineProperty(SemanticContextMenuComponent.prototype, "position", {
        set: function (data) {
            if (data) {
                this._position = data;
                this.show = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    SemanticContextMenuComponent.prototype.clickedOutside = function () {
        this.show = false;
    };
    return SemanticContextMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SemanticContextMenuComponent.prototype, "items", void 0);
__decorate([
    core_1.Input("position"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SemanticContextMenuComponent.prototype, "position", null);
__decorate([
    core_1.HostListener("document:click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemanticContextMenuComponent.prototype, "clickedOutside", null);
SemanticContextMenuComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-contextmenu",
        styles: [".sm-contextmenu { position: fixed; z-index: 1000; }"],
        template: "<div \n[style.left.px]=\"_position?.x\" [style.top.px]=\"_position?.y\"\n[ngClass]=\"{'active visible': show}\" class=\"ui dropdown sm-contextmenu\">\n <div \n [ngClass]=\"{'visible animating slide down in': show, 'hidden': !show}\"  class=\"ui menu transition\">\n <a (click)=\"menu.action()\" *ngFor=\"let menu of items\" class=\"item\">\n <i class=\"{{menu.icon}} icon\"></i>\n {{menu.title}}\n </a>\n </div>\n </div>\n"
    }),
    __metadata("design:paramtypes", [])
], SemanticContextMenuComponent);
exports.SemanticContextMenuComponent = SemanticContextMenuComponent;
