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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6WyJTZW1hbnRpY0lucHV0IiwiU2VtYW50aWNJbnB1dC5jb25zdHJ1Y3RvciIsIlNlbWFudGljRm9ybSIsIlNlbWFudGljRm9ybS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQWdFLGVBQWUsQ0FBQyxDQUFBO0FBQ2hGLHVCQUF5RCxpQkFBaUIsQ0FBQyxDQUFBO0FBTzNFO0lBQUFBO0lBY0FDLENBQUNBO0lBSENEO1FBQUNBLFlBQUtBLENBQUNBLFNBQVNBLENBQUNBOztPQUFDQSxrQ0FBT0EsVUFBVUE7SUFDbkNBO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSxnQ0FBS0EsVUFBU0E7SUFDOUJBO1FBQUNBLFlBQUtBLENBQUNBLGFBQWFBLENBQUNBOztPQUFDQSxzQ0FBV0EsVUFBU0E7SUFiNUNBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxlQUFlQSxFQUFFQSw4QkFBdUJBLENBQUNBLE1BQU1BO1lBQy9DQSxRQUFRQSxFQUFFQSxVQUFVQTtTQUNyQkEsQ0FBQ0E7UUFDREEsV0FBSUEsQ0FBQ0E7WUFDSkEsUUFBUUEsRUFBRUEsME5BR0xBO1NBQ05BLENBQUNBOztzQkFLREE7SUFBREEsb0JBQUNBO0FBQURBLENBQUNBLEFBZEQsSUFjQztBQUpZLHFCQUFhLGdCQUl6QixDQUFBO0FBT0Q7SUFBQUU7SUFRMkJDLENBQUNBO0lBUjVCRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsZUFBZUE7WUFDekJBLFNBQVNBLEVBQUVBLENBQUNBLHVCQUFjQSxDQUFDQTtTQUM1QkEsQ0FBQ0E7UUFDREEsV0FBSUEsQ0FBQ0E7WUFDSkEsVUFBVUEsRUFBRUEsQ0FBQ0Esd0JBQWVBLENBQUNBO1lBQzdCQSxRQUFRQSxFQUFFQSwyQkFBMkJBO1NBQ3RDQSxDQUFDQTs7cUJBQzBCQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0FBQ0EsQUFSNUIsSUFRNEI7QUFBZixvQkFBWSxlQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIENvbnRyb2wsIEZPUk1fUFJPVklERVJTIH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIElucHV0IGVsZW1lbnRcbiAqIFxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9pbnB1dC5odG1sXG4gKi9cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6IFwic20taW5wdXRcIlxufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZmllbGRcIiBbbmdDbGFzc109XCJ7ZXJyb3I6ICghY29udHJvbC52YWxpZCAmJiBjb250cm9sLmRpcnR5KSB9XCI+XG4gIDxsYWJlbCAqbmdJZj1cImxhYmVsXCI+e3tsYWJlbH19PC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25nRm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIHBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlcn19XCI+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljSW5wdXQge1xuICBASW5wdXQoXCJjb250cm9sXCIpIGNvbnRyb2w6IENvbnRyb2w7XG4gIEBJbnB1dChcImxhYmVsXCIpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dChcInBsYWNlaG9sZGVyXCIpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgRm9ybSBlbGVtZW50XG4gKiBcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvZm9ybS5odG1sXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJmb3JtW3NtLWZvcm1dXCIsXG4gIHByb3ZpZGVyczogW0ZPUk1fUFJPVklERVJTXVxufSlcbkBWaWV3KHtcbiAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU10sXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNGb3JtIHt9XG4iXX0=