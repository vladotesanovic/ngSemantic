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
    var ButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            ButtonComponent = (function () {
                function ButtonComponent() {
                    this.isClicked = "You should click on button!";
                    this.classList = "positive";
                }
                ButtonComponent.prototype.clickMe = function (event) {
                    var _this = this;
                    event.srcElement.classList.add("loading");
                    setTimeout(function () {
                        event.srcElement.classList.remove("loading");
                        _this.isClicked = "Excellent, it works!";
                    }, 2000);
                };
                ButtonComponent = __decorate([
                    core_1.Component({
                        selector: "ui-button"
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n    <div class=\"ui masthead vertical segment\">\n        <div class=\"ui container\">\n            <h1>Button</h1>\n            <p>Semantic UI button element <i class=\"icon external\"></i>\n            <a href=\"http://semantic-ui.com/elements/button.html\" target=\"_blank\">Semantic UI Button</a></p>\n        </div>\n    </div>\n    <div class=\"main ui container\">\n        <h4 class=\"ui header\">Demo</h4>\n        <sm-button class=\"positive\" (click)=\"clickMe($event)\" icon=\"thumbs up\">Click Me</sm-button>\n        <h3>{{isClicked}}</h3>\n        <h4 class=\"ui header\">Code</h4>\n        <div class=\"ui form\">\n            <div class=\"field\">\n                <textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-button class=\"positive\" (click)=\"clickMe()\" icon=\"thumbs up\">Click Me</sm-button>\n                </textarea>\n            </div>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ButtonComponent);
                return ButtonComponent;
            })();
            exports_1("ButtonComponent", ButtonComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2J1dHRvbi50cyJdLCJuYW1lcyI6WyJCdXR0b25Db21wb25lbnQiLCJCdXR0b25Db21wb25lbnQuY29uc3RydWN0b3IiLCJCdXR0b25Db21wb25lbnQuY2xpY2tNZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUFBO29CQStCSUMsY0FBU0EsR0FBV0EsNkJBQTZCQSxDQUFDQTtvQkFDbERBLGNBQVNBLEdBQVdBLFVBQVVBLENBQUNBO2dCQVduQ0EsQ0FBQ0E7Z0JBVEdELGlDQUFPQSxHQUFQQSxVQUFRQSxLQUFZQTtvQkFBcEJFLGlCQVFDQTtvQkFOR0EsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBRTFDQSxVQUFVQSxDQUFDQTt3QkFDUEEsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7d0JBQzdDQSxLQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxzQkFBc0JBLENBQUNBO29CQUM1Q0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2JBLENBQUNBO2dCQTFDTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7cUJBQ3hCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFtQkEsRUFBRUEsOEJBQW1CQSxDQUFDQTt3QkFDdERBLFFBQVFBLEVBQUVBLGcrQkFxQlRBO3FCQUNKQSxDQUFDQTs7b0NBZ0JEQTtnQkFBREEsc0JBQUNBO1lBQURBLENBQUNBLEFBM0NELElBMkNDO1lBM0NELDZDQTJDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInVpLWJ1dHRvblwiXG59KVxuQFZpZXcoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT5CdXR0b248L2gxPlxuICAgICAgICAgICAgPHA+U2VtYW50aWMgVUkgYnV0dG9uIGVsZW1lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvYnV0dG9uLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBCdXR0b248L2E+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgICAgIDxzbS1idXR0b24gY2xhc3M9XCJwb3NpdGl2ZVwiIChjbGljayk9XCJjbGlja01lKCRldmVudClcIiBpY29uPVwidGh1bWJzIHVwXCI+Q2xpY2sgTWU8L3NtLWJ1dHRvbj5cbiAgICAgICAgPGgzPnt7aXNDbGlja2VkfX08L2gzPlxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiMlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1idXR0b24gY2xhc3M9XCJwb3NpdGl2ZVwiIChjbGljayk9XCJjbGlja01lKClcIiBpY29uPVwidGh1bWJzIHVwXCI+Q2xpY2sgTWU8L3NtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuXG4gICAgaXNDbGlja2VkOiBzdHJpbmcgPSBcIllvdSBzaG91bGQgY2xpY2sgb24gYnV0dG9uIVwiO1xuICAgIGNsYXNzTGlzdDogc3RyaW5nID0gXCJwb3NpdGl2ZVwiO1xuXG4gICAgY2xpY2tNZShldmVudDogRXZlbnQpIHtcblxuICAgICAgICBldmVudC5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcbiAgICAgICAgICAgIHRoaXMuaXNDbGlja2VkID0gXCJFeGNlbGxlbnQsIGl0IHdvcmtzIVwiO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG59XG4iXX0=