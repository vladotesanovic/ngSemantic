import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { Codeblock } from "ng2-prism/codeblock";
import { Markup, Typescript } from "ng2-prism/languages";

@Component({
    directives: [Codeblock, Markup, Typescript, SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    selector: "home",
    templateUrl: "./app/components/home/home.html"
})
export class HomeComponent {}
