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
        __metadata('design:type', String)
    ], SemanticButton.prototype, "class", void 0);
    __decorate([
        core_1.Input("icon"), 
        __metadata('design:type', String)
    ], SemanticButton.prototype, "icon", void 0);
    SemanticButton = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnV0dG9uLnRzIl0sIm5hbWVzIjpbIlNlbWFudGljQnV0dG9uIiwiU2VtYW50aWNCdXR0b24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFnRSxlQUFlLENBQUMsQ0FBQTtBQUVoRjtJQUFBQTtJQWNBQyxDQUFDQTtJQUZDRDtRQUFDQSxZQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTs7T0FBQ0EsaUNBQUtBLFVBQVNBO0lBQzlCQTtRQUFDQSxZQUFLQSxDQUFDQSxNQUFNQSxDQUFDQTs7T0FBQ0EsZ0NBQUlBLFVBQVNBO0lBYjlCQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxNQUFNQTtZQUMvQ0EsUUFBUUEsRUFBRUEsV0FBV0E7U0FDdEJBLENBQUNBO1FBRURBLFdBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLCtKQUdGQTtTQUNUQSxDQUFDQTs7dUJBSURBO0lBQURBLHFCQUFDQTtBQUFEQSxDQUFDQSxBQWRELElBY0M7QUFIWSxzQkFBYyxpQkFHMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogXCJzbS1idXR0b25cIlxufSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYDxidXR0b24gW25nQ2xhc3NdPVwie2ljb246IGljb259XCIgY2xhc3M9XCJ1aSB7e2NsYXNzfX0gYnV0dG9uXCI+XG4gIDxpICpuZ0lmPVwiaWNvblwiIGNsYXNzPVwie3tpY29ufX0gaWNvblwiPjwvaT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2J1dHRvbj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljQnV0dG9uIHtcbiAgQElucHV0KFwiY2xhc3NcIikgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KFwiaWNvblwiKSBpY29uOiBzdHJpbmc7XG59XG4iXX0=