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
var SemanticSegment = (function () {
    function SemanticSegment() {
    }
    SemanticSegment = __decorate([
        core_1.Component({
            properties: ["class"],
            selector: "sm-segment"
        }),
        core_1.View({
            template: "<div class=\"ui segment {{class}}\">\n  <p><ng-content></ng-content></p>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticSegment);
    return SemanticSegment;
})();
exports.SemanticSegment = SemanticSegment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvZGlyZWN0aXZlcy9zZW1hbnRpYy9zZWdtZW50L3NlZ21lbnQudHMiXSwibmFtZXMiOlsiU2VtYW50aWNTZWdtZW50IiwiU2VtYW50aWNTZWdtZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFPaEQ7SUFBQUE7SUFTOEJDLENBQUNBO0lBVC9CRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsVUFBVUEsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7WUFDeEJBLFFBQVFBLEVBQUdBLFlBQVlBO1NBQ3ZCQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSxrRkFFUEE7U0FDTkEsQ0FBQ0E7O3dCQUM2QkE7SUFBREEsc0JBQUNBO0FBQURBLENBQUNBLEFBVC9CLElBUytCO0FBQWxCLHVCQUFlLGtCQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIFNlZ21lbnQgY29tcG9uZW50XG4gKiBcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvc2VnbWVudC5odG1sXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHByb3BlcnRpZXM6IFtcImNsYXNzXCJdLFxuXHRzZWxlY3RvciA6IFwic20tc2VnbWVudFwiXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInVpIHNlZ21lbnQge3tjbGFzc319XCI+XG4gIDxwPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3A+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljU2VnbWVudCB7fVxuIl19