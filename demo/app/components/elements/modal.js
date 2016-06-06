System.register(["@angular/core", "ng-semantic", "../../prismjs/prismjs"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, prismjs_1;
    var ModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
            }],
        execute: function() {
            ModalComponent = (function () {
                function ModalComponent() {
                }
                ModalComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        selector: "modal",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Modal</h1>\n        <p>Semantic UI Modal module <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/modules/modal.html\" target=\"_blank\">Semantic UI Modal</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo basic</h4>\n    <button class=\"ui button green\" [sm-dir-modal]=\"{selector: 'my-modal'}\">Click me</button>\n    <sm-modal selector=\"my-modal\" title=\"Hello from Modal\" class=\"basic\">\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n    when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, \n    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n    </sm-modal>\n    \n    <h4 class=\"ui header\">Code</h4>\n<codeblock prismjs=\"html\">\n&lt;button class=\"ui button green\" [sm-dir-modal]=\"{selector: 'my-modal'}\">Click me&lt;/button>\n&lt;sm-modal selector=\"my-modal\" title=\"Hello from Modal\" class=\"basic\">...&lt;/sm-modal>\n</codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModalComponent);
                return ModalComponent;
            }());
            exports_1("ModalComponent", ModalComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9DQTtnQkFBQTtnQkFBNkIsQ0FBQztnQkFoQzlCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQVEsNEJBQWtCLEVBQVEsMEJBQWdCLENBQUM7d0JBQ3hHLFFBQVEsRUFBRyxPQUFPO3dCQUNsQixRQUFRLEVBQUcsaTlDQTBCZDtxQkFDQSxDQUFDOztrQ0FBQTtnQkFFMkIscUJBQUM7WUFBRCxDQUFDLEFBQTlCLElBQThCO1lBQTlCLDJDQUE4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XG5pbXBvcnQgeyBDb2RlYmxvY2tDb21wb25lbnQsIFByaXNtSnNEaXJlY3RpdmUgfSBmcm9tIFwiLi4vLi4vcHJpc21qcy9wcmlzbWpzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCA8VHlwZT5Db2RlYmxvY2tDb21wb25lbnQsIDxUeXBlPlByaXNtSnNEaXJlY3RpdmVdLFxuICAgIHNlbGVjdG9yIDogXCJtb2RhbFwiLFxuICAgIHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPk1vZGFsPC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgTW9kYWwgbW9kdWxlIDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT4gXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvbW9kYWwuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIE1vZGFsPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBiYXNpYzwvaDQ+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBncmVlblwiIFtzbS1kaXItbW9kYWxdPVwie3NlbGVjdG9yOiAnbXktbW9kYWwnfVwiPkNsaWNrIG1lPC9idXR0b24+XG4gICAgPHNtLW1vZGFsIHNlbGVjdG9yPVwibXktbW9kYWxcIiB0aXRsZT1cIkhlbGxvIGZyb20gTW9kYWxcIiBjbGFzcz1cImJhc2ljXCI+XG4gICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gXG4gICAgTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgXG4gICAgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gXG4gICAgSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIFxuICAgIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgXG4gICAgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlxuICAgIDwvc20tbW9kYWw+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG48Y29kZWJsb2NrIHByaXNtanM9XCJodG1sXCI+XG4mbHQ7YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIGdyZWVuXCIgW3NtLWRpci1tb2RhbF09XCJ7c2VsZWN0b3I6ICdteS1tb2RhbCd9XCI+Q2xpY2sgbWUmbHQ7L2J1dHRvbj5cbiZsdDtzbS1tb2RhbCBzZWxlY3Rvcj1cIm15LW1vZGFsXCIgdGl0bGU9XCJIZWxsbyBmcm9tIE1vZGFsXCIgY2xhc3M9XCJiYXNpY1wiPi4uLiZsdDsvc20tbW9kYWw+XG48L2NvZGVibG9jaz5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IHt9XG4iXX0=