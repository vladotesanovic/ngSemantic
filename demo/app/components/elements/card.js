System.register(["angular2/core", "ng-semantic/semantic"], function(exports_1, context_1) {
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
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        selector: "card",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9jYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkNBO2dCQUFBO2dCQUE0QixDQUFDO2dCQXhDN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyw4QkFBbUIsRUFBRSw4QkFBbUIsQ0FBQzt3QkFDdEQsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFFBQVEsRUFBRyxpdkNBa0NkO3FCQUNBLENBQUM7O2lDQUFBO2dCQUUwQixvQkFBQztZQUFELENBQUMsQUFBN0IsSUFBNkI7WUFBN0IseUNBQTZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpYy9zZW1hbnRpY1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG4gICAgc2VsZWN0b3IgOiBcImNhcmRcIixcbiAgICB0ZW1wbGF0ZSA6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5DYXJkPC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgY2FyZCB2aWV3IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT4gXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL3ZpZXdzL2NhcmQuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIENhcmQ8L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vPC9oND5cbiAgICA8c20tY2FyZCBjbGFzcz1cInVpIGNhcmRcIiB0aXRsZT1cIktyaXN0eVwiIGltYWdlPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9pbWFnZXMvYXZhdGFyMi9sYXJnZS9rcmlzdHkucG5nXCIgc3VidGl0bGU9XCJKb2luZWQgaW4gMjAxM1wiPlxuICAgICAgICA8Y29ubnRlbnQ+XG4gICAgICAgICAgICBLcmlzdHkgaXMgYW4gYXJ0IGRpcmVjdG9yIGxpdmluZyBpbiBOZXcgWW9yay5cbiAgICAgICAgPC9jb25udGVudD5cbiAgICAgICAgPGV4dHJhPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ1c2VyIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgMjIgRnJpZW5kc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2V4dHJhPlxuICAgIDwvc20tY2FyZD5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiNlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1jYXJkIGNsYXNzPVwidWkgY2FyZFwiIHRpdGxlPVwiS3Jpc3R5XCIgaW1hZ2U9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2ltYWdlcy9hdmF0YXIyL2xhcmdlL2tyaXN0eS5wbmdcIiBzdWJ0aXRsZT1cIkpvaW5lZCBpbiAyMDEzXCI+XG4gICAgPGNvbm50ZW50Pi4uLjwvY29ubnRlbnQ+XG4gICAgPGV4dHJhPi4uLjwvZXh0cmE+XG48L3NtLWNhcmQ+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7fVxuIl19