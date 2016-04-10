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
                        directives: [codeblock_1.Codeblock, languages_1.Markup, languages_1.Typescript, ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQTtnQkFBNEIsQ0FBQztnQkFMN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxxQkFBUyxFQUFFLGtCQUFNLEVBQUUsc0JBQVUsRUFBRSxpQ0FBbUIsRUFBRSxpQ0FBbUIsQ0FBQzt3QkFDckYsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFdBQVcsRUFBRSxpQ0FBaUM7cUJBQ2pELENBQUM7O2lDQUFBO2dCQUMwQixvQkFBQztZQUFELENBQUMsQUFBN0IsSUFBNkI7WUFBN0IseUNBQTZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XHJcbmltcG9ydCB7IENvZGVibG9jayB9IGZyb20gXCJuZzItcHJpc20vY29kZWJsb2NrXCI7XHJcbmltcG9ydCB7IE1hcmt1cCwgVHlwZXNjcmlwdCB9IGZyb20gXCJuZzItcHJpc20vbGFuZ3VhZ2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtDb2RlYmxvY2ssIE1hcmt1cCwgVHlwZXNjcmlwdCwgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXHJcbiAgICBzZWxlY3RvcjogXCJob21lXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge31cclxuIl19