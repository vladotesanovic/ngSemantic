import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "dimmer",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Dimmer</h1>
        <p>Semantic UI Dimmer module <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/dimmer.html" target="_blank">Semantic UI Dimmer</a></p>
    </div>
</div>
<div class="main ui container">
    <p>Note that selector attribute on sm-dimmer and value in sm-dir-dimmer must be same.</p>
    <h4 class="ui header">Demo</h4>
    <sm-dimmer selector="page">
        <div class="center">
            <h2 class="ui inverted icon header">
                <i class="mail icon"></i>
                Dimmer Message
                <div class="sub header">Dimmer sub-header</div>
            </h2>
        </div>
    </sm-dimmer>
    <sm-button sm-dir-dimmer="page" class="primary">Page dimmer</sm-button>
    
    <h4 class="ui header">Code</h4>
    <codeblock prismjs="html">
&lt;sm-dimmer selector="page">
    &lt;div class="center">
        &lt;h2 class="ui inverted icon header">
            &lt;i class="mail icon">&lt;/i>
            Dimmer Message
            &lt;div class="sub header">Dimmer sub-header&lt;/div>
        &lt;/h2>
    &lt;/div>
&lt;/sm-dimmer>
&lt;sm-button sm-dir-dimmer="page" class="primary">Page dimmer&lt;/sm-button>
</codeblock>
</div>
`
})

export class DimmerComponent {}
