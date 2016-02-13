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
        core_1.Input("inputControl"), 
        __metadata('design:type', String)
    ], SemanticInput.prototype, "inputControl", void 0);
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
            directives: [common_1.FORM_DIRECTIVES],
            template: "<input type=\"text\" [ngControl]=\"inputControl\" placeholder=\"{{placeholder}}...\">",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticInput);
    return SemanticInput;
})();
exports.SemanticInput = SemanticInput;
var SemanticForm = (function () {
    function SemanticForm() {
    }
    __decorate([
        core_1.Input("formModel"), 
        __metadata('design:type', Object)
    ], SemanticForm.prototype, "formModel", void 0);
    SemanticForm = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-form",
            providers: [common_1.FORM_PROVIDERS]
        }),
        core_1.View({
            directives: [common_1.FORM_DIRECTIVES],
            template: "<form [ngFormModel]=\"loginForm\">\n    <ng-content></ng-content>\n</form>",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticForm);
    return SemanticForm;
})();
exports.SemanticForm = SemanticForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6WyJTZW1hbnRpY0lucHV0IiwiU2VtYW50aWNJbnB1dC5jb25zdHJ1Y3RvciIsIlNlbWFudGljRm9ybSIsIlNlbWFudGljRm9ybS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQW1GLGVBQWUsQ0FBQyxDQUFBO0FBQ25HLHVCQUFnRCxpQkFBaUIsQ0FBQyxDQUFBO0FBT2xFO0lBQUFBO0lBWUFDLENBQUNBO0lBRkNEO1FBQUNBLFlBQUtBLENBQUNBLGNBQWNBLENBQUNBOztPQUFDQSx1Q0FBWUEsVUFBU0E7SUFDNUNBO1FBQUNBLFlBQUtBLENBQUNBLGFBQWFBLENBQUNBOztPQUFDQSxzQ0FBV0EsVUFBU0E7SUFYNUNBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxlQUFlQSxFQUFFQSw4QkFBdUJBLENBQUNBLE1BQU1BO1lBQy9DQSxRQUFRQSxFQUFFQSxVQUFVQTtTQUNyQkEsQ0FBQ0E7UUFDREEsV0FBSUEsQ0FBQ0E7WUFDSkEsVUFBVUEsRUFBRUEsQ0FBQ0Esd0JBQWVBLENBQUNBO1lBQzdCQSxRQUFRQSxFQUFFQSx1RkFBaUZBO1lBQzNGQSxhQUFhQSxFQUFFQSx3QkFBaUJBLENBQUNBLElBQUlBO1NBQ3RDQSxDQUFDQTs7c0JBSURBO0lBQURBLG9CQUFDQTtBQUFEQSxDQUFDQSxBQVpELElBWUM7QUFIWSxxQkFBYSxnQkFHekIsQ0FBQTtBQU9EO0lBQUFFO0lBY0FDLENBQUNBO0lBRENEO1FBQUNBLFlBQUtBLENBQUNBLFdBQVdBLENBQUNBOztPQUFDQSxtQ0FBU0EsVUFBTUE7SUFickNBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxlQUFlQSxFQUFFQSw4QkFBdUJBLENBQUNBLE1BQU1BO1lBQy9DQSxRQUFRQSxFQUFFQSxTQUFTQTtZQUNuQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsdUJBQWNBLENBQUNBO1NBQzVCQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNKQSxVQUFVQSxFQUFFQSxDQUFDQSx3QkFBZUEsQ0FBQ0E7WUFDN0JBLFFBQVFBLEVBQUVBLDRFQUVKQTtZQUNOQSxhQUFhQSxFQUFFQSx3QkFBaUJBLENBQUNBLElBQUlBO1NBQ3RDQSxDQUFDQTs7cUJBR0RBO0lBQURBLG1CQUFDQTtBQUFEQSxDQUFDQSxBQWRELElBY0M7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUywgRk9STV9QUk9WSURFUlMgfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgSW5wdXQgZWxlbWVudFxuICogXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2lucHV0Lmh0bWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogXCJzbS1pbnB1dFwiXG59KVxuQFZpZXcoe1xuICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXSxcbiAgdGVtcGxhdGU6IGA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdDb250cm9sXT1cImlucHV0Q29udHJvbFwiIHBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlcn19Li4uXCI+YCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY0lucHV0IHtcbiAgQElucHV0KFwiaW5wdXRDb250cm9sXCIpIGlucHV0Q29udHJvbDogc3RyaW5nO1xuICBASW5wdXQoXCJwbGFjZWhvbGRlclwiKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xufVxuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIEZvcm0gZWxlbWVudFxuICpcbiAqIEBsaW5rXG4gKi9cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6IFwic20tZm9ybVwiLFxuICBwcm92aWRlcnM6IFtGT1JNX1BST1ZJREVSU11cbn0pXG5AVmlldyh7XG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdLFxuICB0ZW1wbGF0ZTogYDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJsb2dpbkZvcm1cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Zvcm0+YCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY0Zvcm0ge1xuICBASW5wdXQoXCJmb3JtTW9kZWxcIikgZm9ybU1vZGVsOiBhbnk7XG59XG4iXX0=