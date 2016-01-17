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
    var SegmentComponent;
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
            SegmentComponent = (function () {
                function SegmentComponent() {
                }
                SegmentComponent = __decorate([
                    core_1.Component({
                        selector: "segment",
                        providers: [data_1.DataServices]
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Segment</h1>\n        <p>Semantic UI segment element <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/elements/segment.html\" target=\"_blank\">Semantic UI Segment</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo raised</h4>\n    <sm-segment class=\"raised\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. \n    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-segment class=\"raised\">...</sm-segment>\n</textarea>\n        </div>\n      </div>\n      <div class=\"ui divider\"></div>\n      <h4 class=\"ui header\">Demo stacked</h4>\n    <sm-segment class=\"stacked\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. \n    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-segment class=\"stacked\">...</sm-segment>\n</textarea>\n        </div>\n      </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SegmentComponent);
                return SegmentComponent;
            })();
            exports_1("SegmentComponent", SegmentComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9zZWdtZW50LnRzIl0sIm5hbWVzIjpbIlNlZ21lbnRDb21wb25lbnQiLCJTZWdtZW50Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7Z0JBOEMrQkMsQ0FBQ0E7Z0JBOUNoQ0Q7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBR0EsU0FBU0E7d0JBQ2pCQSxTQUFTQSxFQUFFQSxDQUFDQSxtQkFBWUEsQ0FBQ0E7cUJBQzVCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFtQkEsRUFBRUEsOEJBQW1CQSxDQUFDQTt3QkFDdERBLFFBQVFBLEVBQUdBLDZ4REFxQ1hBO3FCQUNBQSxDQUFDQTs7cUNBRThCQTtnQkFBREEsdUJBQUNBO1lBQURBLENBQUNBLEFBOUNoQyxJQThDZ0M7WUE5Q2hDLCtDQThDZ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljL3NlbWFudGljXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3IgOiBcInNlZ21lbnRcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhU2VydmljZXNdXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG5cdHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPlNlZ21lbnQ8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBzZWdtZW50IGVsZW1lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvc2VnbWVudC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgU2VnbWVudDwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gcmFpc2VkPC9oND5cbiAgICA8c20tc2VnbWVudCBjbGFzcz1cInJhaXNlZFwiPlBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBcbiAgICBWZXN0aWJ1bHVtIHRvcnRvciBxdWFtLCBmZXVnaWF0IHZpdGFlLCB1bHRyaWNpZXMgZWdldCwgdGVtcG9yIHNpdCBhbWV0LCBhbnRlLiBEb25lYyBldSBsaWJlcm8gc2l0IGFtZXQgcXVhbSBlZ2VzdGFzIHNlbXBlci4gXG4gICAgQWVuZWFuIHVsdHJpY2llcyBtaSB2aXRhZSBlc3QuIE1hdXJpcyBwbGFjZXJhdCBlbGVpZmVuZCBsZW8uPC9zbS1zZWdtZW50PlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuPHRleHRhcmVhIHJvd3M9XCIyXCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLXNlZ21lbnQgY2xhc3M9XCJyYWlzZWRcIj4uLi48L3NtLXNlZ21lbnQ+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cbiAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gc3RhY2tlZDwvaDQ+XG4gICAgPHNtLXNlZ21lbnQgY2xhc3M9XCJzdGFja2VkXCI+UGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIFxuICAgIFZlc3RpYnVsdW0gdG9ydG9yIHF1YW0sIGZldWdpYXQgdml0YWUsIHVsdHJpY2llcyBlZ2V0LCB0ZW1wb3Igc2l0IGFtZXQsIGFudGUuIERvbmVjIGV1IGxpYmVybyBzaXQgYW1ldCBxdWFtIGVnZXN0YXMgc2VtcGVyLiBcbiAgICBBZW5lYW4gdWx0cmljaWVzIG1pIHZpdGFlIGVzdC4gTWF1cmlzIHBsYWNlcmF0IGVsZWlmZW5kIGxlby48L3NtLXNlZ21lbnQ+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG48dGV4dGFyZWEgcm93cz1cIjJcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20tc2VnbWVudCBjbGFzcz1cInN0YWNrZWRcIj4uLi48L3NtLXNlZ21lbnQ+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgU2VnbWVudENvbXBvbmVudCB7fVxuIl19