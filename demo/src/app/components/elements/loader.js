var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var semantic_1 = require("../../directives/semantic/semantic");
var LoaderComponent = (function () {
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
exports.LoaderComponent = LoaderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2xvYWRlci50cyJdLCJuYW1lcyI6WyJMb2FkZXJDb21wb25lbnQiLCJMb2FkZXJDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx5QkFBeUQsb0NBQW9DLENBQUMsQ0FBQTtBQUU5RjtJQUFBQTtJQTZCOEJDLENBQUNBO0lBN0IvQkQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUdBLFFBQVFBO1NBQ25CQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7WUFDdERBLFFBQVFBLEVBQUdBLHM0QkFxQlhBO1NBQ0FBLENBQUNBOzt3QkFFNkJBO0lBQURBLHNCQUFDQTtBQUFEQSxDQUFDQSxBQTdCL0IsSUE2QitCO0FBQWxCLHVCQUFlLGtCQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCIuLi8uLi9kaXJlY3RpdmVzL3NlbWFudGljL3NlbWFudGljXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvciA6IFwibG9hZGVyXCJcbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcblx0dGVtcGxhdGUgOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+TG9hZGVyPC9oMT5cbiAgICAgICAgPHA+TG9hZGluZyBhbmltYXRpb24gaXMgYmFzZWQgb24gU2VtYW50aWMgbG9hZGluZyBlbGVtZW50OiA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+IFxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9sb2FkZXIuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIExvYWRlcjwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxwPklmIHlvdSB3YW50IHRvIGFkZCBsb2FkaW5nIGFuaW1hdGlvbiB0byB5b3VyIEFuZ3VsYXIgMiBhcHAsIGFkZCB0aGlzIGNvZGUgc25pcHBldCBpbnNpZGUgeW91ciByb290IGFwcCB0YWcuPC9wPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxkaXYgY2xhc3M9XCJ1aSBhY3RpdmUgaW52ZXJ0ZWQgZGltbWVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIHRleHQgbGFyZ2UgbG9hZGVyXCI+TG9hZGluZzwvZGl2PlxuPC9kaXY+XG4gICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCB7fVxuIl19