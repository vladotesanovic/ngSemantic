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
var SemanticPopupComponent = (function () {
    function SemanticPopupComponent() {
        this.visible = false;
    }
    SemanticPopupComponent.prototype.show = function (element, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (!this.visible) {
            this.visible = true;
            this.element = element.target;
            var options = Object.assign({
                closable: true,
                exclusive: true,
                lastResort: true,
                on: "click",
                onHide: function () { return _this.hide(); },
                popup: this.popup.nativeElement,
                position: "bottom center",
                preserve: true,
            }, data);
            jQuery(this.element)
                .popup(options)
                .popup("show");
        }
    };
    SemanticPopupComponent.prototype.hide = function () {
        if (this.visible && this.element) {
            this.visible = false;
            jQuery(this.element)
                .popup("hide");
        }
    };
    return SemanticPopupComponent;
}());
__decorate([
    core_1.ViewChild("popup"),
    __metadata("design:type", core_1.ElementRef)
], SemanticPopupComponent.prototype, "popup", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticPopupComponent.prototype, "class", void 0);
SemanticPopupComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-popup",
        template: "<div class=\"ui popup very wide {{class}}\" #popup>\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>"
    }),
    __metadata("design:paramtypes", [])
], SemanticPopupComponent);
exports.SemanticPopupComponent = SemanticPopupComponent;
