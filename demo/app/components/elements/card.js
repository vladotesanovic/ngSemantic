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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9jYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkNBO2dCQUFBO2dCQUE0QixDQUFDO2dCQXhDN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyw4QkFBbUIsRUFBRSw4QkFBbUIsQ0FBQzt3QkFDdEQsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFFBQVEsRUFBRyxpdkNBa0NkO3FCQUNBLENBQUM7O2lDQUFBO2dCQUUwQixvQkFBQztZQUFELENBQUMsQUFBN0IsSUFBNkI7WUFBN0IseUNBQTZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljL3NlbWFudGljXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcclxuICAgIHNlbGVjdG9yIDogXCJjYXJkXCIsXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5DYXJkPC9oMT5cclxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBjYXJkIHZpZXcgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcclxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS92aWV3cy9jYXJkLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBDYXJkPC9hPjwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XHJcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vPC9oND5cclxuICAgIDxzbS1jYXJkIGNsYXNzPVwidWkgY2FyZFwiIHRpdGxlPVwiS3Jpc3R5XCIgaW1hZ2U9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2ltYWdlcy9hdmF0YXIyL2xhcmdlL2tyaXN0eS5wbmdcIiBzdWJ0aXRsZT1cIkpvaW5lZCBpbiAyMDEzXCI+XHJcbiAgICAgICAgPGNvbm50ZW50PlxyXG4gICAgICAgICAgICBLcmlzdHkgaXMgYW4gYXJ0IGRpcmVjdG9yIGxpdmluZyBpbiBOZXcgWW9yay5cclxuICAgICAgICA8L2Nvbm50ZW50PlxyXG4gICAgICAgIDxleHRyYT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInVzZXIgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDIyIEZyaWVuZHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZXh0cmE+XHJcbiAgICA8L3NtLWNhcmQ+XHJcbiAgICBcclxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxyXG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuPHRleHRhcmVhIHJvd3M9XCI2XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxyXG48c20tY2FyZCBjbGFzcz1cInVpIGNhcmRcIiB0aXRsZT1cIktyaXN0eVwiIGltYWdlPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9pbWFnZXMvYXZhdGFyMi9sYXJnZS9rcmlzdHkucG5nXCIgc3VidGl0bGU9XCJKb2luZWQgaW4gMjAxM1wiPlxyXG4gICAgPGNvbm50ZW50Pi4uLjwvY29ubnRlbnQ+XHJcbiAgICA8ZXh0cmE+Li4uPC9leHRyYT5cclxuPC9zbS1jYXJkPlxyXG48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHt9XHJcbiJdfQ==