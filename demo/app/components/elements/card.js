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
    var CardComponent;
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
            CardComponent = (function () {
                function CardComponent() {
                }
                CardComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        selector: "card",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Card</h1>\n        <p>Semantic UI Card view <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/views/card.html\" target=\"_blank\">Semantic UI Card</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <sm-card class=\"ui card\" title=\"Kristy\" image=\"http://semantic-ui.com/images/avatar2/large/kristy.png\" subtitle=\"Joined in 2013\">\n        <content>\n            Kristy is an art director living in New York.\n        </content>\n        <extra>\n            <a>\n                <i class=\"user icon\"></i>\n                22 Friends\n            </a>\n        </extra>\n    </sm-card>\n    \n    <h4 class=\"ui header\">Code</h4>\n<codeblock markup>\n&lt;sm-card class=\"ui card\" title=\"Kristy\" image=\"http://semantic-ui.com/images/avatar2/large/kristy.png\" subtitle=\"Joined in 2013\">\n    <content>...</content>\n    <extra>...</extra>\n&lt;/sm-card>\n</codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CardComponent);
                return CardComponent;
            }());
            exports_1("CardComponent", CardComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9jYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUNBO2dCQUFBO2dCQUE0QixDQUFDO2dCQXBDN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxpQ0FBbUIsRUFBRSxpQ0FBbUIsRUFBRSxxQkFBUyxFQUFFLGtCQUFNLENBQUM7d0JBQ3pFLFFBQVEsRUFBRyxNQUFNO3dCQUNqQixRQUFRLEVBQUcsNmlDQThCZDtxQkFDQSxDQUFDOztpQ0FBQTtnQkFFMEIsb0JBQUM7WUFBRCxDQUFDLEFBQTdCLElBQTZCO1lBQTdCLHlDQUE2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xyXG5pbXBvcnQgeyBDb2RlYmxvY2sgfSBmcm9tIFwibmcyLXByaXNtL2NvZGVibG9ja1wiO1xyXG5pbXBvcnQgeyBNYXJrdXAgfSBmcm9tIFwibmcyLXByaXNtL2xhbmd1YWdlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUywgQ29kZWJsb2NrLCBNYXJrdXBdLFxyXG4gICAgc2VsZWN0b3IgOiBcImNhcmRcIixcclxuICAgIHRlbXBsYXRlIDogYFxyXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPkNhcmQ8L2gxPlxyXG4gICAgICAgIDxwPlNlbWFudGljIFVJIENhcmQgdmlldyA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+IFxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL3ZpZXdzL2NhcmQuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIENhcmQ8L2E+PC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cclxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxyXG4gICAgPHNtLWNhcmQgY2xhc3M9XCJ1aSBjYXJkXCIgdGl0bGU9XCJLcmlzdHlcIiBpbWFnZT1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vaW1hZ2VzL2F2YXRhcjIvbGFyZ2Uva3Jpc3R5LnBuZ1wiIHN1YnRpdGxlPVwiSm9pbmVkIGluIDIwMTNcIj5cclxuICAgICAgICA8Y29udGVudD5cclxuICAgICAgICAgICAgS3Jpc3R5IGlzIGFuIGFydCBkaXJlY3RvciBsaXZpbmcgaW4gTmV3IFlvcmsuXHJcbiAgICAgICAgPC9jb250ZW50PlxyXG4gICAgICAgIDxleHRyYT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInVzZXIgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDIyIEZyaWVuZHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZXh0cmE+XHJcbiAgICA8L3NtLWNhcmQ+XHJcbiAgICBcclxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxyXG48Y29kZWJsb2NrIG1hcmt1cD5cclxuJmx0O3NtLWNhcmQgY2xhc3M9XCJ1aSBjYXJkXCIgdGl0bGU9XCJLcmlzdHlcIiBpbWFnZT1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vaW1hZ2VzL2F2YXRhcjIvbGFyZ2Uva3Jpc3R5LnBuZ1wiIHN1YnRpdGxlPVwiSm9pbmVkIGluIDIwMTNcIj5cclxuICAgIDxjb250ZW50Pi4uLjwvY29udGVudD5cclxuICAgIDxleHRyYT4uLi48L2V4dHJhPlxyXG4mbHQ7L3NtLWNhcmQ+XHJcbjwvY29kZWJsb2NrPlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge31cclxuIl19