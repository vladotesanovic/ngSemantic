import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "../../directives/semantic/semantic";

@Component({
	selector : "modal",
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Modal</h1>
        <p>Semantic UI modal module <i class="icon external"></i> 
        <a href="http://semantic-ui.com/modules/modal.html" target="_blank">Semantic UI Modal</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo basic</h4>
    <button class="ui button green" [sm-dir-modal]="{selector: 'my-modal'}">Click me</button>
    <sm-modal selector="my-modal" title="Hello from Modal" class="basic">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </sm-modal>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="4" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<button class="ui button green" [sm-dir-modal]="{selector: 'my-modal'}">Click me</button>
<sm-modal selector="my-modal" title="Hello from Modal" class="basic">...</sm-modal>
</textarea>
        </div>
      </div>
</div>
`
})

export class ModalComponent {}
