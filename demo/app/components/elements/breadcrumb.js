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
    var BreadCrumbComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            BreadCrumbComponent = (function () {
                function BreadCrumbComponent() {
                    this.steaps = ["Home", "Registration", "Personal Information"];
                }
                BreadCrumbComponent = __decorate([
                    core_1.Component({
                        selector: "ui-breadcumb"
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n       <div class=\"ui masthead vertical segment\">\n        <div class=\"ui container\">\n            <h1>Breadcrumb</h1>\n            <p>Semantic UI Breadcrumb element <i class=\"icon external\"></i>\n                <a href=\"http://semantic-ui.com/collections/breadcrumb.html\" target=\"_blank\">Semantic UI Breadcrumb</a>\n            </p>\n        </div>\n    </div>\n    <div class=\"main ui container\">\n        <h4 class=\"ui header\">Demo Breadcrumb</h4>\n        <sm-breadcrumb [steaps]=\"steaps\"></sm-breadcrumb>\n        <h4 class=\"ui header\">Code</h4>\n        <div class=\"ui form\">\n            <div class=\"field\">\n          <textarea rows=\"5\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n          <sm-breadcrumb [steaps]=\"steaps\"></sm-breadcrumb>\n          </textarea>\n        </div>\n        </div>\n        \n        <h3 class=\"ui header\">Params</h3>\n        <table class=\"ui celled selectable blue table\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Type</th>\n                    <th>Array</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>steaps</td>\n                    <td>String</td>\n                    <td class=\"positive\">Yes</td>\n                </tr>\n            </tbody>\n        </table>\n        <br><br><br><br>\n        Page source: <a target=\"_blank\" \n        href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/collections/breadcrumb.ts\">\n        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/collections/breadcrumb.ts\n      </a>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BreadCrumbComponent);
                return BreadCrumbComponent;
            })();
            exports_1("BreadCrumbComponent", BreadCrumbComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9icmVhZGNydW1iLnRzIl0sIm5hbWVzIjpbIkJyZWFkQ3J1bWJDb21wb25lbnQiLCJCcmVhZENydW1iQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBQUE7b0JBcURJQyxXQUFNQSxHQUFpQkEsQ0FBQ0EsTUFBTUEsRUFBRUEsY0FBY0EsRUFBRUEsc0JBQXNCQSxDQUFDQSxDQUFDQTtnQkFDNUVBLENBQUNBO2dCQXREREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsY0FBY0E7cUJBQzNCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFtQkEsRUFBRUEsOEJBQW1CQSxDQUFDQTt3QkFDdERBLFFBQVFBLEVBQUVBLDh1REE0Q1RBO3FCQUNKQSxDQUFDQTs7d0NBSURBO2dCQUFEQSwwQkFBQ0E7WUFBREEsQ0FBQ0EsQUF0REQsSUFzREM7WUF0REQscURBc0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpYy9zZW1hbnRpY1wiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidWktYnJlYWRjdW1iXCJcbn0pXG5AVmlldyh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgPGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPkJyZWFkY3J1bWI8L2gxPlxuICAgICAgICAgICAgPHA+U2VtYW50aWMgVUkgQnJlYWRjcnVtYiBlbGVtZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9icmVhZGNydW1iLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBCcmVhZGNydW1iPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBCcmVhZGNydW1iPC9oND5cbiAgICAgICAgPHNtLWJyZWFkY3J1bWIgW3N0ZWFwc109XCJzdGVhcHNcIj48L3NtLWJyZWFkY3J1bWI+XG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuICAgICAgICAgIDxzbS1icmVhZGNydW1iIFtzdGVhcHNdPVwic3RlYXBzXCI+PC9zbS1icmVhZGNydW1iPlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxoMyBjbGFzcz1cInVpIGhlYWRlclwiPlBhcmFtczwvaDM+XG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBzZWxlY3RhYmxlIGJsdWUgdGFibGVcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+QXJyYXk8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnN0ZWFwczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TdHJpbmc8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJwb3NpdGl2ZVwiPlllczwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxicj48YnI+PGJyPjxicj5cbiAgICAgICAgUGFnZSBzb3VyY2U6IDxhIHRhcmdldD1cIl9ibGFua1wiIFxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2NvbGxlY3Rpb25zL2JyZWFkY3J1bWIudHNcIj5cbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2NvbGxlY3Rpb25zL2JyZWFkY3J1bWIudHNcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQnJlYWRDcnVtYkNvbXBvbmVudCB7XG4gICAgc3RlYXBzOiBBcnJheTxzdHJpbmc+PSBbXCJIb21lXCIsIFwiUmVnaXN0cmF0aW9uXCIsIFwiUGVyc29uYWwgSW5mb3JtYXRpb25cIl07XG59XG4iXX0=