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
var data_1 = require("../../services/data");
var ListComponent = (function () {
    function ListComponent(ds) {
        var _this = this;
        this.ds = ds;
        this.flatArray = [];
        ds.flatArray().subscribe(function (data) {
            _this.flatArray = data;
        });
    }
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            providers: [data_1.DataServices]
        }),
        core_1.View({
            directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
            template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>List</h1>\n        <p>Semantic UI list element <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/elements/list.html\" target=\"_blank\">Semantic UI List</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-list class=\"bulleted\" [items]=\"flatArray\"></sm-list>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"2\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-list class=\"bulleted\" [items]=\"flatArray\"></sm-list>\n</textarea>\n        </div>\n      </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [data_1.DataServices])
    ], ListComponent);
    return ListComponent;
})();
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9saXN0LnRzIl0sIm5hbWVzIjpbIkxpc3RDb21wb25lbnQiLCJMaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQseUJBQXlELG9DQUFvQyxDQUFDLENBQUE7QUFDOUYscUJBQTZCLHFCQUFxQixDQUFDLENBQUE7QUFFbkQ7SUFnQ0NBLHVCQUFtQkEsRUFBZ0JBO1FBaENwQ0MsaUJBcUNDQTtRQUxtQkEsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBY0E7UUFEaENBLGNBQVNBLEdBQWVBLEVBQUVBLENBQUNBO1FBRTdCQSxFQUFFQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFTQTtZQUNsQ0EsS0FBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDdkJBLENBQUNBLENBQUNBLENBQUNBO0lBQ0pBLENBQUNBO0lBcENGRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBR0EsTUFBTUE7WUFDZEEsU0FBU0EsRUFBRUEsQ0FBQ0EsbUJBQVlBLENBQUNBO1NBQzVCQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7WUFDdERBLFFBQVFBLEVBQUdBLHd4QkFxQlhBO1NBQ0FBLENBQUNBOztzQkFTREE7SUFBREEsb0JBQUNBO0FBQURBLENBQUNBLEFBckNELElBcUNDO0FBUFkscUJBQWEsZ0JBT3pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCIuLi8uLi9kaXJlY3RpdmVzL3NlbWFudGljL3NlbWFudGljXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3IgOiBcImxpc3RcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhU2VydmljZXNdXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG5cdHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkxpc3Q8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBsaXN0IGVsZW1lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvbGlzdC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgTGlzdDwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxzbS1saXN0IGNsYXNzPVwiYnVsbGV0ZWRcIiBbaXRlbXNdPVwiZmxhdEFycmF5XCI+PC9zbS1saXN0PlxuICAgIFxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuPHRleHRhcmVhIHJvd3M9XCIyXCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLWxpc3QgY2xhc3M9XCJidWxsZXRlZFwiIFtpdGVtc109XCJmbGF0QXJyYXlcIj48L3NtLWxpc3Q+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XG4gICAgZmxhdEFycmF5OiBBcnJheTxhbnk+ID0gW107XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBkczogRGF0YVNlcnZpY2VzKSB7XG5cdFx0ZHMuZmxhdEFycmF5KCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcblx0XHRcdHRoaXMuZmxhdEFycmF5ID0gZGF0YTtcblx0XHR9KTtcblx0fVxufVxuIl19