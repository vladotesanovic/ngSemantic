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
var SemanticInputComponent = (function () {
    function SemanticInputComponent(viewRef) {
        this.viewRef = viewRef;
        this.type = "text";
        this.control = new forms_1.FormControl();
        this.modelChange = new core_1.EventEmitter();
        this.isInsideForm = false;
    }
    SemanticInputComponent.prototype.ngOnInit = function () {
        if (this.inForm(this.viewRef.element.nativeElement, "form")) {
            this.isInsideForm = true;
        }
    };
    SemanticInputComponent.prototype.inForm = function (el, classname) {
        if (el.parentNode) {
            if (el.parentNode.nodeName.toLowerCase() === classname.toLowerCase()) {
                return !!el.parentNode;
            }
            else {
                return this.inForm(el.parentNode, classname);
            }
        }
        else {
            return false;
        }
    };
    return SemanticInputComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticInputComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticInputComponent.prototype, "class", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticInputComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticInputComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticInputComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SemanticInputComponent.prototype, "model", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormControl)
], SemanticInputComponent.prototype, "control", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SemanticInputComponent.prototype, "modelChange", void 0);
SemanticInputComponent = __decorate([
    core_1.Component({
        selector: "sm-input",
        template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty && isInsideForm) }\">\n  <label *ngIf=\"label && isInsideForm\">{{label}}</label>\n  <div class=\"ui input {{class}}\" [ngClass]=\"{'icon': icon, 'error': (!control.valid && control.dirty &&!isInsideForm)}\">\n  <label *ngIf=\"label && !isInsideForm\" class=\"ui label\">{{label}}</label>\n  <input [type]=\"type\" [formControl]=\"control\" (keyup)=\"modelChange.emit(input.value)\" #input placeholder=\"{{placeholder}}\">\n  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n</div>\n</div>"
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], SemanticInputComponent);
exports.SemanticInputComponent = SemanticInputComponent;
var SemanticCheckboxComponent = (function () {
    function SemanticCheckboxComponent() {
        this.control = new forms_1.FormControl();
        this.inputType = "checkbox";
        this.classType = "checkbox";
    }
    Object.defineProperty(SemanticCheckboxComponent.prototype, "type", {
        set: function (data) {
            if (data && data !== "checkbox") {
                this.classType = data;
                if (data === "radio") {
                    this.inputType = data;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return SemanticCheckboxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormControl)
], SemanticCheckboxComponent.prototype, "control", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticCheckboxComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SemanticCheckboxComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SemanticCheckboxComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticCheckboxComponent.prototype, "name", void 0);
__decorate([
    core_1.Input("type"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SemanticCheckboxComponent.prototype, "type", null);
SemanticCheckboxComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-checkbox",
        template: "<div class=\"field\" [ngClass]=\"{error: (!control.value && control?.validator) }\">\n    <div class=\"ui {{classType}} checkbox\">\n      <input type=\"checkbox\" \n      [attr.value]=\"value\"\n      [attr.type]=\"inputType\" tabindex=\"0\" [attr.name]=\"name\" [formControl]=\"control\" [attr.disabled]=\"disabled\">\n      <label *ngIf=\"label\">{{label}}</label>\n    </div>\n  </div>"
    }),
    __metadata("design:paramtypes", [])
], SemanticCheckboxComponent);
exports.SemanticCheckboxComponent = SemanticCheckboxComponent;
var SemanticTextareaComponent = (function () {
    function SemanticTextareaComponent() {
        this.control = new forms_1.FormControl();
    }
    return SemanticTextareaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormControl)
], SemanticTextareaComponent.prototype, "control", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticTextareaComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticTextareaComponent.prototype, "rows", void 0);
SemanticTextareaComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-textarea",
        template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty) }\">\n    <label *ngIf=\"label\">{{label}}</label>\n    <textarea rows=\"{{rows}}\" [formControl]=\"control\"></textarea>\n  </div>"
    }),
    __metadata("design:paramtypes", [])
], SemanticTextareaComponent);
exports.SemanticTextareaComponent = SemanticTextareaComponent;
