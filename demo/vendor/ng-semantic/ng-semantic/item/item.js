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
var SemanticItem = (function () {
    function SemanticItem() {
    }
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticItem.prototype, "class", void 0);
    __decorate([
        core_1.Input("icon"), 
        __metadata('design:type', String)
    ], SemanticItem.prototype, "icon", void 0);
    SemanticItem = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-item"
        }),
        core_1.View({
            template: "<div class=\"{{class}}\">\n\t  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n\t  <div class=\"content\">\n\t  \t<ng-content></ng-content>\n\t  </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticItem);
    return SemanticItem;
})();
exports.SemanticItem = SemanticItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwibmFtZXMiOlsiU2VtYW50aWNJdGVtIiwiU2VtYW50aWNJdGVtLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFFaEY7SUFBQUE7SUFnQkFDLENBQUNBO0lBRkNEO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSwrQkFBS0EsVUFBU0E7SUFDOUJBO1FBQUNBLFlBQUtBLENBQUNBLE1BQU1BLENBQUNBOztPQUFDQSw4QkFBSUEsVUFBU0E7SUFmOUJBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxlQUFlQSxFQUFFQSw4QkFBdUJBLENBQUNBLE1BQU1BO1lBQy9DQSxRQUFRQSxFQUFFQSxTQUFTQTtTQUNwQkEsQ0FBQ0E7UUFFREEsV0FBSUEsQ0FBQ0E7WUFDSkEsUUFBUUEsRUFBRUEsaUtBS0xBO1NBQ05BLENBQUNBOztxQkFJREE7SUFBREEsbUJBQUNBO0FBQURBLENBQUNBLEFBaEJELElBZ0JDO0FBSFksb0JBQVksZUFHeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogXCJzbS1pdGVtXCJcbn0pXG5cbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwie3tjbGFzc319XCI+XG5cdCAgPGkgKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJ7e2ljb259fSBpY29uXCI+PC9pPlxuXHQgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cdCAgXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdCAgPC9kaXY+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljSXRlbSB7XG4gIEBJbnB1dChcImNsYXNzXCIpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dChcImljb25cIikgaWNvbjogc3RyaW5nO1xufVxuIl19