import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";
import { REACTIVE_FORM_DIRECTIVES, Validators, FormControl, FormBuilder, FormGroup } from "@angular/forms";

@Component({
    directives: [SEMANTIC_COMPONENTS, REACTIVE_FORM_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-accordion",
    template: `
    <div class="ui masthead vertical segment">
        <div class="ui container">
            <h1>Accordion</h1>
            <p>Semantic UI accordion module <i class="icon external"></i>
            <a href="http://semantic-ui.com/modules/accordion.html" target="_blank">Semantic UI Accordion</a></p>
        </div>
    </div>
    <div class="main ui container">
    
        <p>Options can be passed in form of JavaScript object. Full list of settings can be found on: </p>
        <a href="http://semantic-ui.com/modules/accordion.html#/settings" target="_blank">
        http://semantic-ui.com/modules/accordion.html#/settings
        </a>
        
        <h4 class="ui header">Demo ( with options )</h4>
        <sm-accordion [options]="accordionOption">
            <sm-accordion-item>
                <accordion-title>What is a dog?</accordion-title>
                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.</accordion-content>
            </sm-accordion-item>
            <sm-accordion-item>
                <accordion-title>What kinds of dogs are there?</accordion-title>
                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.</accordion-content>
            </sm-accordion-item>
            <sm-accordion-item>
                <accordion-title>How do you acquire a dog?</accordion-title>
                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.</accordion-content>
            </sm-accordion-item>
        </sm-accordion>
        <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
accordionOption = {
    exclusive: true,
    on: "mouseenter"
}
&lt;sm-accordion [options]="accordionOption">
    &lt;sm-accordion-item>
        &lt;accordion-title>What is a dog?&lt;/accordion-title>
        &lt;accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.&lt;/accordion-content>
    &lt;/sm-accordion-item>
    &lt;sm-accordion-item>
        &lt;accordion-title>What is a dog?&lt;/accordion-title>
        &lt;accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.&lt;/accordion-content>
    &lt;/sm-accordion-item>
    &lt;sm-accordion-item>
        &lt;accordion-title>What is a dog?&lt;/accordion-title>
        &lt;accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.&lt;/accordion-content>
    &lt;/sm-accordion-item>
&lt;/sm-accordion>
</sm-codeblock>
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
         <h4 class="ui header">Demo styled</h4>
         <sm-accordion class="styled">
            <sm-accordion-item>
                <accordion-title>What is a dog?</accordion-title>
                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.</accordion-content>
            </sm-accordion-item>
            <sm-accordion-item>
                <accordion-title>What kinds of dogs are there?</accordion-title>
                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.</accordion-content>
            </sm-accordion-item>
            <sm-accordion-item>
                <accordion-title>How do you acquire a dog?</accordion-title>
                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.</accordion-content>
            </sm-accordion-item>
        </sm-accordion>
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Demo fluid ( second is active by default)</h4>
        <sm-accordion class="styled fluid">
            <sm-accordion-item>
                <accordion-title>What is a dog?</accordion-title>
                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.</accordion-content>
            </sm-accordion-item>
            <sm-accordion-item>
                <accordion-title>What kinds of dogs are there?</accordion-title>
                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.</accordion-content>
            </sm-accordion-item>
            <sm-accordion-item>
                <accordion-title>How do you acquire a dog?</accordion-title>
                <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.</accordion-content>
            </sm-accordion-item>
        </sm-accordion>
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Demo inverted</h4>
        <sm-segment class="inverted teal">
           <sm-accordion class="inverted">
                <sm-accordion-item>
                    <accordion-title>What is a dog?</accordion-title>
                    <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                    it can be found as a welcome guest in many households across the world.</accordion-content>
                </sm-accordion-item>
                <sm-accordion-item>
                    <accordion-title>What kinds of dogs are there?</accordion-title>
                    <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                    it can be found as a welcome guest in many households across the world.</accordion-content>
                </sm-accordion-item>
                <sm-accordion-item>
                    <accordion-title>How do you acquire a dog?</accordion-title>
                    <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                    it can be found as a welcome guest in many households across the world.</accordion-content>
                </sm-accordion-item>
            </sm-accordion>
        </sm-segment>
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Demo form</h4>
        <sm-segment>
            <form class="ui form" [formGroup]="form">
                <div class="field">
                    <sm-input label="Name" [control]="nameControl" placeholder="Enter name..."></sm-input>
                </div>
                <sm-accordion>
                    <sm-accordion-item>   
                        <accordion-title>Additional</accordion-title>
                        <accordion-content>
                            <div class="field">
                                <sm-input label="E-mail" [control]="emailControl" placeholder="Enter e-mail..."></sm-input>
                            </div>
                            <div class="field">
                                <sm-input label="Phone number" [control]="emailControl" placeholder="Enter phone number..."></sm-input>
                            </div>
                        </accordion-content>
                    </sm-accordion-item>
                </sm-accordion>
                    <p></p>
                    <sm-button class="primary">Save</sm-button>
                </form>
        </sm-segment>
    </div>
    `
})

export class AccordionComponent {

    agreeControl: FormControl = new FormControl("", Validators.required);
    nameControl: FormControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)]));
    emailControl: FormControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)]));

    form: FormGroup;
    accordionOption = {
        exclusive: true,
        on: "mouseenter"
    };

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            emailControl: this.emailControl,
            nameControl: this.nameControl,
        });
    }
}
