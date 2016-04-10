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
    var ModalComponent;
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
            ModalComponent = (function () {
                function ModalComponent() {
                }
                ModalComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        selector: "modal",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Modal</h1>\n        <p>Semantic UI Modal module <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/modules/modal.html\" target=\"_blank\">Semantic UI Modal</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo basic</h4>\n    <button class=\"ui button green\" [sm-dir-modal]=\"{selector: 'my-modal'}\">Click me</button>\n    <sm-modal selector=\"my-modal\" title=\"Hello from Modal\" class=\"basic\">\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n    when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, \n    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n    </sm-modal>\n    \n    <h4 class=\"ui header\">Code</h4>\n<codeblock markup>\n&lt;button class=\"ui button green\" [sm-dir-modal]=\"{selector: 'my-modal'}\">Click me&lt;/button>\n&lt;sm-modal selector=\"my-modal\" title=\"Hello from Modal\" class=\"basic\">...&lt;/sm-modal>\n</codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModalComponent);
                return ModalComponent;
            }());
            exports_1("ModalComponent", ModalComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQ0E7Z0JBQUE7Z0JBQTZCLENBQUM7Z0JBaEM5QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGlDQUFtQixFQUFFLGlDQUFtQixFQUFFLHFCQUFTLEVBQUUsa0JBQU0sQ0FBQzt3QkFDekUsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFFBQVEsRUFBRyx1OENBMEJkO3FCQUNBLENBQUM7O2tDQUFBO2dCQUUyQixxQkFBQztZQUFELENBQUMsQUFBOUIsSUFBOEI7WUFBOUIsMkNBQThCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XHJcbmltcG9ydCB7IENvZGVibG9jayB9IGZyb20gXCJuZzItcHJpc20vY29kZWJsb2NrXCI7XHJcbmltcG9ydCB7IE1hcmt1cCB9IGZyb20gXCJuZzItcHJpc20vbGFuZ3VhZ2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCBDb2RlYmxvY2ssIE1hcmt1cF0sXHJcbiAgICBzZWxlY3RvciA6IFwibW9kYWxcIixcclxuICAgIHRlbXBsYXRlIDogYFxyXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPk1vZGFsPC9oMT5cclxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBNb2RhbCBtb2R1bGUgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcclxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL21vZGFsLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBNb2RhbDwvYT48L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxyXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBiYXNpYzwvaDQ+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIGdyZWVuXCIgW3NtLWRpci1tb2RhbF09XCJ7c2VsZWN0b3I6ICdteS1tb2RhbCd9XCI+Q2xpY2sgbWU8L2J1dHRvbj5cclxuICAgIDxzbS1tb2RhbCBzZWxlY3Rvcj1cIm15LW1vZGFsXCIgdGl0bGU9XCJIZWxsbyBmcm9tIE1vZGFsXCIgY2xhc3M9XCJiYXNpY1wiPlxyXG4gICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gXHJcbiAgICBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCBcclxuICAgIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIFxyXG4gICAgSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIFxyXG4gICAgSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBcclxuICAgIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cclxuICAgIDwvc20tbW9kYWw+XHJcbiAgICBcclxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxyXG48Y29kZWJsb2NrIG1hcmt1cD5cclxuJmx0O2J1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBncmVlblwiIFtzbS1kaXItbW9kYWxdPVwie3NlbGVjdG9yOiAnbXktbW9kYWwnfVwiPkNsaWNrIG1lJmx0Oy9idXR0b24+XHJcbiZsdDtzbS1tb2RhbCBzZWxlY3Rvcj1cIm15LW1vZGFsXCIgdGl0bGU9XCJIZWxsbyBmcm9tIE1vZGFsXCIgY2xhc3M9XCJiYXNpY1wiPi4uLiZsdDsvc20tbW9kYWw+XHJcbjwvY29kZWJsb2NrPlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IHt9XHJcbiJdfQ==