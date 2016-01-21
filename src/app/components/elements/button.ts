import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";
@Component({
    selector: "ui-button"
})
@View({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    template: `
    <div class="ui masthead vertical segment">
        <div class="ui container">
            <h1>Button</h1>
            <p>Semantic UI button element <i class="icon external"></i>
            <a href="http://semantic-ui.com/elements/button.html" target="_blank">Semantic UI Button</a></p>
        </div>
    </div>
    <div class="main ui container">
        <h4 class="ui header">Demo</h4>
        <sm-button class="positive" (click)="clickMe($event)" icon="thumbs up">Click Me</sm-button>
        <h3>{{isClicked}}</h3>
        <h4 class="ui header">Code</h4>
        <div class="ui form">
            <div class="field">
                <textarea rows="2" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-button class="positive" (click)="clickMe($event)" icon="thumbs up">Click Me</sm-button>
                </textarea>
            </div>
        </div>
    </div>
    `
})

export class ButtonComponent {

    isClicked: string = "You should click on button!";

    clickMe(event: Event) {

        event.srcElement.classList.add("loading");

        setTimeout(() => {
            event.srcElement.classList.remove("loading");
            this.isClicked = "Excellent, it works!";
        }, 2000);
    }
}
