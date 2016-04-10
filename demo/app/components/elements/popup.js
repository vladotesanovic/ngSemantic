System.register(["angular2/core", "ng-semantic"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1;
    var PopupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            }],
        execute: function() {
            PopupComponent = (function () {
                function PopupComponent() {
                }
                PopupComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES],
                        selector: "popup",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Popup &amp; Tooltip</h1>\n        <p>Semantic UI popup component <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/modules/popup.html\" target=\"_blank\">Semantic UI Popup</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo tooltip</h4>\n    <button class=\"ui button\" sm-dir-tooltip=\"Pellentesque habitant morbi tristique.\">Hover me</button>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<button class=\"ui button\" sm-dir-tooltip=\"text...\">Hover me</button>\n</textarea>\n        </div>\n      </div>\n      <div class=\"ui divider\"></div>\n      \n      <h4 class=\"ui header\">Demo popup</h4>\n    <button class=\"ui button green\" [sm-dir-popup]=\"{selector: 'my-popup', position: 'right center'}\">Click me</button>\n    <sm-popup selector=\"my-popup\">\n        <div class='header'>User Rating</div>\n        <div class='content'>\n            <div class='ui star rating'>\n                <i class='active icon'></i><i class='active icon'></i><i class='active icon'></i><i class='icon'></i><i class='icon'></i>\n            </div>\n        </div>\n    </sm-popup>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"7\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<button class=\"ui button green\" [sm-dir-popup]=\"{selector: 'my-popup', position: 'right center'}\">Click me</button>\n<sm-popup selector=\"my-popup\">\n    ...\n</sm-popup>\n</textarea>\n        </div>\n      </div>\n   \n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PopupComponent);
                return PopupComponent;
            }());
            exports_1("PopupComponent", PopupComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1REE7Z0JBQUE7Z0JBQTZCLENBQUM7Z0JBcEQ5QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGlDQUFtQixFQUFFLGlDQUFtQixDQUFDO3dCQUN0RCxRQUFRLEVBQUcsT0FBTzt3QkFDbEIsUUFBUSxFQUFHLCsyREE4Q2Q7cUJBQ0EsQ0FBQzs7a0NBQUE7Z0JBRTJCLHFCQUFDO1lBQUQsQ0FBQyxBQUE5QixJQUE4QjtZQUE5QiwyQ0FBOEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxyXG4gICAgc2VsZWN0b3IgOiBcInBvcHVwXCIsXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5Qb3B1cCAmYW1wOyBUb29sdGlwPC9oMT5cclxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBwb3B1cCBjb21wb25lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcclxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3BvcHVwLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBQb3B1cDwvYT48L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxyXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyB0b29sdGlwPC9oND5cclxuICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b25cIiBzbS1kaXItdG9vbHRpcD1cIlBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUuXCI+SG92ZXIgbWU8L2J1dHRvbj5cclxuICAgIFxyXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XHJcbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG48dGV4dGFyZWEgcm93cz1cIjJcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XHJcbjxidXR0b24gY2xhc3M9XCJ1aSBidXR0b25cIiBzbS1kaXItdG9vbHRpcD1cInRleHQuLi5cIj5Ib3ZlciBtZTwvYnV0dG9uPlxyXG48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gcG9wdXA8L2g0PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBncmVlblwiIFtzbS1kaXItcG9wdXBdPVwie3NlbGVjdG9yOiAnbXktcG9wdXAnLCBwb3NpdGlvbjogJ3JpZ2h0IGNlbnRlcid9XCI+Q2xpY2sgbWU8L2J1dHRvbj5cclxuICAgIDxzbS1wb3B1cCBzZWxlY3Rvcj1cIm15LXBvcHVwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0naGVhZGVyJz5Vc2VyIFJhdGluZzwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aSBzdGFyIHJhdGluZyc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz0nYWN0aXZlIGljb24nPjwvaT48aSBjbGFzcz0nYWN0aXZlIGljb24nPjwvaT48aSBjbGFzcz0nYWN0aXZlIGljb24nPjwvaT48aSBjbGFzcz0naWNvbic+PC9pPjxpIGNsYXNzPSdpY29uJz48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zbS1wb3B1cD5cclxuICAgIFxyXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XHJcbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG48dGV4dGFyZWEgcm93cz1cIjdcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XHJcbjxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gZ3JlZW5cIiBbc20tZGlyLXBvcHVwXT1cIntzZWxlY3RvcjogJ215LXBvcHVwJywgcG9zaXRpb246ICdyaWdodCBjZW50ZXInfVwiPkNsaWNrIG1lPC9idXR0b24+XHJcbjxzbS1wb3B1cCBzZWxlY3Rvcj1cIm15LXBvcHVwXCI+XHJcbiAgICAuLi5cclxuPC9zbS1wb3B1cD5cclxuPC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwQ29tcG9uZW50IHt9XHJcbiJdfQ==