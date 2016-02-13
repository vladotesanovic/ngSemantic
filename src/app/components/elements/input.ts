import { Component, View } from "angular2/core";
import { Control, Validators, ControlGroup, FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES } from "angular2/common";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
    selector: "test-input",
    providers: [FORM_PROVIDERS]
})
@View({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, FORM_DIRECTIVES],
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Input</h1>
        <p>Semantic UI input element <i class="icon external"></i>
        <a href="http://semantic-ui.com/elements/input.html" target="_blank">Semantic UI Input</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    ToDo
    <!--
    <sm-form [formModel]="form">
        <input type="text" ngControl="input">
    </sm-form>
    
    <form [ngFormModel]="form">
        <input type="text" ngControl="input">
    </form>
    -->
    <h5>{{inputValue}}</h5>
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="2" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-input class="ui input" placeholder="Search..." [(value)]="inputValue"></sm-input>
</textarea>
        </div>
      </div>
</div>
`
})

export class InputComponent {

    input: Control = new Control("Hello", Validators.required);
    form: ControlGroup;

    constructor(fb: FormBuilder) {

        this.form = fb.group({
            input: this.input
        });

        this.input.valueChanges.subscribe((data: any) => {
            console.log(data);
        });
    }
}
