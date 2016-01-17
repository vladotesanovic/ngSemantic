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
    var ModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            ModalComponent = (function () {
                function ModalComponent() {
                }
                ModalComponent = __decorate([
                    core_1.Component({
                        selector: "modal",
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Modal</h1>\n        <p>Semantic UI modal module <i class=\"icon external\"></i> \n        <a href=\"http://semantic-ui.com/modules/modal.html\" target=\"_blank\">Semantic UI Modal</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo basic</h4>\n    <button class=\"ui button green\" [sm-dir-modal]=\"{selector: 'my-modal'}\">Click me</button>\n    <sm-modal selector=\"my-modal\" title=\"Hello from Modal\" class=\"basic\">\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n    when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, \n    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n    </sm-modal>\n    \n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"4\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<button class=\"ui button green\" [sm-dir-modal]=\"{selector: 'my-modal'}\">Click me</button>\n<sm-modal selector=\"my-modal\" title=\"Hello from Modal\" class=\"basic\">...</sm-modal>\n</textarea>\n        </div>\n      </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModalComponent);
                return ModalComponent;
            })();
            exports_1("ModalComponent", ModalComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvbW9kYWwudHMiXSwibmFtZXMiOlsiTW9kYWxDb21wb25lbnQiLCJNb2RhbENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQXNDNkJDLENBQUNBO2dCQXRDOUJEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUdBLE9BQU9BO3FCQUNsQkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7d0JBQ3REQSxRQUFRQSxFQUFHQSxpb0RBOEJYQTtxQkFDQUEsQ0FBQ0E7O21DQUU0QkE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQUFDQSxBQXRDOUIsSUFzQzhCO1lBdEM5QiwyQ0FzQzhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpYy9zZW1hbnRpY1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3IgOiBcIm1vZGFsXCIsXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG5cdHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPk1vZGFsPC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgbW9kYWwgbW9kdWxlIDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT4gXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvbW9kYWwuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIE1vZGFsPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBiYXNpYzwvaDQ+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBncmVlblwiIFtzbS1kaXItbW9kYWxdPVwie3NlbGVjdG9yOiAnbXktbW9kYWwnfVwiPkNsaWNrIG1lPC9idXR0b24+XG4gICAgPHNtLW1vZGFsIHNlbGVjdG9yPVwibXktbW9kYWxcIiB0aXRsZT1cIkhlbGxvIGZyb20gTW9kYWxcIiBjbGFzcz1cImJhc2ljXCI+XG4gICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gXG4gICAgTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgXG4gICAgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gXG4gICAgSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIFxuICAgIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgXG4gICAgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlxuICAgIDwvc20tbW9kYWw+XG4gICAgXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG48dGV4dGFyZWEgcm93cz1cIjRcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIGdyZWVuXCIgW3NtLWRpci1tb2RhbF09XCJ7c2VsZWN0b3I6ICdteS1tb2RhbCd9XCI+Q2xpY2sgbWU8L2J1dHRvbj5cbjxzbS1tb2RhbCBzZWxlY3Rvcj1cIm15LW1vZGFsXCIgdGl0bGU9XCJIZWxsbyBmcm9tIE1vZGFsXCIgY2xhc3M9XCJiYXNpY1wiPi4uLjwvc20tbW9kYWw+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQge31cbiJdfQ==