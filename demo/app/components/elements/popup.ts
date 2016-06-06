import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector : "popup",
    template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Popup &amp; Tooltip</h1>
        <p>Semantic UI Popup component <i class="icon external"></i> 
        <a href="http://semantic-ui.com/modules/popup.html" target="_blank">Semantic UI Popup</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo tooltip</h4>
    <button class="ui button" smDirTooltip="Pellentesque habitant morbi tristique.">Hover me</button>
    
    <h4 class="ui header">Code</h4>
<codeblock prismjs="html">
&lt;button class="ui button" smDirTooltip="text...">Hover me&lt;/button>
</codeblock>
      <div class="ui divider"></div>
      
      <h4 class="ui header">Demo popup</h4>
    <button class="ui button green" [smDirPopup]="{selector: 'my-popup', position: 'right center'}">Click me</button>
    <sm-popup selector="my-popup">
        <div class='header'>User Rating</div>
        <div class='content'>
            <div class='ui star rating'>
                <i class='active icon'></i><i class='active icon'></i><i class='active icon'></i><i class='icon'></i><i class='icon'></i>
            </div>
        </div>
    </sm-popup>
    
    <h4 class="ui header">Code</h4>
        <codeblock prismjs="html">
&lt;button class="ui button green" [smDirPopup]="{selector: 'my-popup', position: 'right center'}">Click me&lt;/button>
&lt;sm-popup selector="my-popup">
    ...
&lt;/sm-popup>
    </codeblock>   
</div>
`
})

export class PopupComponent {}
