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
    <sm-dropdown title="Cities" [items]="cities"></sm-dropdown>
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
</sm-codeblock>
      # Under construction
</div>
`
})

export class DropdownComponent {
    multipleData = [];
    cities: Array<string> = ["New York", "Belgrade", "Stockholm"];

    onMultiple(data: Array<string>): void {
        this.multipleData = data;
    }
}
