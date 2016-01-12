import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "../../directives/semantic/semantic";
import { DataServices } from "../../services/data";

@Component({
	selector : "menu-cp",
    providers: [DataServices]
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Menu</h1>
        <p>Semantic UI menu component <i class="icon external"></i> <a href="http://semantic-ui.com/collections/menu.html" target="_blank">Semantic UI Menu</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo inverted</h4>
    <sm-header title="Angular2" class="inverted teal" logo="/assets/images/semantic.png"></sm-header>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="2" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-header title="Angular2" class="inverted teal" logo="/assets/images/semantic.png"></sm-header>
</textarea>
        </div>
      </div>
      <div class="ui divider"></div>
    <h4 class="ui header">Demo vertical</h4>
    <sm-header title="Vertical" class="vertical"></sm-header>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="2" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-header title="Vertical" class="vertical"></sm-header>
</textarea>
        </div>
      </div>
      <div class="ui divider"></div>
      <h4 class="ui header">Demo secondary</h4>
    <sm-header title="Secondary" class="secondary"></sm-header>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="2" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-header title="Secondary" class="secondary"></sm-header>
</textarea>
        </div>
      </div>
      
</div>
`
})

export class MenuComponent {
    flatArray: Array<any> = [];
	constructor(public ds: DataServices) {
		ds.flatArray().subscribe((data: any) => {
			this.flatArray = data;
		});
	}
}
