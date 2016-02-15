import { Component, View } from "angular2/core";
import { Control, Validators, ControlGroup, FormBuilder } from "angular2/common";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
    selector: "test-form"
})
@View({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Form</h1>
        <p>Semantic UI Form collection <i class="icon external"></i>
        <a href="http://semantic-ui.com/collections/form.html" target="_blank">Semantic UI Form</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <form sm-form class="ui form" [ngFormModel]="form">
        <sm-input label="Name" [control]="nameControl" placeholder="Enter name..."></sm-input>
        <sm-input label="E-mail" [control]="emailControl" placeholder="Enter e-mail..."></sm-input>
        
        <br/>
        <sm-button class="primary">Login</sm-button>
        Is form valid: {{form.valid}}
    </form>
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="7" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
 <form sm-form class="ui form" [ngFormModel]="form">
    <sm-input label="Name" [control]="nameControl" placeholder="Enter name..."></sm-input>
    <sm-input label="E-mail" [control]="emailControl" placeholder="Enter e-mail..."></sm-input>
    <sm-button>Login</sm-button>
</form>
</textarea>
        </div>
      </div>
      
      <br/><br/>
      Page source: <a target="_blank" href="https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts">
        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts
      </a>
</div>
`
})
export class FormComponent {

    form: ControlGroup;
    nameControl: Control = new Control("", Validators.compose([Validators.required, Validators.minLength(4)]));
    emailControl: Control = new Control("", Validators.compose([Validators.required, Validators.minLength(4)]));

    constructor(fb: FormBuilder) {

        this.form = fb.group({
            nameControl: this.nameControl,
            emailControl: this.emailControl
        });
    }
}
