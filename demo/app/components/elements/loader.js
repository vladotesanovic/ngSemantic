System.register(["angular2/core", "ng-semantic/semantic", "angular2/router", "../../services/data"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, semantic_1, router_1, data_1;
    var LoaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            LoaderComponent = (function () {
                function LoaderComponent(ds) {
                    this.isCompleted = false;
                    this.complete();
                }
                LoaderComponent.prototype.complete = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.isCompleted = true;
                    }, 3000);
                };
                LoaderComponent = __decorate([
                    core_1.Component({
                        selector: "loader",
                        providers: [data_1.DataServices]
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Loader</h1>\n        <p>Loading animation is based on Semantic loading element: <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/elements/loader.html\" target=\"_blank\">Semantic UI Loader</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>If you want to add loading animation to your Angular 2 app, add this code snippet inside your root app tag.</p>\n    <h4 class=\"ui header\">Demo</h4>\n    <p><a onClick=\"location.reload()\" href=\"#/elements/loader\">Refresh page</a></p>\n    <h4 class=\"ui header\">Code</h4>\n    <div class=\"ui form\">\n        <div class=\"field\">\n          <textarea rows=\"4\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<div class=\"ui active inverted dimmer\">\n    <div class=\"ui text large loader\">Loading</div>\n</div>\n          </textarea>\n        </div>\n      </div>\n   <h4 class=\"ui header\">Loader component</h4>\n   <sm-segment>\n        <sm-loader [complete]=\"isCompleted\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n        It has survived not only five centuries, but also the leap into electronic typesetting,\n        remaining essentially unchanged. It was popularised in the 1960s with the release of\n        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n        publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n   </sm-segment>\n   <h4 class=\"ui header\">Code</h4>\n       <div class=\"ui form\">\n        <div class=\"field\">\n          <textarea rows=\"5\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-segment>\n        <sm-loader [complete]=\"isCompleted\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n        ...\n</sm-segment>\n          </textarea>\n        </div>\n      </div>\n      \n      <br/><br/>\n      Page source: <a target=\"_blank\" href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/loader.ts\">\n        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/loader.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [data_1.DataServices])
                ], LoaderComponent);
                return LoaderComponent;
            })();
            exports_1("LoaderComponent", LoaderComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2xvYWRlci50cyJdLCJuYW1lcyI6WyJMb2FkZXJDb21wb25lbnQiLCJMb2FkZXJDb21wb25lbnQuY29uc3RydWN0b3IiLCJMb2FkZXJDb21wb25lbnQuY29tcGxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQStESUEseUJBQVlBLEVBQWdCQTtvQkFGNUJDLGdCQUFXQSxHQUFZQSxLQUFLQSxDQUFDQTtvQkFHekJBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUNwQkEsQ0FBQ0E7Z0JBQ0RELGtDQUFRQSxHQUFSQTtvQkFBQUUsaUJBSUNBO29CQUhHQSxVQUFVQSxDQUFDQTt3QkFDUEEsS0FBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQzVCQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDYkEsQ0FBQ0E7Z0JBdEVMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFNBQVNBLEVBQUVBLENBQUNBLG1CQUFZQSxDQUFDQTtxQkFDNUJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDRkEsVUFBVUEsRUFBRUEsQ0FBQ0EsOEJBQW1CQSxFQUFFQSw4QkFBbUJBLEVBQUVBLDBCQUFpQkEsQ0FBQ0E7d0JBQ3pFQSxRQUFRQSxFQUFFQSxtaEZBa0RiQTtxQkFDQUEsQ0FBQ0E7O29DQWNEQTtnQkFBREEsc0JBQUNBO1lBQURBLENBQUNBLEFBdkVELElBdUVDO1lBdkVELDZDQXVFQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGFcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibG9hZGVyXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VzXVxufSlcbkBWaWV3KHtcbiAgICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+TG9hZGVyPC9oMT5cbiAgICAgICAgPHA+TG9hZGluZyBhbmltYXRpb24gaXMgYmFzZWQgb24gU2VtYW50aWMgbG9hZGluZyBlbGVtZW50OiA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2xvYWRlci5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgTG9hZGVyPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPHA+SWYgeW91IHdhbnQgdG8gYWRkIGxvYWRpbmcgYW5pbWF0aW9uIHRvIHlvdXIgQW5ndWxhciAyIGFwcCwgYWRkIHRoaXMgY29kZSBzbmlwcGV0IGluc2lkZSB5b3VyIHJvb3QgYXBwIHRhZy48L3A+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgPHA+PGEgb25DbGljaz1cImxvY2F0aW9uLnJlbG9hZCgpXCIgaHJlZj1cIiMvZWxlbWVudHMvbG9hZGVyXCI+UmVmcmVzaCBwYWdlPC9hPjwvcD5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiAgICA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjRcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48ZGl2IGNsYXNzPVwidWkgYWN0aXZlIGludmVydGVkIGRpbW1lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSB0ZXh0IGxhcmdlIGxvYWRlclwiPkxvYWRpbmc8L2Rpdj5cbjwvZGl2PlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Mb2FkZXIgY29tcG9uZW50PC9oND5cbiAgIDxzbS1zZWdtZW50PlxuICAgICAgICA8c20tbG9hZGVyIFtjb21wbGV0ZV09XCJpc0NvbXBsZXRlZFwiIGNsYXNzPVwiaW52ZXJ0ZWRcIiB0ZXh0PVwiTG9hZGluZy4uLlwiPjwvc20tbG9hZGVyPlxuICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLFxuICAgICAgICB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLlxuICAgICAgICBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZyxcbiAgICAgICAgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mXG4gICAgICAgIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3BcbiAgICAgICAgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXG4gICA8L3NtLXNlZ21lbnQ+XG4gICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiAgICAgICA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20tc2VnbWVudD5cbiAgICAgICAgPHNtLWxvYWRlciBbY29tcGxldGVdPVwiaXNDb21wbGV0ZWRcIiBjbGFzcz1cImludmVydGVkXCIgdGV4dD1cIkxvYWRpbmcuLi5cIj48L3NtLWxvYWRlcj5cbiAgICAgICAgLi4uXG48L3NtLXNlZ21lbnQ+XG4gICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGJyLz48YnIvPlxuICAgICAgUGFnZSBzb3VyY2U6IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvbG9hZGVyLnRzXCI+XG4gICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljL2Jsb2IvbWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9sb2FkZXIudHNcbiAgICAgIDwvYT5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCB7XG5cbiAgICBpc0NvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoZHM6IERhdGFTZXJ2aWNlcykge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG59XG4iXX0=