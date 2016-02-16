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
var SemanticItem = (function () {
    function SemanticItem() {
    }
    __decorate([
        core_1.Input("icon"), 
        __metadata('design:type', String)
    ], SemanticItem.prototype, "icon", void 0);
    __decorate([
        core_1.Input("header"), 
        __metadata('design:type', String)
    ], SemanticItem.prototype, "header", void 0);
    __decorate([
        core_1.Input("image"), 
        __metadata('design:type', String)
    ], SemanticItem.prototype, "image", void 0);
    SemanticItem = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "a[sm-item], sm-item"
        }),
        core_1.View({
            template: "<i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n<img *ngIf=\"image\" class=\"ui avatar image\" src=\"{{image}}\">\n<div class=\"content\">\n  <div *ngIf=\"header\" class=\"header\">\n    {{header}}\n  </div>\n  <ng-content></ng-content>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticItem);
    return SemanticItem;
})();
exports.SemanticItem = SemanticItem;
