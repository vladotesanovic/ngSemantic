System.register(["angular2/core", "angular2/common", "ng-semantic/semantic"], function(exports_1) {
    "use strict";
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
                    this.formSubmited = false;
                    this.nameControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.emailControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.agreeControl = new common_1.Control("", this.checkboxValidator);
                    this.form = fb.group({
                        nameControl: this.nameControl,
                        emailControl: this.emailControl,
                        agreeControl: this.agreeControl
                    });
                }
                FormComponent.prototype.checkboxValidator = function (control) {
                    var value = (typeof control.value === "boolean") ? control.value : false;
                    return (value) ? "" : "yes";
                };
                FormComponent.prototype.submit = function () {
                    this.formSubmited = true;
                };
                FormComponent = __decorate([
                    core_1.Component({
                        selector: "test-form"
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Form</h1>\n        <p>Semantic UI Form collection <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/collections/form.html\" target=\"_blank\">Semantic UI Form</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n        <sm-loader [complete]=\"!formSubmited\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n        \n        <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n        <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n        <sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\"></sm-checkbox>\n        <br/>\n        <sm-button (click)=\"submit()\" [disabled]=\"!form.valid\" class=\"primary\">Login</sm-button>\n        Is form valid: {{form.valid}}\n    </form>\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"8\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n <form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n    <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n    <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n    <sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\"></sm-checkbox>\n    <sm-button>Login</sm-button>\n</form>\n</textarea>\n        </div>\n      </div>\n\n      <br/><br/>\n      Page source: <a target=\"_blank\" href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts\">\n        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrREE7Z0JBUUksdUJBQVksRUFBZTtvQkFMM0IsaUJBQVksR0FBWSxLQUFLLENBQUM7b0JBQzlCLGdCQUFXLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFVLENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRyxpQkFBWSxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUcsaUJBQVksR0FBWSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUc1RCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVzt3QkFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO3dCQUMvQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7cUJBQ2xDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELHlDQUFpQixHQUFqQixVQUFrQixPQUFnQjtvQkFDOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ3pFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsOEJBQU0sR0FBTjtvQkFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFyRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVztxQkFDeEIsQ0FBQztvQkFDRCxXQUFJLENBQUM7d0JBQ0YsVUFBVSxFQUFFLENBQUMsOEJBQW1CLEVBQUUsOEJBQW1CLENBQUM7d0JBQ3RELFFBQVEsRUFBRSwyOURBdUNiO3FCQUNBLENBQUM7O2lDQUFBO2dCQXlCRixvQkFBQztZQUFELENBQUMsQUF4QkQsSUF3QkM7WUF4QkQseUNBd0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgQ29udHJvbCwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGVzdC1mb3JtXCJcbn0pXG5AVmlldyh7XG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+Rm9ybTwvaDE+XG4gICAgICAgIDxwPlNlbWFudGljIFVJIEZvcm0gY29sbGVjdGlvbiA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL2Zvcm0uaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIEZvcm08L2E+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vPC9oND5cbiAgICA8Zm9ybSBzbS1mb3JtIGNsYXNzPVwidWkgZm9ybVwiIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCI+XG4gICAgICAgIDxzbS1sb2FkZXIgW2NvbXBsZXRlXT1cIiFmb3JtU3VibWl0ZWRcIiBjbGFzcz1cImludmVydGVkXCIgdGV4dD1cIkxvYWRpbmcuLi5cIj48L3NtLWxvYWRlcj5cbiAgICAgICAgXG4gICAgICAgIDxzbS1pbnB1dCBsYWJlbD1cIk5hbWVcIiBbY29udHJvbF09XCJuYW1lQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XG4gICAgICAgIDxzbS1pbnB1dCBsYWJlbD1cIkUtbWFpbFwiIFtjb250cm9sXT1cImVtYWlsQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZS1tYWlsLi4uXCI+PC9zbS1pbnB1dD5cbiAgICAgICAgPHNtLWNoZWNrYm94IGxhYmVsPVwiSSBhZ3JlZSB0byB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnNcIiBbY29udHJvbF09XCJhZ3JlZUNvbnRyb2xcIj48L3NtLWNoZWNrYm94PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8c20tYnV0dG9uIChjbGljayk9XCJzdWJtaXQoKVwiIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiIGNsYXNzPVwicHJpbWFyeVwiPkxvZ2luPC9zbS1idXR0b24+XG4gICAgICAgIElzIGZvcm0gdmFsaWQ6IHt7Zm9ybS52YWxpZH19XG4gICAgPC9mb3JtPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuPHRleHRhcmVhIHJvd3M9XCI4XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuIDxmb3JtIHNtLWZvcm0gY2xhc3M9XCJ1aSBmb3JtXCIgW25nRm9ybU1vZGVsXT1cImZvcm1cIj5cbiAgICA8c20taW5wdXQgbGFiZWw9XCJOYW1lXCIgW2NvbnRyb2xdPVwibmFtZUNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWUuLi5cIj48L3NtLWlucHV0PlxuICAgIDxzbS1pbnB1dCBsYWJlbD1cIkUtbWFpbFwiIFtjb250cm9sXT1cImVtYWlsQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZS1tYWlsLi4uXCI+PC9zbS1pbnB1dD5cbiAgICA8c20tY2hlY2tib3ggbGFiZWw9XCJJIGFncmVlIHRvIHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uc1wiIFtjb250cm9sXT1cImFncmVlQ29udHJvbFwiPjwvc20tY2hlY2tib3g+XG4gICAgPHNtLWJ1dHRvbj5Mb2dpbjwvc20tYnV0dG9uPlxuPC9mb3JtPlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJyLz48YnIvPlxuICAgICAgUGFnZSBzb3VyY2U6IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvZm9ybS50c1wiPlxuICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvZm9ybS50c1xuICAgICAgPC9hPlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQge1xuXG4gICAgZm9ybTogQ29udHJvbEdyb3VwO1xuICAgIGZvcm1TdWJtaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIG5hbWVDb250cm9sOiBDb250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pKTtcbiAgICBlbWFpbENvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSkpO1xuICAgIGFncmVlQ29udHJvbDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiXCIsIHRoaXMuY2hlY2tib3hWYWxpZGF0b3IpO1xuXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWVDb250cm9sOiB0aGlzLm5hbWVDb250cm9sLFxuICAgICAgICAgICAgZW1haWxDb250cm9sOiB0aGlzLmVtYWlsQ29udHJvbCxcbiAgICAgICAgICAgIGFncmVlQ29udHJvbDogdGhpcy5hZ3JlZUNvbnRyb2xcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tib3hWYWxpZGF0b3IoY29udHJvbDogQ29udHJvbCkge1xuICAgICAgICBsZXQgdmFsdWUgPSAodHlwZW9mIGNvbnRyb2wudmFsdWUgPT09IFwiYm9vbGVhblwiKSA/IGNvbnRyb2wudmFsdWUgOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSkgPyBcIlwiIDogXCJ5ZXNcIjtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuZm9ybVN1Ym1pdGVkID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=