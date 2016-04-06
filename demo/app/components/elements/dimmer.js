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
    var DimmerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            DimmerComponent = (function () {
                function DimmerComponent() {
                }
                DimmerComponent = __decorate([
                    core_1.Component({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        selector: "dimmer",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Dimmer</h1>\n        <p>Semantic UI dimmer module <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/modules/dimmer.html\" target=\"_blank\">Semantic UI Dimmer</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>Note that selector attribute on sm-dimmer and value in sm-dir-dimmer must be same.</p>\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-dimmer selector=\"page\">\n        <div class=\"center\">\n            <h2 class=\"ui inverted icon header\">\n                <i class=\"mail icon\"></i>\n                Dimmer Message\n                <div class=\"sub header\">Dimmer sub-header</div>\n            </h2>\n        </div>\n    </sm-dimmer>\n    <sm-button sm-dir-dimmer=\"page\" class=\"primary\">Page dimmer</sm-button>\n    \n    <h4 class=\"ui header\">Code</h4>\n    <div class=\"ui form\">\n        <div class=\"field\">\n          <textarea rows=\"5\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-dimmer selector=\"page\">\n        ...\n</sm-dimmer>\n<sm-button sm-dir-dimmer=\"page\" class=\"primary\">Page dimmer</sm-button>\n          </textarea>\n        </div>\n      </div>\n      \n      <br/><br/>\n      Page source: <a target=\"_blank\" href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/dimmer.ts\">\n        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/dimmer.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DimmerComponent);
                return DimmerComponent;
            }());
            exports_1("DimmerComponent", DimmerComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2RpbW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStDQTtnQkFBQTtnQkFBOEIsQ0FBQztnQkE3Qy9CO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsOEJBQW1CLEVBQUUsOEJBQW1CLENBQUM7d0JBQ3RELFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsdWtEQXVDYjtxQkFDQSxDQUFDOzttQ0FBQTtnQkFFNEIsc0JBQUM7WUFBRCxDQUFDLEFBQS9CLElBQStCO1lBQS9CLDZDQUErQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcbiAgICBzZWxlY3RvcjogXCJkaW1tZXJcIixcbiAgICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkRpbW1lcjwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIGRpbW1lciBtb2R1bGUgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL2RpbW1lci5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgRGltbWVyPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPHA+Tm90ZSB0aGF0IHNlbGVjdG9yIGF0dHJpYnV0ZSBvbiBzbS1kaW1tZXIgYW5kIHZhbHVlIGluIHNtLWRpci1kaW1tZXIgbXVzdCBiZSBzYW1lLjwvcD5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vPC9oND5cbiAgICA8c20tZGltbWVyIHNlbGVjdG9yPVwicGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ1aSBpbnZlcnRlZCBpY29uIGhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWFpbCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIERpbW1lciBNZXNzYWdlXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YiBoZWFkZXJcIj5EaW1tZXIgc3ViLWhlYWRlcjwvZGl2PlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zbS1kaW1tZXI+XG4gICAgPHNtLWJ1dHRvbiBzbS1kaXItZGltbWVyPVwicGFnZVwiIGNsYXNzPVwicHJpbWFyeVwiPlBhZ2UgZGltbWVyPC9zbS1idXR0b24+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gICAgPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLWRpbW1lciBzZWxlY3Rvcj1cInBhZ2VcIj5cbiAgICAgICAgLi4uXG48L3NtLWRpbW1lcj5cbjxzbS1idXR0b24gc20tZGlyLWRpbW1lcj1cInBhZ2VcIiBjbGFzcz1cInByaW1hcnlcIj5QYWdlIGRpbW1lcjwvc20tYnV0dG9uPlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxici8+PGJyLz5cbiAgICAgIFBhZ2Ugc291cmNlOiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2RpbW1lci50c1wiPlxuICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvZGltbWVyLnRzXG4gICAgICA8L2E+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBEaW1tZXJDb21wb25lbnQge31cbiJdfQ==