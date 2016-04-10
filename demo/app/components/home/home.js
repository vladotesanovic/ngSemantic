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
    var HomeComponent;
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
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        directives: [codeblock_1.Codeblock, languages_1.Markup, languages_1.Bash, languages_1.Typescript, ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES],
                        selector: "home",
                        templateUrl: "./app/components/home/home.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQTtnQkFBNEIsQ0FBQztnQkFMN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxxQkFBUyxFQUFFLGtCQUFNLEVBQUUsZ0JBQUksRUFBRSxzQkFBVSxFQUFFLGlDQUFtQixFQUFFLGlDQUFtQixDQUFDO3dCQUMzRixRQUFRLEVBQUUsTUFBTTt3QkFDaEIsV0FBVyxFQUFFLGlDQUFpQztxQkFDakQsQ0FBQzs7aUNBQUE7Z0JBQzBCLG9CQUFDO1lBQUQsQ0FBQyxBQUE3QixJQUE2QjtZQUE3Qix5Q0FBNkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcclxuaW1wb3J0IHsgQ29kZWJsb2NrIH0gZnJvbSBcIm5nMi1wcmlzbS9jb2RlYmxvY2tcIjtcclxuaW1wb3J0IHsgTWFya3VwLCBUeXBlc2NyaXB0LCBCYXNoIH0gZnJvbSBcIm5nMi1wcmlzbS9sYW5ndWFnZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgZGlyZWN0aXZlczogW0NvZGVibG9jaywgTWFya3VwLCBCYXNoLCBUeXBlc2NyaXB0LCBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcclxuICAgIHNlbGVjdG9yOiBcImhvbWVcIixcclxuICAgIHRlbXBsYXRlVXJsOiBgLi9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge31cclxuIl19