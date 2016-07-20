import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { DataServices } from "../../services/data";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, ROUTER_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    providers: [DataServices],
    selector: "sm-page-loader",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Loader</h1>
        <p>Loading animation is based on Semantic loading element: <i class="icon external"></i>
        <a href="http://semantic-ui.com/elements/loader.html" target="_blank">Semantic UI Loader</a></p>
    </div>
</div>
<div class="main ui container">
    <p>If you want to add loading animation to your Angular 2 app, add this code snippet inside your root app tag.</p>
    <h4 class="ui header">Demo</h4>
    <p><a onClick="location.reload()" href="#/elements/loader">Refresh page</a></p>
    
        <h4 class="ui header">Code</h4>
    <sm-codeblock smPrismjs="html">
&lt;div class="ui active inverted dimmer">
    &lt;div class="ui text large loader">Loading&lt;/div>
&lt;/div>
</sm-codeblock>
   <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
   <h4 class="ui header">Loader component</h4>
   <sm-segment>
        <sm-loader [complete]="isCompleted" class="inverted" text="Loading..."></sm-loader>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
   </sm-segment>
   <h4 class="ui header">Code</h4>
    <sm-codeblock smPrismjs="html">
&lt;sm-segment>
    &lt;sm-loader [complete]="isCompleted" class="inverted" text="Loading...">&lt;/sm-loader>
        ...
&lt;/sm-segment>
</sm-codeblock>
</div>
`
})

export class LoaderComponent {

    isCompleted: boolean = false;

    constructor(ds: DataServices) {
        this.complete();
    }
    complete() {
        setTimeout(() => {
            this.isCompleted = true;
        }, 3000);
    }
}
