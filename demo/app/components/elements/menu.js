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
    var MenuComponent;
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
            MenuComponent = (function () {
                function MenuComponent(ds) {
                    var _this = this;
                    this.ds = ds;
                    this.flatArray = [];
                    ds.flatArray().subscribe(function (data) {
                        _this.flatArray = data;
                    });
                }
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: "menu-cp",
                        providers: [data_1.DataServices]
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Menu</h1>\n        <p>Semantic UI menu component <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/collections/menu.html\" target=\"_blank\">Semantic UI Menu</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo inverted</h4>\n    <sm-header title=\"Angular2\" class=\"inverted teal\" logo=\"/assets/images/semantic.png\"></sm-header>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-header title=\"Angular2\" class=\"inverted teal\" logo=\"/assets/images/semantic.png\"></sm-header>\n</textarea>\n        </div>\n      </div>\n      <div class=\"ui divider\"></div>\n    <h4 class=\"ui header\">Demo vertical</h4>\n    <sm-header title=\"Vertical\" class=\"vertical\"></sm-header>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-header title=\"Vertical\" class=\"vertical\"></sm-header>\n</textarea>\n        </div>\n      </div>\n      <div class=\"ui divider\"></div>\n      <h4 class=\"ui header\">Demo secondary</h4>\n    <sm-header title=\"Secondary\" class=\"secondary\"></sm-header>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-header title=\"Secondary\" class=\"secondary\"></sm-header>\n</textarea>\n        </div>\n      </div>\n      \n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [data_1.DataServices])
                ], MenuComponent);
                return MenuComponent;
            })();
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZW51LnRzIl0sIm5hbWVzIjpbIk1lbnVDb21wb25lbnQiLCJNZW51Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkF5RENBLHVCQUFtQkEsRUFBZ0JBO29CQXpEcENDLGlCQThEQ0E7b0JBTG1CQSxPQUFFQSxHQUFGQSxFQUFFQSxDQUFjQTtvQkFEaENBLGNBQVNBLEdBQWVBLEVBQUVBLENBQUNBO29CQUU3QkEsRUFBRUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsSUFBU0E7d0JBQ2xDQSxLQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDdkJBLENBQUNBLENBQUNBLENBQUNBO2dCQUNKQSxDQUFDQTtnQkE3REZEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUdBLFNBQVNBO3dCQUNqQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsbUJBQVlBLENBQUNBO3FCQUM1QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7d0JBQ3REQSxRQUFRQSxFQUFHQSx5MkRBOENYQTtxQkFDQUEsQ0FBQ0E7O2tDQVNEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBQUNBLEFBOURELElBOERDO1lBOURELHlDQThEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvciA6IFwibWVudS1jcFwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlc11cbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcblx0dGVtcGxhdGUgOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+TWVudTwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIG1lbnUgY29tcG9uZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT4gXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL21lbnUuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIE1lbnU8L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGludmVydGVkPC9oND5cbiAgICA8c20taGVhZGVyIHRpdGxlPVwiQW5ndWxhcjJcIiBjbGFzcz1cImludmVydGVkIHRlYWxcIiBsb2dvPVwiL2Fzc2V0cy9pbWFnZXMvc2VtYW50aWMucG5nXCI+PC9zbS1oZWFkZXI+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG48dGV4dGFyZWEgcm93cz1cIjJcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20taGVhZGVyIHRpdGxlPVwiQW5ndWxhcjJcIiBjbGFzcz1cImludmVydGVkIHRlYWxcIiBsb2dvPVwiL2Fzc2V0cy9pbWFnZXMvc2VtYW50aWMucG5nXCI+PC9zbS1oZWFkZXI+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIHZlcnRpY2FsPC9oND5cbiAgICA8c20taGVhZGVyIHRpdGxlPVwiVmVydGljYWxcIiBjbGFzcz1cInZlcnRpY2FsXCI+PC9zbS1oZWFkZXI+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG48dGV4dGFyZWEgcm93cz1cIjJcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20taGVhZGVyIHRpdGxlPVwiVmVydGljYWxcIiBjbGFzcz1cInZlcnRpY2FsXCI+PC9zbS1oZWFkZXI+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cbiAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gc2Vjb25kYXJ5PC9oND5cbiAgICA8c20taGVhZGVyIHRpdGxlPVwiU2Vjb25kYXJ5XCIgY2xhc3M9XCJzZWNvbmRhcnlcIj48L3NtLWhlYWRlcj5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiMlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1oZWFkZXIgdGl0bGU9XCJTZWNvbmRhcnlcIiBjbGFzcz1cInNlY29uZGFyeVwiPjwvc20taGVhZGVyPlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCB7XG4gICAgZmxhdEFycmF5OiBBcnJheTxhbnk+ID0gW107XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBkczogRGF0YVNlcnZpY2VzKSB7XG5cdFx0ZHMuZmxhdEFycmF5KCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcblx0XHRcdHRoaXMuZmxhdEFycmF5ID0gZGF0YTtcblx0XHR9KTtcblx0fVxufVxuIl19