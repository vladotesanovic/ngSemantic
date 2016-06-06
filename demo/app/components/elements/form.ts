import { Component , Type } from "@angular/core";
import { Control, Validators, ControlGroup, FormBuilder } from "@angular/common";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "test-form",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
	<h1>Form</h1>
	<p>Semantic UI Form collection <i class="icon external"></i>
	<a href="http://semantic-ui.com/collections/form.html" target="_blank">Semantic UI Form</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo login</h4>
    <form sm-form class="ui form" [ngFormModel]="form">
	<sm-loader [complete]="!formSubmited" class="inverted" text="Loading..."></sm-loader>
	<div class="field">
	    <sm-input label="Name" [control]="nameControl" placeholder="Enter name..."></sm-input>
	</div>
	<div class="field">
	    <sm-input label="E-mail" [control]="emailControl" placeholder="Enter e-mail..."></sm-input>
	</div>
	<div class="field">
	    <sm-checkbox label="I agree to the Terms and Conditions" [control]="agreeControl"></sm-checkbox>
	</div>
	<sm-button (click)="submit()" [disabled]="!form.valid" class="primary">Login</sm-button>
    </form>
    <h4 class="ui header">Code</h4>
<codeblock prismjs="html">
&lt;form sm-form class="ui form" [ngFormModel]="form">
    &lt;sm-loader [complete]="!formSubmited" class="inverted" text="Loading...">&lt;/sm-loader>
    &lt;div class="field">
	    &lt;sm-input label="Name" [control]="nameControl" placeholder="Enter name...">&lt;/sm-input>
    &lt;/div>
    &lt;div class="field">
	    &lt;sm-input label="E-mail" [control]="emailControl" placeholder="Enter e-mail...">&lt;/sm-input>
    &lt;/div>
    &lt;div class="field">
	    &lt;sm-checkbox label="I agree to the Terms and Conditions" [control]="agreeControl">&lt;/sm-checkbox>
    &lt;/div>
    &lt;sm-button (click)="submit()" [disabled]="!form.valid" class="primary">Login&lt;/sm-button>
&lt;/form>
</codeblock>

<h4 class="ui header">Demo feedback</h4>
<form sm-form class="ui form" [ngFormModel]="formFeedback">
    <div class="field">
        <sm-input label="Name" [control]="nameFControl" placeholder="Enter name..."></sm-input>
    </div>
    <div class="field">
        <sm-textarea label="Name" rows="10" [control]="textControl"></sm-textarea>
    </div>
    <sm-button (click)="send()" class="primary">Send</sm-button>
</form>
</div>
`
})
export class FormComponent {
    agreeControl: Control = new Control("", Validators.required);
    emailControl: Control = new Control("", Validators.compose([Validators.required, Validators.minLength(4)]));

    form: ControlGroup;
    formFeedback: ControlGroup;
    formSubmited: boolean = false;
    nameControl: Control = new Control("", Validators.compose([Validators.required, Validators.minLength(4)]));

    nameFControl: Control = new Control("", Validators.compose([Validators.required, Validators.minLength(4)]));
    textControl: Control = new Control("", Validators.compose([Validators.required, Validators.minLength(10)]));

    constructor(fb: FormBuilder) {
	this.form = fb.group({
	    emailControl: this.emailControl,
	    nameControl: this.nameControl,
	});

	this.formFeedback = fb.group({
	    nameFControl: this.nameFControl,
	    textControl: this.textControl
	});
    }

    checkboxValidator(control: Control) {
	    let value = (typeof control.value === "boolean") ? control.value : false;
	    return (value) ? "" : "yes";
    }

    submit() {
	    this.formSubmited = true;
    }
}
