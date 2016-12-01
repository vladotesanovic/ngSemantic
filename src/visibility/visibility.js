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
var SMVisibilityDirective = (function () {
    function SMVisibilityDirective(element) {
        this.element = element;
        this.onTopVisible = new core_1.EventEmitter();
        this.onTopPassed = new core_1.EventEmitter();
        this.onUpdate = new core_1.EventEmitter();
    }
    SMVisibilityDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.element.element.nativeElement) {
            jQuery(this.element.element.nativeElement)
                .visibility({
                onTopPassed: function (calculations) { return _this.onTopPassed.emit(calculations); },
                onTopVisible: function (calculations) { return _this.onTopVisible.emit(calculations); },
                onUpdate: function (calculations) { return _this.onUpdate.emit(calculations); },
            });
        }
    };
    return SMVisibilityDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SMVisibilityDirective.prototype, "smDirVisibility", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SMVisibilityDirective.prototype, "onTopVisible", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SMVisibilityDirective.prototype, "onTopPassed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SMVisibilityDirective.prototype, "onUpdate", void 0);
SMVisibilityDirective = __decorate([
    core_1.Directive({
        selector: "[smDirVisibility]"
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], SMVisibilityDirective);
exports.SMVisibilityDirective = SMVisibilityDirective;
var SMDeviceVisibilityDirective = (function () {
    function SMDeviceVisibilityDirective(element) {
        this.element = element;
    }
    SMDeviceVisibilityDirective.prototype.ngOnInit = function () {
        (_a = this.element.element.nativeElement.classList).add.apply(_a, this.smDeviceVisibility.split(" "));
        var _a;
    };
    return SMDeviceVisibilityDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SMDeviceVisibilityDirective.prototype, "smDeviceVisibility", void 0);
SMDeviceVisibilityDirective = __decorate([
    core_1.Directive({
        selector: "[smDeviceVisibility]"
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], SMDeviceVisibilityDirective);
exports.SMDeviceVisibilityDirective = SMDeviceVisibilityDirective;
