import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";
import { FormControl, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

@Component({
    directives: [SEMANTIC_COMPONENTS, REACTIVE_FORM_DIRECTIVES, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-input",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
	<h1>Input</h1>
	<p>Semantic UI Input <i class="icon external"></i>
	<a href="http://semantic-ui.com/elements/input.html" target="_blank">Semantic UI Input</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Simple</h4>
    <sm-input icon="user" [control]="user" class="left" placeholder="Enter name..."></sm-input>
    <p>{{user.value}}</p>
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-input icon="dollar" [control]="user" class="left" placeholder="Enter name...">&lt;/sm-input>
</sm-codeblock>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    
    <h4 class="ui header">Number</h4>
    <sm-input icon="dollar" type="number" [(model)]="model" class="right fluid" placeholder="Enter a sum..."></sm-input>
    <p>{{model}}</p>
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-input icon="dollar" type="number" [(model)]="model" class="right fluid" placeholder="Enter a sum...">&lt;/sm-input>
</sm-codeblock>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    
    <h4 class="ui header">Labeled</h4>
    <sm-input class="left labeled" label="http://" placeholder="Enter name..."></sm-input>
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-input class="left labeled" label="http://" placeholder="Enter address...">&lt;/sm-input>
</sm-codeblock>
<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Options</h4>
<table class="ui celled striped table">
  <tbody>
    <tr><td colspan="2">Options</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [control]
      </td>
      <td>Instance of FormControl. <a href="https://angular.io/docs/ts/latest/api/forms/index/FormControl-class.html"
       target="_blank"><i class="icon external"></i> </a> ( optional )</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [(model)]
      </td>
      <td>Two way data binding. Instance of number or string. ( optional )</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [class]
      </td>
      <td>List of CSS classes associated with select element.</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [label]
      </td>
      <td>Label text.</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [type]
      </td>
      <td>Input type, default is <b>text</b></td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [icon]
      </td>
      <td>Semantic UI icon name. <a href="http://semantic-ui.com/elements/icon.html"
       target="_blank"><i class="icon external"></i> </a></td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [placeholder]
      </td>
      <td>Placeholder text</td>
    </tr>
  </tbody>
</table>

</div>
`
})
export class InputComponent {
    model: string;
    user: FormControl = new FormControl("");
}
