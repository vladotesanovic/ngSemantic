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
        core_1.Input("value"), 
        __metadata('design:type', String)
    ], SemanticInput.prototype, "value", void 0);
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
            template: "<input type=\"text\" [(ngModel)]=\"value\" placeholder=\"{{placeholder}}...\">"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticInput);
    return SemanticInput;
})();
exports.SemanticInput = SemanticInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6WyJTZW1hbnRpY0lucHV0IiwiU2VtYW50aWNJbnB1dC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQWdFLGVBQWUsQ0FBQyxDQUFBO0FBQ2hGLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBT2xEO0lBQUFBO0lBV0FDLENBQUNBO0lBRkNEO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSxnQ0FBS0EsVUFBU0E7SUFDOUJBO1FBQUNBLFlBQUtBLENBQUNBLGFBQWFBLENBQUNBOztPQUFDQSxzQ0FBV0EsVUFBU0E7SUFWNUNBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxlQUFlQSxFQUFFQSw4QkFBdUJBLENBQUNBLE1BQU1BO1lBQy9DQSxRQUFRQSxFQUFFQSxVQUFVQTtTQUNyQkEsQ0FBQ0E7UUFDREEsV0FBSUEsQ0FBQ0E7WUFDSkEsVUFBVUEsRUFBRUEsQ0FBQ0Esd0JBQWVBLENBQUNBO1lBQzdCQSxRQUFRQSxFQUFFQSxnRkFBMEVBO1NBQ3JGQSxDQUFDQTs7c0JBSURBO0lBQURBLG9CQUFDQTtBQUFEQSxDQUFDQSxBQVhELElBV0M7QUFIWSxxQkFBYSxnQkFHekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUyB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJbnB1dCBlbGVtZW50XG4gKiBcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaW5wdXQuaHRtbFxuICovXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiBcInNtLWlucHV0XCJcbn0pXG5AVmlldyh7XG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdLFxuICB0ZW1wbGF0ZTogYDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwidmFsdWVcIiBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fS4uLlwiPmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNJbnB1dCB7XG4gIEBJbnB1dChcInZhbHVlXCIpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dChcInBsYWNlaG9sZGVyXCIpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG59XG4iXX0=