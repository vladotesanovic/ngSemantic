System.register(["@angular/core", "ng-semantic", "@angular/router", "../../services/data", "../../prismjs/prismjs"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, router_1, data_1, prismjs_1;
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
            },
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
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
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, router_1.ROUTER_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        providers: [data_1.DataServices],
                        selector: "sm-page-loader",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Loader</h1>\n        <p>Loading animation is based on Semantic loading element: <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/elements/loader.html\" target=\"_blank\">Semantic UI Loader</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>If you want to add loading animation to your Angular 2 app, add this code snippet inside your root app tag.</p>\n    <h4 class=\"ui header\">Demo</h4>\n    <p><a onClick=\"location.reload()\" href=\"#/elements/loader\">Refresh page</a></p>\n    \n        <h4 class=\"ui header\">Code</h4>\n    <codeblock prismjs=\"html\">\n&lt;div class=\"ui active inverted dimmer\">\n    &lt;div class=\"ui text large loader\">Loading&lt;/div>\n&lt;/div>\n</codeblock>\n\n   <h4 class=\"ui header\">Loader component</h4>\n   <sm-segment>\n        <sm-loader [complete]=\"isCompleted\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n        It has survived not only five centuries, but also the leap into electronic typesetting,\n        remaining essentially unchanged. It was popularised in the 1960s with the release of\n        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n        publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n   </sm-segment>\n   <h4 class=\"ui header\">Code</h4>\n    <codeblock prismjs=\"html\">\n&lt;sm-segment>\n        &lt;sm-loader [complete]=\"isCompleted\" class=\"inverted\" text=\"Loading...\">&lt;/sm-loader>\n        ...\n&lt;/sm-segment>\n</codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [data_1.DataServices])
                ], LoaderComponent);
                return LoaderComponent;
            }());
            exports_1("LoaderComponent", LoaderComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0RBO2dCQUlJLHlCQUFZLEVBQWdCO29CQUY1QixnQkFBVyxHQUFZLEtBQUssQ0FBQztvQkFHekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixDQUFDO2dCQUNELGtDQUFRLEdBQVI7b0JBQUEsaUJBSUM7b0JBSEcsVUFBVSxDQUFDO3dCQUNQLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQztnQkF6REw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxpQ0FBbUIsRUFBRSxpQ0FBbUIsRUFBRSwwQkFBaUIsRUFBUSw0QkFBa0IsRUFBUSwwQkFBZ0IsQ0FBQzt3QkFDM0gsU0FBUyxFQUFFLENBQUMsbUJBQVksQ0FBQzt3QkFDekIsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLHMzREF1Q2I7cUJBQ0EsQ0FBQzs7bUNBQUE7Z0JBY0Ysc0JBQUM7WUFBRCxDQUFDLEFBWkQsSUFZQztZQVpELDZDQVlDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGFcIjtcbmltcG9ydCB7IENvZGVibG9ja0NvbXBvbmVudCwgUHJpc21Kc0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9wcmlzbWpzL3ByaXNtanNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLCA8VHlwZT5Db2RlYmxvY2tDb21wb25lbnQsIDxUeXBlPlByaXNtSnNEaXJlY3RpdmVdLFxuICAgIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlc10sXG4gICAgc2VsZWN0b3I6IFwic20tcGFnZS1sb2FkZXJcIixcbiAgICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkxvYWRlcjwvaDE+XG4gICAgICAgIDxwPkxvYWRpbmcgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIFNlbWFudGljIGxvYWRpbmcgZWxlbWVudDogPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9sb2FkZXIuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIExvYWRlcjwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxwPklmIHlvdSB3YW50IHRvIGFkZCBsb2FkaW5nIGFuaW1hdGlvbiB0byB5b3VyIEFuZ3VsYXIgMiBhcHAsIGFkZCB0aGlzIGNvZGUgc25pcHBldCBpbnNpZGUgeW91ciByb290IGFwcCB0YWcuPC9wPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxwPjxhIG9uQ2xpY2s9XCJsb2NhdGlvbi5yZWxvYWQoKVwiIGhyZWY9XCIjL2VsZW1lbnRzL2xvYWRlclwiPlJlZnJlc2ggcGFnZTwvYT48L3A+XG4gICAgXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuICAgIDxjb2RlYmxvY2sgcHJpc21qcz1cImh0bWxcIj5cbiZsdDtkaXYgY2xhc3M9XCJ1aSBhY3RpdmUgaW52ZXJ0ZWQgZGltbWVyXCI+XG4gICAgJmx0O2RpdiBjbGFzcz1cInVpIHRleHQgbGFyZ2UgbG9hZGVyXCI+TG9hZGluZyZsdDsvZGl2PlxuJmx0Oy9kaXY+XG48L2NvZGVibG9jaz5cblxuICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+TG9hZGVyIGNvbXBvbmVudDwvaDQ+XG4gICA8c20tc2VnbWVudD5cbiAgICAgICAgPHNtLWxvYWRlciBbY29tcGxldGVdPVwiaXNDb21wbGV0ZWRcIiBjbGFzcz1cImludmVydGVkXCIgdGV4dD1cIkxvYWRpbmcuLi5cIj48L3NtLWxvYWRlcj5cbiAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcyxcbiAgICAgICAgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay5cbiAgICAgICAgSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsXG4gICAgICAgIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZlxuICAgICAgICBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wXG4gICAgICAgIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlxuICAgPC9zbS1zZWdtZW50PlxuICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gICAgPGNvZGVibG9jayBwcmlzbWpzPVwiaHRtbFwiPlxuJmx0O3NtLXNlZ21lbnQ+XG4gICAgICAgICZsdDtzbS1sb2FkZXIgW2NvbXBsZXRlXT1cImlzQ29tcGxldGVkXCIgY2xhc3M9XCJpbnZlcnRlZFwiIHRleHQ9XCJMb2FkaW5nLi4uXCI+Jmx0Oy9zbS1sb2FkZXI+XG4gICAgICAgIC4uLlxuJmx0Oy9zbS1zZWdtZW50PlxuPC9jb2RlYmxvY2s+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2FkZXJDb21wb25lbnQge1xuXG4gICAgaXNDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGRzOiBEYXRhU2VydmljZXMpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxufVxuIl19