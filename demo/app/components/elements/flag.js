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
    var FlagComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            FlagComponent = (function () {
                function FlagComponent() {
                }
                FlagComponent = __decorate([
                    core_1.Component({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        selector: "flag",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Flag</h1>\n        <p>Semantic UI flags: <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/elements/flag.html\" target=\"_blank\">Semantic UI Flag</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>A flag is is used to represent a political state</p>\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-flag flag=\"serbia\"></sm-flag>\n    <sm-flag flag=\"bosnia\"></sm-flag>\n    <sm-flag flag=\"argentina\"></sm-flag>\n    \n    <h4 class=\"ui header\">Code</h4>\n    <div class=\"ui form\">\n        <div class=\"field\">\n          <textarea rows=\"4\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-flag flag=\"serbia\"></sm-flag>\n<sm-flag flag=\"bosnia\"></sm-flag>\n<sm-flag flag=\"argentina\"></sm-flag>\n          </textarea>\n        </div>\n      </div>\n      \n      <br/><br/>\n      Page source: <a target=\"_blank\" href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/flag.ts\">\n        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/flag.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlagComponent);
                return FlagComponent;
            }());
            exports_1("FlagComponent", FlagComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9mbGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUNBO2dCQUFBO2dCQUE0QixDQUFDO2dCQXJDN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyw4QkFBbUIsRUFBRSw4QkFBbUIsQ0FBQzt3QkFDdEQsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFFBQVEsRUFBRSxpdkNBK0JiO3FCQUNBLENBQUM7O2lDQUFBO2dCQUUwQixvQkFBQztZQUFELENBQUMsQUFBN0IsSUFBNkI7WUFBN0IseUNBQTZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpYy9zZW1hbnRpY1wiO1xuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuICAgIHNlbGVjdG9yOiBcImZsYWdcIixcbiAgICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkZsYWc8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBmbGFnczogPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9mbGFnLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBGbGFnPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPHA+QSBmbGFnIGlzIGlzIHVzZWQgdG8gcmVwcmVzZW50IGEgcG9saXRpY2FsIHN0YXRlPC9wPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxzbS1mbGFnIGZsYWc9XCJzZXJiaWFcIj48L3NtLWZsYWc+XG4gICAgPHNtLWZsYWcgZmxhZz1cImJvc25pYVwiPjwvc20tZmxhZz5cbiAgICA8c20tZmxhZyBmbGFnPVwiYXJnZW50aW5hXCI+PC9zbS1mbGFnPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1mbGFnIGZsYWc9XCJzZXJiaWFcIj48L3NtLWZsYWc+XG48c20tZmxhZyBmbGFnPVwiYm9zbmlhXCI+PC9zbS1mbGFnPlxuPHNtLWZsYWcgZmxhZz1cImFyZ2VudGluYVwiPjwvc20tZmxhZz5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8YnIvPjxici8+XG4gICAgICBQYWdlIHNvdXJjZTogPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljL2Jsb2IvbWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9mbGFnLnRzXCI+XG4gICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljL2Jsb2IvbWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9mbGFnLnRzXG4gICAgICA8L2E+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBGbGFnQ29tcG9uZW50IHt9XG4iXX0=