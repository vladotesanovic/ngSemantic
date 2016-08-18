import { Component } from "@angular/core";

@Component({
    selector : "sm-page-card",
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
    <sm-card class="card" image="http://semantic-ui.com/images/avatar2/large/kristy.png">
        <card-title> Kristy </card-title>
        <card-subtitle> Joined in 2013 </card-subtitle>
        <card-content>
            Kristy is an art director living in New York.
        </card-content>
        <card-extra>
            <a>
                <i class="user icon"></i>
                22 Friends
            </a>
        </card-extra>
    </sm-card>
    
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-card class="ui card" image="http://semantic-ui.com/images/avatar2/large/kristy.png">
    &lt;card-title> Kristy &lt;/card-title>
    &lt;card-subtitle> Joined in 2013 &lt;/card-subtitle>
    &lt;card-content>
        Kristy is an art director living in New York.
    &lt;/card-content>
    &lt;card-extra>
        &lt;a>
            &lt;i class="user icon">&lt;/i>
            22 Friends
        &lt;/a>
    &lt;/card-extra>
&lt;/sm-card>
</sm-codeblock>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo cards</h4>
    <sm-cards>
        <sm-card class="card" image="http://semantic-ui.com/images/avatar2/large/kristy.png">
            <card-title> Kristy </card-title>
            <card-subtitle> Joined in 2013 </card-subtitle>
            <card-content>
                Kristy is an art director living in New York.
            </card-content>
            <card-extra>
                <a>
                    <i class="user icon"></i>
                    22 Friends
                </a>
            </card-extra>
        </sm-card>
        <sm-card class="card" image="http://semantic-ui.com/images/avatar2/large/kristy.png">
            <card-title> Kristy </card-title>
            <card-subtitle> Joined in 2013 </card-subtitle>
            <card-content>
                Kristy is an art director living in New York.
            </card-content>
            <card-extra>
                <a>
                    <i class="user icon"></i>
                    22 Friends
                </a>
            </card-extra>
        </sm-card>
    </sm-cards>
        <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-cards>
    &lt;sm-card class="ui card" image="http://semantic-ui.com/images/avatar2/large/kristy.png">
        &lt;card-title> Kristy &lt;/card-title>
        &lt;card-subtitle> Joined in 2013 &lt;/card-subtitle>
        &lt;card-content>
            Kristy is an art director living in New York.
        &lt;/card-content>
        &lt;card-extra>
            &lt;a>
                &lt;i class="user icon">&lt;/i>
                22 Friends
            &lt;/a>
        &lt;/card-extra>
    &lt;/sm-card>
    &lt;sm-card class="ui card" image="http://semantic-ui.com/images/avatar2/large/kristy.png">
    ...
    &lt;/sm-card>
&lt;/sm-cards>
</sm-codeblock>
<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Demo attached button without image</h4>
    <sm-card class="card">
        <card-title> Kristy </card-title>
        <card-subtitle> Joined in 2013 </card-subtitle>
        <card-content>
            Kristy is an art director living in New York.
        </card-content>
        <sm-button class="bottom attached fluid" icon="add">Add friend</sm-button>
    </sm-card>
</div>
`
})

export class CardComponent {}
