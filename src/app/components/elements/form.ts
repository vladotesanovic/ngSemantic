import { Component } from "angular2/core";
import { Control, Validators, ControlGroup, FormBuilder } from "angular2/common";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
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
 <div class="ui form">
	<div class="field">
<textarea rows="14" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
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
</textarea>
	</div>
      </div>

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


      <br/><br/>
      Page source: <a target="_blank" href="https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts">
	https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts
      </a>
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
//            agreeControl: this.agreeControl,
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
