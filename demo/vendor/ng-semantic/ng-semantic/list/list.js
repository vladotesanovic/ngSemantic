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
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', Object)
    ], SemanticList.prototype, "class", void 0);
    __decorate([
        core_1.Input("items"), 
        __metadata('design:type', Object)
    ], SemanticList.prototype, "items", void 0);
    SemanticList = __decorate([
        core_1.Component({
            selector: "sm-list"
        }),
        core_1.View({
            template: "<div *ngFor=\"#item of items\" class=\"ui list {{class}}\">\n  <div class=\"item\">{{item}}</div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticList);
    return SemanticList;
})();
exports.SemanticList = SemanticList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOlsiU2VtYW50aWNMaXN0IiwiU2VtYW50aWNMaXN0LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFFdkQ7SUFBQUE7SUFZQUMsQ0FBQ0E7SUFGQ0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O09BQUNBLCtCQUFLQSxVQUFNQTtJQUMzQkE7UUFBQ0EsWUFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O09BQUNBLCtCQUFLQSxVQUFNQTtJQVg3QkE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLFNBQVNBO1NBQ3BCQSxDQUFDQTtRQUVEQSxXQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSwyR0FFTEE7U0FDTkEsQ0FBQ0E7O3FCQUlEQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0FBQ0EsQUFaRCxJQVlDO0FBSFksb0JBQVksZUFHeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic20tbGlzdFwiXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtc1wiIGNsYXNzPVwidWkgbGlzdCB7e2NsYXNzfX1cIj5cbiAgPGRpdiBjbGFzcz1cIml0ZW1cIj57e2l0ZW19fTwvZGl2PlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY0xpc3Qge1xuICBASW5wdXQoXCJjbGFzc1wiKSBjbGFzczogYW55O1xuICBASW5wdXQoXCJpdGVtc1wiKSBpdGVtczogYW55O1xufVxuIl19