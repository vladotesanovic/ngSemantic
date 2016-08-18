System.register(["@angular/core", "@angular/common", "@angular/forms", "./ng-semantic"], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, ng_semantic_1;
    var SemanticModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            }],
        execute: function() {
            SemanticModule = (function () {
                function SemanticModule() {
                }
                SemanticModule = __decorate([
                    core_1.NgModule({
                        declarations: [ng_semantic_1.SEMANTIC_DIRECTIVES, ng_semantic_1.SEMANTIC_COMPONENTS],
                        exports: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES],
                        imports: [common_1.CommonModule, forms_1.FormsModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SemanticModule);
                return SemanticModule;
            }());
            exports_1("SemanticModule", SemanticModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VtYW50aWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmctc2VtYW50aWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7Z0JBQThCLENBQUM7Z0JBTC9CO29CQUFDLGVBQVEsQ0FBQzt3QkFDTixZQUFZLEVBQUUsQ0FBRSxpQ0FBbUIsRUFBRSxpQ0FBbUIsQ0FBRTt3QkFDMUQsT0FBTyxFQUFPLENBQUUsaUNBQW1CLEVBQUUsaUNBQW1CLENBQUU7d0JBQzFELE9BQU8sRUFBTyxDQUFFLHFCQUFZLEVBQUUsbUJBQVcsQ0FBRTtxQkFDOUMsQ0FBQzs7a0NBQUE7Z0JBQzRCLHFCQUFDO1lBQUQsQ0FBQyxBQUEvQixJQUErQjtZQUEvQiwyQ0FBK0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgICAgICBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgU0VNQU5USUNfRElSRUNUSVZFUywgU0VNQU5USUNfQ09NUE9ORU5UUyB9IGZyb20gXCIuL25nLXNlbWFudGljXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbIFNFTUFOVElDX0RJUkVDVElWRVMsIFNFTUFOVElDX0NPTVBPTkVOVFMgXSxcbiAgICBleHBvcnRzOiAgICAgIFsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyBdLFxuICAgIGltcG9ydHM6ICAgICAgWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNNb2R1bGUgeyB9XG4iXX0=