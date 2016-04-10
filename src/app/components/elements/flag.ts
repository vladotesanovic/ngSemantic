import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    selector: "flag",
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
    <div class="ui form">
        <div class="field">
          <textarea rows="4" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-flag flag="serbia"></sm-flag>
<sm-flag flag="bosnia"></sm-flag>
<sm-flag flag="argentina"></sm-flag>
          </textarea>
        </div>
      </div>
      
      <br/><br/>
      Page source: <a target="_blank" href="https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/flag.ts">
        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/flag.ts
      </a>
</div>
`
})

export class FlagComponent {}
