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
        core_1.Input("date"), 
        __metadata('design:type', String)
    ], SemanticCard.prototype, "date", void 0);
    SemanticCard = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-card"
        }),
        core_1.View({
            template: "<div class=\"ui card\">\n  <div class=\"image\">\n    <img src=\"{{image}}\">\n  </div>\n  <div class=\"content\">\n    <a class=\"header\">{{title}}</a>\n    <div class=\"meta\">\n      <span class=\"date\">{{date}}</span>\n    </div>\n    <div class=\"description\">\n      <ng-content select=\"[text]\"></ng-content>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <ng-content select=\"[extra]\"></ng-content>\n  </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticCard);
    return SemanticCard;
})();
exports.SemanticCard = SemanticCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmQudHMiXSwibmFtZXMiOlsiU2VtYW50aWNDYXJkIiwiU2VtYW50aWNDYXJkLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFFaEY7SUFBQUE7SUE0QkFDLENBQUNBO0lBSENEO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSwrQkFBS0EsVUFBU0E7SUFDOUJBO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSwrQkFBS0EsVUFBU0E7SUFDOUJBO1FBQUNBLFlBQUtBLENBQUNBLE1BQU1BLENBQUNBOztPQUFDQSw4QkFBSUEsVUFBU0E7SUEzQjlCQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxNQUFNQTtZQUMvQ0EsUUFBUUEsRUFBRUEsU0FBU0E7U0FDcEJBLENBQUNBO1FBRURBLFdBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLDRiQWdCTEE7U0FDTkEsQ0FBQ0E7O3FCQUtEQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0FBQ0EsQUE1QkQsSUE0QkM7QUFKWSxvQkFBWSxlQUl4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiBcInNtLWNhcmRcIlxufSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1aSBjYXJkXCI+XG4gIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuICAgIDxpbWcgc3JjPVwie3tpbWFnZX19XCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgIDxhIGNsYXNzPVwiaGVhZGVyXCI+e3t0aXRsZX19PC9hPlxuICAgIDxkaXYgY2xhc3M9XCJtZXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImRhdGVcIj57e2RhdGV9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0ZXh0XVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleHRyYSBjb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2V4dHJhXVwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljQ2FyZCB7XG4gIEBJbnB1dChcImltYWdlXCIpIGltYWdlOiBzdHJpbmc7XG4gIEBJbnB1dChcInRpdGxlXCIpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dChcImRhdGVcIikgZGF0ZTogc3RyaW5nO1xufVxuIl19