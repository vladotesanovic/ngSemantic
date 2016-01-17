System.register(["angular2/core", "ng-semantic/semantic"], function(exports_1) {
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
    var LoaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            LoaderComponent = (function () {
                function LoaderComponent() {
                }
                LoaderComponent = __decorate([
                    core_1.Component({
                        selector: "loader"
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Loader</h1>\n        <p>Loading animation is based on Semantic loading element: <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/elements/loader.html\" target=\"_blank\">Semantic UI Loader</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <p>If you want to add loading animation to your Angular 2 app, add this code snippet inside your root app tag.</p>\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n          <textarea rows=\"4\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<div class=\"ui active inverted dimmer\">\n    <div class=\"ui text large loader\">Loading</div>\n</div>\n          </textarea>\n        </div>\n      </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoaderComponent);
                return LoaderComponent;
            })();
            exports_1("LoaderComponent", LoaderComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2xvYWRlci50cyJdLCJuYW1lcyI6WyJMb2FkZXJDb21wb25lbnQiLCJMb2FkZXJDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBQTtnQkE2QjhCQyxDQUFDQTtnQkE3Qi9CRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFHQSxRQUFRQTtxQkFDbkJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsVUFBVUEsRUFBRUEsQ0FBQ0EsOEJBQW1CQSxFQUFFQSw4QkFBbUJBLENBQUNBO3dCQUN0REEsUUFBUUEsRUFBR0EsczRCQXFCWEE7cUJBQ0FBLENBQUNBOztvQ0FFNkJBO2dCQUFEQSxzQkFBQ0E7WUFBREEsQ0FBQ0EsQUE3Qi9CLElBNkIrQjtZQTdCL0IsNkNBNkIrQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yIDogXCJsb2FkZXJcIlxufSlcbkBWaWV3KHtcblx0ZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuXHR0ZW1wbGF0ZSA6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5Mb2FkZXI8L2gxPlxuICAgICAgICA8cD5Mb2FkaW5nIGFuaW1hdGlvbiBpcyBiYXNlZCBvbiBTZW1hbnRpYyBsb2FkaW5nIGVsZW1lbnQ6IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT4gXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2xvYWRlci5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgTG9hZGVyPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPHA+SWYgeW91IHdhbnQgdG8gYWRkIGxvYWRpbmcgYW5pbWF0aW9uIHRvIHlvdXIgQW5ndWxhciAyIGFwcCwgYWRkIHRoaXMgY29kZSBzbmlwcGV0IGluc2lkZSB5b3VyIHJvb3QgYXBwIHRhZy48L3A+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI0XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPGRpdiBjbGFzcz1cInVpIGFjdGl2ZSBpbnZlcnRlZCBkaW1tZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgdGV4dCBsYXJnZSBsb2FkZXJcIj5Mb2FkaW5nPC9kaXY+XG48L2Rpdj5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IHt9XG4iXX0=