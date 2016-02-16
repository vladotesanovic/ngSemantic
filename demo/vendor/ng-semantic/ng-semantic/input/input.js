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
var common_1 = require("angular2/common");
var SemanticInput = (function () {
    function SemanticInput() {
    }
    __decorate([
        core_1.Input("control"), 
        __metadata('design:type', common_1.Control)
    ], SemanticInput.prototype, "control", void 0);
    __decorate([
        core_1.Input("label"), 
        __metadata('design:type', String)
    ], SemanticInput.prototype, "label", void 0);
    __decorate([
        core_1.Input("placeholder"), 
        __metadata('design:type', String)
    ], SemanticInput.prototype, "placeholder", void 0);
    SemanticInput = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-input"
        }),
        core_1.View({
            template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty) }\">\n  <label *ngIf=\"label\">{{label}}</label>\n  <input type=\"text\" [ngFormControl]=\"control\" placeholder=\"{{placeholder}}\">\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticInput);
    return SemanticInput;
})();
exports.SemanticInput = SemanticInput;
var SemanticForm = (function () {
    function SemanticForm() {
    }
    SemanticForm = __decorate([
        core_1.Component({
            selector: "form[sm-form]",
            providers: [common_1.FORM_PROVIDERS]
        }),
        core_1.View({
            directives: [common_1.FORM_DIRECTIVES],
            template: "<ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticForm);
    return SemanticForm;
})();
exports.SemanticForm = SemanticForm;
