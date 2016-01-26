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
    __decorate([
        core_1.Input("image"), 
        __metadata('design:type', String)
    ], SemanticItem.prototype, "image", void 0);
    SemanticItem = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-item"
        }),
        core_1.View({
            template: "<div class=\"{{class}}\">\n\t  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n    <img *ngIf=\"image\" class=\"ui avatar image\" src=\"{{image}}\">\n\t  <div class=\"content\">\n\t  \t<ng-content></ng-content>\n\t  </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticItem);
    return SemanticItem;
})();
exports.SemanticItem = SemanticItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwibmFtZXMiOlsiU2VtYW50aWNJdGVtIiwiU2VtYW50aWNJdGVtLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFFaEY7SUFBQUE7SUFrQkFDLENBQUNBO0lBSENEO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSwrQkFBS0EsVUFBU0E7SUFDOUJBO1FBQUNBLFlBQUtBLENBQUNBLE1BQU1BLENBQUNBOztPQUFDQSw4QkFBSUEsVUFBU0E7SUFDNUJBO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSwrQkFBS0EsVUFBU0E7SUFqQmhDQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxNQUFNQTtZQUMvQ0EsUUFBUUEsRUFBRUEsU0FBU0E7U0FDcEJBLENBQUNBO1FBRURBLFdBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLHdPQU1MQTtTQUNOQSxDQUFDQTs7cUJBS0RBO0lBQURBLG1CQUFDQTtBQUFEQSxDQUFDQSxBQWxCRCxJQWtCQztBQUpZLG9CQUFZLGVBSXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6IFwic20taXRlbVwiXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInt7Y2xhc3N9fVwiPlxuXHQgIDxpICpuZ0lmPVwiaWNvblwiIGNsYXNzPVwie3tpY29ufX0gaWNvblwiPjwvaT5cbiAgICA8aW1nICpuZ0lmPVwiaW1hZ2VcIiBjbGFzcz1cInVpIGF2YXRhciBpbWFnZVwiIHNyYz1cInt7aW1hZ2V9fVwiPlxuXHQgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cdCAgXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdCAgPC9kaXY+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljSXRlbSB7XG4gIEBJbnB1dChcImNsYXNzXCIpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dChcImljb25cIikgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoXCJpbWFnZVwiKSBpbWFnZTogc3RyaW5nO1xufVxuIl19