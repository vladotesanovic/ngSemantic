import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
	selector : "loader"
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Loader</h1>
        <p>Loading animation is based on Semantic loading element: <i class="icon external"></i> 
        <a href="http://semantic-ui.com/elements/loader.html" target="_blank">Semantic UI Loader</a></p>
    </div>
</div>
<div class="main ui container">
    <p>If you want to add loading animation to your Angular 2 app, add this code snippet inside your root app tag.</p>
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
          <textarea rows="4" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<div class="ui active inverted dimmer">
    <div class="ui text large loader">Loading</div>
</div>
          </textarea>
        </div>
      </div>
</div>
`
})

export class LoaderComponent {}
