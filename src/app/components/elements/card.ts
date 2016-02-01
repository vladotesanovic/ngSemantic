import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
	selector : "card"
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Card</h1>
        <p>Semantic UI card view <i class="icon external"></i> 
        <a href="http://semantic-ui.com/views/card.html" target="_blank">Semantic UI Card</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <sm-card class="ui card" title="Kristy" image="http://semantic-ui.com/images/avatar2/large/kristy.png" subtitle="Joined in 2013">
        <div text>
            Kristy is an art director living in New York.
        </div>
        <div extra>
        <a>
            <i class="user icon"></i>
            22 Friends
        </a>
        </div>
    </sm-card>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="6" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-card class="ui card" title="Kristy" image="http://semantic-ui.com/images/avatar2/large/kristy.png" subtitle="Joined in 2013">
    <div text>...</div>
    <div extra>...</div>
</sm-card>
</textarea>
        </div>
      </div>
</div>
`
})

export class CardComponent {}
