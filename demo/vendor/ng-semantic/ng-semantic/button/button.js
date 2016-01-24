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
var SemanticButton = (function () {
    function SemanticButton() {
    }
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', Object)
    ], SemanticButton.prototype, "class", void 0);
    __decorate([
        core_1.Input("icon"), 
        __metadata('design:type', Object)
    ], SemanticButton.prototype, "icon", void 0);
    SemanticButton = __decorate([
        core_1.Component({
            selector: "sm-button"
        }),
        core_1.View({
            template: "<button [ngClass]=\"{icon: icon}\" class=\"ui {{class}} button\">\n  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n    <ng-content></ng-content>\n</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticButton);
    return SemanticButton;
})();
exports.SemanticButton = SemanticButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnV0dG9uLnRzIl0sIm5hbWVzIjpbIlNlbWFudGljQnV0dG9uIiwiU2VtYW50aWNCdXR0b24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUV2RDtJQUFBQTtJQWFBQyxDQUFDQTtJQUZDRDtRQUFDQSxZQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTs7T0FBQ0EsaUNBQUtBLFVBQU1BO0lBQzNCQTtRQUFDQSxZQUFLQSxDQUFDQSxNQUFNQSxDQUFDQTs7T0FBQ0EsZ0NBQUlBLFVBQU1BO0lBWjNCQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsV0FBV0E7U0FDdEJBLENBQUNBO1FBRURBLFdBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLCtKQUdGQTtTQUNUQSxDQUFDQTs7dUJBSURBO0lBQURBLHFCQUFDQTtBQUFEQSxDQUFDQSxBQWJELElBYUM7QUFIWSxzQkFBYyxpQkFHMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic20tYnV0dG9uXCJcbn0pXG5cbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIFtuZ0NsYXNzXT1cIntpY29uOiBpY29ufVwiIGNsYXNzPVwidWkge3tjbGFzc319IGJ1dHRvblwiPlxuICA8aSAqbmdJZj1cImljb25cIiBjbGFzcz1cInt7aWNvbn19IGljb25cIj48L2k+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9idXR0b24+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY0J1dHRvbiB7XG4gIEBJbnB1dChcImNsYXNzXCIpIGNsYXNzOiBhbnk7XG4gIEBJbnB1dChcImljb25cIikgaWNvbjogYW55O1xufVxuIl19