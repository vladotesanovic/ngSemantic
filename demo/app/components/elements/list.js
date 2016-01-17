System.register(["angular2/core", "ng-semantic/semantic", "../../services/data"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, semantic_1, data_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(ds) {
                    var _this = this;
                    this.ds = ds;
                    this.flatArray = [];
                    ds.flatArray().subscribe(function (data) {
                        _this.flatArray = JSON.parse(data._body);
                    });
                }
                ListComponent = __decorate([
                    core_1.Component({
                        selector: "list",
                        providers: [data_1.DataServices]
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>List</h1>\n        <p>Semantic UI list element <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/elements/list.html\" target=\"_blank\">Semantic UI List</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-list class=\"bulleted\" [items]=\"flatArray\"></sm-list>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-list class=\"bulleted\" [items]=\"flatArray\"></sm-list>\n</textarea>\n        </div>\n      </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [data_1.DataServices])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9saXN0LnRzIl0sIm5hbWVzIjpbIkxpc3RDb21wb25lbnQiLCJMaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFnQ0NBLHVCQUFtQkEsRUFBZ0JBO29CQWhDcENDLGlCQXFDQ0E7b0JBTG1CQSxPQUFFQSxHQUFGQSxFQUFFQSxDQUFjQTtvQkFEaENBLGNBQVNBLEdBQWVBLEVBQUVBLENBQUNBO29CQUU3QkEsRUFBRUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsSUFBU0E7d0JBQ3pCQSxLQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDbERBLENBQUNBLENBQUNBLENBQUNBO2dCQUNKQSxDQUFDQTtnQkFwQ0ZEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUdBLE1BQU1BO3dCQUNkQSxTQUFTQSxFQUFFQSxDQUFDQSxtQkFBWUEsQ0FBQ0E7cUJBQzVCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFtQkEsRUFBRUEsOEJBQW1CQSxDQUFDQTt3QkFDdERBLFFBQVFBLEVBQUdBLHd4QkFxQlhBO3FCQUNBQSxDQUFDQTs7a0NBU0RBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FBQ0EsQUFyQ0QsSUFxQ0M7WUFyQ0QseUNBcUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpYy9zZW1hbnRpY1wiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGFcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yIDogXCJsaXN0XCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VzXVxufSlcbkBWaWV3KHtcblx0ZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuXHR0ZW1wbGF0ZSA6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5MaXN0PC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgbGlzdCBlbGVtZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT4gXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2xpc3QuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIExpc3Q8L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vPC9oND5cbiAgICA8c20tbGlzdCBjbGFzcz1cImJ1bGxldGVkXCIgW2l0ZW1zXT1cImZsYXRBcnJheVwiPjwvc20tbGlzdD5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiMlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1saXN0IGNsYXNzPVwiYnVsbGV0ZWRcIiBbaXRlbXNdPVwiZmxhdEFycmF5XCI+PC9zbS1saXN0PlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xuICAgIGZsYXRBcnJheTogQXJyYXk8YW55PiA9IFtdO1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZHM6IERhdGFTZXJ2aWNlcykge1xuXHRcdGRzLmZsYXRBcnJheSgpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZsYXRBcnJheSA9IEpTT04ucGFyc2UoZGF0YS5fYm9keSk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==