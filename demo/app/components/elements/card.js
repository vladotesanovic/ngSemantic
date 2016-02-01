System.register(["angular2/core", "ng-semantic/semantic"], function(exports_1) {
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
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Card</h1>\n        <p>Semantic UI card view <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/views/card.html\" target=\"_blank\">Semantic UI Card</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-card class=\"ui card\" title=\"Kristy\" image=\"http://semantic-ui.com/images/avatar2/large/kristy.png\" subtitle=\"Joined in 2013\">\n        <div text>\n            Kristy is an art director living in New York.\n        </div>\n        <div extra>\n        <a>\n            <i class=\"user icon\"></i>\n            22 Friends\n        </a>\n        </div>\n    </sm-card>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"6\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-card class=\"ui card\" title=\"Kristy\" image=\"http://semantic-ui.com/images/avatar2/large/kristy.png\" subtitle=\"Joined in 2013\">\n    <div text>...</div>\n    <div extra>...</div>\n</sm-card>\n</textarea>\n        </div>\n      </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CardComponent);
                return CardComponent;
            })();
            exports_1("CardComponent", CardComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9jYXJkLnRzIl0sIm5hbWVzIjpbIkNhcmRDb21wb25lbnQiLCJDYXJkQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7Z0JBMEM0QkMsQ0FBQ0E7Z0JBMUM3QkQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBR0EsTUFBTUE7cUJBQ2pCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFtQkEsRUFBRUEsOEJBQW1CQSxDQUFDQTt3QkFDdERBLFFBQVFBLEVBQUdBLDJ0Q0FrQ1hBO3FCQUNBQSxDQUFDQTs7a0NBRTJCQTtnQkFBREEsb0JBQUNBO1lBQURBLENBQUNBLEFBMUM3QixJQTBDNkI7WUExQzdCLHlDQTBDNkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljL3NlbWFudGljXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvciA6IFwiY2FyZFwiXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG5cdHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkNhcmQ8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBjYXJkIHZpZXcgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vdmlld3MvY2FyZC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgQ2FyZDwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxzbS1jYXJkIGNsYXNzPVwidWkgY2FyZFwiIHRpdGxlPVwiS3Jpc3R5XCIgaW1hZ2U9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2ltYWdlcy9hdmF0YXIyL2xhcmdlL2tyaXN0eS5wbmdcIiBzdWJ0aXRsZT1cIkpvaW5lZCBpbiAyMDEzXCI+XG4gICAgICAgIDxkaXYgdGV4dD5cbiAgICAgICAgICAgIEtyaXN0eSBpcyBhbiBhcnQgZGlyZWN0b3IgbGl2aW5nIGluIE5ldyBZb3JrLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBleHRyYT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgICA8aSBjbGFzcz1cInVzZXIgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDIyIEZyaWVuZHNcbiAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NtLWNhcmQ+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG48dGV4dGFyZWEgcm93cz1cIjZcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20tY2FyZCBjbGFzcz1cInVpIGNhcmRcIiB0aXRsZT1cIktyaXN0eVwiIGltYWdlPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9pbWFnZXMvYXZhdGFyMi9sYXJnZS9rcmlzdHkucG5nXCIgc3VidGl0bGU9XCJKb2luZWQgaW4gMjAxM1wiPlxuICAgIDxkaXYgdGV4dD4uLi48L2Rpdj5cbiAgICA8ZGl2IGV4dHJhPi4uLjwvZGl2PlxuPC9zbS1jYXJkPlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge31cbiJdfQ==