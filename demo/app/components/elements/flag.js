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
    var FlagComponent;
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
            FlagComponent = (function () {
                function FlagComponent() {
                }
                FlagComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        selector: "sm-page-flag",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Flag</h1>\n        <p>Semantic UI flags: <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/elements/flag.html\" target=\"_blank\">Semantic UI Flag</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>A flag is is used to represent a political state</p>\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-flag flag=\"serbia\"></sm-flag>\n    <sm-flag flag=\"bosnia\"></sm-flag>\n    <sm-flag flag=\"argentina\"></sm-flag>\n    \n    <h4 class=\"ui header\">Code</h4>\n    <codeblock prismjs=\"html\">\n&lt;sm-flag flag=\"serbia\">&lt;/sm-flag>\n&lt;sm-flag flag=\"bosnia\">&lt;/sm-flag>\n&lt;sm-flag flag=\"argentina\">&lt;/sm-flag>\n</codeblock>\n      \n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlagComponent);
                return FlagComponent;
            }());
            exports_1("FlagComponent", FlagComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQ0E7Z0JBQUE7Z0JBQTRCLENBQUM7Z0JBN0I3QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGlDQUFtQixFQUFFLGlDQUFtQixFQUFRLDRCQUFrQixFQUFRLDBCQUFnQixDQUFDO3dCQUN4RyxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLGd5QkF1QmI7cUJBQ0EsQ0FBQzs7aUNBQUE7Z0JBRTBCLG9CQUFDO1lBQUQsQ0FBQyxBQUE3QixJQUE2QjtZQUE3Qix5Q0FBNkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCAsIFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xuaW1wb3J0IHsgQ29kZWJsb2NrQ29tcG9uZW50LCBQcmlzbUpzRGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL3ByaXNtanMvcHJpc21qc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUywgPFR5cGU+Q29kZWJsb2NrQ29tcG9uZW50LCA8VHlwZT5QcmlzbUpzRGlyZWN0aXZlXSxcbiAgICBzZWxlY3RvcjogXCJzbS1wYWdlLWZsYWdcIixcbiAgICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkZsYWc8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBmbGFnczogPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9mbGFnLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBGbGFnPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPHA+QSBmbGFnIGlzIGlzIHVzZWQgdG8gcmVwcmVzZW50IGEgcG9saXRpY2FsIHN0YXRlPC9wPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxzbS1mbGFnIGZsYWc9XCJzZXJiaWFcIj48L3NtLWZsYWc+XG4gICAgPHNtLWZsYWcgZmxhZz1cImJvc25pYVwiPjwvc20tZmxhZz5cbiAgICA8c20tZmxhZyBmbGFnPVwiYXJnZW50aW5hXCI+PC9zbS1mbGFnPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuICAgIDxjb2RlYmxvY2sgcHJpc21qcz1cImh0bWxcIj5cbiZsdDtzbS1mbGFnIGZsYWc9XCJzZXJiaWFcIj4mbHQ7L3NtLWZsYWc+XG4mbHQ7c20tZmxhZyBmbGFnPVwiYm9zbmlhXCI+Jmx0Oy9zbS1mbGFnPlxuJmx0O3NtLWZsYWcgZmxhZz1cImFyZ2VudGluYVwiPiZsdDsvc20tZmxhZz5cbjwvY29kZWJsb2NrPlxuICAgICAgXG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBGbGFnQ29tcG9uZW50IHt9XG4iXX0=