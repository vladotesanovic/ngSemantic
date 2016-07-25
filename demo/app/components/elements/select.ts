import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";
import { FormControl, Validators } from "@angular/forms";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-select",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Select</h1>
        <p>Dropdown UI module: <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/dropdown.html" target="_blank">Semantic UI Dropdown</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <sm-select [control]="selectControl" placeholder="Search..." class="fluid search">
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </sm-select>
    <p>Selected: {{selectControl.value}}</p>
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-select [control]="selectControl" placeholder="Search..." class="fluid search">
    &lt;option>1&lt;/option>
    &lt;option>2&lt;/option>
    &lt;option>3&lt;/option>
&lt;/sm-select>
</sm-codeblock>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo Multiple</h4>
    <p><i>Wrapped in 'ui form' for validation.</i></p>
    <div class="ui form">
    <sm-select [options]="{direction: 'upward', transition: 'vertical flip'}" [control]="multipleControl" placeholder="Select multiple..." 
    class="fluid search multiple" (onChange)="onMultiple($event)">
        <option *ngFor="let city of cities">{{city}}</option>
    </sm-select>
    </div>
    <p>Selected: {{multipleData | json}}</p>
<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-select
    [options]="{direction: 'upward', transition: 'vertical flip'}"
    [control]="selectControl"
    placeholder="Select multiple..." 
    class="fluid search multiple"
    (onChange)="onMultiple($event)">
    &lt;option *ngFor="let city of cities">{{city}}&lt;/option>
&lt;/sm-select>
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
       target="_blank"><i class="icon external"></i> </a> </td>
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
        <i class="arrow circle down icon"></i> [options]
      </td>
      <td>Semantic UI options object for Dropdown element: 
      <a href="http://semantic-ui.com/modules/dropdown.html#/settings"
       target="_blank"><i class="icon external"></i> </a>
       </td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [placeholder]
      </td>
      <td>Placeholder text</td>
    </tr>
    <tr>
        <td colspan="2">
          Events
        </td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle up icon"></i> [onChange]
      </td>
      <td>Is called after a select value changes.</td>
    </tr>
  </tbody>
</table>
</div>
`
})
export class SelectComponent {
    selectControl: FormControl = new FormControl("");
    multipleControl: FormControl = new FormControl("", Validators.required);
    multipleData = [];
    cities: Array<string> = ["New York", "Belgrade", "Stockholm", "Sarajevo"];

    onMultiple(data: Array<string>): void {
        this.multipleData = data;
    }
}
