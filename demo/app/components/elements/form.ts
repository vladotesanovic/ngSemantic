import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "sm-page-form",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
	<h1>Form</h1>
	<p>Semantic UI Form collection <i class="icon external"></i>
	<a href="http://semantic-ui.com/collections/form.html" target="_blank">Semantic UI Form</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Login</h4>
    
    <form class="ui form" [formGroup]="form">
	<sm-loader [complete]="!formSubmited" class="inverted" text="Loading..."></sm-loader>
	<div class="field">
	    <sm-input label="Name" icon="user" class="left" [control]="form.get('nameControl')" placeholder="Enter name..."></sm-input>
	</div>
	<div class="field">
	    <sm-input label="E-mail" icon="mail" class="left" [control]="form.get('emailControl')" placeholder="Enter e-mail..."></sm-input>
	</div>
	<div class="field">
	    <sm-checkbox label="I agree to the Terms and Conditions" [control]="form.get('agreeControl')"></sm-checkbox>
	</div>
	<sm-button (click)="submit()" [disabled]="!form.valid" class="primary">Login</sm-button>
    </form>
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;form class="ui form" [formGroup]="form"> 
    &lt;sm-loader [complete]="!formSubmited" class="inverted" text="Loading...">&lt;/sm-loader>
    &lt;div class="field">
	    &lt;sm-input label="Name" [control]="form.get('nameControl')" placeholder="Enter name...">&lt;/sm-input>
    &lt;/div>
    &lt;div class="field">
	    &lt;sm-input label="E-mail" [control]="form.get('emailControl')" placeholder="Enter e-mail...">&lt;/sm-input>
    &lt;/div>
    &lt;div class="field">
	    &lt;sm-checkbox label="I agree to the Terms and Conditions" [control]="form.get('agreeControl')">&lt;/sm-checkbox>
    &lt;/div>
    &lt;sm-button (click)="submit()" [disabled]="!form.valid" class="primary">Login&lt;/sm-button>
&lt;/form>
</sm-codeblock>
<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Feedback</h4>
<form class="ui form" [formGroup]="formFeedback">
    <div class="field">
        <sm-input label="Name" [control]="formFeedback.get('nameControl')" placeholder="Enter name..."></sm-input>
        Remaining: {{(formFeedback.get('nameControl').value.length - 4 )}}
    </div>
    <div class="field">
        <label>Category</label>
        <sm-select class="fluid" [control]="formFeedback.get('selectControl')" placeholder="Choose category...">
            <option>Support</option>
            <option>Feedback</option>
        </sm-select>
    </div>
    <div class="field">
        <sm-textarea label="Name" rows="10" [control]="formFeedback.get('textControl')"></sm-textarea>
        Remaining: {{(formFeedback.get('textControl').value.length - 10)}}
    </div>
    <sm-button (click)="feedbackModal.show({ transition: 'slide up'})" [disabled]="!formFeedback.valid" class="primary">Send</sm-button>
</form>

<sm-modal title="Feedback sent" #feedbackModal>
    <modal-content>
        <h2 class="ui icon center aligned header">
          <i class="thumbs up icon"></i>
          <div class="content">
            <p>Successfully sent</p>
            <div class="sub header">{{formFeedback.get('nameControl').value}}</div>
            <div>{{formFeedback.get("selectControl").value}}</div>
            <p>
                {{formFeedback.get("textControl").value}}
            </p>
          </div>
        </h2>
    </modal-content>
</sm-modal>
</div>
`
})
export class FormComponent {
    form: FormGroup;
    formFeedback: FormGroup;
    formSubmited: boolean = false;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            agreeControl: ["", Validators.required],
            emailControl: ["", Validators.compose([Validators.required, Validators.minLength(4)])],
            nameControl: ["", Validators.compose([Validators.required, Validators.minLength(4)])],
        });

        this.formFeedback = fb.group({
            nameControl: ["", Validators.compose([Validators.required, Validators.minLength(4)])],
            selectControl: [""],
            textControl: ["", Validators.compose([Validators.required, Validators.minLength(10)])]
        });
    }

    submit() {
	    this.formSubmited = true;
    }
}
