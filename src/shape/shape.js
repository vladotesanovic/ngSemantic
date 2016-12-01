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
var SemanticShapeComponent = (function () {
    function SemanticShapeComponent() {
        this.options = {};
        this.beforeChange = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
    }
    SemanticShapeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.options = Object.assign({
            beforeChange: function () { return _this.beforeChange.emit(true); },
            onChange: function () { return _this.onChange.emit(true); }
        }, this.options);
    };
    SemanticShapeComponent.prototype.show = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        jQuery(this.shape.nativeElement)
            .shape(this.options)
            .shape(args.join(","));
    };
    return SemanticShapeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticShapeComponent.prototype, "class", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SemanticShapeComponent.prototype, "options", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SemanticShapeComponent.prototype, "beforeChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SemanticShapeComponent.prototype, "onChange", void 0);
__decorate([
    core_1.ViewChild("shape"),
    __metadata("design:type", core_1.ElementRef)
], SemanticShapeComponent.prototype, "shape", void 0);
SemanticShapeComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-shape",
        template: "\n    <div #shape class=\"ui shape {{class}}\">\n        <ng-content></ng-content>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], SemanticShapeComponent);
exports.SemanticShapeComponent = SemanticShapeComponent;
