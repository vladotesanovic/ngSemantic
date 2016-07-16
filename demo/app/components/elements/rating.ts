import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-rating",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Rating</h1>
        <p>Semantic UI rating: <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/rating.html" target="_blank">Semantic UI Rating</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo rating</h4>
    
    <sm-rating class="massive star" (onRate)="onReceiveRating($event)" [maxRating]="10"></sm-rating>
    <h2 class="ui header">{{result}}</h2>
    
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-rating class="massive star" (onRate)="onReceiveRating($event)" [maxRating]="10">&lt;/sm-rating>
</sm-codeblock>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo rating with initial value</h4>
    
    <sm-rating class="massive heart" (onRate)="onReceiveRating($event)" [initialRating]="2" [maxRating]="10"></sm-rating>
    <h2 class="ui header">{{result}}</h2>
    
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-rating class="massive heart" (onRate)="onReceiveRating($event)" [initialRating]="2" [maxRating]="10">&lt;/sm-rating>
</sm-codeblock>
</div>
`
})

export class RatingComponent {
    result: number = 0;
    onReceiveRating(value: number) {
        this.result = value;
    }
}
