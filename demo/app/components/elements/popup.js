System.register(["angular2/core", "ng-semantic/semantic"], function(exports_1) {
    "use strict";
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
            }());
            exports_1("PopupComponent", PopupComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlEQTtnQkFBQTtnQkFBNkIsQ0FBQztnQkF0RDlCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFHLE9BQU87cUJBQ2xCLENBQUM7b0JBQ0QsV0FBSSxDQUFDO3dCQUNMLFVBQVUsRUFBRSxDQUFDLDhCQUFtQixFQUFFLDhCQUFtQixDQUFDO3dCQUN0RCxRQUFRLEVBQUcsKzJEQThDWDtxQkFDQSxDQUFDOztrQ0FBQTtnQkFFMkIscUJBQUM7WUFBRCxDQUFDLEFBQTlCLElBQThCO1lBQTlCLDJDQUE4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yIDogXCJwb3B1cFwiLFxufSlcbkBWaWV3KHtcblx0ZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuXHR0ZW1wbGF0ZSA6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5Qb3B1cCAmYW1wOyBUb29sdGlwPC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgcG9wdXAgY29tcG9uZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT4gXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvcG9wdXAuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIFBvcHVwPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyB0b29sdGlwPC9oND5cbiAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uXCIgc20tZGlyLXRvb2x0aXA9XCJQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlLlwiPkhvdmVyIG1lPC9idXR0b24+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG48dGV4dGFyZWEgcm93cz1cIjJcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uXCIgc20tZGlyLXRvb2x0aXA9XCJ0ZXh0Li4uXCI+SG92ZXIgbWU8L2J1dHRvbj5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidWkgZGl2aWRlclwiPjwvZGl2PlxuICAgICAgXG4gICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIHBvcHVwPC9oND5cbiAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIGdyZWVuXCIgW3NtLWRpci1wb3B1cF09XCJ7c2VsZWN0b3I6ICdteS1wb3B1cCcsIHBvc2l0aW9uOiAncmlnaHQgY2VudGVyJ31cIj5DbGljayBtZTwvYnV0dG9uPlxuICAgIDxzbS1wb3B1cCBzZWxlY3Rvcj1cIm15LXBvcHVwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9J2hlYWRlcic+VXNlciBSYXRpbmc8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nY29udGVudCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aSBzdGFyIHJhdGluZyc+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9J2FjdGl2ZSBpY29uJz48L2k+PGkgY2xhc3M9J2FjdGl2ZSBpY29uJz48L2k+PGkgY2xhc3M9J2FjdGl2ZSBpY29uJz48L2k+PGkgY2xhc3M9J2ljb24nPjwvaT48aSBjbGFzcz0naWNvbic+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc20tcG9wdXA+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG48dGV4dGFyZWEgcm93cz1cIjdcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIGdyZWVuXCIgW3NtLWRpci1wb3B1cF09XCJ7c2VsZWN0b3I6ICdteS1wb3B1cCcsIHBvc2l0aW9uOiAncmlnaHQgY2VudGVyJ31cIj5DbGljayBtZTwvYnV0dG9uPlxuPHNtLXBvcHVwIHNlbGVjdG9yPVwibXktcG9wdXBcIj5cbiAgICAuLi5cbjwvc20tcG9wdXA+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgXG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQb3B1cENvbXBvbmVudCB7fVxuIl19