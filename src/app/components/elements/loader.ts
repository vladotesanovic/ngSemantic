import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { ROUTER_DIRECTIVES } from "angular2/router";
import { DataServices } from "../../services/data";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [DataServices],
    selector: "loader",
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
    <div class="ui form">
        <div class="field">
          <textarea rows="4" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<div class="ui active inverted dimmer">
    <div class="ui text large loader">Loading</div>
</div>
          </textarea>
        </div>
      </div>
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
       <div class="ui form">
        <div class="field">
          <textarea rows="5" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-segment>
        <sm-loader [complete]="isCompleted" class="inverted" text="Loading..."></sm-loader>
        ...
</sm-segment>
          </textarea>
        </div>
      </div>
      
      <br/><br/>
      Page source: <a target="_blank" href="https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/loader.ts">
        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/loader.ts
      </a>
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
