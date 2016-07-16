import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-search",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Search</h1>
        <p>Semantic UI Search: <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/search.html" target="_blank">Semantic UI Search</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <sm-search placeholder="Search..." (onSearch)="element.innerText = $event" ></sm-search>
    <div #element></div>
    <h4 class="ui header">Code</h4>
    <sm-codeblock smPrismjs="html">
&lt;sm-search placeholder="Search..." (onSearch)="element.innerText = $event" >&lt;/sm-search>
</sm-codeblock>
<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo icon</h4>
    <sm-search placeholder="Search..." (onSearch)="elementIcon.innerText = $event" [icon]="true"></sm-search>
    <div #elementIcon></div>
    <h4 class="ui header">Code</h4>
    <sm-codeblock smPrismjs="html">
&lt;sm-search placeholder="Search..." (onSearch)="elementIcon.innerText = $event" [icon]="true">&lt;/sm-search>
</sm-codeblock>
</div>
`
})

export class SearchComponent {}
