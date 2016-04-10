System.register(["angular2/core", "ng-semantic", "angular2/router", "../../services/data"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, router_1, data_1;
    var LoaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
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
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        providers: [data_1.DataServices],
                        selector: "loader",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Loader</h1>\n        <p>Loading animation is based on Semantic loading element: <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/elements/loader.html\" target=\"_blank\">Semantic UI Loader</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>If you want to add loading animation to your Angular 2 app, add this code snippet inside your root app tag.</p>\n    <h4 class=\"ui header\">Demo</h4>\n    <p><a onClick=\"location.reload()\" href=\"#/elements/loader\">Refresh page</a></p>\n    <h4 class=\"ui header\">Code</h4>\n    <div class=\"ui form\">\n        <div class=\"field\">\n          <textarea rows=\"4\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<div class=\"ui active inverted dimmer\">\n    <div class=\"ui text large loader\">Loading</div>\n</div>\n          </textarea>\n        </div>\n      </div>\n   <h4 class=\"ui header\">Loader component</h4>\n   <sm-segment>\n        <sm-loader [complete]=\"isCompleted\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n        It has survived not only five centuries, but also the leap into electronic typesetting,\n        remaining essentially unchanged. It was popularised in the 1960s with the release of\n        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n        publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n   </sm-segment>\n   <h4 class=\"ui header\">Code</h4>\n       <div class=\"ui form\">\n        <div class=\"field\">\n          <textarea rows=\"5\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-segment>\n        <sm-loader [complete]=\"isCompleted\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n        ...\n</sm-segment>\n          </textarea>\n        </div>\n      </div>\n      \n      <br/><br/>\n      Page source: <a target=\"_blank\" href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/loader.ts\">\n        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/loader.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [data_1.DataServices])
                ], LoaderComponent);
                return LoaderComponent;
            }());
            exports_1("LoaderComponent", LoaderComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThEQTtnQkFJSSx5QkFBWSxFQUFnQjtvQkFGNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7b0JBR3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxrQ0FBUSxHQUFSO29CQUFBLGlCQUlDO29CQUhHLFVBQVUsQ0FBQzt3QkFDUCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDNUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNiLENBQUM7Z0JBcEVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQUUsMEJBQWlCLENBQUM7d0JBQ3pFLFNBQVMsRUFBRSxDQUFDLG1CQUFZLENBQUM7d0JBQ3pCLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsbWhGQWtEYjtxQkFDQSxDQUFDOzttQ0FBQTtnQkFjRixzQkFBQztZQUFELENBQUMsQUFaRCxJQVlDO1lBWkQsNkNBWUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtEYXRhU2VydmljZXNdLFxyXG4gICAgc2VsZWN0b3I6IFwibG9hZGVyXCIsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPkxvYWRlcjwvaDE+XHJcbiAgICAgICAgPHA+TG9hZGluZyBhbmltYXRpb24gaXMgYmFzZWQgb24gU2VtYW50aWMgbG9hZGluZyBlbGVtZW50OiA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvbG9hZGVyLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBMb2FkZXI8L2E+PC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cclxuICAgIDxwPklmIHlvdSB3YW50IHRvIGFkZCBsb2FkaW5nIGFuaW1hdGlvbiB0byB5b3VyIEFuZ3VsYXIgMiBhcHAsIGFkZCB0aGlzIGNvZGUgc25pcHBldCBpbnNpZGUgeW91ciByb290IGFwcCB0YWcuPC9wPlxyXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XHJcbiAgICA8cD48YSBvbkNsaWNrPVwibG9jYXRpb24ucmVsb2FkKClcIiBocmVmPVwiIy9lbGVtZW50cy9sb2FkZXJcIj5SZWZyZXNoIHBhZ2U8L2E+PC9wPlxyXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI0XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxyXG48ZGl2IGNsYXNzPVwidWkgYWN0aXZlIGludmVydGVkIGRpbW1lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInVpIHRleHQgbGFyZ2UgbG9hZGVyXCI+TG9hZGluZzwvZGl2PlxyXG48L2Rpdj5cclxuICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Mb2FkZXIgY29tcG9uZW50PC9oND5cclxuICAgPHNtLXNlZ21lbnQ+XHJcbiAgICAgICAgPHNtLWxvYWRlciBbY29tcGxldGVdPVwiaXNDb21wbGV0ZWRcIiBjbGFzcz1cImludmVydGVkXCIgdGV4dD1cIkxvYWRpbmcuLi5cIj48L3NtLWxvYWRlcj5cclxuICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxyXG4gICAgICAgIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsXHJcbiAgICAgICAgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay5cclxuICAgICAgICBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZyxcclxuICAgICAgICByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2ZcclxuICAgICAgICBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wXHJcbiAgICAgICAgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXHJcbiAgIDwvc20tc2VnbWVudD5cclxuICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxyXG48c20tc2VnbWVudD5cclxuICAgICAgICA8c20tbG9hZGVyIFtjb21wbGV0ZV09XCJpc0NvbXBsZXRlZFwiIGNsYXNzPVwiaW52ZXJ0ZWRcIiB0ZXh0PVwiTG9hZGluZy4uLlwiPjwvc20tbG9hZGVyPlxyXG4gICAgICAgIC4uLlxyXG48L3NtLXNlZ21lbnQ+XHJcbiAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxici8+PGJyLz5cclxuICAgICAgUGFnZSBzb3VyY2U6IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvbG9hZGVyLnRzXCI+XHJcbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2xvYWRlci50c1xyXG4gICAgICA8L2E+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IHtcclxuXHJcbiAgICBpc0NvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRzOiBEYXRhU2VydmljZXMpIHtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbn1cclxuIl19