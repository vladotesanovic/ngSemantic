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
var SemanticDropdownComponent = (function () {
    function SemanticDropdownComponent() {
        this.options = {};
        this.onChange = new core_1.EventEmitter();
    }
    SemanticDropdownComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var options = Object.assign({
            onChange: function (value, a, b) {
                if (b != null && b.length) {
                    _this.onChange.emit(b[0].innerText);
                }
            }
        }, this.options);
        jQuery(this.dropdown.nativeElement)
            .dropdown(options);
    };
    return SemanticDropdownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticDropdownComponent.prototype, "class", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticDropdownComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticDropdownComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SemanticDropdownComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SemanticDropdownComponent.prototype, "options", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SemanticDropdownComponent.prototype, "onChange", void 0);
__decorate([
    core_1.ViewChild("dropdown"),
    __metadata("design:type", core_1.ElementRef)
], SemanticDropdownComponent.prototype, "dropdown", void 0);
SemanticDropdownComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-dropdown",
        template: "\n    <div class=\"ui {{class}} dropdown item\" #dropdown>\n        <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n        <div *ngIf=\"title\" class=\"text\">{{title}}</div>\n        <i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n"
    }),
    __metadata("design:paramtypes", [])
], SemanticDropdownComponent);
exports.SemanticDropdownComponent = SemanticDropdownComponent;
