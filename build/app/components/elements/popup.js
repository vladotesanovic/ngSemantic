System.register(["angular2/core", "../../directives/semantic/semantic"], function(exports_1) {
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
    var PopupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            PopupComponent = (function () {
                function PopupComponent() {
                }
                PopupComponent = __decorate([
                    core_1.Component({
                        selector: "popup",
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Popup &amp; Tooltip</h1>\n        <p>Semantic UI popup component <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/modules/popup.html\" target=\"_blank\">Semantic UI Popup</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo tooltip</h4>\n    <button class=\"ui button\" sm-dir-tooltip=\"Pellentesque habitant morbi tristique.\">Hover me</button>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<button class=\"ui button\" sm-dir-tooltip=\"text...\">Hover me</button>\n</textarea>\n        </div>\n      </div>\n      <div class=\"ui divider\"></div>\n      \n      <h4 class=\"ui header\">Demo popup</h4>\n    <button class=\"ui button green\" [sm-dir-popup]=\"{selector: 'my-popup', position: 'right center'}\">Click me</button>\n    <sm-popup selector=\"my-popup\">\n        <div class='header'>User Rating</div>\n        <div class='content'>\n            <div class='ui star rating'>\n                <i class='active icon'></i><i class='active icon'></i><i class='active icon'></i><i class='icon'></i><i class='icon'></i>\n            </div>\n        </div>\n    </sm-popup>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"7\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<button class=\"ui button green\" [sm-dir-popup]=\"{selector: 'my-popup', position: 'right center'}\">Click me</button>\n<sm-popup selector=\"my-popup\">\n    ...\n</sm-popup>\n</textarea>\n        </div>\n      </div>\n   \n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PopupComponent);
                return PopupComponent;
            })();
            exports_1("PopupComponent", PopupComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvcG9wdXAudHMiXSwibmFtZXMiOlsiUG9wdXBDb21wb25lbnQiLCJQb3B1cENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQXNENkJDLENBQUNBO2dCQXREOUJEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUdBLE9BQU9BO3FCQUNsQkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7d0JBQ3REQSxRQUFRQSxFQUFHQSwrMkRBOENYQTtxQkFDQUEsQ0FBQ0E7O21DQUU0QkE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQUFDQSxBQXREOUIsSUFzRDhCO1lBdEQ5QiwyQ0FzRDhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCIuLi8uLi9kaXJlY3RpdmVzL3NlbWFudGljL3NlbWFudGljXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvciA6IFwicG9wdXBcIixcbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcblx0dGVtcGxhdGUgOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+UG9wdXAgJmFtcDsgVG9vbHRpcDwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIHBvcHVwIGNvbXBvbmVudCA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+IFxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3BvcHVwLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBQb3B1cDwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gdG9vbHRpcDwvaDQ+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvblwiIHNtLWRpci10b29sdGlwPVwiUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZS5cIj5Ib3ZlciBtZTwvYnV0dG9uPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuPHRleHRhcmVhIHJvd3M9XCIyXCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvblwiIHNtLWRpci10b29sdGlwPVwidGV4dC4uLlwiPkhvdmVyIG1lPC9idXR0b24+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cbiAgICAgIFxuICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBwb3B1cDwvaDQ+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBncmVlblwiIFtzbS1kaXItcG9wdXBdPVwie3NlbGVjdG9yOiAnbXktcG9wdXAnLCBwb3NpdGlvbjogJ3JpZ2h0IGNlbnRlcid9XCI+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICA8c20tcG9wdXAgc2VsZWN0b3I9XCJteS1wb3B1cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPSdoZWFkZXInPlVzZXIgUmF0aW5nPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbnRlbnQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWkgc3RhciByYXRpbmcnPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPSdhY3RpdmUgaWNvbic+PC9pPjxpIGNsYXNzPSdhY3RpdmUgaWNvbic+PC9pPjxpIGNsYXNzPSdhY3RpdmUgaWNvbic+PC9pPjxpIGNsYXNzPSdpY29uJz48L2k+PGkgY2xhc3M9J2ljb24nPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NtLXBvcHVwPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuPHRleHRhcmVhIHJvd3M9XCI3XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBncmVlblwiIFtzbS1kaXItcG9wdXBdPVwie3NlbGVjdG9yOiAnbXktcG9wdXAnLCBwb3NpdGlvbjogJ3JpZ2h0IGNlbnRlcid9XCI+Q2xpY2sgbWU8L2J1dHRvbj5cbjxzbS1wb3B1cCBzZWxlY3Rvcj1cIm15LXBvcHVwXCI+XG4gICAgLi4uXG48L3NtLXBvcHVwPlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgIFxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgUG9wdXBDb21wb25lbnQge31cbiJdfQ==