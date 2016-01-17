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
    var SemanticHeader;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SemanticHeader = (function () {
                function SemanticHeader() {
                    this.items = [];
                    this.items = [{
                            "title": "Home",
                            "link": "#/",
                            "icon": "home"
                        }, {
                            "title": "About Us",
                            "link": "#/"
                        }, {
                            "title": "Contact",
                            "link": "#/"
                        }];
                }
                SemanticHeader = __decorate([
                    core_1.Component({
                        properties: ["title", "logo", "class"],
                        selector: "sm-header"
                    }),
                    core_1.View({
                        template: "<div class=\"ui menu {{class}}\">\n    <a href=\"#/\" *ngIf=\"logo\" class=\"header item\">\n            <img class=\"logo\" alt=\"{{title}}\" src=\"{{logo}}\">\n        </a>\n        <a *ngFor=\"#menu of items\" href=\"{{menu.link}}\" class=\"item\">\n            <i *ngIf=\"menu.icon\" class=\"{{menu.icon}} icon\"></i> {{menu.title}}\n        </a>\n        <div class=\"right menu\">\n            <a class=\"item\" href=\"https://github.com/vladotesanovic/ngSemantic\" target=\"_blank\">\n                <i class=\"github icon\"></i> GitHub repo\n            </a>\n            <div class=\"item\">\n                <div class=\"ui icon input\">\n                    <input type=\"text\" placeholder=\"Search...\">\n                    <i class=\"search link icon\"></i>\n                </div>\n            </div>\n        </div>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SemanticHeader);
                return SemanticHeader;
            })();
            exports_1("SemanticHeader", SemanticHeader);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVhZGVyLnRzIl0sIm5hbWVzIjpbIlNlbWFudGljSGVhZGVyIiwiU2VtYW50aWNIZWFkZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQTRCSUE7b0JBRlFDLFVBQUtBLEdBQWtCQSxFQUFFQSxDQUFDQTtvQkFJOUJBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBOzRCQUNWQSxPQUFPQSxFQUFHQSxNQUFNQTs0QkFDaEJBLE1BQU1BLEVBQUdBLElBQUlBOzRCQUNiQSxNQUFNQSxFQUFHQSxNQUFNQTt5QkFDbEJBLEVBQUVBOzRCQUNDQSxPQUFPQSxFQUFHQSxVQUFVQTs0QkFDcEJBLE1BQU1BLEVBQUdBLElBQUlBO3lCQUNoQkEsRUFBRUE7NEJBQ0NBLE9BQU9BLEVBQUdBLFNBQVNBOzRCQUNuQkEsTUFBTUEsRUFBR0EsSUFBSUE7eUJBQ2hCQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBekNMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxVQUFVQSxFQUFFQSxDQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxFQUFFQSxPQUFPQSxDQUFDQTt3QkFDdENBLFFBQVFBLEVBQUVBLFdBQVdBO3FCQUN4QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNGQSxRQUFRQSxFQUFFQSwyMEJBa0JQQTtxQkFDTkEsQ0FBQ0E7O21DQWtCREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQUFDQSxBQTFDRCxJQTBDQztZQTFDRCwyQ0EwQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgTWVudSBjb21wb25lbnRcbiAqIFxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZW51Lmh0bWxcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaWNvbi5odG1sXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHByb3BlcnRpZXM6IFtcInRpdGxlXCIsIFwibG9nb1wiLCBcImNsYXNzXCJdLFxuICAgIHNlbGVjdG9yOiBcInNtLWhlYWRlclwiXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInVpIG1lbnUge3tjbGFzc319XCI+XG4gICAgPGEgaHJlZj1cIiMvXCIgKm5nSWY9XCJsb2dvXCIgY2xhc3M9XCJoZWFkZXIgaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImxvZ29cIiBhbHQ9XCJ7e3RpdGxlfX1cIiBzcmM9XCJ7e2xvZ299fVwiPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhICpuZ0Zvcj1cIiNtZW51IG9mIGl0ZW1zXCIgaHJlZj1cInt7bWVudS5saW5rfX1cIiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwibWVudS5pY29uXCIgY2xhc3M9XCJ7e21lbnUuaWNvbn19IGljb25cIj48L2k+IHt7bWVudS50aXRsZX19XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0IG1lbnVcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiaXRlbVwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpY1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2l0aHViIGljb25cIj48L2k+IEdpdEh1YiByZXBvXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBpY29uIGlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwic2VhcmNoIGxpbmsgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNIZWFkZXIge1xuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PE9iamVjdD4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbe1xuICAgICAgICAgICAgXCJ0aXRsZVwiIDogXCJIb21lXCIsXG4gICAgICAgICAgICBcImxpbmtcIiA6IFwiIy9cIixcbiAgICAgICAgICAgIFwiaWNvblwiIDogXCJob21lXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJ0aXRsZVwiIDogXCJBYm91dCBVc1wiLFxuICAgICAgICAgICAgXCJsaW5rXCIgOiBcIiMvXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJ0aXRsZVwiIDogXCJDb250YWN0XCIsXG4gICAgICAgICAgICBcImxpbmtcIiA6IFwiIy9cIlxuICAgICAgICB9XTtcbiAgICB9XG59XG4iXX0=