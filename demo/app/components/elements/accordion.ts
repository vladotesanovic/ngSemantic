import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";
import { Control, Validators, FormBuilder, ControlGroup } from "@angular/common";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "ui-accordion",
    template: `
    <div class="ui masthead vertical segment">
        <div class="ui container">
            <h1>Accordion</h1>
            <p>Semantic UI accordion module <i class="icon external"></i>
            <a href="http://semantic-ui.com/modules/accordion.html" target="_blank">Semantic UI Accordion</a></p>
        </div>
    </div>
    <div class="main ui container">
        <h4 class="ui header">Demo</h4>
        
        <sm-accordion [options]="{exclusive: false}">
            <sm-accordion-item title="What is a dog?">
                A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
            </sm-accordion-item>
            <sm-accordion-item title="What kinds of dogs are there?">
                There are many breeds of dogs. Each breed varies in size and temperament.
                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.
            </sm-accordion-item>
            <sm-accordion-item title="How do you acquire a dog?">
                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
                A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner 
                allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, 
                finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.
            </sm-accordion-item>
        </sm-accordion>
        
        <h4 class="ui header">Code</h4>
<codeblock markup>
&lt;sm-accordion [options]="{exclusive: false}">
    &lt;sm-accordion-item title="What is a dog?">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    &lt;/sm-accordion-item>
    &lt;sm-accordion-item title="What kinds of dogs are there?">
        There are many breeds of dogs. Each breed varies in size and temperament.
        Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.
    &lt;/sm-accordion-item>
    &lt;sm-accordion-item title="How do you acquire a dog?">
        Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
        A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner 
        allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, 
        finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.
    &lt;/sm-accordion-item>
&lt;/sm-accordion>
</codeblock>
         <h4 class="ui header">Demo styled</h4>
         <sm-accordion class="styled">
            <sm-accordion-item title="What is a dog?">
                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, 
                it can be found as a welcome guest in many households across the world.
            </sm-accordion-item>
            <sm-accordion-item title="What kinds of dogs are there?">
                There are many breeds of dogs. Each breed varies in size and temperament. 
                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.
            </sm-accordion-item>
            <sm-accordion-item title="How do you acquire a dog?">
                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
                A pet shop may be the most convenient way to buy a dog. 
                Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog 
                before choosing to take it home. 
                Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.
            </sm-accordion-item>
        </sm-accordion>
        
        <h4 class="ui header">Demo fluid</h4>
        <sm-accordion class="styled fluid">
            <sm-accordion-item title="What is a dog?">
                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, 
                it can be found as a welcome guest in many households across the world.
            </sm-accordion-item>
            <sm-accordion-item title="What kinds of dogs are there?">
                There are many breeds of dogs. Each breed varies in size and temperament. 
                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.
            </sm-accordion-item>
            <sm-accordion-item title="How do you acquire a dog?">
                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
                A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows 
                you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, 
                finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.
            </sm-accordion-item>
        </sm-accordion>
        
        <h4 class="ui header">Demo inverted</h4>
        <sm-segment class="inverted">
           <sm-accordion class="inverted">
            <sm-accordion-item title="What is a dog?">
                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, 
                it can be found as a welcome guest in many households across the world.
            </sm-accordion-item>
            <sm-accordion-item title="What kinds of dogs are there?">
                There are many breeds of dogs. Each breed varies in size and temperament. 
                Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.
            </sm-accordion-item>
            <sm-accordion-item title="How do you acquire a dog?">
                Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
                A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess 
                the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter,
                 helps give a good home to a dog who may not find one so readily.
            </sm-accordion-item>
            </sm-accordion>
        </sm-segment>
             
        <h4 class="ui header">Demo form</h4>
        <sm-segment>
            <form sm-form class="ui form" [ngFormModel]="form">
                <div class="field">
                    <sm-input label="Name" [control]="nameControl" placeholder="Enter name..."></sm-input>
                </div>
                <sm-accordion>
                    <sm-accordion-item title="Additional">                        
                        <div class="field">
                            <sm-input label="E-mail" [control]="emailControl" placeholder="Enter e-mail..."></sm-input>
                        </div>
                        <div class="field">
                            <sm-input label="Phone number" [control]="emailControl" placeholder="Enter phone number..."></sm-input>
                        </div>
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

    agreeControl: Control = new Control("", Validators.required);
    nameControl: Control = new Control("", Validators.compose([Validators.required, Validators.minLength(4)]));
    emailControl: Control = new Control("", Validators.compose([Validators.required, Validators.minLength(4)]));

    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            emailControl: this.emailControl,
            nameControl: this.nameControl,
        });
    }
}
