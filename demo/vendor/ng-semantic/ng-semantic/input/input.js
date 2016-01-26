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
        core_1.Input("model"), 
        __metadata('design:type', String)
    ], SemanticInput.prototype, "model", void 0);
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
            template: "<div class=\"ui input\">\n  <input type=\"text\" [(ngModel)]=\"model\" placeholder=\"{{placeholder}}...\">\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticInput);
    return SemanticInput;
})();
exports.SemanticInput = SemanticInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6WyJTZW1hbnRpY0lucHV0IiwiU2VtYW50aWNJbnB1dC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQWdFLGVBQWUsQ0FBQyxDQUFBO0FBQ2hGLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWxEO0lBQUFBO0lBY0FDLENBQUNBO0lBRkNEO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSxnQ0FBS0EsVUFBU0E7SUFDOUJBO1FBQUNBLFlBQUtBLENBQUNBLGFBQWFBLENBQUNBOztPQUFDQSxzQ0FBV0EsVUFBU0E7SUFiNUNBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxlQUFlQSxFQUFFQSw4QkFBdUJBLENBQUNBLE1BQU1BO1lBQy9DQSxRQUFRQSxFQUFFQSxVQUFVQTtTQUNyQkEsQ0FBQ0E7UUFFREEsV0FBSUEsQ0FBQ0E7WUFDSkEsVUFBVUEsRUFBRUEsQ0FBQ0Esd0JBQWVBLENBQUNBO1lBQzdCQSxRQUFRQSxFQUFFQSxvSEFFTEE7U0FDTkEsQ0FBQ0E7O3NCQUlEQTtJQUFEQSxvQkFBQ0E7QUFBREEsQ0FBQ0EsQUFkRCxJQWNDO0FBSFkscUJBQWEsZ0JBR3pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMgfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6IFwic20taW5wdXRcIlxufSlcblxuQFZpZXcoe1xuICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXSxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWkgaW5wdXRcIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJtb2RlbFwiIHBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlcn19Li4uXCI+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljSW5wdXQge1xuICBASW5wdXQoXCJtb2RlbFwiKSBtb2RlbDogc3RyaW5nO1xuICBASW5wdXQoXCJwbGFjZWhvbGRlclwiKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xufVxuIl19