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
var SemanticList = (function () {
    function SemanticList() {
    }
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticList.prototype, "class", void 0);
    SemanticList = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-list"
        }),
        core_1.View({
            template: "<div class=\"ui list {{class}}\">\n  <ng-content></ng-content>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticList);
    return SemanticList;
})();
exports.SemanticList = SemanticList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOlsiU2VtYW50aWNMaXN0IiwiU2VtYW50aWNMaXN0LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFFaEY7SUFBQUE7SUFZQUMsQ0FBQ0E7SUFEQ0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O09BQUNBLCtCQUFLQSxVQUFTQTtJQVhoQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDL0NBLFFBQVFBLEVBQUVBLFNBQVNBO1NBQ3BCQSxDQUFDQTtRQUVEQSxXQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSx3RUFFTEE7U0FDTkEsQ0FBQ0E7O3FCQUdEQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0FBQ0EsQUFaRCxJQVlDO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogXCJzbS1saXN0XCJcbn0pXG5cbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWkgbGlzdCB7e2NsYXNzfX1cIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY0xpc3Qge1xuICBASW5wdXQoXCJjbGFzc1wiKSBjbGFzczogc3RyaW5nO1xufVxuIl19