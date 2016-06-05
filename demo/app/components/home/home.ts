import { Component, Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [<Type>CodeblockComponent, <Type>PrismJsDirective , SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    selector: "home",
    template: `
<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Getting Started</h1>
        <p>Angular2 building blocks based on Semantic UI</p>
        <ul class="">
            <li class="item">Angular 2 <a href="https://angular.io/" target="_blank">angular.io</a></li>
            <li class="item">Semantic UI <a href="http://semantic-ui.com/" target="_blank">semantic-ui.com</a></li>
            <li class="item"><b>GitHub repository</b> <a href="https://github.com/vladotesanovic/ngSemantic"> 
            https://github.com/vladotesanovic/ngSemantic</a> ( If you like it, give it a star <i class="icon star"></i> )</li>
          </ul>
    </div>
</div>
<div class="main ui container">
    <h2 class="header">Installation</h2>
<sm-segment class="raised">
In terminal: 
<codeblock prismjs="bash">
$ npm install ng-semantic --save
</codeblock>
</sm-segment>
    <p></p>
    <sm-segment class="raised">
    <p>In your index.html ( entry file )</p>
    <codeblock prismjs="markup">
&lt;script src=&quot;node_modules/ng-semantic/bundles/ng-semantic.js&quot;&gt;&lt;/script&gt;
</codeblock>
    <p></p>
    </sm-segment>
    <br/>
    <sm-segment class="raised">
    <p>Semantic css and js ( with jQuery are required )</p>
        <codeblock prismjs="markup">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; 
src=&quot;https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css&quot;&gt;&lt;/link&gt;

<!-- JS -->
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js&quot;&gt;&lt;/script&gt;
</codeblock>
</sm-segment>

    <p></p>
    <h2 class="header">Use</h2>
    <sm-segment class="raised">
       <codeblock prismjs="typescript">
import {Component} from 'angular2/core';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
    selector: 'demo-cmp',
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    template: '&lt;sm-segment class="raised">Hello&lt;/sm-segment>'
})
export class DemoComponent {}
    </codeblock>
</sm-segment>
    <h2>{{title}}</h2>
        <p><i class="icon external"></i> 
        <a href="https://github.com/vladotesanovic/angular2-express-starter" target="_blank">Express app with included ng-semantic</a></p>
</div>

`
})
export class HomeComponent {
    title: string;
    constructor() {
        setTimeout(() => this.title = "Starter project", 500);
    }
}
