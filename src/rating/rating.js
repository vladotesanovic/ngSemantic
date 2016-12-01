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
var SemanticRatingComponent = (function () {
    function SemanticRatingComponent() {
        this.onRate = new core_1.EventEmitter();
    }
    SemanticRatingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery(this.rating.nativeElement)
            .rating({
            initialRating: this.initialRating || 0,
            maxRating: this.maxRating || 5,
            onRate: function (value) {
                _this.onRate.emit(value);
            }
        });
    };
    return SemanticRatingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticRatingComponent.prototype, "class", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SemanticRatingComponent.prototype, "initialRating", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SemanticRatingComponent.prototype, "maxRating", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SemanticRatingComponent.prototype, "onRate", void 0);
__decorate([
    core_1.ViewChild("rating"),
    __metadata("design:type", core_1.ElementRef)
], SemanticRatingComponent.prototype, "rating", void 0);
SemanticRatingComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-rating",
        template: "<div class=\"ui {{class}} rating\" #rating></div>"
    }),
    __metadata("design:paramtypes", [])
], SemanticRatingComponent);
exports.SemanticRatingComponent = SemanticRatingComponent;
