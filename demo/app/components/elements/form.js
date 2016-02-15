System.register(["angular2/core", "angular2/common", "ng-semantic/semantic"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, semantic_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent(fb) {
                    this.nameControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.emailControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.form = fb.group({
                        nameControl: this.nameControl,
                        emailControl: this.emailControl
                    });
                }
                FormComponent = __decorate([
                    core_1.Component({
                        selector: "test-form"
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Form</h1>\n        <p>Semantic UI Form collection <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/collections/form.html\" target=\"_blank\">Semantic UI Form</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n        <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n        <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n        \n        <br/>\n        <sm-button class=\"primary\">Login</sm-button>\n        Is form valid: {{form.valid}}\n    </form>\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"7\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n <form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n    <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n    <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n    <sm-button>Login</sm-button>\n</form>\n</textarea>\n        </div>\n      </div>\n      \n      <br/><br/>\n      Page source: <a target=\"_blank\" href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts\">\n        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], FormComponent);
                return FormComponent;
            })();
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9mb3JtLnRzIl0sIm5hbWVzIjpbIkZvcm1Db21wb25lbnQiLCJGb3JtQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFpRElBLHVCQUFZQSxFQUFlQTtvQkFIM0JDLGdCQUFXQSxHQUFZQSxJQUFJQSxnQkFBT0EsQ0FBQ0EsRUFBRUEsRUFBRUEsbUJBQVVBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLG1CQUFVQSxDQUFDQSxRQUFRQSxFQUFFQSxtQkFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzNHQSxpQkFBWUEsR0FBWUEsSUFBSUEsZ0JBQU9BLENBQUNBLEVBQUVBLEVBQUVBLG1CQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxtQkFBVUEsQ0FBQ0EsUUFBUUEsRUFBRUEsbUJBQVVBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUl4R0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQ2pCQSxXQUFXQSxFQUFFQSxJQUFJQSxDQUFDQSxXQUFXQTt3QkFDN0JBLFlBQVlBLEVBQUVBLElBQUlBLENBQUNBLFlBQVlBO3FCQUNsQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBO2dCQXZETEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7cUJBQ3hCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFtQkEsRUFBRUEsOEJBQW1CQSxDQUFDQTt3QkFDdERBLFFBQVFBLEVBQUVBLG9uREFvQ2JBO3FCQUNBQSxDQUFDQTs7a0NBY0RBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FBQ0EsQUF4REQsSUF3REM7WUF4REQseUNBd0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgQ29udHJvbCwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGVzdC1mb3JtXCJcbn0pXG5AVmlldyh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+Rm9ybTwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIEZvcm0gY29sbGVjdGlvbiA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL2Zvcm0uaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIEZvcm08L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vPC9oND5cbiAgICA8Zm9ybSBzbS1mb3JtIGNsYXNzPVwidWkgZm9ybVwiIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCI+XG4gICAgICAgIDxzbS1pbnB1dCBsYWJlbD1cIk5hbWVcIiBbY29udHJvbF09XCJuYW1lQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XG4gICAgICAgIDxzbS1pbnB1dCBsYWJlbD1cIkUtbWFpbFwiIFtjb250cm9sXT1cImVtYWlsQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZS1tYWlsLi4uXCI+PC9zbS1pbnB1dD5cbiAgICAgICAgXG4gICAgICAgIDxici8+XG4gICAgICAgIDxzbS1idXR0b24gY2xhc3M9XCJwcmltYXJ5XCI+TG9naW48L3NtLWJ1dHRvbj5cbiAgICAgICAgSXMgZm9ybSB2YWxpZDoge3tmb3JtLnZhbGlkfX1cbiAgICA8L2Zvcm0+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG48dGV4dGFyZWEgcm93cz1cIjdcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG4gPGZvcm0gc20tZm9ybSBjbGFzcz1cInVpIGZvcm1cIiBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiPlxuICAgIDxzbS1pbnB1dCBsYWJlbD1cIk5hbWVcIiBbY29udHJvbF09XCJuYW1lQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XG4gICAgPHNtLWlucHV0IGxhYmVsPVwiRS1tYWlsXCIgW2NvbnRyb2xdPVwiZW1haWxDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlLW1haWwuLi5cIj48L3NtLWlucHV0PlxuICAgIDxzbS1idXR0b24+TG9naW48L3NtLWJ1dHRvbj5cbjwvZm9ybT5cbjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxici8+PGJyLz5cbiAgICAgIFBhZ2Ugc291cmNlOiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2Zvcm0udHNcIj5cbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2Zvcm0udHNcbiAgICAgIDwvYT5cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IHtcblxuICAgIGZvcm06IENvbnRyb2xHcm91cDtcbiAgICBuYW1lQ29udHJvbDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKSk7XG4gICAgZW1haWxDb250cm9sOiBDb250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pKTtcblxuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuXG4gICAgICAgIHRoaXMuZm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWVDb250cm9sOiB0aGlzLm5hbWVDb250cm9sLFxuICAgICAgICAgICAgZW1haWxDb250cm9sOiB0aGlzLmVtYWlsQ29udHJvbFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=