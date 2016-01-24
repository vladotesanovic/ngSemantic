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
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticSegment.prototype, "class", void 0);
    SemanticSegment = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlZ21lbnQudHMiXSwibmFtZXMiOlsiU2VtYW50aWNTZWdtZW50IiwiU2VtYW50aWNTZWdtZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFPaEY7SUFBQUE7SUFXQUMsQ0FBQ0E7SUFEQ0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O09BQUNBLGtDQUFLQSxVQUFTQTtJQVZoQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1JBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDakRBLFFBQVFBLEVBQUdBLFlBQVlBO1NBQ3ZCQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSxrRkFFUEE7U0FDTkEsQ0FBQ0E7O3dCQUdEQTtJQUFEQSxzQkFBQ0E7QUFBREEsQ0FBQ0EsQUFYRCxJQVdDO0FBRlksdUJBQWUsa0JBRTNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgU2VnbWVudCBjb21wb25lbnRcbiAqIFxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9zZWdtZW50Lmh0bWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIFx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHNlbGVjdG9yIDogXCJzbS1zZWdtZW50XCJcbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWkgc2VnbWVudCB7e2NsYXNzfX1cIj5cbiAgPHA+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvcD5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNTZWdtZW50IHtcbiAgQElucHV0KFwiY2xhc3NcIikgY2xhc3M6IHN0cmluZztcbn1cbiJdfQ==