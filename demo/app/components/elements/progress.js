System.register(["angular2/core", "ng-semantic", "ng2-prism/codeblock", "ng2-prism/languages"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, codeblock_1, languages_1;
    var ProgressComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (codeblock_1_1) {
                codeblock_1 = codeblock_1_1;
            },
            function (languages_1_1) {
                languages_1 = languages_1_1;
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
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvcHJvZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBRUk7b0JBRkosaUJBS0M7b0JBSkcsWUFBTyxHQUFXLENBQUMsQ0FBQztvQkFFaEIsV0FBVyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBbEIsQ0FBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkE5Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxpQ0FBbUIsRUFBRSxpQ0FBbUIsRUFBRSxxQkFBUyxFQUFFLGtCQUFNLENBQUM7d0JBQ3pFLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsbXhCQW9CYjtxQkFDQSxDQUFDOztxQ0FBQTtnQkFPRix3QkFBQztZQUFELENBQUMsQUFMRCxJQUtDO1lBTEQsaURBS0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XG5pbXBvcnQgeyBDb2RlYmxvY2sgfSBmcm9tIFwibmcyLXByaXNtL2NvZGVibG9ja1wiO1xuaW1wb3J0IHsgTWFya3VwIH0gZnJvbSBcIm5nMi1wcmlzbS9sYW5ndWFnZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIENvZGVibG9jaywgTWFya3VwXSxcbiAgICBzZWxlY3RvcjogXCJwcm9ncmVzcy1iYXJcIixcbiAgICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPlByb2dyZXNzPC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgUHJvZ3Jlc3MgbW9kdWxlIDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9wcm9ncmVzcy5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgUHJvZ3Jlc3M8L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8cD5TaW1wbGUgcHJvZ3Jlc3MgYmFyPC9wPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxzbS1wcm9ncmVzcyBbcHJvZ3Jlc3NdPVwicGVyY2VudFwiPjwvc20tcHJvZ3Jlc3M+XG4gICAgPHNtLXByb2dyZXNzIGNsYXNzPVwid2FybmluZ1wiIFtwcm9ncmVzc109XCJwZXJjZW50XCI+PC9zbS1wcm9ncmVzcz5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiAgICAgICAgPGNvZGVibG9jayBtYXJrdXA+XG4mbHQ7c20tcHJvZ3Jlc3MgW3Byb2dyZXNzXT1cInBlcmNlbnRcIj4mbHQ7L3NtLXByb2dyZXNzPlxuJmx0O3NtLXByb2dyZXNzIGNsYXNzPVwid2FybmluZ1wiIFtwcm9ncmVzc109XCJwZXJjZW50XCI+Jmx0Oy9zbS1wcm9ncmVzcz5cbiAgICA8L2NvZGVibG9jaz5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQ29tcG9uZW50IHtcbiAgICBwZXJjZW50OiBudW1iZXIgPSAwO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnBlcmNlbnQgKz0gMTAsIDEwMDApO1xuICAgIH1cbn1cbiJdfQ==