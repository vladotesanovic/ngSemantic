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
        core_1.Input("icon"), 
        __metadata('design:type', String)
    ], SemanticItem.prototype, "icon", void 0);
    __decorate([
        core_1.Input("header"), 
        __metadata('design:type', String)
    ], SemanticItem.prototype, "header", void 0);
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
            template: "<i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n<img *ngIf=\"image\" class=\"ui avatar image\" src=\"{{image}}\">\n<div class=\"content\">\n  <div *ngIf=\"header\" class=\"header\">\n    {{header}}\n  </div>\n  <ng-content></ng-content>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticItem);
    return SemanticItem;
})();
exports.SemanticItem = SemanticItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwibmFtZXMiOlsiU2VtYW50aWNJdGVtIiwiU2VtYW50aWNJdGVtLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFPaEY7SUFBQUE7SUFtQkFDLENBQUNBO0lBSENEO1FBQUNBLFlBQUtBLENBQUNBLE1BQU1BLENBQUNBOztPQUFDQSw4QkFBSUEsVUFBU0E7SUFDNUJBO1FBQUNBLFlBQUtBLENBQUNBLFFBQVFBLENBQUNBOztPQUFDQSxnQ0FBTUEsVUFBU0E7SUFDaENBO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSwrQkFBS0EsVUFBU0E7SUFsQmhDQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxNQUFNQTtZQUMvQ0EsUUFBUUEsRUFBRUEsU0FBU0E7U0FDcEJBLENBQUNBO1FBQ0RBLFdBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQ1ZBLHNQQU9PQTtTQUNOQSxDQUFDQTs7cUJBS0RBO0lBQURBLG1CQUFDQTtBQUFEQSxDQUFDQSxBQW5CRCxJQW1CQztBQUpZLG9CQUFZLGVBSXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgSXRlbSB2aWV3XG4gKiBcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vdmlld3MvaXRlbS5odG1sXG4gKi9cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6IFwic20taXRlbVwiXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZTpcbmA8aSAqbmdJZj1cImljb25cIiBjbGFzcz1cInt7aWNvbn19IGljb25cIj48L2k+XG48aW1nICpuZ0lmPVwiaW1hZ2VcIiBjbGFzcz1cInVpIGF2YXRhciBpbWFnZVwiIHNyYz1cInt7aW1hZ2V9fVwiPlxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgPGRpdiAqbmdJZj1cImhlYWRlclwiIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAge3toZWFkZXJ9fVxuICA8L2Rpdj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY0l0ZW0ge1xuICBASW5wdXQoXCJpY29uXCIpIGljb246IHN0cmluZztcbiAgQElucHV0KFwiaGVhZGVyXCIpIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoXCJpbWFnZVwiKSBpbWFnZTogc3RyaW5nO1xufSJdfQ==