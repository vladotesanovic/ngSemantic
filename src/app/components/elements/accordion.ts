import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
    selector : "accordion",
})
@View({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Accordion</h1>
        <p>Semantic UI accordion module <i class="icon external"></i> 
        <a href="http://semantic-ui.com/modules/accordion.html" target="_blank">Semantic UI Accordion</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo basic</h4>
	<sm-accordion [sm-dir-accordion] header="File">Content of the accordion</sm-accordion>
	
	<h4 class="ui header">Code</h4>
	 <div class="ui form">
        <div class="field">
<textarea rows="4" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">

<sm-accordion [sm-dir-accordion] header="File">Content of the accordion</sm-accordion>
</textarea>
        </div>
      </div>
      </div>
`
})

export class AccordionComponent {}
