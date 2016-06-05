System.register(["@angular/core", "ng-semantic"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1;
    var FlagComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            }],
        execute: function() {
            FlagComponent = (function () {
                function FlagComponent() {
                }
                FlagComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3Q0E7Z0JBQUE7Z0JBQTRCLENBQUM7Z0JBckM3QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGlDQUFtQixFQUFFLGlDQUFtQixDQUFDO3dCQUN0RCxRQUFRLEVBQUUsTUFBTTt3QkFDaEIsUUFBUSxFQUFFLGl2Q0ErQmI7cUJBQ0EsQ0FBQzs7aUNBQUE7Z0JBRTBCLG9CQUFDO1lBQUQsQ0FBQyxBQUE3QixJQUE2QjtZQUE3Qix5Q0FBNkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCAsIFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG4gICAgc2VsZWN0b3I6IFwiZmxhZ1wiLFxuICAgIHRlbXBsYXRlOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+RmxhZzwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIGZsYWdzOiA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2ZsYWcuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIEZsYWc8L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8cD5BIGZsYWcgaXMgaXMgdXNlZCB0byByZXByZXNlbnQgYSBwb2xpdGljYWwgc3RhdGU8L3A+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgPHNtLWZsYWcgZmxhZz1cInNlcmJpYVwiPjwvc20tZmxhZz5cbiAgICA8c20tZmxhZyBmbGFnPVwiYm9zbmlhXCI+PC9zbS1mbGFnPlxuICAgIDxzbS1mbGFnIGZsYWc9XCJhcmdlbnRpbmFcIj48L3NtLWZsYWc+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gICAgPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI0XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLWZsYWcgZmxhZz1cInNlcmJpYVwiPjwvc20tZmxhZz5cbjxzbS1mbGFnIGZsYWc9XCJib3NuaWFcIj48L3NtLWZsYWc+XG48c20tZmxhZyBmbGFnPVwiYXJnZW50aW5hXCI+PC9zbS1mbGFnPlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxici8+PGJyLz5cbiAgICAgIFBhZ2Ugc291cmNlOiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2ZsYWcudHNcIj5cbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2ZsYWcudHNcbiAgICAgIDwvYT5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIEZsYWdDb21wb25lbnQge31cbiJdfQ==