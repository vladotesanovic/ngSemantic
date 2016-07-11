System.register(["@angular/core", "ng-semantic", "../../prismjs/prismjs"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, prismjs_1;
    var PopupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
            }],
        execute: function() {
            PopupComponent = (function () {
                function PopupComponent() {
                }
                PopupComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        selector: "sm-page-popup",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Popup &amp; Tooltip</h1>\n        <p>Semantic UI Popup component <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/modules/popup.html\" target=\"_blank\">Semantic UI Popup</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo tooltip ( pure CSS )</h4>\n    <button class=\"ui button\" smDirTooltip=\"Pellentesque habitant morbi tristique.\" smDirPosition=\"right center\">Hover me</button>\n    \n    <h4 class=\"ui header\">Code</h4>\n<sm-codeblock smPrismjs=\"html\">\n&lt;button class=\"ui button\" smDirTooltip=\"text...\" smDirPosition=\"right center\">Hover me&lt;/button>\n</sm-codeblock>\n      <div class=\"ui horizontal section icon divider\"><i class=\"icon setting\"></i></div>\n      \n      <h4 class=\"ui header\">Demo popup</h4>\n    <button class=\"ui button green\" (click)=\"myPopup.show($event, {position: 'right center'})\">Click me</button>\n    <sm-popup #myPopup>\n        <sm-card class=\"card\">\n            <card-title> Kristy </card-title>\n            <card-subtitle> Joined in 2013 </card-subtitle>\n            <card-content>\n                Kristy is an art director living in New York.\n            </card-content>\n            <sm-button class=\"bottom attached fluid\" icon=\"add\">Add friend</sm-button>\n        </sm-card>\n    </sm-popup>\n    \n    <h4 class=\"ui header\">Code</h4>\n        <sm-codeblock smPrismjs=\"html\">\n&lt;button class=\"ui button green\" (click)=\"myPopup.show($event, {position: 'right center'})\">Click me&lt;/button>\n&lt;<sm-popup></sm-popup> #myPopup>\n    ...\n&lt;/sm-popup>\n    </sm-codeblock>   \n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PopupComponent);
                return PopupComponent;
            }());
            exports_1("PopupComponent", PopupComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlEQTtnQkFBQTtnQkFBNkIsQ0FBQztnQkE3QzlCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQVEsNEJBQWtCLEVBQVEsMEJBQWdCLENBQUM7d0JBQ3hHLFFBQVEsRUFBRyxlQUFlO3dCQUMxQixRQUFRLEVBQUcsb3REQXVDZDtxQkFDQSxDQUFDOztrQ0FBQTtnQkFFMkIscUJBQUM7WUFBRCxDQUFDLEFBQTlCLElBQThCO1lBQTlCLDJDQUE4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XG5pbXBvcnQgeyBDb2RlYmxvY2tDb21wb25lbnQsIFByaXNtSnNEaXJlY3RpdmUgfSBmcm9tIFwiLi4vLi4vcHJpc21qcy9wcmlzbWpzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCA8VHlwZT5Db2RlYmxvY2tDb21wb25lbnQsIDxUeXBlPlByaXNtSnNEaXJlY3RpdmVdLFxuICAgIHNlbGVjdG9yIDogXCJzbS1wYWdlLXBvcHVwXCIsXG4gICAgdGVtcGxhdGUgOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+UG9wdXAgJmFtcDsgVG9vbHRpcDwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIFBvcHVwIGNvbXBvbmVudCA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+IFxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3BvcHVwLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBQb3B1cDwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gdG9vbHRpcCAoIHB1cmUgQ1NTICk8L2g0PlxuICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b25cIiBzbURpclRvb2x0aXA9XCJQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlLlwiIHNtRGlyUG9zaXRpb249XCJyaWdodCBjZW50ZXJcIj5Ib3ZlciBtZTwvYnV0dG9uPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuPHNtLWNvZGVibG9jayBzbVByaXNtanM9XCJodG1sXCI+XG4mbHQ7YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uXCIgc21EaXJUb29sdGlwPVwidGV4dC4uLlwiIHNtRGlyUG9zaXRpb249XCJyaWdodCBjZW50ZXJcIj5Ib3ZlciBtZSZsdDsvYnV0dG9uPlxuPC9zbS1jb2RlYmxvY2s+XG4gICAgICA8ZGl2IGNsYXNzPVwidWkgaG9yaXpvbnRhbCBzZWN0aW9uIGljb24gZGl2aWRlclwiPjxpIGNsYXNzPVwiaWNvbiBzZXR0aW5nXCI+PC9pPjwvZGl2PlxuICAgICAgXG4gICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIHBvcHVwPC9oND5cbiAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIGdyZWVuXCIgKGNsaWNrKT1cIm15UG9wdXAuc2hvdygkZXZlbnQsIHtwb3NpdGlvbjogJ3JpZ2h0IGNlbnRlcid9KVwiPkNsaWNrIG1lPC9idXR0b24+XG4gICAgPHNtLXBvcHVwICNteVBvcHVwPlxuICAgICAgICA8c20tY2FyZCBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxjYXJkLXRpdGxlPiBLcmlzdHkgPC9jYXJkLXRpdGxlPlxuICAgICAgICAgICAgPGNhcmQtc3VidGl0bGU+IEpvaW5lZCBpbiAyMDEzIDwvY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgIDxjYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgS3Jpc3R5IGlzIGFuIGFydCBkaXJlY3RvciBsaXZpbmcgaW4gTmV3IFlvcmsuXG4gICAgICAgICAgICA8L2NhcmQtY29udGVudD5cbiAgICAgICAgICAgIDxzbS1idXR0b24gY2xhc3M9XCJib3R0b20gYXR0YWNoZWQgZmx1aWRcIiBpY29uPVwiYWRkXCI+QWRkIGZyaWVuZDwvc20tYnV0dG9uPlxuICAgICAgICA8L3NtLWNhcmQ+XG4gICAgPC9zbS1wb3B1cD5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiAgICAgICAgPHNtLWNvZGVibG9jayBzbVByaXNtanM9XCJodG1sXCI+XG4mbHQ7YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIGdyZWVuXCIgKGNsaWNrKT1cIm15UG9wdXAuc2hvdygkZXZlbnQsIHtwb3NpdGlvbjogJ3JpZ2h0IGNlbnRlcid9KVwiPkNsaWNrIG1lJmx0Oy9idXR0b24+XG4mbHQ7PHNtLXBvcHVwPjwvc20tcG9wdXA+ICNteVBvcHVwPlxuICAgIC4uLlxuJmx0Oy9zbS1wb3B1cD5cbiAgICA8L3NtLWNvZGVibG9jaz4gICBcbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29tcG9uZW50IHt9XG4iXX0=