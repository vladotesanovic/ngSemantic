import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { FormControl, Validators } from "@angular/forms";

import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-checkbox",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Checkbox</h1>
        <p>Semantic UI checkbox module: <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/checkbox.html" target="_blank">Semantic UI Checkbox</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    
    <sm-checkbox label="Make my profile visible" [control]="checkboxControl"></sm-checkbox>
    <p>Value: {{checkboxControl.value}}</p>
    
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-checkbox label="Make my profile visible" [control]="checkboxControl">&lt;/sm-checkbox>
</sm-codeblock>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo radio</h4>
    
    <sm-checkbox label="Radio choice" [control]="radioControl" type="radio"></sm-checkbox>

      <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-checkbox label="Radio choice" [control]="radioControl" type="radio">&lt;/sm-checkbox>
</sm-codeblock>  
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo slider</h4>
    
    <sm-checkbox label="Accept terms and conditions" [control]="sliderControl" type="slider"></sm-checkbox>

<sm-codeblock smPrismjs="html">
&lt;sm-checkbox label="Accept terms and conditions" [control]="sliderControl" type="slider">&lt;/sm-checkbox>
</sm-codeblock>

<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo toggle</h4>
    
    <sm-checkbox label="Subscribe to weekly newsletter" [control]="toggleControl" type="toggle"></sm-checkbox>

<sm-codeblock smPrismjs="html">
&lt;sm-checkbox label="Subscribe to weekly newsletter" [control]="toggleControl" type="toggle">&lt;/sm-checkbox>
</sm-codeblock> 
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo disabled</h4>
    
    <sm-checkbox label="Make my profile visible" [control]="checkboxControl" [disabled]="true"></sm-checkbox>
    
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-checkbox label="Make my profile visible" [control]="checkboxControl" [disabled]="true">&lt;/sm-checkbox>
</sm-codeblock>

 <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Demo radio group</h4>
 <div class="ui form">
  <div class="grouped fields">
    <label>Outbound Throughput</label>
    <sm-checkbox label="1 option" [control]="formRadioControl" type="radio" name="colors" value="1"></sm-checkbox>
    <sm-checkbox label="2 option" [control]="formRadioControl" type="radio" name="colors" value="2"></sm-checkbox>
    <sm-checkbox label="3 option" [control]="formRadioControl" type="radio" name="colors" value="3"></sm-checkbox>
    </div>
</div>
<sm-codeblock smPrismjs="html">
&lt;div class="ui form">
  &lt;div class="grouped fields">
    &lt;label>Outbound Throughput&lt;/label>
    &lt;sm-checkbox label="1 option" [control]="formRadioControl" type="radio" name="colors" value="1">&lt;/sm-checkbox>
    &lt;sm-checkbox label="2 option" [control]="formRadioControl" type="radio" name="colors" value="2">&lt;/sm-checkbox>
    &lt;sm-checkbox label="3 option" [control]="formRadioControl" type="radio" name="colors" value="3">&lt;/sm-checkbox>
  &lt;/div>
&lt;/div>
</sm-codeblock> 
</div>
`
})

export class CheckboxComponent {
    checkboxControl: FormControl = new FormControl(false);
    radioControl: FormControl = new FormControl(true);
    sliderControl: FormControl = new FormControl();
    toggleControl: FormControl = new FormControl();
    formRadioControl: FormControl = new FormControl();
}
