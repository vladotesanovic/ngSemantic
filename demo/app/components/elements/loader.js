System.register(["angular2/core", "ng-semantic/semantic", "angular2/router", "../../services/data"], function(exports_1, context_1) {
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
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThEQTtnQkFJSSx5QkFBWSxFQUFnQjtvQkFGNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7b0JBR3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxrQ0FBUSxHQUFSO29CQUFBLGlCQUlDO29CQUhHLFVBQVUsQ0FBQzt3QkFDUCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDNUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNiLENBQUM7Z0JBcEVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsOEJBQW1CLEVBQUUsOEJBQW1CLEVBQUUsMEJBQWlCLENBQUM7d0JBQ3pFLFNBQVMsRUFBRSxDQUFDLG1CQUFZLENBQUM7d0JBQ3pCLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsbWhGQWtEYjtxQkFDQSxDQUFDOzttQ0FBQTtnQkFjRixzQkFBQztZQUFELENBQUMsQUFaRCxJQVlDO1lBWkQsNkNBWUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljL3NlbWFudGljXCI7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VzXSxcbiAgICBzZWxlY3RvcjogXCJsb2FkZXJcIixcbiAgICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkxvYWRlcjwvaDE+XG4gICAgICAgIDxwPkxvYWRpbmcgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIFNlbWFudGljIGxvYWRpbmcgZWxlbWVudDogPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9sb2FkZXIuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIExvYWRlcjwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxwPklmIHlvdSB3YW50IHRvIGFkZCBsb2FkaW5nIGFuaW1hdGlvbiB0byB5b3VyIEFuZ3VsYXIgMiBhcHAsIGFkZCB0aGlzIGNvZGUgc25pcHBldCBpbnNpZGUgeW91ciByb290IGFwcCB0YWcuPC9wPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxwPjxhIG9uQ2xpY2s9XCJsb2NhdGlvbi5yZWxvYWQoKVwiIGhyZWY9XCIjL2VsZW1lbnRzL2xvYWRlclwiPlJlZnJlc2ggcGFnZTwvYT48L3A+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gICAgPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI0XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPGRpdiBjbGFzcz1cInVpIGFjdGl2ZSBpbnZlcnRlZCBkaW1tZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgdGV4dCBsYXJnZSBsb2FkZXJcIj5Mb2FkaW5nPC9kaXY+XG48L2Rpdj5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+TG9hZGVyIGNvbXBvbmVudDwvaDQ+XG4gICA8c20tc2VnbWVudD5cbiAgICAgICAgPHNtLWxvYWRlciBbY29tcGxldGVdPVwiaXNDb21wbGV0ZWRcIiBjbGFzcz1cImludmVydGVkXCIgdGV4dD1cIkxvYWRpbmcuLi5cIj48L3NtLWxvYWRlcj5cbiAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcyxcbiAgICAgICAgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay5cbiAgICAgICAgSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsXG4gICAgICAgIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZlxuICAgICAgICBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wXG4gICAgICAgIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlxuICAgPC9zbS1zZWdtZW50PlxuICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gICAgICAgPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLXNlZ21lbnQ+XG4gICAgICAgIDxzbS1sb2FkZXIgW2NvbXBsZXRlXT1cImlzQ29tcGxldGVkXCIgY2xhc3M9XCJpbnZlcnRlZFwiIHRleHQ9XCJMb2FkaW5nLi4uXCI+PC9zbS1sb2FkZXI+XG4gICAgICAgIC4uLlxuPC9zbS1zZWdtZW50PlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxici8+PGJyLz5cbiAgICAgIFBhZ2Ugc291cmNlOiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2xvYWRlci50c1wiPlxuICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvbG9hZGVyLnRzXG4gICAgICA8L2E+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2FkZXJDb21wb25lbnQge1xuXG4gICAgaXNDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGRzOiBEYXRhU2VydmljZXMpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxufVxuIl19