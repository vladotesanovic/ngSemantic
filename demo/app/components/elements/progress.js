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
                    setInterval(function () { return _this.percent += 10; }, 1000);
                }
                ProgressComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        selector: "progress-bar",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Progress</h1>\n        <p>Semantic UI Progress module <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/modules/progress.html\" target=\"_blank\">Semantic UI Progress</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>Simple progress bar</p>\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-progress [progress]=\"percent\"></sm-progress>\n    <sm-progress class=\"warning\" [progress]=\"percent\"></sm-progress>\n    \n    <h4 class=\"ui header\">Code</h4>\n        <codeblock markup>\n&lt;sm-progress [progress]=\"percent\">&lt;/sm-progress>\n&lt;sm-progress class=\"warning\" [progress]=\"percent\">&lt;/sm-progress>\n    </codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProgressComponent);
                return ProgressComponent;
            }());
            exports_1("ProgressComponent", ProgressComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9ncmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThCQTtnQkFFSTtvQkFGSixpQkFLQztvQkFKRyxZQUFPLEdBQVcsQ0FBQyxDQUFDO29CQUVoQixXQUFXLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFsQixDQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQTlCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGlDQUFtQixFQUFFLGlDQUFtQixFQUFRLDRCQUFrQixFQUFRLDBCQUFnQixDQUFDO3dCQUN4RyxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLG14QkFvQmI7cUJBQ0EsQ0FBQzs7cUNBQUE7Z0JBT0Ysd0JBQUM7WUFBRCxDQUFDLEFBTEQsSUFLQztZQUxELGlEQUtDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcbmltcG9ydCB7IENvZGVibG9ja0NvbXBvbmVudCwgUHJpc21Kc0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9wcmlzbWpzL3ByaXNtanNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIDxUeXBlPkNvZGVibG9ja0NvbXBvbmVudCwgPFR5cGU+UHJpc21Kc0RpcmVjdGl2ZV0sXG4gICAgc2VsZWN0b3I6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgdGVtcGxhdGU6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5Qcm9ncmVzczwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIFByb2dyZXNzIG1vZHVsZSA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvcHJvZ3Jlc3MuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIFByb2dyZXNzPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPHA+U2ltcGxlIHByb2dyZXNzIGJhcjwvcD5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vPC9oND5cbiAgICA8c20tcHJvZ3Jlc3MgW3Byb2dyZXNzXT1cInBlcmNlbnRcIj48L3NtLXByb2dyZXNzPlxuICAgIDxzbS1wcm9ncmVzcyBjbGFzcz1cIndhcm5pbmdcIiBbcHJvZ3Jlc3NdPVwicGVyY2VudFwiPjwvc20tcHJvZ3Jlc3M+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gICAgICAgIDxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O3NtLXByb2dyZXNzIFtwcm9ncmVzc109XCJwZXJjZW50XCI+Jmx0Oy9zbS1wcm9ncmVzcz5cbiZsdDtzbS1wcm9ncmVzcyBjbGFzcz1cIndhcm5pbmdcIiBbcHJvZ3Jlc3NdPVwicGVyY2VudFwiPiZsdDsvc20tcHJvZ3Jlc3M+XG4gICAgPC9jb2RlYmxvY2s+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0NvbXBvbmVudCB7XG4gICAgcGVyY2VudDogbnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5wZXJjZW50ICs9IDEwLCAxMDAwKTtcbiAgICB9XG59XG4iXX0=