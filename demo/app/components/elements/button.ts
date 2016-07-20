import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-button",
    template: `
    <div class="ui masthead vertical segment">
        <div class="ui container">
            <h1>Button</h1>
            <p>Semantic UI Button element <i class="icon external"></i>
            <a href="http://semantic-ui.com/elements/button.html" target="_blank">Semantic UI Button</a></p>
        </div>
    </div>
    <div class="main ui container">
        <h4 class="ui header">Demo</h4>
        <sm-button class="positive" (click)="clickMe($event)" icon="thumbs up">Click Me</sm-button>
        <h3>{{isClicked}}</h3>
        <p>
            Available icons in Semantic UI: 
            <a href="http://semantic-ui.com/elements/icon.html" target="_blank">http://semantic-ui.com/elements/icon.html</a>
        </p>
        <h4 class="ui header">Code</h4>
            <sm-codeblock smPrismjs="html">
&lt;sm-button class="positive" (click)="clickMe($event)" icon="thumbs up">Click Me&lt;/sm-button>
</sm-codeblock>
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Buttons</h4>
        <sm-button class="" icon="">Normal</sm-button>
        <sm-button class="primary" icon="">Primary</sm-button>
        <sm-button class="secondary" icon="">Secondary</sm-button>
        <sm-button class="negative" icon="">Negative</sm-button>
        <sm-button class="positive" icon="">Positive</sm-button>
        
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">States</h4>
        <sm-button class="primary active" icon="">Active</sm-button>
        <sm-button class="primary loading" icon="">Loading</sm-button>
        <sm-button class="primary disabled" icon="">Disabled</sm-button>
        
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Basic</h4>
        <sm-button class="basic" icon="">Basic</sm-button>
        <sm-button class="basic red" icon="">Red</sm-button>
        <sm-button class="basic" icon="save">With icon</sm-button>
        
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Colored</h4>
        <sm-button class="purple" icon="building">Purple</sm-button>
        <sm-button class="red" icon="remove">Red</sm-button>
        <sm-button class="orange" icon="warning">Orange</sm-button>        
        <sm-button class="violet" icon="announcement">Violet</sm-button>
        
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Sizes</h4>
        <sm-button class="mini teal" icon="">Mini</sm-button>
        <sm-button class="tiny teal" icon="">Tiny</sm-button>
        <sm-button class="small teal" icon="">Small</sm-button>
        <sm-button class="medium teal" icon="">Medium</sm-button>
        <sm-button class="large teal" icon="">Large</sm-button>
        <sm-button class="big teal" icon="">Big</sm-button>
        <sm-button class="huge teal" icon="">Huge</sm-button>
        <sm-button class="massive teal" icon="">Massive</sm-button>
        
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Social</h4>
        <sm-button class="facebook" icon="facebook">Facebook</sm-button>
        <sm-button class="twitter" icon="twitter">Twitter</sm-button>
        <sm-button class="google plus" icon="google plus">Google plus</sm-button>
        <sm-button class="instagram" icon="instagram">Instagram</sm-button>
        <sm-button class="linkedin" icon="linkedin">Linkedin</sm-button>
        <sm-button class="youtube" icon="youtube">Youtube</sm-button>
        
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Icon only</h4>
        <sm-button class="" icon="play"></sm-button>
        <sm-button class="" icon="pause"></sm-button>
        <sm-button class="" icon="shuffle"></sm-button>
        
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Icon only ( Circular )</h4>
        <sm-button class="circular" icon="edit"></sm-button>
        <sm-button class="circular basic" icon="add big"></sm-button>
        <sm-button class="circular basic purple" icon="female big"></sm-button>
        <sm-button class="circular brown" icon="male big"></sm-button>
        
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Fluid button</h4>
        <sm-button class="fluid" icon="">Fluid ( full width ) button</sm-button>
              
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
