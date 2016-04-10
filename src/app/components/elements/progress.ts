import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    selector: "progress-bar",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Progress</h1>
        <p>Semantic UI progress module <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/progress.html" target="_blank">Semantic UI Progress</a></p>
    </div>
</div>
<div class="main ui container">
    <p>Simple progress bar</p>
    <h4 class="ui header">Demo</h4>
    <sm-progress [progress]="percent"></sm-progress>
    <sm-progress class="warning" [progress]="percent"></sm-progress>
    
    <h4 class="ui header">Code</h4>
    <div class="ui form">
        <div class="field">
          <textarea rows="4" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-progress [progress]="percent"></sm-progress>
<sm-progress class="warning" [progress]="percent"></sm-progress>
          </textarea>
        </div>
      </div>
      
      <br/><br/>
      Page source: <a target="_blank" 
      href="https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/progress.ts">
        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/progress.ts
      </a>
</div>
`
})

export class ProgressComponent {
    percent: number = 0;
    constructor() {
        setInterval(() => this.percent += 10, 1000);
    }
}
