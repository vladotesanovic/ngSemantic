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
var SemanticLoader = (function () {
    function SemanticLoader() {
        this.complete = false;
    }
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticLoader.prototype, "class", void 0);
    __decorate([
        core_1.Input("text"), 
        __metadata('design:type', String)
    ], SemanticLoader.prototype, "text", void 0);
    __decorate([
        core_1.Input("complete"), 
        __metadata('design:type', Boolean)
    ], SemanticLoader.prototype, "complete", void 0);
    SemanticLoader = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-loader"
        }),
        core_1.View({
            template: "<div *ngIf=\"!complete\" class=\"ui active dimmer {{class}}\">\n    <div [ngClass]=\"{text: text}\" class=\"ui loader\">{{text}}</div>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticLoader);
    return SemanticLoader;
})();
exports.SemanticLoader = SemanticLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9hZGVyLnRzIl0sIm5hbWVzIjpbIlNlbWFudGljTG9hZGVyIiwiU2VtYW50aWNMb2FkZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFnRSxlQUFlLENBQUMsQ0FBQTtBQU9oRjtJQUFBQTtRQWFxQkMsYUFBUUEsR0FBWUEsS0FBS0EsQ0FBQ0E7SUFDL0NBLENBQUNBO0lBSENEO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSxpQ0FBS0EsVUFBU0E7SUFDOUJBO1FBQUNBLFlBQUtBLENBQUNBLE1BQU1BLENBQUNBOztPQUFDQSxnQ0FBSUEsVUFBU0E7SUFDNUJBO1FBQUNBLFlBQUtBLENBQUNBLFVBQVVBLENBQUNBOztPQUFDQSxvQ0FBUUEsVUFBa0JBO0lBYi9DQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxNQUFNQTtZQUMvQ0EsUUFBUUEsRUFBRUEsV0FBV0E7U0FDdEJBLENBQUNBO1FBRURBLFdBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLGtKQUVIQTtTQUNSQSxDQUFDQTs7dUJBS0RBO0lBQURBLHFCQUFDQTtBQUFEQSxDQUFDQSxBQWRELElBY0M7QUFKWSxzQkFBYyxpQkFJMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBMb2FkZXIgZWxlbWVudFxuICogXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2xvYWRlci5odG1sXG4gKi9cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6IFwic20tbG9hZGVyXCJcbn0pXG5cbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiIWNvbXBsZXRlXCIgY2xhc3M9XCJ1aSBhY3RpdmUgZGltbWVyIHt7Y2xhc3N9fVwiPlxuICAgIDxkaXYgW25nQ2xhc3NdPVwie3RleHQ6IHRleHR9XCIgY2xhc3M9XCJ1aSBsb2FkZXJcIj57e3RleHR9fTwvZGl2PlxuICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljTG9hZGVyIHtcbiAgQElucHV0KFwiY2xhc3NcIikgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KFwidGV4dFwiKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dChcImNvbXBsZXRlXCIpIGNvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=