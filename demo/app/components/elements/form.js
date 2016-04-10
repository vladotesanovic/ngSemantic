System.register(["angular2/core", "angular2/common", "ng-semantic", "ng2-prism/codeblock", "ng2-prism/languages"], function(exports_1, context_1) {
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
    var core_1, common_1, ng_semantic_1, codeblock_1, languages_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
            FormComponent = (function () {
                function FormComponent(fb) {
                    this.agreeControl = new common_1.Control("", common_1.Validators.required);
                    this.emailControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.formSubmited = false;
                    this.nameControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.nameFControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.textControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(10)]));
                    this.form = fb.group({
                        emailControl: this.emailControl,
                        nameControl: this.nameControl,
                    });
                    this.formFeedback = fb.group({
                        nameFControl: this.nameFControl,
                        textControl: this.textControl
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
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        selector: "test-form",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Form</h1>\n\t<p>Semantic UI Form collection <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/collections/form.html\" target=\"_blank\">Semantic UI Form</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo login</h4>\n    <form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n\t<sm-loader [complete]=\"!formSubmited\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n\t<div class=\"field\">\n\t    <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\"></sm-checkbox>\n\t</div>\n\t<sm-button (click)=\"submit()\" [disabled]=\"!form.valid\" class=\"primary\">Login</sm-button>\n    </form>\n    <h4 class=\"ui header\">Code</h4>\n<codeblock markup>\n&lt;form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n    &lt;sm-loader [complete]=\"!formSubmited\" class=\"inverted\" text=\"Loading...\">&lt;/sm-loader>\n    <div class=\"field\">\n\t    &lt;sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\">&lt;/sm-input>\n    </div>\n    <div class=\"field\">\n\t    &lt;sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\">&lt;/sm-input>\n    </div>\n    <div class=\"field\">\n\t    &lt;sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\">&lt;/sm-checkbox>\n    </div>\n    &lt;sm-button (click)=\"submit()\" [disabled]=\"!form.valid\" class=\"primary\">Login&lt;/sm-button>\n&lt;/form>\n</codeblock>\n\n<h4 class=\"ui header\">Demo feedback</h4>\n<form sm-form class=\"ui form\" [ngFormModel]=\"formFeedback\">\n    <div class=\"field\">\n        <sm-input label=\"Name\" [control]=\"nameFControl\" placeholder=\"Enter name...\"></sm-input>\n    </div>\n    <div class=\"field\">\n        <sm-textarea label=\"Name\" rows=\"10\" [control]=\"textControl\"></sm-textarea>\n    </div>\n    <sm-button (click)=\"send()\" class=\"primary\">Send</sm-button>\n</form>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOERBO2dCQVlJLHVCQUFZLEVBQWU7b0JBWDNCLGlCQUFZLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM3RCxpQkFBWSxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFJNUcsaUJBQVksR0FBWSxLQUFLLENBQUM7b0JBQzlCLGdCQUFXLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFVLENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUUzRyxpQkFBWSxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUcsZ0JBQVcsR0FBWSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQVUsQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRy9HLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDakIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO3dCQUMvQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7cUJBQ2hDLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTt3QkFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO3FCQUNoQyxDQUFDLENBQUM7Z0JBQ0EsQ0FBQztnQkFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsT0FBZ0I7b0JBQ2pDLElBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUN6RSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixDQUFDO2dCQUVELDhCQUFNLEdBQU47b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBdkZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQUUscUJBQVMsRUFBRSxrQkFBTSxDQUFDO3dCQUN6RSxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLHd4RUFtRGI7cUJBQ0EsQ0FBQzs7aUNBQUE7Z0JBaUNGLG9CQUFDO1lBQUQsQ0FBQyxBQWhDRCxJQWdDQztZQWhDRCx5Q0FnQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7IENvbnRyb2wsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcclxuaW1wb3J0IHsgQ29kZWJsb2NrIH0gZnJvbSBcIm5nMi1wcmlzbS9jb2RlYmxvY2tcIjtcclxuaW1wb3J0IHsgTWFya3VwIH0gZnJvbSBcIm5nMi1wcmlzbS9sYW5ndWFnZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIENvZGVibG9jaywgTWFya3VwXSxcclxuICAgIHNlbGVjdG9yOiBcInRlc3QtZm9ybVwiLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxyXG5cdDxoMT5Gb3JtPC9oMT5cclxuXHQ8cD5TZW1hbnRpYyBVSSBGb3JtIGNvbGxlY3Rpb24gPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxyXG5cdDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL2Zvcm0uaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIEZvcm08L2E+PC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cclxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gbG9naW48L2g0PlxyXG4gICAgPGZvcm0gc20tZm9ybSBjbGFzcz1cInVpIGZvcm1cIiBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiPlxyXG5cdDxzbS1sb2FkZXIgW2NvbXBsZXRlXT1cIiFmb3JtU3VibWl0ZWRcIiBjbGFzcz1cImludmVydGVkXCIgdGV4dD1cIkxvYWRpbmcuLi5cIj48L3NtLWxvYWRlcj5cclxuXHQ8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuXHQgICAgPHNtLWlucHV0IGxhYmVsPVwiTmFtZVwiIFtjb250cm9sXT1cIm5hbWVDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lLi4uXCI+PC9zbS1pbnB1dD5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuXHQgICAgPHNtLWlucHV0IGxhYmVsPVwiRS1tYWlsXCIgW2NvbnRyb2xdPVwiZW1haWxDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlLW1haWwuLi5cIj48L3NtLWlucHV0PlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG5cdCAgICA8c20tY2hlY2tib3ggbGFiZWw9XCJJIGFncmVlIHRvIHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uc1wiIFtjb250cm9sXT1cImFncmVlQ29udHJvbFwiPjwvc20tY2hlY2tib3g+XHJcblx0PC9kaXY+XHJcblx0PHNtLWJ1dHRvbiAoY2xpY2spPVwic3VibWl0KClcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIiBjbGFzcz1cInByaW1hcnlcIj5Mb2dpbjwvc20tYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XHJcbjxjb2RlYmxvY2sgbWFya3VwPlxyXG4mbHQ7Zm9ybSBzbS1mb3JtIGNsYXNzPVwidWkgZm9ybVwiIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCI+XHJcbiAgICAmbHQ7c20tbG9hZGVyIFtjb21wbGV0ZV09XCIhZm9ybVN1Ym1pdGVkXCIgY2xhc3M9XCJpbnZlcnRlZFwiIHRleHQ9XCJMb2FkaW5nLi4uXCI+Jmx0Oy9zbS1sb2FkZXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuXHQgICAgJmx0O3NtLWlucHV0IGxhYmVsPVwiTmFtZVwiIFtjb250cm9sXT1cIm5hbWVDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lLi4uXCI+Jmx0Oy9zbS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcblx0ICAgICZsdDtzbS1pbnB1dCBsYWJlbD1cIkUtbWFpbFwiIFtjb250cm9sXT1cImVtYWlsQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZS1tYWlsLi4uXCI+Jmx0Oy9zbS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcblx0ICAgICZsdDtzbS1jaGVja2JveCBsYWJlbD1cIkkgYWdyZWUgdG8gdGhlIFRlcm1zIGFuZCBDb25kaXRpb25zXCIgW2NvbnRyb2xdPVwiYWdyZWVDb250cm9sXCI+Jmx0Oy9zbS1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gICAgJmx0O3NtLWJ1dHRvbiAoY2xpY2spPVwic3VibWl0KClcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIiBjbGFzcz1cInByaW1hcnlcIj5Mb2dpbiZsdDsvc20tYnV0dG9uPlxyXG4mbHQ7L2Zvcm0+XHJcbjwvY29kZWJsb2NrPlxyXG5cclxuPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBmZWVkYmFjazwvaDQ+XHJcbjxmb3JtIHNtLWZvcm0gY2xhc3M9XCJ1aSBmb3JtXCIgW25nRm9ybU1vZGVsXT1cImZvcm1GZWVkYmFja1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgPHNtLWlucHV0IGxhYmVsPVwiTmFtZVwiIFtjb250cm9sXT1cIm5hbWVGQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxzbS10ZXh0YXJlYSBsYWJlbD1cIk5hbWVcIiByb3dzPVwiMTBcIiBbY29udHJvbF09XCJ0ZXh0Q29udHJvbFwiPjwvc20tdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzbS1idXR0b24gKGNsaWNrKT1cInNlbmQoKVwiIGNsYXNzPVwicHJpbWFyeVwiPlNlbmQ8L3NtLWJ1dHRvbj5cclxuPC9mb3JtPlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCB7XHJcbiAgICBhZ3JlZUNvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgIGVtYWlsQ29udHJvbDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKSk7XHJcblxyXG4gICAgZm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgZm9ybUZlZWRiYWNrOiBDb250cm9sR3JvdXA7XHJcbiAgICBmb3JtU3VibWl0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG5hbWVDb250cm9sOiBDb250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pKTtcclxuXHJcbiAgICBuYW1lRkNvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSkpO1xyXG4gICAgdGV4dENvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEwKV0pKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcclxuXHR0aGlzLmZvcm0gPSBmYi5ncm91cCh7XHJcblx0ICAgIGVtYWlsQ29udHJvbDogdGhpcy5lbWFpbENvbnRyb2wsXHJcblx0ICAgIG5hbWVDb250cm9sOiB0aGlzLm5hbWVDb250cm9sLFxyXG5cdH0pO1xyXG5cclxuXHR0aGlzLmZvcm1GZWVkYmFjayA9IGZiLmdyb3VwKHtcclxuXHQgICAgbmFtZUZDb250cm9sOiB0aGlzLm5hbWVGQ29udHJvbCxcclxuXHQgICAgdGV4dENvbnRyb2w6IHRoaXMudGV4dENvbnRyb2xcclxuXHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja2JveFZhbGlkYXRvcihjb250cm9sOiBDb250cm9sKSB7XHJcblx0ICAgIGxldCB2YWx1ZSA9ICh0eXBlb2YgY29udHJvbC52YWx1ZSA9PT0gXCJib29sZWFuXCIpID8gY29udHJvbC52YWx1ZSA6IGZhbHNlO1xyXG5cdCAgICByZXR1cm4gKHZhbHVlKSA/IFwiXCIgOiBcInllc1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuXHQgICAgdGhpcy5mb3JtU3VibWl0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==