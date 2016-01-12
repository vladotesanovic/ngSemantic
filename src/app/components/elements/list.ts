import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "../../directives/semantic/semantic";
import { DataServices } from "../../services/data";

@Component({
	selector : "list",
    providers: [DataServices]
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>List</h1>
        <p>Semantic UI list element <i class="icon external"></i> <a href="http://semantic-ui.com/elements/list.html" target="_blank">Semantic UI List</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <sm-list class="bulleted" [items]="flatArray"></sm-list>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="2" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-list class="bulleted" [items]="flatArray"></sm-list>
</textarea>
        </div>
      </div>
</div>
`
})

export class ListComponent {
    flatArray: Array<any> = [];
	constructor(public ds: DataServices) {
		ds.flatArray().subscribe((data: any) => {
			this.flatArray = data;
		});
	}
}
