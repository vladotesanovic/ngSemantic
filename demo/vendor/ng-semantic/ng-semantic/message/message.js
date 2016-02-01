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
var SemanticMessage = (function () {
    function SemanticMessage() {
    }
    __decorate([
        core_1.Input("icon"), 
        __metadata('design:type', String)
    ], SemanticMessage.prototype, "icon", void 0);
    SemanticMessage = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-message"
        }),
        core_1.View({
            template: "<i *ngIf=\"icon\" class=\"icon {{icon}}\"></i>\n  <p><ng-content></ng-content></p>",
            styles: ["sm-message { display: block; }"],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticMessage);
    return SemanticMessage;
})();
exports.SemanticMessage = SemanticMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOlsiU2VtYW50aWNNZXNzYWdlIiwiU2VtYW50aWNNZXNzYWdlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBbUYsZUFBZSxDQUFDLENBQUE7QUFPbkc7SUFBQUE7SUFZQUMsQ0FBQ0E7SUFEQ0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7O09BQUNBLGlDQUFJQSxVQUFTQTtJQVg5QkE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDL0NBLFFBQVFBLEVBQUVBLFlBQVlBO1NBQ3ZCQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSxvRkFDdUJBO1lBQ2pDQSxNQUFNQSxFQUFFQSxDQUFDQSxnQ0FBZ0NBLENBQUNBO1lBQzFDQSxhQUFhQSxFQUFFQSx3QkFBaUJBLENBQUNBLElBQUlBO1NBQ3RDQSxDQUFDQTs7d0JBR0RBO0lBQURBLHNCQUFDQTtBQUFEQSxDQUFDQSxBQVpELElBWUM7QUFGWSx1QkFBZSxrQkFFM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgTWVzc2FnZSBjb2xsZWN0aW9uXG4gKiBcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVzc2FnZS5odG1sXG4gKi9cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6IFwic20tbWVzc2FnZVwiXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYDxpICpuZ0lmPVwiaWNvblwiIGNsYXNzPVwiaWNvbiB7e2ljb259fVwiPjwvaT5cbiAgPHA+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvcD5gLFxuICBzdHlsZXM6IFtgc20tbWVzc2FnZSB7IGRpc3BsYXk6IGJsb2NrOyB9YF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNNZXNzYWdlIHtcbiAgQElucHV0KFwiaWNvblwiKSBpY29uOiBzdHJpbmc7XG59XG4iXX0=