import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-flag",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Flag</h1>
        <p>Semantic UI flags: <i class="icon external"></i>
        <a href="http://semantic-ui.com/elements/flag.html" target="_blank">Semantic UI Flag</a></p>
    </div>
</div>
<div class="main ui container">
    <p>A flag is is used to represent a political state</p>
    <h4 class="ui header">Demo</h4>
    <sm-flag flag="serbia"></sm-flag>
    <sm-flag flag="bosnia"></sm-flag>
    <sm-flag flag="argentina"></sm-flag>
    
    <h4 class="ui header">Code</h4>
    <sm-codeblock smPrismjs="html">
&lt;sm-flag flag="serbia">&lt;/sm-flag>
&lt;sm-flag flag="bosnia">&lt;/sm-flag>
&lt;sm-flag flag="argentina">&lt;/sm-flag>
</sm-codeblock>
      
</div>
`
})

export class FlagComponent {}
