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
var SemanticHeader = (function () {
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
exports.SemanticHeader = SemanticHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVhZGVyLnRzIl0sIm5hbWVzIjpbIlNlbWFudGljSGVhZGVyIiwiU2VtYW50aWNIZWFkZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQVFoRDtJQTRCSUE7UUFGUUMsVUFBS0EsR0FBa0JBLEVBQUVBLENBQUNBO1FBSTlCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQTtnQkFDVkEsT0FBT0EsRUFBR0EsTUFBTUE7Z0JBQ2hCQSxNQUFNQSxFQUFHQSxJQUFJQTtnQkFDYkEsTUFBTUEsRUFBR0EsTUFBTUE7YUFDbEJBLEVBQUVBO2dCQUNDQSxPQUFPQSxFQUFHQSxVQUFVQTtnQkFDcEJBLE1BQU1BLEVBQUdBLElBQUlBO2FBQ2hCQSxFQUFFQTtnQkFDQ0EsT0FBT0EsRUFBR0EsU0FBU0E7Z0JBQ25CQSxNQUFNQSxFQUFHQSxJQUFJQTthQUNoQkEsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUF6Q0xEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxVQUFVQSxFQUFFQSxDQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxFQUFFQSxPQUFPQSxDQUFDQTtZQUN0Q0EsUUFBUUEsRUFBRUEsV0FBV0E7U0FDeEJBLENBQUNBO1FBQ0RBLFdBQUlBLENBQUNBO1lBQ0ZBLFFBQVFBLEVBQUVBLDIwQkFrQlBBO1NBQ05BLENBQUNBOzt1QkFrQkRBO0lBQURBLHFCQUFDQTtBQUFEQSxDQUFDQSxBQTFDRCxJQTBDQztBQWpCWSxzQkFBYyxpQkFpQjFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIE1lbnUgY29tcG9uZW50XG4gKiBcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVudS5odG1sXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2ljb24uaHRtbFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBwcm9wZXJ0aWVzOiBbXCJ0aXRsZVwiLCBcImxvZ29cIiwgXCJjbGFzc1wiXSxcbiAgICBzZWxlY3RvcjogXCJzbS1oZWFkZXJcIlxufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1aSBtZW51IHt7Y2xhc3N9fVwiPlxuICAgIDxhIGhyZWY9XCIjL1wiICpuZ0lmPVwibG9nb1wiIGNsYXNzPVwiaGVhZGVyIGl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsb2dvXCIgYWx0PVwie3t0aXRsZX19XCIgc3JjPVwie3tsb2dvfX1cIj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSAqbmdGb3I9XCIjbWVudSBvZiBpdGVtc1wiIGhyZWY9XCJ7e21lbnUubGlua319XCIgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIm1lbnUuaWNvblwiIGNsYXNzPVwie3ttZW51Lmljb259fSBpY29uXCI+PC9pPiB7e21lbnUudGl0bGV9fVxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodCBtZW51XCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdpdGh1YiBpY29uXCI+PC9pPiBHaXRIdWIgcmVwb1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgaWNvbiBpbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInNlYXJjaCBsaW5rIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljSGVhZGVyIHtcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxPYmplY3Q+ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICB0aGlzLml0ZW1zID0gW3tcbiAgICAgICAgICAgIFwidGl0bGVcIiA6IFwiSG9tZVwiLFxuICAgICAgICAgICAgXCJsaW5rXCIgOiBcIiMvXCIsXG4gICAgICAgICAgICBcImljb25cIiA6IFwiaG9tZVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwidGl0bGVcIiA6IFwiQWJvdXQgVXNcIixcbiAgICAgICAgICAgIFwibGlua1wiIDogXCIjL1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwidGl0bGVcIiA6IFwiQ29udGFjdFwiLFxuICAgICAgICAgICAgXCJsaW5rXCIgOiBcIiMvXCJcbiAgICAgICAgfV07XG4gICAgfVxufVxuIl19