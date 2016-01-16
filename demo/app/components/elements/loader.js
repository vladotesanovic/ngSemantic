System.register(["angular2/core", "../../directives/semantic/semantic"], function(exports_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2xvYWRlci50cyJdLCJuYW1lcyI6WyJMb2FkZXJDb21wb25lbnQiLCJMb2FkZXJDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBQTtnQkE2QjhCQyxDQUFDQTtnQkE3Qi9CRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFHQSxRQUFRQTtxQkFDbkJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsVUFBVUEsRUFBRUEsQ0FBQ0EsOEJBQW1CQSxFQUFFQSw4QkFBbUJBLENBQUNBO3dCQUN0REEsUUFBUUEsRUFBR0EsczRCQXFCWEE7cUJBQ0FBLENBQUNBOztvQ0FFNkJBO2dCQUFEQSxzQkFBQ0E7WUFBREEsQ0FBQ0EsQUE3Qi9CLElBNkIrQjtZQTdCL0IsNkNBNkIrQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwiLi4vLi4vZGlyZWN0aXZlcy9zZW1hbnRpYy9zZW1hbnRpY1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3IgOiBcImxvYWRlclwiXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG5cdHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkxvYWRlcjwvaDE+XG4gICAgICAgIDxwPkxvYWRpbmcgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIFNlbWFudGljIGxvYWRpbmcgZWxlbWVudDogPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvbG9hZGVyLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBMb2FkZXI8L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8cD5JZiB5b3Ugd2FudCB0byBhZGQgbG9hZGluZyBhbmltYXRpb24gdG8geW91ciBBbmd1bGFyIDIgYXBwLCBhZGQgdGhpcyBjb2RlIHNuaXBwZXQgaW5zaWRlIHlvdXIgcm9vdCBhcHAgdGFnLjwvcD5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjRcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48ZGl2IGNsYXNzPVwidWkgYWN0aXZlIGludmVydGVkIGRpbW1lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSB0ZXh0IGxhcmdlIGxvYWRlclwiPkxvYWRpbmc8L2Rpdj5cbjwvZGl2PlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2FkZXJDb21wb25lbnQge31cbiJdfQ==