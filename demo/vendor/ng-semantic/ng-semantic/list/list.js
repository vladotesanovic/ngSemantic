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
    SemanticList = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-list"
        }),
        core_1.View({
            template: "<ng-content></ng-content>",
            styles: ["sm-list { display: block; }"],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticList);
    return SemanticList;
})();
exports.SemanticList = SemanticList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOlsiU2VtYW50aWNMaXN0IiwiU2VtYW50aWNMaXN0LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBbUYsZUFBZSxDQUFDLENBQUE7QUFPbkc7SUFBQUE7SUFTMkJDLENBQUNBO0lBVDVCRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxNQUFNQTtZQUMvQ0EsUUFBUUEsRUFBRUEsU0FBU0E7U0FDcEJBLENBQUNBO1FBQ0RBLFdBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLDJCQUEyQkE7WUFDckNBLE1BQU1BLEVBQUVBLENBQUNBLDZCQUE2QkEsQ0FBQ0E7WUFDdkNBLGFBQWFBLEVBQUVBLHdCQUFpQkEsQ0FBQ0EsSUFBSUE7U0FDdENBLENBQUNBOztxQkFDMEJBO0lBQURBLG1CQUFDQTtBQUFEQSxDQUFDQSxBQVQ1QixJQVM0QjtBQUFmLG9CQUFZLGVBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgTGlzdCBjb2xsZWN0aW9uXG4gKiBcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvbGlzdC5odG1sXG4gKi9cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6IFwic20tbGlzdFwiXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZXM6IFtgc20tbGlzdCB7IGRpc3BsYXk6IGJsb2NrOyB9YF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNMaXN0IHt9XG4iXX0=