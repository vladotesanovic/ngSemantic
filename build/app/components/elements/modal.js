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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvbW9kYWwudHMiXSwibmFtZXMiOlsiTW9kYWxDb21wb25lbnQiLCJNb2RhbENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQXNDNkJDLENBQUNBO2dCQXRDOUJEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUdBLE9BQU9BO3FCQUNsQkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7d0JBQ3REQSxRQUFRQSxFQUFHQSxpb0RBOEJYQTtxQkFDQUEsQ0FBQ0E7O21DQUU0QkE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQUFDQSxBQXRDOUIsSUFzQzhCO1lBdEM5QiwyQ0FzQzhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCIuLi8uLi9kaXJlY3RpdmVzL3NlbWFudGljL3NlbWFudGljXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvciA6IFwibW9kYWxcIixcbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcblx0dGVtcGxhdGUgOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+TW9kYWw8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBtb2RhbCBtb2R1bGUgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPiBcbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9tb2RhbC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgTW9kYWw8L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGJhc2ljPC9oND5cbiAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIGdyZWVuXCIgW3NtLWRpci1tb2RhbF09XCJ7c2VsZWN0b3I6ICdteS1tb2RhbCd9XCI+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICA8c20tbW9kYWwgc2VsZWN0b3I9XCJteS1tb2RhbFwiIHRpdGxlPVwiSGVsbG8gZnJvbSBNb2RhbFwiIGNsYXNzPVwiYmFzaWNcIj5cbiAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBcbiAgICBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCBcbiAgICB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBcbiAgICBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gXG4gICAgSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBcbiAgICBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXG4gICAgPC9zbS1tb2RhbD5cbiAgICBcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiNFwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gZ3JlZW5cIiBbc20tZGlyLW1vZGFsXT1cIntzZWxlY3RvcjogJ215LW1vZGFsJ31cIj5DbGljayBtZTwvYnV0dG9uPlxuPHNtLW1vZGFsIHNlbGVjdG9yPVwibXktbW9kYWxcIiB0aXRsZT1cIkhlbGxvIGZyb20gTW9kYWxcIiBjbGFzcz1cImJhc2ljXCI+Li4uPC9zbS1tb2RhbD5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7fVxuIl19