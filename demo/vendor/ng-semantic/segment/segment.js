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
    var SemanticSegment;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SemanticSegment = (function () {
                function SemanticSegment() {
                }
                SemanticSegment = __decorate([
                    core_1.Component({
                        properties: ["class"],
                        selector: "sm-segment"
                    }),
                    core_1.View({
                        template: "<div class=\"ui segment {{class}}\">\n  <p><ng-content></ng-content></p>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SemanticSegment);
                return SemanticSegment;
            })();
            exports_1("SemanticSegment", SemanticSegment);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlZ21lbnQudHMiXSwibmFtZXMiOlsiU2VtYW50aWNTZWdtZW50IiwiU2VtYW50aWNTZWdtZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFBQUE7Z0JBUzhCQyxDQUFDQTtnQkFUL0JEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFVBQVVBLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBO3dCQUN4QkEsUUFBUUEsRUFBR0EsWUFBWUE7cUJBQ3ZCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0ZBLFFBQVFBLEVBQUVBLGtGQUVQQTtxQkFDTkEsQ0FBQ0E7O29DQUM2QkE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQUFDQSxBQVQvQixJQVMrQjtZQVQvQiw2Q0FTK0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgU2VnbWVudCBjb21wb25lbnRcbiAqIFxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9zZWdtZW50Lmh0bWxcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvcGVydGllczogW1wiY2xhc3NcIl0sXG5cdHNlbGVjdG9yIDogXCJzbS1zZWdtZW50XCJcbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWkgc2VnbWVudCB7e2NsYXNzfX1cIj5cbiAgPHA+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvcD5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNTZWdtZW50IHt9XG4iXX0=