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
                        template: "\n    <div class=\"ui masthead vertical segment\">\n        <div class=\"ui container\">\n            <h1>List</h1>\n            <p>Semantic UI list element <i class=\"icon external\"></i> \n            <a href=\"http://semantic-ui.com/elements/list.html\" target=\"_blank\">Semantic UI List</a></p>\n        </div>\n    </div>\n    <div class=\"main ui container\">\n        <h4 class=\"ui header\">Demo</h4>\n        <sm-list class=\"bulleted\" [items]=\"flatArray\"></sm-list>\n    \n        <h4 class=\"ui header\">Code</h4>\n        <div class=\"ui form\">\n            <div class=\"field\">\n                <textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n                <sm-list class=\"bulleted\" [items]=\"flatArray\"></sm-list>\n                </textarea>\n            </div>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [data_1.DataServices])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9saXN0LnRzIl0sIm5hbWVzIjpbIkxpc3RDb21wb25lbnQiLCJMaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFnQ0NBLHVCQUFtQkEsRUFBZ0JBO29CQWhDcENDLGlCQXFDQ0E7b0JBTG1CQSxPQUFFQSxHQUFGQSxFQUFFQSxDQUFjQTtvQkFEaENBLGNBQVNBLEdBQWVBLEVBQUVBLENBQUNBO29CQUU3QkEsRUFBRUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsSUFBU0E7d0JBQ3pCQSxLQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDbERBLENBQUNBLENBQUNBLENBQUNBO2dCQUNKQSxDQUFDQTtnQkFwQ0ZEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUdBLE1BQU1BO3dCQUNqQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsbUJBQVlBLENBQUNBO3FCQUM1QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNGQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7d0JBQ3REQSxRQUFRQSxFQUFHQSwyNEJBcUJWQTtxQkFDSkEsQ0FBQ0E7O2tDQVNEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBQUNBLEFBckNELElBcUNDO1lBckNELHlDQXFDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpYy9zZW1hbnRpY1wiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6IFwibGlzdFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VzXVxyXG59KVxyXG5AVmlldyh7XHJcbiAgICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDE+TGlzdDwvaDE+XHJcbiAgICAgICAgICAgIDxwPlNlbWFudGljIFVJIGxpc3QgZWxlbWVudCA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+IFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9saXN0Lmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBMaXN0PC9hPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XHJcbiAgICAgICAgPHNtLWxpc3QgY2xhc3M9XCJidWxsZXRlZFwiIFtpdGVtc109XCJmbGF0QXJyYXlcIj48L3NtLWxpc3Q+XHJcbiAgICBcclxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiMlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgIDxzbS1saXN0IGNsYXNzPVwiYnVsbGV0ZWRcIiBbaXRlbXNdPVwiZmxhdEFycmF5XCI+PC9zbS1saXN0PlxyXG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcclxuICAgIGZsYXRBcnJheTogQXJyYXk8YW55PiA9IFtdO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBkczogRGF0YVNlcnZpY2VzKSB7XHJcblx0XHRkcy5mbGF0QXJyYXkoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZsYXRBcnJheSA9IEpTT04ucGFyc2UoZGF0YS5fYm9keSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19