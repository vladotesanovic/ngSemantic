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
var forms_1 = require("@angular/forms");
var SemanticSelectComponent = (function () {
    function SemanticSelectComponent() {
        this.control = new forms_1.FormControl();
        this.options = {};
        this.modelChange = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.multiple = false;
    }
    Object.defineProperty(SemanticSelectComponent.prototype, "disabled", {
        set: function (data) {
            var _this = this;
            setTimeout(function () {
                if (data) {
                    jQuery(_this.select.nativeElement.parentNode).addClass("disabled");
                }
                else {
                    jQuery(_this.select.nativeElement.parentNode).removeClass("disabled");
                }
            }, 1);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(SemanticSelectComponent.prototype, "model", {
        set: function (data) {
            var _this = this;
            if (data) {
                setTimeout(function () {
                    jQuery(_this.select.nativeElement).dropdown("set selected", data);
                }, 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    SemanticSelectComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof this.class === "string" && this.class.search("multiple") >= 0) {
            this.select.nativeElement.setAttribute("multiple", true);
        }
        var options = Object.assign({
            onChange: function (value) {
                _this.modelChange.emit(value);
                _this.onChange.emit(value);
            },
            onHide: function () { return _this.control.markAsTouched(); }
        }, this.options);
        jQuery(this.select.nativeElement)
            .dropdown(options);
    };
    return SemanticSelectComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormControl)
], SemanticSelectComponent.prototype, "control", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticSelectComponent.prototype, "class", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticSelectComponent.prototype, "label", void 0);
__decorate([
    core_1.Input("disabled"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SemanticSelectComponent.prototype, "disabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SemanticSelectComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticSelectComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SemanticSelectComponent.prototype, "modelChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SemanticSelectComponent.prototype, "onChange", void 0);
__decorate([
    core_1.ViewChild("select"),
    __metadata("design:type", core_1.ElementRef)
], SemanticSelectComponent.prototype, "select", void 0);
__decorate([
    core_1.Input("model"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SemanticSelectComponent.prototype, "model", null);
SemanticSelectComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-select",
        template: "<div class=\"field\" [ngClass]=\"{error: (!control?.valid && control?.touched) }\">\n  <label *ngIf=\"label\">{{label}}</label>\n<select [formControl]=\"control\" class=\"ui {{class}} dropdown\"  #select>\n    <option value=\"\">{{placeholder}}</option>\n    <ng-content></ng-content>\n</select>\n</div>"
    }),
    __metadata("design:paramtypes", [])
], SemanticSelectComponent);
exports.SemanticSelectComponent = SemanticSelectComponent;
