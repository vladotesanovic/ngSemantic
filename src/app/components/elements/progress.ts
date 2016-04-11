import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { Codeblock } from "ng2-prism/codeblock";
import { Markup } from "ng2-prism/languages";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, Codeblock, Markup],
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
    
    <sm-segment class="raised">
        <sm-progress class="top attached" [progress]="percent"></sm-progress>
        Segment progress
    </sm-segment>
    
    <h4 class="ui header">Code</h4>
        <codeblock markup>
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
