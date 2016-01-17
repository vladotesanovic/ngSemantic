System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SemanticList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SemanticList = (function () {
                function SemanticList() {
                }
                SemanticList = __decorate([
                    core_1.Component({
                        properties: ["items", "class"],
                        selector: "sm-list"
                    }),
                    core_1.View({
                        template: "<div *ngFor=\"#item of items\" class=\"ui list {{class}}\">\n  <div class=\"item\">{{item}}</div>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SemanticList);
                return SemanticList;
            })();
            exports_1("SemanticList", SemanticList);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOlsiU2VtYW50aWNMaXN0IiwiU2VtYW50aWNMaXN0LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBQUE7Z0JBVTJCQyxDQUFDQTtnQkFWNUJEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFVBQVVBLEVBQUVBLENBQUNBLE9BQU9BLEVBQUVBLE9BQU9BLENBQUNBO3dCQUM5QkEsUUFBUUEsRUFBRUEsU0FBU0E7cUJBQ3BCQSxDQUFDQTtvQkFFREEsV0FBSUEsQ0FBQ0E7d0JBQ0pBLFFBQVFBLEVBQUVBLDJHQUVMQTtxQkFDTkEsQ0FBQ0E7O2lDQUMwQkE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQUFDQSxBQVY1QixJQVU0QjtZQVY1Qix1Q0FVNEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiBbXCJpdGVtc1wiLCBcImNsYXNzXCJdLFxuICBzZWxlY3RvcjogXCJzbS1saXN0XCJcbn0pXG5cbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0Zvcj1cIiNpdGVtIG9mIGl0ZW1zXCIgY2xhc3M9XCJ1aSBsaXN0IHt7Y2xhc3N9fVwiPlxuICA8ZGl2IGNsYXNzPVwiaXRlbVwiPnt7aXRlbX19PC9kaXY+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljTGlzdCB7fVxuIl19