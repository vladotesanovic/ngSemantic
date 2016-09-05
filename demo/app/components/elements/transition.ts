import { Component } from "@angular/core";

@Component({
    selector : "sm-page-transition",
    template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Transition ( under construction )</h1>
        <p>Semantic UI Transition <i class="icon external"></i> 
        <a href="http://semantic-ui.com/modules/transition.html" target="_blank">Semantic UI Transition</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <sm-transition #transition>
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
    </sm-transition>
    
    <div class="ui divider"></div>
    <sm-button (click)="transition.show('horizontal flip')">Horizontal Flip</sm-button>
    
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-transition #transition>
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
&lt;/sm-transition>

&lt;sm-button (click)="transition.show('horizontal flip')">Horizontal Flip&lt;/sm-button>
</sm-codeblock>
</div>
`
})

export class TransitionComponent {}
