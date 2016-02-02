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
var SemanticCard = (function () {
    function SemanticCard() {
    }
    __decorate([
        core_1.Input("image"), 
        __metadata('design:type', String)
    ], SemanticCard.prototype, "image", void 0);
    __decorate([
        core_1.Input("title"), 
        __metadata('design:type', String)
    ], SemanticCard.prototype, "title", void 0);
    __decorate([
        core_1.Input("subtitle"), 
        __metadata('design:type', String)
    ], SemanticCard.prototype, "subtitle", void 0);
    SemanticCard = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-card"
        }),
        core_1.View({
            template: "<div class=\"image\">\n    <img src=\"{{image}}\">\n  </div>\n  <div class=\"content\">\n    <a class=\"header\">{{title}}</a>\n    <div class=\"meta\">\n      <span class=\"date\">{{subtitle}}</span>\n    </div>\n    <div class=\"description\">\n      <ng-content select=\"conntent\"></ng-content>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <ng-content select=\"extra\"></ng-content>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticCard);
    return SemanticCard;
})();
exports.SemanticCard = SemanticCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmQudHMiXSwibmFtZXMiOlsiU2VtYW50aWNDYXJkIiwiU2VtYW50aWNDYXJkLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFPaEY7SUFBQUE7SUF5QkFDLENBQUNBO0lBSENEO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSwrQkFBS0EsVUFBU0E7SUFDOUJBO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSwrQkFBS0EsVUFBU0E7SUFDOUJBO1FBQUNBLFlBQUtBLENBQUNBLFVBQVVBLENBQUNBOztPQUFDQSxrQ0FBUUEsVUFBU0E7SUF4QnRDQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxNQUFNQTtZQUMvQ0EsUUFBUUEsRUFBRUEsU0FBU0E7U0FDcEJBLENBQUNBO1FBQ0RBLFdBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLDZaQWNIQTtTQUNSQSxDQUFDQTs7cUJBS0RBO0lBQURBLG1CQUFDQTtBQUFEQSxDQUFDQSxBQXpCRCxJQXlCQztBQUpZLG9CQUFZLGVBSXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgQ2FyZCBjb2xsZWN0aW9uXG4gKiBcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vdmlld3MvY2FyZC5odG1sXG4gKi9cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6IFwic20tY2FyZFwiXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuICAgIDxpbWcgc3JjPVwie3tpbWFnZX19XCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgIDxhIGNsYXNzPVwiaGVhZGVyXCI+e3t0aXRsZX19PC9hPlxuICAgIDxkaXYgY2xhc3M9XCJtZXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImRhdGVcIj57e3N1YnRpdGxlfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjb25udGVudFwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleHRyYSBjb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZXh0cmFcIj48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNDYXJkIHtcbiAgQElucHV0KFwiaW1hZ2VcIikgaW1hZ2U6IHN0cmluZztcbiAgQElucHV0KFwidGl0bGVcIikgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KFwic3VidGl0bGVcIikgc3VidGl0bGU6IHN0cmluZztcbn1cbiJdfQ==