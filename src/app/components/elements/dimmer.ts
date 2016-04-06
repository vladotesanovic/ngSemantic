import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";
@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    selector: "dimmer",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Dimmer</h1>
        <p>Semantic UI dimmer module <i class="icon external"></i>
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
    <div class="ui form">
        <div class="field">
          <textarea rows="5" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-dimmer selector="page">
        ...
</sm-dimmer>
<sm-button sm-dir-dimmer="page" class="primary">Page dimmer</sm-button>
          </textarea>
        </div>
      </div>
      
      <br/><br/>
      Page source: <a target="_blank" href="https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/dimmer.ts">
        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/dimmer.ts
      </a>
</div>
`
})

export class DimmerComponent {}
