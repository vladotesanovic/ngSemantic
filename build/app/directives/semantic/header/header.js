System.register(["angular2/core", "../../../services/menu"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, menu_1;
    var SemanticHeader;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            }],
        execute: function() {
            SemanticHeader = (function () {
                function SemanticHeader(menu) {
                    var _this = this;
                    this.menu = menu;
                    this.items = [];
                    menu.getMenu().subscribe(function (response) {
                        _this.items = JSON.parse(response._body);
                    });
                }
                SemanticHeader = __decorate([
                    core_1.Component({
                        providers: [menu_1.MenuServices],
                        properties: ["title", "logo", "class"],
                        selector: "sm-header"
                    }),
                    core_1.View({
                        template: "<div class=\"ui menu {{class}}\">\n    <a href=\"#/\" *ngIf=\"logo\" class=\"header item\">\n            <img class=\"logo\" alt=\"{{title}}\" src=\"{{logo}}\">\n        </a>\n        <a *ngFor=\"#menu of items\" href=\"{{menu.link}}\" class=\"item\">\n            <i *ngIf=\"menu.icon\" class=\"{{menu.icon}} icon\"></i> {{menu.title}}\n        </a>\n        <div class=\"right menu\">\n            <a class=\"item\" href=\"https://github.com/vladotesanovic/ngSemantic\" target=\"_blank\">\n                <i class=\"github icon\"></i> GitHub repo\n            </a>\n            <div class=\"item\">\n                <div class=\"ui icon input\">\n                    <input type=\"text\" placeholder=\"Search...\">\n                    <i class=\"search link icon\"></i>\n                </div>\n            </div>\n        </div>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [menu_1.MenuServices])
                ], SemanticHeader);
                return SemanticHeader;
            })();
            exports_1("SemanticHeader", SemanticHeader);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9kaXJlY3RpdmVzL3NlbWFudGljL2hlYWRlci9oZWFkZXIudHMiXSwibmFtZXMiOlsiU2VtYW50aWNIZWFkZXIiLCJTZW1hbnRpY0hlYWRlci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBNkJJQSx3QkFBb0JBLElBQWtCQTtvQkE3QjFDQyxpQkFtQ0NBO29CQU51QkEsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBY0E7b0JBRjlCQSxVQUFLQSxHQUFrQkEsRUFBRUEsQ0FBQ0E7b0JBSTlCQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxRQUFhQTt3QkFDbkNBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUM1Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBO2dCQWxDTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsU0FBU0EsRUFBRUEsQ0FBQ0EsbUJBQVlBLENBQUNBO3dCQUN6QkEsVUFBVUEsRUFBRUEsQ0FBQ0EsT0FBT0EsRUFBRUEsTUFBTUEsRUFBRUEsT0FBT0EsQ0FBQ0E7d0JBQ3RDQSxRQUFRQSxFQUFFQSxXQUFXQTtxQkFDeEJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDRkEsUUFBUUEsRUFBRUEsMjBCQWtCUEE7cUJBQ05BLENBQUNBOzttQ0FVREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQUFDQSxBQW5DRCxJQW1DQztZQW5DRCwyQ0FtQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBNZW51U2VydmljZXMgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvbWVudVwiO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIE1lbnUgY29tcG9uZW50XG4gKiBcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVudS5odG1sXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2ljb24uaHRtbFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBwcm92aWRlcnM6IFtNZW51U2VydmljZXNdLFxuICAgIHByb3BlcnRpZXM6IFtcInRpdGxlXCIsIFwibG9nb1wiLCBcImNsYXNzXCJdLFxuICAgIHNlbGVjdG9yOiBcInNtLWhlYWRlclwiXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInVpIG1lbnUge3tjbGFzc319XCI+XG4gICAgPGEgaHJlZj1cIiMvXCIgKm5nSWY9XCJsb2dvXCIgY2xhc3M9XCJoZWFkZXIgaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImxvZ29cIiBhbHQ9XCJ7e3RpdGxlfX1cIiBzcmM9XCJ7e2xvZ299fVwiPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhICpuZ0Zvcj1cIiNtZW51IG9mIGl0ZW1zXCIgaHJlZj1cInt7bWVudS5saW5rfX1cIiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwibWVudS5pY29uXCIgY2xhc3M9XCJ7e21lbnUuaWNvbn19IGljb25cIj48L2k+IHt7bWVudS50aXRsZX19XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0IG1lbnVcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiaXRlbVwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpY1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2l0aHViIGljb25cIj48L2k+IEdpdEh1YiByZXBvXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBpY29uIGlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwic2VhcmNoIGxpbmsgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNIZWFkZXIge1xuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PE9iamVjdD4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVudTogTWVudVNlcnZpY2VzKSB7XG5cbiAgICAgICAgbWVudS5nZXRNZW51KCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShyZXNwb25zZS5fYm9keSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==