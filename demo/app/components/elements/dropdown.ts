import { Component } from "@angular/core";

@Component({
    selector: "sm-page-dropdown",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Dropdown ( under construction ) </h1>
        <p>Dropdown UI module: <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/dropdown.html" target="_blank">Semantic UI Dropdown</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Dropdown</h4>
<sm-dropdown title="Cities" class="pointing floating labeled icon button">
    <sm-item *ngFor="let item of cities">{{item}}</sm-item>
</sm-dropdown>
<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-dropdown title="Cities" class="pointing floating labeled icon button">
    &lt;sm-item *ngFor="let item of cities">{{'{'}}{{'{'}}item{{'}'}}{{'}'}}&lt;/sm-item>
&lt;/sm-dropdown>
</sm-codeblock>

<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Button</h4>
<div class="ui teal buttons">
  <div class="ui button">Save</div>
  <sm-dropdown class="floating icon button">
      <div class="item"><i class="edit icon"></i> Edit Post</div>
      <div class="item"><i class="delete icon"></i> Remove Post</div>
      <div class="item"><i class="hide icon"></i> Hide Post</div>
</sm-dropdown>
</div>
<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html"></sm-codeblock>

<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Inline</h4>
<span>
  Show me posts by
  <sm-dropdown class="inline" title="Inline">
      <sm-item image="http://semantic-ui.com/images/avatar/small/stevie.jpg">Stevie</sm-item>
</sm-dropdown>
</span>
<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html"></sm-codeblock>

<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Nested</h4>

<sm-dropdown class="pointing floating labeled icon button" title="Nested">
  <sm-item>Stevie</sm-item>
  <sm-item>Stevie</sm-item>
  <sm-item>Stevie</sm-item>
  <div class="ui divider"></div>
  <sm-item>
      <sm-dropdown class="left pointing link" title="Stivie">
            <sm-item>Stevie</sm-item>
            <sm-item>Stevie</sm-item>
            <sm-item>Stevie</sm-item>
      </sm-dropdown>
  </sm-item>
</sm-dropdown>

<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
</sm-codeblock>

<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Dropdown in menu, triggered on hover.</h4>
<p>Activating on hover.</p>
<sm-menu title="Angular2" class="inverted pink massive">
    <a sm-item href="#/elements/menu" icon="home">Home</a>
    <sm-dropdown class="pointing link" title="Cities" [options]="{on: 'hover'}">
        <sm-item *ngFor="let item of cities">{{item}}</sm-item>
    </sm-dropdown>
</sm-menu>
<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-menu title="Angular2" class="inverted pink massive">
    &lt;a sm-item href="#/elements/menu" icon="home">Home&lt;/a>
    &lt;sm-dropdown class="pointing link" title="Cities" [options]="{{ '{' }}on: 'hover'{{ '}' }}">
        &lt;sm-item *ngFor="let item of cities">{{'{'}}{{'{'}}item{{'}'}}{{'}'}}&lt;/sm-item>
    &lt;/sm-dropdown>
&lt;/sm-menu>
</sm-codeblock>
 <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
 <h4 class="ui header">Dropdown in vertical menu, triggered on click.</h4>
<sm-menu title="ngSemantic" class="vertical">
    <a sm-item href="#/elements/menu" icon="home">Home</a>
    <sm-dropdown class="left pointing link" title="Cities">
        <sm-item *ngFor="let item of cities">{{item}}</sm-item>
    </sm-dropdown>
    <a sm-item href="#/elements/accordion">Accordion</a>
    <a sm-item href="#/elements/sidebar">Sidebar</a>
</sm-menu>
<sm-codeblock smPrismjs="html">
&lt;sm-menu title="ngSemantic" class="vertical">
    &lt;a sm-item href="#/elements/menu" icon="home">Home&lt;/a>
    &lt;sm-dropdown class="left pointing link" title="Cities">
        &lt;sm-item *ngFor="let item of cities">{{ '{' }}{{ '{' }}item{{ '}' }}{{ '}' }}&lt;/sm-item>
    &lt;/sm-dropdown>
    &lt;a sm-item href="#/elements/accordion">Accordion&lt;/a>
    &lt;a sm-item href="#/elements/sidebar">Sidebar&lt;/a>
&lt;/sm-menu>
</sm-codeblock>
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
