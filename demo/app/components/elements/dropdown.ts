import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";
import { FormControl } from "@angular/forms";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-dropdown",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Dropdown</h1>
        <p>Dropdown UI module: <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/dropdown.html" target="_blank">Semantic UI Dropdown</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <sm-dropdown [control]="selectControl" placeholder="Search..." class="fluid search" [items]="[1,2,3]"></sm-dropdown>
    {{selectControl.value}}
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-dropdown [control]="selectControl" placeholder="Search..." class="fluid search" [items]="[1,2,3]">&lt;/sm-dropdown>
</sm-codeblock>
    <h4 class="ui header">Demo Multiple</h4>
    <sm-dropdown [control]="multipleControl" placeholder="Select multiple..." 
    class="fluid search multiple" (onChange)="onMultiple($event)" [items]="['New York','Belgrade','Stockholm']"></sm-dropdown>
    {{multipleData | json}}
<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-dropdown 
    [control]="selectControl"
    placeholder="Select multiple..." 
    class="fluid search multiple"
    (onChange)="onMultiple($event)"
    [items]="['New York','Belgrade','Stockholm']">&lt;/sm-dropdown>
</sm-codeblock>
      
</div>
`
})

export class DropdownComponent {
    selectControl: FormControl = new FormControl("");
    multipleControl: FormControl = new FormControl("");
    multipleData = [];

    onMultiple(data: Array<string>): void {
        this.multipleData = data;
    }
}
