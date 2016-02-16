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
var SemanticBreadcrumb = (function () {
    function SemanticBreadcrumb() {
    }
    __decorate([
        core_1.Input("steaps"), 
        __metadata('design:type', Array)
    ], SemanticBreadcrumb.prototype, "steaps", void 0);
    SemanticBreadcrumb = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-breadcrumb"
        }),
        core_1.View({
            template: "\n  \n<div [ngSwitch]=\"i\" class=\"ui breadcrumb\" *ngFor=\"#steap of steaps; #i = index\">\n      <template ngSwitchDefault> \n        <a class=\"section\">{{steap}}</a>\n        <i class=\"right arrow icon divider\"></i>\n      </template>\n      <template [ngSwitchWhen]=\"steaps.length -1\">\n         <div class=\"active section\">{{steap}}</div>\n      </template>\n</div>\n  \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticBreadcrumb);
    return SemanticBreadcrumb;
})();
exports.SemanticBreadcrumb = SemanticBreadcrumb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIudHMiXSwibmFtZXMiOlsiU2VtYW50aWNCcmVhZGNydW1iIiwiU2VtYW50aWNCcmVhZGNydW1iLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFPaEY7SUFBQUE7SUFzQkFDLENBQUNBO0lBREVEO1FBQUNBLFlBQUtBLENBQUNBLFFBQVFBLENBQUNBOztPQUFDQSxzQ0FBTUEsVUFBZ0JBO0lBckIxQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDL0NBLFFBQVFBLEVBQUVBLGVBQWVBO1NBQzFCQSxDQUFDQTtRQUVEQSxXQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSxxWUFZVEE7U0FDRkEsQ0FBQ0E7OzJCQUdEQTtJQUFEQSx5QkFBQ0E7QUFBREEsQ0FBQ0EsQUF0QkQsSUFzQkM7QUFGWSwwQkFBa0IscUJBRTlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgQnV0dG9uIGNvbXBvbmVudFxuICogXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL2JyZWFkY3J1bWIuaHRtbFxuICovXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiBcInNtLWJyZWFkY3J1bWJcIlxufSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYFxuICBcbjxkaXYgW25nU3dpdGNoXT1cImlcIiBjbGFzcz1cInVpIGJyZWFkY3J1bWJcIiAqbmdGb3I9XCIjc3RlYXAgb2Ygc3RlYXBzOyAjaSA9IGluZGV4XCI+XG4gICAgICA8dGVtcGxhdGUgbmdTd2l0Y2hEZWZhdWx0PiBcbiAgICAgICAgPGEgY2xhc3M9XCJzZWN0aW9uXCI+e3tzdGVhcH19PC9hPlxuICAgICAgICA8aSBjbGFzcz1cInJpZ2h0IGFycm93IGljb24gZGl2aWRlclwiPjwvaT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCJzdGVhcHMubGVuZ3RoIC0xXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aXZlIHNlY3Rpb25cIj57e3N0ZWFwfX08L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG48L2Rpdj5cbiAgXG4gIGAgIFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY0JyZWFkY3J1bWIge1xuICAgQElucHV0KFwic3RlYXBzXCIpIHN0ZWFwczogQXJyYXk8c3RyaW5nPjtcbn1cbiJdfQ==