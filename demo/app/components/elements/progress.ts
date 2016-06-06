import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "progress-bar",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Progress</h1>
        <p>Semantic UI Progress module <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/progress.html" target="_blank">Semantic UI Progress</a></p>
    </div>
</div>
<div class="main ui container">
    <p>Simple progress bar</p>
    <h4 class="ui header">Demo</h4>
    <sm-progress [progress]="percent"></sm-progress>
    <sm-progress class="warning" [progress]="percent"></sm-progress>
    
    <h4 class="ui header">Code</h4>
        <codeblock prismjs="html">
&lt;sm-progress [progress]="percent">&lt;/sm-progress>
&lt;sm-progress class="warning" [progress]="percent">&lt;/sm-progress>
    </codeblock>
</div>
`
})

export class ProgressComponent {
    percent: number = 0;
    constructor() {
        setInterval(() => this.percent += 10, 1000);
    }
}
