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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvcG9wdXAudHMiXSwibmFtZXMiOlsiUG9wdXBDb21wb25lbnQiLCJQb3B1cENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQXNENkJDLENBQUNBO2dCQXREOUJEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUdBLE9BQU9BO3FCQUNsQkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7d0JBQ3REQSxRQUFRQSxFQUFHQSwrMkRBOENYQTtxQkFDQUEsQ0FBQ0E7O21DQUU0QkE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQUFDQSxBQXREOUIsSUFzRDhCO1lBdEQ5QiwyQ0FzRDhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpYy9zZW1hbnRpY1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3IgOiBcInBvcHVwXCIsXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG5cdHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPlBvcHVwICZhbXA7IFRvb2x0aXA8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBwb3B1cCBjb21wb25lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9wb3B1cC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgUG9wdXA8L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIHRvb2x0aXA8L2g0PlxuICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b25cIiBzbS1kaXItdG9vbHRpcD1cIlBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUuXCI+SG92ZXIgbWU8L2J1dHRvbj5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiMlwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxidXR0b24gY2xhc3M9XCJ1aSBidXR0b25cIiBzbS1kaXItdG9vbHRpcD1cInRleHQuLi5cIj5Ib3ZlciBtZTwvYnV0dG9uPlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG4gICAgICBcbiAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gcG9wdXA8L2g0PlxuICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gZ3JlZW5cIiBbc20tZGlyLXBvcHVwXT1cIntzZWxlY3RvcjogJ215LXBvcHVwJywgcG9zaXRpb246ICdyaWdodCBjZW50ZXInfVwiPkNsaWNrIG1lPC9idXR0b24+XG4gICAgPHNtLXBvcHVwIHNlbGVjdG9yPVwibXktcG9wdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0naGVhZGVyJz5Vc2VyIFJhdGluZzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdjb250ZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpIHN0YXIgcmF0aW5nJz5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz0nYWN0aXZlIGljb24nPjwvaT48aSBjbGFzcz0nYWN0aXZlIGljb24nPjwvaT48aSBjbGFzcz0nYWN0aXZlIGljb24nPjwvaT48aSBjbGFzcz0naWNvbic+PC9pPjxpIGNsYXNzPSdpY29uJz48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zbS1wb3B1cD5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiN1wiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gZ3JlZW5cIiBbc20tZGlyLXBvcHVwXT1cIntzZWxlY3RvcjogJ215LXBvcHVwJywgcG9zaXRpb246ICdyaWdodCBjZW50ZXInfVwiPkNsaWNrIG1lPC9idXR0b24+XG48c20tcG9wdXAgc2VsZWN0b3I9XCJteS1wb3B1cFwiPlxuICAgIC4uLlxuPC9zbS1wb3B1cD5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICBcbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29tcG9uZW50IHt9XG4iXX0=