System.register(["angular2/core", "../../directives/semantic/semantic", "../../services/data"], function(exports_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9zZWdtZW50LnRzIl0sIm5hbWVzIjpbIlNlZ21lbnRDb21wb25lbnQiLCJTZWdtZW50Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7Z0JBOEMrQkMsQ0FBQ0E7Z0JBOUNoQ0Q7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBR0EsU0FBU0E7d0JBQ2pCQSxTQUFTQSxFQUFFQSxDQUFDQSxtQkFBWUEsQ0FBQ0E7cUJBQzVCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFtQkEsRUFBRUEsOEJBQW1CQSxDQUFDQTt3QkFDdERBLFFBQVFBLEVBQUdBLDZ4REFxQ1hBO3FCQUNBQSxDQUFDQTs7cUNBRThCQTtnQkFBREEsdUJBQUNBO1lBQURBLENBQUNBLEFBOUNoQyxJQThDZ0M7WUE5Q2hDLCtDQThDZ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZXMvc2VtYW50aWMvc2VtYW50aWNcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvciA6IFwic2VnbWVudFwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlc11cbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcblx0dGVtcGxhdGUgOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+U2VnbWVudDwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIHNlZ21lbnQgZWxlbWVudCA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+IFxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9zZWdtZW50Lmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBTZWdtZW50PC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyByYWlzZWQ8L2g0PlxuICAgIDxzbS1zZWdtZW50IGNsYXNzPVwicmFpc2VkXCI+UGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIFxuICAgIFZlc3RpYnVsdW0gdG9ydG9yIHF1YW0sIGZldWdpYXQgdml0YWUsIHVsdHJpY2llcyBlZ2V0LCB0ZW1wb3Igc2l0IGFtZXQsIGFudGUuIERvbmVjIGV1IGxpYmVybyBzaXQgYW1ldCBxdWFtIGVnZXN0YXMgc2VtcGVyLiBcbiAgICBBZW5lYW4gdWx0cmljaWVzIG1pIHZpdGFlIGVzdC4gTWF1cmlzIHBsYWNlcmF0IGVsZWlmZW5kIGxlby48L3NtLXNlZ21lbnQ+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG48dGV4dGFyZWEgcm93cz1cIjJcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20tc2VnbWVudCBjbGFzcz1cInJhaXNlZFwiPi4uLjwvc20tc2VnbWVudD5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidWkgZGl2aWRlclwiPjwvZGl2PlxuICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBzdGFja2VkPC9oND5cbiAgICA8c20tc2VnbWVudCBjbGFzcz1cInN0YWNrZWRcIj5QZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gXG4gICAgVmVzdGlidWx1bSB0b3J0b3IgcXVhbSwgZmV1Z2lhdCB2aXRhZSwgdWx0cmljaWVzIGVnZXQsIHRlbXBvciBzaXQgYW1ldCwgYW50ZS4gRG9uZWMgZXUgbGliZXJvIHNpdCBhbWV0IHF1YW0gZWdlc3RhcyBzZW1wZXIuIFxuICAgIEFlbmVhbiB1bHRyaWNpZXMgbWkgdml0YWUgZXN0LiBNYXVyaXMgcGxhY2VyYXQgZWxlaWZlbmQgbGVvLjwvc20tc2VnbWVudD5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiMlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1zZWdtZW50IGNsYXNzPVwic3RhY2tlZFwiPi4uLjwvc20tc2VnbWVudD5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWdtZW50Q29tcG9uZW50IHt9XG4iXX0=