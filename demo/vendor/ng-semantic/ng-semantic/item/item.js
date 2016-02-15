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
            selector: "a[sm-item], sm-item"
        }),
        core_1.View({
            template: "<i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n<img *ngIf=\"image\" class=\"ui avatar image\" src=\"{{image}}\">\n<div class=\"content\">\n  <div *ngIf=\"header\" class=\"header\">\n    {{header}}\n  </div>\n  <ng-content></ng-content>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticItem);
    return SemanticItem;
})();
exports.SemanticItem = SemanticItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwibmFtZXMiOlsiU2VtYW50aWNJdGVtIiwiU2VtYW50aWNJdGVtLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFPaEY7SUFBQUE7SUFtQkFDLENBQUNBO0lBSENEO1FBQUNBLFlBQUtBLENBQUNBLE1BQU1BLENBQUNBOztPQUFDQSw4QkFBSUEsVUFBU0E7SUFDNUJBO1FBQUNBLFlBQUtBLENBQUNBLFFBQVFBLENBQUNBOztPQUFDQSxnQ0FBTUEsVUFBU0E7SUFDaENBO1FBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOztPQUFDQSwrQkFBS0EsVUFBU0E7SUFsQmhDQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxNQUFNQTtZQUMvQ0EsUUFBUUEsRUFBRUEscUJBQXFCQTtTQUNoQ0EsQ0FBQ0E7UUFDREEsV0FBSUEsQ0FBQ0E7WUFDSkEsUUFBUUEsRUFDVkEsc1BBT09BO1NBQ05BLENBQUNBOztxQkFLREE7SUFBREEsbUJBQUNBO0FBQURBLENBQUNBLEFBbkJELElBbUJDO0FBSlksb0JBQVksZUFJeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJdGVtIHZpZXdcbiAqIFxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS92aWV3cy9pdGVtLmh0bWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogXCJhW3NtLWl0ZW1dLCBzbS1pdGVtXCJcbn0pXG5AVmlldyh7XG4gIHRlbXBsYXRlOlxuYDxpICpuZ0lmPVwiaWNvblwiIGNsYXNzPVwie3tpY29ufX0gaWNvblwiPjwvaT5cbjxpbWcgKm5nSWY9XCJpbWFnZVwiIGNsYXNzPVwidWkgYXZhdGFyIGltYWdlXCIgc3JjPVwie3tpbWFnZX19XCI+XG48ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICA8ZGl2ICpuZ0lmPVwiaGVhZGVyXCIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICB7e2hlYWRlcn19XG4gIDwvZGl2PlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljSXRlbSB7XG4gIEBJbnB1dChcImljb25cIikgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoXCJoZWFkZXJcIikgaGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dChcImltYWdlXCIpIGltYWdlOiBzdHJpbmc7XG59Il19