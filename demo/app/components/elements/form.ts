import { Component , Type } from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES, Validators, FormControl, FormBuilder, FormGroup } from "@angular/forms";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
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
    <h4 class="ui header">Demo login</h4>
    
    <form class="ui form" [formGroup]="form">
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
<sm-codeblock smPrismjs="html">
&lt;form class="ui form" [formGroup]="form"> 
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
</sm-codeblock>
<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Demo feedback</h4>
<form class="ui form" [formGroup]="formFeedback">
    <div class="field">
        <sm-input label="Name" [control]="nameFControl" placeholder="Enter name..."></sm-input>
        Remaining: {{(nameFControl.value.length - 4 )}}
    </div>
    <div class="field">
        <label>Category</label>
        <sm-select class="fluid" [control]="selectControl" placeholder="Choose category...">
            <option>Support</option>
            <option>Feedback</option>
        </sm-select>
    </div>
    <div class="field">
        <sm-textarea label="Name" rows="10" [control]="textControl"></sm-textarea>
        Remaining: {{(textControl.value.length - 10)}}
    </div>
    <sm-button (click)="feedbackModal.show({ transition: 'slide up'})" [disabled]="!formFeedback.valid" class="primary">Send</sm-button>
</form>

<sm-modal title="Feedback sent" #feedbackModal>
    <modal-content>
        <h2 class="ui icon center aligned header">
          <i class="thumbs up icon"></i>
          <div class="content">
            <p>Successfully sent</p>
            <div class="sub header">{{nameFControl.value}}</div>
            <div>{{selectControl.value}}</div>
            <p>
                {{textControl.value}}
            </p>
          </div>
        </h2>
    </modal-content>
</sm-modal>
</div>
`
})
export class FormComponent {
    agreeControl: FormControl = new FormControl("", Validators.required);
    emailControl: FormControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)]));
    search: FormControl = new FormControl("");

    form: FormGroup;
    formFeedback: FormGroup;
    formSubmited: boolean = false;
    nameControl: FormControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)]));

    nameFControl: FormControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)]));
    selectControl: FormControl = new FormControl("");
    textControl: FormControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(10)]));

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            emailControl: this.emailControl,
            nameControl: this.nameControl,
        });

        this.formFeedback = fb.group({
            nameFControl: this.nameFControl,
            selectControl: this.selectControl,
            textControl: this.textControl
        });
    }

    checkboxValidator(control: FormControl) {
	    let value = (typeof control.value === "boolean") ? control.value : false;
	    return (value) ? "" : "yes";
    }

    submit() {
	    this.formSubmited = true;
    }
}
