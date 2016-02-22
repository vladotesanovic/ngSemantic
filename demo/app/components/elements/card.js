System.register(["angular2/core", "ng-semantic/semantic"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, semantic_1;
    var CardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            CardComponent = (function () {
                function CardComponent() {
                }
                CardComponent = __decorate([
                    core_1.Component({
                        selector: "card"
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Card</h1>\n        <p>Semantic UI card view <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/views/card.html\" target=\"_blank\">Semantic UI Card</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-card class=\"ui card\" title=\"Kristy\" image=\"http://semantic-ui.com/images/avatar2/large/kristy.png\" subtitle=\"Joined in 2013\">\n        <conntent>\n            Kristy is an art director living in New York.\n        </conntent>\n        <extra>\n            <a>\n                <i class=\"user icon\"></i>\n                22 Friends\n            </a>\n        </extra>\n    </sm-card>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"6\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-card class=\"ui card\" title=\"Kristy\" image=\"http://semantic-ui.com/images/avatar2/large/kristy.png\" subtitle=\"Joined in 2013\">\n    <conntent>...</conntent>\n    <extra>...</extra>\n</sm-card>\n</textarea>\n        </div>\n      </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CardComponent);
                return CardComponent;
            }());
            exports_1("CardComponent", CardComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9jYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2Q0E7Z0JBQUE7Z0JBQTRCLENBQUM7Z0JBMUM3QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRyxNQUFNO3FCQUNqQixDQUFDO29CQUNELFdBQUksQ0FBQzt3QkFDTCxVQUFVLEVBQUUsQ0FBQyw4QkFBbUIsRUFBRSw4QkFBbUIsQ0FBQzt3QkFDdEQsUUFBUSxFQUFHLGl2Q0FrQ1g7cUJBQ0EsQ0FBQzs7aUNBQUE7Z0JBRTBCLG9CQUFDO1lBQUQsQ0FBQyxBQUE3QixJQUE2QjtZQUE3Qix5Q0FBNkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljL3NlbWFudGljXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvciA6IFwiY2FyZFwiXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG5cdHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkNhcmQ8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBjYXJkIHZpZXcgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vdmlld3MvY2FyZC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgQ2FyZDwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxzbS1jYXJkIGNsYXNzPVwidWkgY2FyZFwiIHRpdGxlPVwiS3Jpc3R5XCIgaW1hZ2U9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2ltYWdlcy9hdmF0YXIyL2xhcmdlL2tyaXN0eS5wbmdcIiBzdWJ0aXRsZT1cIkpvaW5lZCBpbiAyMDEzXCI+XG4gICAgICAgIDxjb25udGVudD5cbiAgICAgICAgICAgIEtyaXN0eSBpcyBhbiBhcnQgZGlyZWN0b3IgbGl2aW5nIGluIE5ldyBZb3JrLlxuICAgICAgICA8L2Nvbm50ZW50PlxuICAgICAgICA8ZXh0cmE+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInVzZXIgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAyMiBGcmllbmRzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZXh0cmE+XG4gICAgPC9zbS1jYXJkPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuPHRleHRhcmVhIHJvd3M9XCI2XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLWNhcmQgY2xhc3M9XCJ1aSBjYXJkXCIgdGl0bGU9XCJLcmlzdHlcIiBpbWFnZT1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vaW1hZ2VzL2F2YXRhcjIvbGFyZ2Uva3Jpc3R5LnBuZ1wiIHN1YnRpdGxlPVwiSm9pbmVkIGluIDIwMTNcIj5cbiAgICA8Y29ubnRlbnQ+Li4uPC9jb25udGVudD5cbiAgICA8ZXh0cmE+Li4uPC9leHRyYT5cbjwvc20tY2FyZD5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHt9XG4iXX0=