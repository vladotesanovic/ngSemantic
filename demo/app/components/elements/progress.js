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
    var ProgressComponent;
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
            ProgressComponent = (function () {
                function ProgressComponent() {
                    var _this = this;
                    this.percent = 0;
                    this.indicatingPercent = 0;
                    setInterval(function () { return _this.percent += 10; }, 1000);
                    setInterval(function () { return _this.indicatingPercent += 4; }, 1000);
                }
                ProgressComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        selector: "sm-page-progress",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Progress</h1>\n        <p>Semantic UI Progress module <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/modules/progress.html\" target=\"_blank\">Semantic UI Progress</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>Simple progress bar</p>\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-progress [progress]=\"percent\"></sm-progress>\n    <sm-progress class=\"warning\" [progress]=\"percent\"></sm-progress>\n    \n    <h4 class=\"ui header\">Code</h4>\n    <sm-codeblock smPrismjs=\"html\">\n&lt;sm-progress [progress]=\"percent\">&lt;/sm-progress>\n&lt;sm-progress class=\"warning\" [progress]=\"percent\">&lt;/sm-progress>\n    </sm-codeblock>\n    <div class=\"ui horizontal section icon divider\"><i class=\"icon setting\"></i></div>\n    <h4 class=\"ui header\">Demo indicating</h4>\n    <sm-progress class=\"indicating active\" [progress]=\"indicatingPercent\"></sm-progress>\n    <sm-codeblock smPrismjs=\"html\">\n&lt;sm-progress class=\"indicating active\" [progress]=\"indicatingPercent\">&lt;/sm-progress>\n    </sm-codeblock>\n    <div class=\"ui horizontal section icon divider\"><i class=\"icon setting\"></i></div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProgressComponent);
                return ProgressComponent;
            }());
            exports_1("ProgressComponent", ProgressComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9ncmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFDQTtnQkFJSTtvQkFKSixpQkFRQztvQkFQRyxZQUFPLEdBQVcsQ0FBQyxDQUFDO29CQUNwQixzQkFBaUIsR0FBVyxDQUFDLENBQUM7b0JBRzFCLFdBQVcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQWxCLENBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzVDLFdBQVcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsRUFBM0IsQ0FBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkF4Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxpQ0FBbUIsRUFBRSxpQ0FBbUIsRUFBUSw0QkFBa0IsRUFBUSwwQkFBZ0IsQ0FBQzt3QkFDeEcsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLHF3Q0EyQmI7cUJBQ0EsQ0FBQzs7cUNBQUE7Z0JBVUYsd0JBQUM7WUFBRCxDQUFDLEFBUkQsSUFRQztZQVJELGlEQVFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcbmltcG9ydCB7IENvZGVibG9ja0NvbXBvbmVudCwgUHJpc21Kc0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9wcmlzbWpzL3ByaXNtanNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIDxUeXBlPkNvZGVibG9ja0NvbXBvbmVudCwgPFR5cGU+UHJpc21Kc0RpcmVjdGl2ZV0sXG4gICAgc2VsZWN0b3I6IFwic20tcGFnZS1wcm9ncmVzc1wiLFxuICAgIHRlbXBsYXRlOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+UHJvZ3Jlc3M8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBQcm9ncmVzcyBtb2R1bGUgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3Byb2dyZXNzLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBQcm9ncmVzczwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxwPlNpbXBsZSBwcm9ncmVzcyBiYXI8L3A+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgPHNtLXByb2dyZXNzIFtwcm9ncmVzc109XCJwZXJjZW50XCI+PC9zbS1wcm9ncmVzcz5cbiAgICA8c20tcHJvZ3Jlc3MgY2xhc3M9XCJ3YXJuaW5nXCIgW3Byb2dyZXNzXT1cInBlcmNlbnRcIj48L3NtLXByb2dyZXNzPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuICAgIDxzbS1jb2RlYmxvY2sgc21QcmlzbWpzPVwiaHRtbFwiPlxuJmx0O3NtLXByb2dyZXNzIFtwcm9ncmVzc109XCJwZXJjZW50XCI+Jmx0Oy9zbS1wcm9ncmVzcz5cbiZsdDtzbS1wcm9ncmVzcyBjbGFzcz1cIndhcm5pbmdcIiBbcHJvZ3Jlc3NdPVwicGVyY2VudFwiPiZsdDsvc20tcHJvZ3Jlc3M+XG4gICAgPC9zbS1jb2RlYmxvY2s+XG4gICAgPGRpdiBjbGFzcz1cInVpIGhvcml6b250YWwgc2VjdGlvbiBpY29uIGRpdmlkZXJcIj48aSBjbGFzcz1cImljb24gc2V0dGluZ1wiPjwvaT48L2Rpdj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGluZGljYXRpbmc8L2g0PlxuICAgIDxzbS1wcm9ncmVzcyBjbGFzcz1cImluZGljYXRpbmcgYWN0aXZlXCIgW3Byb2dyZXNzXT1cImluZGljYXRpbmdQZXJjZW50XCI+PC9zbS1wcm9ncmVzcz5cbiAgICA8c20tY29kZWJsb2NrIHNtUHJpc21qcz1cImh0bWxcIj5cbiZsdDtzbS1wcm9ncmVzcyBjbGFzcz1cImluZGljYXRpbmcgYWN0aXZlXCIgW3Byb2dyZXNzXT1cImluZGljYXRpbmdQZXJjZW50XCI+Jmx0Oy9zbS1wcm9ncmVzcz5cbiAgICA8L3NtLWNvZGVibG9jaz5cbiAgICA8ZGl2IGNsYXNzPVwidWkgaG9yaXpvbnRhbCBzZWN0aW9uIGljb24gZGl2aWRlclwiPjxpIGNsYXNzPVwiaWNvbiBzZXR0aW5nXCI+PC9pPjwvZGl2PlxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NDb21wb25lbnQge1xuICAgIHBlcmNlbnQ6IG51bWJlciA9IDA7XG4gICAgaW5kaWNhdGluZ1BlcmNlbnQ6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5wZXJjZW50ICs9IDEwLCAxMDAwKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5pbmRpY2F0aW5nUGVyY2VudCArPSA0LCAxMDAwKTtcbiAgICB9XG59XG4iXX0=