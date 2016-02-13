System.register(["angular2/core", "angular2/common", "ng-semantic/semantic"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, semantic_1;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent(fb) {
                    this.input = new common_1.Control("Hello", common_1.Validators.required);
                    this.form = fb.group({
                        input: this.input
                    });
                    this.input.valueChanges.subscribe(function (data) {
                        console.log(data);
                    });
                }
                InputComponent = __decorate([
                    core_1.Component({
                        selector: "test-input",
                        providers: [common_1.FORM_PROVIDERS]
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Input</h1>\n        <p>Semantic UI input element <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/elements/input.html\" target=\"_blank\">Semantic UI Input</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    ToDo\n    <!--\n    <sm-form [formModel]=\"form\">\n        <input type=\"text\" ngControl=\"input\">\n    </sm-form>\n    \n    <form [ngFormModel]=\"form\">\n        <input type=\"text\" ngControl=\"input\">\n    </form>\n    -->\n    <h5>{{inputValue}}</h5>\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-input class=\"ui input\" placeholder=\"Search...\" [(value)]=\"inputValue\"></sm-input>\n</textarea>\n        </div>\n      </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], InputComponent);
                return InputComponent;
            })();
            exports_1("InputComponent", InputComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvaW5wdXQudHMiXSwibmFtZXMiOlsiSW5wdXRDb21wb25lbnQiLCJJbnB1dENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBNENJQSx3QkFBWUEsRUFBZUE7b0JBSDNCQyxVQUFLQSxHQUFZQSxJQUFJQSxnQkFBT0EsQ0FBQ0EsT0FBT0EsRUFBRUEsbUJBQVVBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO29CQUt2REEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQ2pCQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQTtxQkFDcEJBLENBQUNBLENBQUNBO29CQUVIQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFTQTt3QkFDeENBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUN0QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBO2dCQXJETEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7d0JBQ3RCQSxTQUFTQSxFQUFFQSxDQUFDQSx1QkFBY0EsQ0FBQ0E7cUJBQzlCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFtQkEsRUFBRUEsOEJBQW1CQSxFQUFFQSx3QkFBZUEsQ0FBQ0E7d0JBQ3ZFQSxRQUFRQSxFQUFFQSw0L0JBOEJiQTtxQkFDQUEsQ0FBQ0E7O21DQWlCREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQUFDQSxBQXRERCxJQXNEQztZQXRERCwyQ0FzREMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBDb250cm9sLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBGT1JNX1BST1ZJREVSUywgRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpYy9zZW1hbnRpY1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0ZXN0LWlucHV0XCIsXG4gICAgcHJvdmlkZXJzOiBbRk9STV9QUk9WSURFUlNdXG59KVxuQFZpZXcoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+SW5wdXQ8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBpbnB1dCBlbGVtZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaW5wdXQuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIElucHV0PC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgVG9Eb1xuICAgIDwhLS1cbiAgICA8c20tZm9ybSBbZm9ybU1vZGVsXT1cImZvcm1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmdDb250cm9sPVwiaW5wdXRcIj5cbiAgICA8L3NtLWZvcm0+XG4gICAgXG4gICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cImZvcm1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmdDb250cm9sPVwiaW5wdXRcIj5cbiAgICA8L2Zvcm0+XG4gICAgLS0+XG4gICAgPGg1Pnt7aW5wdXRWYWx1ZX19PC9oNT5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiMlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1pbnB1dCBjbGFzcz1cInVpIGlucHV0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBbKHZhbHVlKV09XCJpbnB1dFZhbHVlXCI+PC9zbS1pbnB1dD5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCB7XG5cbiAgICBpbnB1dDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiSGVsbG9cIiwgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgZm9ybTogQ29udHJvbEdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gZmIuZ3JvdXAoe1xuICAgICAgICAgICAgaW5wdXQ6IHRoaXMuaW5wdXRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=