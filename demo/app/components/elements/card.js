System.register(["@angular/core", "ng-semantic", "../../prismjs/prismjs"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng_semantic_1, prismjs_1;
    var CardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
            }],
        execute: function() {
            CardComponent = (function () {
                function CardComponent() {
                }
                CardComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        selector: "card",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Card</h1>\n        <p>Semantic UI Card view <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/views/card.html\" target=\"_blank\">Semantic UI Card</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-card class=\"ui card\" title=\"Kristy\" image=\"http://semantic-ui.com/images/avatar2/large/kristy.png\" subtitle=\"Joined in 2013\">\n        <content>\n            Kristy is an art director living in New York.\n        </content>\n        <extra>\n            <a>\n                <i class=\"user icon\"></i>\n                22 Friends\n            </a>\n        </extra>\n    </sm-card>\n    \n    <h4 class=\"ui header\">Code</h4>\n<codeblock markup>\n&lt;sm-card class=\"ui card\" title=\"Kristy\" image=\"http://semantic-ui.com/images/avatar2/large/kristy.png\" subtitle=\"Joined in 2013\">\n    <content>...</content>\n    <extra>...</extra>\n&lt;/sm-card>\n</codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CardComponent);
                return CardComponent;
            }());
            exports_1("CardComponent", CardComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3Q0E7Z0JBQUE7Z0JBQTRCLENBQUM7Z0JBcEM3QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGlDQUFtQixFQUFFLGlDQUFtQixFQUFRLDRCQUFrQixFQUFRLDBCQUFnQixDQUFDO3dCQUN4RyxRQUFRLEVBQUcsTUFBTTt3QkFDakIsUUFBUSxFQUFHLDZpQ0E4QmQ7cUJBQ0EsQ0FBQzs7aUNBQUE7Z0JBRTBCLG9CQUFDO1lBQUQsQ0FBQyxBQUE3QixJQUE2QjtZQUE3Qix5Q0FBNkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCAsIFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xuaW1wb3J0IHsgQ29kZWJsb2NrQ29tcG9uZW50LCBQcmlzbUpzRGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL3ByaXNtanMvcHJpc21qc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUywgPFR5cGU+Q29kZWJsb2NrQ29tcG9uZW50LCA8VHlwZT5QcmlzbUpzRGlyZWN0aXZlXSxcbiAgICBzZWxlY3RvciA6IFwiY2FyZFwiLFxuICAgIHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkNhcmQ8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBDYXJkIHZpZXcgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vdmlld3MvY2FyZC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgQ2FyZDwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxzbS1jYXJkIGNsYXNzPVwidWkgY2FyZFwiIHRpdGxlPVwiS3Jpc3R5XCIgaW1hZ2U9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2ltYWdlcy9hdmF0YXIyL2xhcmdlL2tyaXN0eS5wbmdcIiBzdWJ0aXRsZT1cIkpvaW5lZCBpbiAyMDEzXCI+XG4gICAgICAgIDxjb250ZW50PlxuICAgICAgICAgICAgS3Jpc3R5IGlzIGFuIGFydCBkaXJlY3RvciBsaXZpbmcgaW4gTmV3IFlvcmsuXG4gICAgICAgIDwvY29udGVudD5cbiAgICAgICAgPGV4dHJhPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ1c2VyIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgMjIgRnJpZW5kc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2V4dHJhPlxuICAgIDwvc20tY2FyZD5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbjxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O3NtLWNhcmQgY2xhc3M9XCJ1aSBjYXJkXCIgdGl0bGU9XCJLcmlzdHlcIiBpbWFnZT1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vaW1hZ2VzL2F2YXRhcjIvbGFyZ2Uva3Jpc3R5LnBuZ1wiIHN1YnRpdGxlPVwiSm9pbmVkIGluIDIwMTNcIj5cbiAgICA8Y29udGVudD4uLi48L2NvbnRlbnQ+XG4gICAgPGV4dHJhPi4uLjwvZXh0cmE+XG4mbHQ7L3NtLWNhcmQ+XG48L2NvZGVibG9jaz5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge31cbiJdfQ==