System.register(["angular2/core", "ng-semantic/semantic"], function(exports_1, context_1) {
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
    var core_1, semantic_1;
    var ProgressComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
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
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        selector: "progress-bar",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Progress</h1>\n        <p>Semantic UI progress module <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/modules/progress.html\" target=\"_blank\">Semantic UI Progress</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>Simple progress bar</p>\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-progress [progress]=\"percent\"></sm-progress>\n    <sm-progress class=\"warning\" [progress]=\"percent\"></sm-progress>\n    \n    <h4 class=\"ui header\">Code</h4>\n    <div class=\"ui form\">\n        <div class=\"field\">\n          <textarea rows=\"4\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-progress [progress]=\"percent\"></sm-progress>\n<sm-progress class=\"warning\" [progress]=\"percent\"></sm-progress>\n          </textarea>\n        </div>\n      </div>\n      \n      <br/><br/>\n      Page source: <a target=\"_blank\" \n      href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/progress.ts\">\n        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/progress.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProgressComponent);
                return ProgressComponent;
            }());
            exports_1("ProgressComponent", ProgressComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvcHJvZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1Q0E7Z0JBRUk7b0JBRkosaUJBS0M7b0JBSkcsWUFBTyxHQUFXLENBQUMsQ0FBQztvQkFFaEIsV0FBVyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBbEIsQ0FBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkF4Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyw4QkFBbUIsRUFBRSw4QkFBbUIsQ0FBQzt3QkFDdEQsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxvd0NBOEJiO3FCQUNBLENBQUM7O3FDQUFBO2dCQU9GLHdCQUFDO1lBQUQsQ0FBQyxBQUxELElBS0M7WUFMRCxpREFLQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuICAgIHNlbGVjdG9yOiBcInByb2dyZXNzLWJhclwiLFxuICAgIHRlbXBsYXRlOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+UHJvZ3Jlc3M8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBwcm9ncmVzcyBtb2R1bGUgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3Byb2dyZXNzLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBQcm9ncmVzczwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxwPlNpbXBsZSBwcm9ncmVzcyBiYXI8L3A+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgPHNtLXByb2dyZXNzIFtwcm9ncmVzc109XCJwZXJjZW50XCI+PC9zbS1wcm9ncmVzcz5cbiAgICA8c20tcHJvZ3Jlc3MgY2xhc3M9XCJ3YXJuaW5nXCIgW3Byb2dyZXNzXT1cInBlcmNlbnRcIj48L3NtLXByb2dyZXNzPlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxzbS1wcm9ncmVzcyBbcHJvZ3Jlc3NdPVwicGVyY2VudFwiPjwvc20tcHJvZ3Jlc3M+XG48c20tcHJvZ3Jlc3MgY2xhc3M9XCJ3YXJuaW5nXCIgW3Byb2dyZXNzXT1cInBlcmNlbnRcIj48L3NtLXByb2dyZXNzPlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxici8+PGJyLz5cbiAgICAgIFBhZ2Ugc291cmNlOiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvcHJvZ3Jlc3MudHNcIj5cbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL3Byb2dyZXNzLnRzXG4gICAgICA8L2E+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0NvbXBvbmVudCB7XG4gICAgcGVyY2VudDogbnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5wZXJjZW50ICs9IDEwLCAxMDAwKTtcbiAgICB9XG59XG4iXX0=