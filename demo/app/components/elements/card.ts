import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector : "card",
    template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Card</h1>
        <p>Semantic UI Card view <i class="icon external"></i> 
        <a href="http://semantic-ui.com/views/card.html" target="_blank">Semantic UI Card</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <sm-card class="ui card" title="Kristy" image="http://semantic-ui.com/images/avatar2/large/kristy.png" subtitle="Joined in 2013">
        <content>
            Kristy is an art director living in New York.
        </content>
        <extra>
            <a>
                <i class="user icon"></i>
                22 Friends
            </a>
        </extra>
    </sm-card>
    
    <h4 class="ui header">Code</h4>
<codeblock markup>
&lt;sm-card class="ui card" title="Kristy" image="http://semantic-ui.com/images/avatar2/large/kristy.png" subtitle="Joined in 2013">
    <content>...</content>
    <extra>...</extra>
&lt;/sm-card>
</codeblock>
</div>
`
})

export class CardComponent {}
