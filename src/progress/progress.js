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
var SemanticProgressComponent = (function () {
    function SemanticProgressComponent() {
        this._progress = 0;
    }
    Object.defineProperty(SemanticProgressComponent.prototype, "progress", {
        set: function (value) {
            this._progress = (value >= 100) ? 100 : value;
        },
        enumerable: true,
        configurable: true
    });
    return SemanticProgressComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticProgressComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticProgressComponent.prototype, "class", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SemanticProgressComponent.prototype, "progress", null);
SemanticProgressComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-progress",
        template: "<div [ngClass]=\"{'success': _progress === 100}\" class=\"ui {{class}} progress\" [attr.data-percent]=\"_progress\">\n  <div class=\"bar\" [ngStyle]=\"{'width': _progress + '%'}\">\n    <div class=\"progress\">{{_progress}}%</div>\n  </div>\n  <div class=\"label\" *ngIf=\"label\">{{label}}</div>\n</div>"
    }),
    __metadata("design:paramtypes", [])
], SemanticProgressComponent);
exports.SemanticProgressComponent = SemanticProgressComponent;
