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
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent() {
                }
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: "menu-cp"
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Menu</h1>\n        <p>Semantic UI menu component <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/collections/menu.html\" target=\"_blank\">Semantic UI Menu</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo inverted</h4>\n    <sm-header title=\"Angular2\" class=\"inverted teal\" logo=\"/assets/images/semantic.png\"></sm-header>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-header title=\"Angular2\" class=\"inverted teal\" logo=\"/assets/images/semantic.png\"></sm-header>\n</textarea>\n        </div>\n      </div>\n      <div class=\"ui divider\"></div>\n    <h4 class=\"ui header\">Demo vertical</h4>\n    <sm-header title=\"Vertical\" class=\"vertical\"></sm-header>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-header title=\"Vertical\" class=\"vertical\"></sm-header>\n</textarea>\n        </div>\n      </div>\n      <div class=\"ui divider\"></div>\n      <h4 class=\"ui header\">Demo secondary</h4>\n    <sm-header title=\"Secondary\" class=\"secondary\"></sm-header>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-header title=\"Secondary\" class=\"secondary\"></sm-header>\n</textarea>\n        </div>\n      </div>\n      \n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuComponent);
                return MenuComponent;
            })();
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZW51LnRzIl0sIm5hbWVzIjpbIk1lbnVDb21wb25lbnQiLCJNZW51Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7Z0JBc0Q0QkMsQ0FBQ0E7Z0JBdEQ3QkQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBR0EsU0FBU0E7cUJBQ3BCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFtQkEsRUFBRUEsOEJBQW1CQSxDQUFDQTt3QkFDdERBLFFBQVFBLEVBQUdBLHkyREE4Q1hBO3FCQUNBQSxDQUFDQTs7a0NBRTJCQTtnQkFBREEsb0JBQUNBO1lBQURBLENBQUNBLEFBdEQ3QixJQXNENkI7WUF0RDdCLHlDQXNENkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljL3NlbWFudGljXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvciA6IFwibWVudS1jcFwiXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG5cdHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPk1lbnU8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBtZW51IGNvbXBvbmVudCA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+IFxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZW51Lmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBNZW51PC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBpbnZlcnRlZDwvaDQ+XG4gICAgPHNtLWhlYWRlciB0aXRsZT1cIkFuZ3VsYXIyXCIgY2xhc3M9XCJpbnZlcnRlZCB0ZWFsXCIgbG9nbz1cIi9hc3NldHMvaW1hZ2VzL3NlbWFudGljLnBuZ1wiPjwvc20taGVhZGVyPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuPHRleHRhcmVhIHJvd3M9XCIyXCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLWhlYWRlciB0aXRsZT1cIkFuZ3VsYXIyXCIgY2xhc3M9XCJpbnZlcnRlZCB0ZWFsXCIgbG9nbz1cIi9hc3NldHMvaW1hZ2VzL3NlbWFudGljLnBuZ1wiPjwvc20taGVhZGVyPlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyB2ZXJ0aWNhbDwvaDQ+XG4gICAgPHNtLWhlYWRlciB0aXRsZT1cIlZlcnRpY2FsXCIgY2xhc3M9XCJ2ZXJ0aWNhbFwiPjwvc20taGVhZGVyPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuPHRleHRhcmVhIHJvd3M9XCIyXCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLWhlYWRlciB0aXRsZT1cIlZlcnRpY2FsXCIgY2xhc3M9XCJ2ZXJ0aWNhbFwiPjwvc20taGVhZGVyPlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG4gICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIHNlY29uZGFyeTwvaDQ+XG4gICAgPHNtLWhlYWRlciB0aXRsZT1cIlNlY29uZGFyeVwiIGNsYXNzPVwic2Vjb25kYXJ5XCI+PC9zbS1oZWFkZXI+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG48dGV4dGFyZWEgcm93cz1cIjJcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20taGVhZGVyIHRpdGxlPVwiU2Vjb25kYXJ5XCIgY2xhc3M9XCJzZWNvbmRhcnlcIj48L3NtLWhlYWRlcj5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge31cbiJdfQ==