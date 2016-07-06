import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";
import { FormControl } from "@angular/forms";

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
&lt;sm-select [control]="selectControl" placeholder="Search..." class="fluid search" [items]="[1,2,3]">
    &lt;option>1&lt;/option>
    &lt;option>2&lt;/option>
    &lt;option>3&lt;/option>
&lt;/sm-select>
</sm-codeblock>
    <h4 class="ui header">Demo Multiple</h4>
    <sm-select [control]="multipleControl" placeholder="Select multiple..." 
    class="fluid search multiple" (onChange)="onMultiple($event)" [items]="['New York','Belgrade','Stockholm']">
        <option *ngFor="let city of cities">{{city}}</option>
    </sm-select>
    <p>Selected: {{multipleData | json}}</p>
<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-select 
    [control]="selectControl"
    placeholder="Select multiple..." 
    class="fluid search multiple"
    (onChange)="onMultiple($event)">
    &lt;option *ngFor="let city of cities">{{city}}&lt;/option>
    &lt;/sm-<select name="" id=""></select>>
</sm-codeblock>
      
</div>
`
})

export class SelectComponent {
    selectControl: FormControl = new FormControl("");
    multipleControl: FormControl = new FormControl("");
    multipleData = [];
    cities: Array<string> = ["New York", "Belgrade", "Stockholm"];

    onMultiple(data: Array<string>): void {
        this.multipleData = data;
    }
}
