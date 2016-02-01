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
var SemanticMenu = (function () {
    function SemanticMenu() {
    }
    __decorate([
        core_1.Input("logo"), 
        __metadata('design:type', String)
    ], SemanticMenu.prototype, "logo", void 0);
    SemanticMenu = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-menu"
        }),
        core_1.View({
            template: "\n<a href=\"#/\" *ngIf=\"logo\" class=\"header item\">\n    <img class=\"logo\" alt=\"{{title}}\" src=\"{{logo}}\">\n</a>\n\n<ng-content></ng-content>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticMenu);
    return SemanticMenu;
})();
exports.SemanticMenu = SemanticMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOlsiU2VtYW50aWNNZW51IiwiU2VtYW50aWNNZW51LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFRaEY7SUFBQUE7SUFlQUMsQ0FBQ0E7SUFER0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7O09BQUNBLDhCQUFJQSxVQUFTQTtJQWRoQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDL0NBLFFBQVFBLEVBQUVBLFNBQVNBO1NBQ3RCQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSwwSkFNYkE7U0FDQUEsQ0FBQ0E7O3FCQUdEQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0FBQ0EsQUFmRCxJQWVDO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBNZW51IGNvbXBvbmVudFxuICogXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL21lbnUuaHRtbFxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9pY29uLmh0bWxcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc2VsZWN0b3I6IFwic20tbWVudVwiXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiBgXG48YSBocmVmPVwiIy9cIiAqbmdJZj1cImxvZ29cIiBjbGFzcz1cImhlYWRlciBpdGVtXCI+XG4gICAgPGltZyBjbGFzcz1cImxvZ29cIiBhbHQ9XCJ7e3RpdGxlfX1cIiBzcmM9XCJ7e2xvZ299fVwiPlxuPC9hPlxuXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljTWVudSB7XG4gICAgQElucHV0KFwibG9nb1wiKSBsb2dvOiBzdHJpbmc7XG59XG4iXX0=