System.register(["@angular/core", "ng-semantic", "../../services/data", "../../prismjs/prismjs"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, data_1, prismjs_1;
    var SegmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            },
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
            }],
        execute: function() {
            SegmentComponent = (function () {
                function SegmentComponent() {
                }
                SegmentComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        providers: [data_1.DataServices],
                        selector: "segment",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Segment</h1>\n\t<p>Semantic UI segment element <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/elements/segment.html\" target=\"_blank\">Semantic UI Segment</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-segment class=\"raised\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.\n    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>\n\n    <h4 class=\"ui header\">Code</h4>\n    <codeblock prismjs=\"html\">\n&lt;sm-segment class=\"raised\">...&lt;/sm-segment>\n</codeblock>\n      <h4 class=\"ui header\">Demo stacked</h4>\n    <sm-segment class=\"stacked\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.\n    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>\n\n    <h4 class=\"ui header\">Demo circular</h4>\n    <sm-segment class=\"circular\">\n\t<h2 class=\"ui header\">\n\t    Buy Now\n\t    <div class=\"sub header\">$10.99</div>\n\t</h2>\n    </sm-segment>\n\n    <h4 class=\"ui header\">Demo compact</h4>\n    <sm-segment class=\"compact\">\n\t<p>\n\t    Pellentesque habitant morbi tristique senectus et netus et malesuada.\n\t</p>\n    </sm-segment>\n\n    <h4 class=\"ui header\">Demo aligned</h4>\n    <sm-segment class=\"right aligned\">\n\t<p>\n\t    Pellentesque habitant morbi tristique senectus et netus et malesuada.\n\t</p>\n    </sm-segment>\n\n    <h4 class=\"ui header\">Demo colored</h4>\n    <sm-segment class=\"red\">\n\t<p>\n\t    Pellentesque habitant morbi tristique senectus et netus et malesuada.\n\t</p>\n    </sm-segment>\n    <sm-segment class=\"blue\">\n\t<p>\n\t    Pellentesque habitant morbi tristique senectus et netus et malesuada.\n\t</p>\n    </sm-segment>\n\n    <h4 class=\"ui header\">Demo inverted</h4>\n    <sm-segment class=\"inverted green\">\n\t<p>\n\t    Pellentesque habitant morbi tristique senectus et netus et malesuada.\n\t</p>\n    </sm-segment>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SegmentComponent);
                return SegmentComponent;
            }());
            exports_1("SegmentComponent", SegmentComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlZ21lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0RUE7Z0JBQUE7Z0JBQStCLENBQUM7Z0JBdkVoQztvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGlDQUFtQixFQUFFLGlDQUFtQixFQUFRLDRCQUFrQixFQUFRLDBCQUFnQixDQUFDO3dCQUN4RyxTQUFTLEVBQUUsQ0FBQyxtQkFBWSxDQUFDO3dCQUN6QixRQUFRLEVBQUcsU0FBUzt3QkFDcEIsUUFBUSxFQUFHLGsxRUFnRWQ7cUJBQ0EsQ0FBQzs7b0NBQUE7Z0JBRTZCLHVCQUFDO1lBQUQsQ0FBQyxBQUFoQyxJQUFnQztZQUFoQywrQ0FBZ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCAsIFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGFcIjtcbmltcG9ydCB7IENvZGVibG9ja0NvbXBvbmVudCwgUHJpc21Kc0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9wcmlzbWpzL3ByaXNtanNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIDxUeXBlPkNvZGVibG9ja0NvbXBvbmVudCwgPFR5cGU+UHJpc21Kc0RpcmVjdGl2ZV0sXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VzXSxcbiAgICBzZWxlY3RvciA6IFwic2VnbWVudFwiLFxuICAgIHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cblx0PGgxPlNlZ21lbnQ8L2gxPlxuXHQ8cD5TZW1hbnRpYyBVSSBzZWdtZW50IGVsZW1lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuXHQ8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9zZWdtZW50Lmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBTZWdtZW50PC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgPHNtLXNlZ21lbnQgY2xhc3M9XCJyYWlzZWRcIj5QZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cbiAgICBWZXN0aWJ1bHVtIHRvcnRvciBxdWFtLCBmZXVnaWF0IHZpdGFlLCB1bHRyaWNpZXMgZWdldCwgdGVtcG9yIHNpdCBhbWV0LCBhbnRlLiBEb25lYyBldSBsaWJlcm8gc2l0IGFtZXQgcXVhbSBlZ2VzdGFzIHNlbXBlci5cbiAgICBBZW5lYW4gdWx0cmljaWVzIG1pIHZpdGFlIGVzdC4gTWF1cmlzIHBsYWNlcmF0IGVsZWlmZW5kIGxlby48L3NtLXNlZ21lbnQ+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiAgICA8Y29kZWJsb2NrIHByaXNtanM9XCJodG1sXCI+XG4mbHQ7c20tc2VnbWVudCBjbGFzcz1cInJhaXNlZFwiPi4uLiZsdDsvc20tc2VnbWVudD5cbjwvY29kZWJsb2NrPlxuICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBzdGFja2VkPC9oND5cbiAgICA8c20tc2VnbWVudCBjbGFzcz1cInN0YWNrZWRcIj5QZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cbiAgICBWZXN0aWJ1bHVtIHRvcnRvciBxdWFtLCBmZXVnaWF0IHZpdGFlLCB1bHRyaWNpZXMgZWdldCwgdGVtcG9yIHNpdCBhbWV0LCBhbnRlLiBEb25lYyBldSBsaWJlcm8gc2l0IGFtZXQgcXVhbSBlZ2VzdGFzIHNlbXBlci5cbiAgICBBZW5lYW4gdWx0cmljaWVzIG1pIHZpdGFlIGVzdC4gTWF1cmlzIHBsYWNlcmF0IGVsZWlmZW5kIGxlby48L3NtLXNlZ21lbnQ+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGNpcmN1bGFyPC9oND5cbiAgICA8c20tc2VnbWVudCBjbGFzcz1cImNpcmN1bGFyXCI+XG5cdDxoMiBjbGFzcz1cInVpIGhlYWRlclwiPlxuXHQgICAgQnV5IE5vd1xuXHQgICAgPGRpdiBjbGFzcz1cInN1YiBoZWFkZXJcIj4kMTAuOTk8L2Rpdj5cblx0PC9oMj5cbiAgICA8L3NtLXNlZ21lbnQ+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGNvbXBhY3Q8L2g0PlxuICAgIDxzbS1zZWdtZW50IGNsYXNzPVwiY29tcGFjdFwiPlxuXHQ8cD5cblx0ICAgIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhLlxuXHQ8L3A+XG4gICAgPC9zbS1zZWdtZW50PlxuXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBhbGlnbmVkPC9oND5cbiAgICA8c20tc2VnbWVudCBjbGFzcz1cInJpZ2h0IGFsaWduZWRcIj5cblx0PHA+XG5cdCAgICBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYS5cblx0PC9wPlxuICAgIDwvc20tc2VnbWVudD5cblxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gY29sb3JlZDwvaDQ+XG4gICAgPHNtLXNlZ21lbnQgY2xhc3M9XCJyZWRcIj5cblx0PHA+XG5cdCAgICBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYS5cblx0PC9wPlxuICAgIDwvc20tc2VnbWVudD5cbiAgICA8c20tc2VnbWVudCBjbGFzcz1cImJsdWVcIj5cblx0PHA+XG5cdCAgICBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYS5cblx0PC9wPlxuICAgIDwvc20tc2VnbWVudD5cblxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gaW52ZXJ0ZWQ8L2g0PlxuICAgIDxzbS1zZWdtZW50IGNsYXNzPVwiaW52ZXJ0ZWQgZ3JlZW5cIj5cblx0PHA+XG5cdCAgICBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYS5cblx0PC9wPlxuICAgIDwvc20tc2VnbWVudD5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIFNlZ21lbnRDb21wb25lbnQge31cbiJdfQ==