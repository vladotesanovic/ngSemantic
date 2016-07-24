import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-dropdown",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Dropdown</h1>
        <p>Dropdown UI module: <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/dropdown.html" target="_blank">Semantic UI Dropdown</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
<sm-dropdown title="Cities" class="pointing floating labeled icon button">
    <sm-item *ngFor="let item of cities">{{item}}</sm-item>
</sm-dropdown>
<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-dropdown title="Cities" class="pointing floating labeled icon button">
    &lt;sm-item *ngFor="let item of cities">{ {item} }&lt;/sm-item>
&lt;/sm-dropdown>
</sm-codeblock>
<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<div class="ui teal buttons">
  <div class="ui button">Save</div>
  <sm-dropdown class="floating icon button">
      <div class="item"><i class="edit icon"></i> Edit Post</div>
      <div class="item"><i class="delete icon"></i> Remove Post</div>
      <div class="item"><i class="hide icon"></i> Hide Post</div>
</sm-dropdown>
</div>
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
</sm-codeblock>
      # Under construction
<sm-menu title="Angular2" class="ui menu inverted pink massive">
    <a sm-item href="#/elements/menu" icon="home">Home</a>
    <sm-dropdown class="pointing link" title="Cities">
        <sm-item *ngFor="let item of cities">{{item}}</sm-item>
    </sm-dropdown>
</sm-menu>
 # Vertical menu, under construction
<sm-menu title="ngSemantic" class="ui menu vertical">
    <a sm-item href="#/elements/menu" icon="home">Home</a>
    <sm-dropdown class="left pointing link" title="Cities">
        <sm-item *ngFor="let item of cities">{{item}}</sm-item>
    </sm-dropdown>
    <a sm-item href="#/elements/accordion">Accordion</a>
    <a sm-item href="#/elements/sidebar">Sidebar</a>
</sm-menu>
</div>
`
})

export class DropdownComponent {
    multipleData = [];
    cities: Array<string> = ["New York", "Belgrade", "Stockholm", "Sarajevo"];

    onMultiple(data: Array<string>): void {
        this.multipleData = data;
    }
}
