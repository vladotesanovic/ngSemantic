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
    var DimmerComponent;
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
            DimmerComponent = (function () {
                function DimmerComponent() {
                }
                DimmerComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        selector: "dimmer",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Dimmer</h1>\n        <p>Semantic UI Dimmer module <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/modules/dimmer.html\" target=\"_blank\">Semantic UI Dimmer</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>Note that selector attribute on sm-dimmer and value in sm-dir-dimmer must be same.</p>\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-dimmer selector=\"page\">\n        <div class=\"center\">\n            <h2 class=\"ui inverted icon header\">\n                <i class=\"mail icon\"></i>\n                Dimmer Message\n                <div class=\"sub header\">Dimmer sub-header</div>\n            </h2>\n        </div>\n    </sm-dimmer>\n    <sm-button sm-dir-dimmer=\"page\" class=\"primary\">Page dimmer</sm-button>\n    \n    <h4 class=\"ui header\">Code</h4>\n    <codeblock markup>\n&lt;sm-dimmer selector=\"page\">\n    <div class=\"center\">\n        <h2 class=\"ui inverted icon header\">\n            <i class=\"mail icon\"></i>\n            Dimmer Message\n            <div class=\"sub header\">Dimmer sub-header</div>\n        </h2>\n    </div>\n&lt;/sm-dimmer>\n&lt;sm-button sm-dir-dimmer=\"page\" class=\"primary\">Page dimmer&lt;/sm-button>\n</codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DimmerComponent);
                return DimmerComponent;
            }());
            exports_1("DimmerComponent", DimmerComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2RpbW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStDQTtnQkFBQTtnQkFBOEIsQ0FBQztnQkExQy9CO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQUUscUJBQVMsRUFBRSxrQkFBTSxDQUFDO3dCQUN6RSxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHd6Q0FvQ2I7cUJBQ0EsQ0FBQzs7bUNBQUE7Z0JBRTRCLHNCQUFDO1lBQUQsQ0FBQyxBQUEvQixJQUErQjtZQUEvQiw2Q0FBK0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XG5pbXBvcnQgeyBDb2RlYmxvY2sgfSBmcm9tIFwibmcyLXByaXNtL2NvZGVibG9ja1wiO1xuaW1wb3J0IHsgTWFya3VwIH0gZnJvbSBcIm5nMi1wcmlzbS9sYW5ndWFnZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIENvZGVibG9jaywgTWFya3VwXSxcbiAgICBzZWxlY3RvcjogXCJkaW1tZXJcIixcbiAgICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkRpbW1lcjwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIERpbW1lciBtb2R1bGUgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL2RpbW1lci5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgRGltbWVyPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPHA+Tm90ZSB0aGF0IHNlbGVjdG9yIGF0dHJpYnV0ZSBvbiBzbS1kaW1tZXIgYW5kIHZhbHVlIGluIHNtLWRpci1kaW1tZXIgbXVzdCBiZSBzYW1lLjwvcD5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vPC9oND5cbiAgICA8c20tZGltbWVyIHNlbGVjdG9yPVwicGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ1aSBpbnZlcnRlZCBpY29uIGhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWFpbCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIERpbW1lciBNZXNzYWdlXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YiBoZWFkZXJcIj5EaW1tZXIgc3ViLWhlYWRlcjwvZGl2PlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zbS1kaW1tZXI+XG4gICAgPHNtLWJ1dHRvbiBzbS1kaXItZGltbWVyPVwicGFnZVwiIGNsYXNzPVwicHJpbWFyeVwiPlBhZ2UgZGltbWVyPC9zbS1idXR0b24+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gICAgPGNvZGVibG9jayBtYXJrdXA+XG4mbHQ7c20tZGltbWVyIHNlbGVjdG9yPVwicGFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwidWkgaW52ZXJ0ZWQgaWNvbiBoZWFkZXJcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWFpbCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgRGltbWVyIE1lc3NhZ2VcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWIgaGVhZGVyXCI+RGltbWVyIHN1Yi1oZWFkZXI8L2Rpdj5cbiAgICAgICAgPC9oMj5cbiAgICA8L2Rpdj5cbiZsdDsvc20tZGltbWVyPlxuJmx0O3NtLWJ1dHRvbiBzbS1kaXItZGltbWVyPVwicGFnZVwiIGNsYXNzPVwicHJpbWFyeVwiPlBhZ2UgZGltbWVyJmx0Oy9zbS1idXR0b24+XG48L2NvZGVibG9jaz5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIERpbW1lckNvbXBvbmVudCB7fVxuIl19