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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.inputValue = "";
                }
                InputComponent = __decorate([
                    core_1.Component({
                        selector: "test-input"
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Input</h1>\n        <p>Semantic UI input element <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/elements/input.html\" target=\"_blank\">Semantic UI Input</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n   \t<sm-input class=\"ui input\" placeholder=\"Search...\" [(value)]=\"inputValue\"></sm-input>\n    <h5>{{inputValue}}</h5>\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-input class=\"ui input\" placeholder=\"Search...\" [(value)]=\"inputValue\"></sm-input>\n</textarea>\n        </div>\n      </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            })();
            exports_1("InputComponent", InputComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvaW5wdXQudHMiXSwibmFtZXMiOlsiSW5wdXRDb21wb25lbnQiLCJJbnB1dENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO29CQThCSUMsZUFBVUEsR0FBV0EsRUFBRUEsQ0FBQ0E7Z0JBQzVCQSxDQUFDQTtnQkEvQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUdBLFlBQVlBO3FCQUN2QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7d0JBQ3REQSxRQUFRQSxFQUFHQSxrM0JBcUJYQTtxQkFDQUEsQ0FBQ0E7O21DQUlEQTtnQkFBREEscUJBQUNBO1lBQURBLENBQUNBLEFBL0JELElBK0JDO1lBL0JELDJDQStCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yIDogXCJ0ZXN0LWlucHV0XCJcbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcblx0dGVtcGxhdGUgOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+SW5wdXQ8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBpbnB1dCBlbGVtZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT4gXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2lucHV0Lmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBJbnB1dDwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgXHQ8c20taW5wdXQgY2xhc3M9XCJ1aSBpbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgWyh2YWx1ZSldPVwiaW5wdXRWYWx1ZVwiPjwvc20taW5wdXQ+XG4gICAgPGg1Pnt7aW5wdXRWYWx1ZX19PC9oNT5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiMlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1pbnB1dCBjbGFzcz1cInVpIGlucHV0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBbKHZhbHVlKV09XCJpbnB1dFZhbHVlXCI+PC9zbS1pbnB1dD5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCB7XG4gICAgaW5wdXRWYWx1ZTogc3RyaW5nID0gXCJcIjtcbn1cbiJdfQ==