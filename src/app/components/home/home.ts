import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    selector: "home",
    templateUrl: "./app/components/home/home.html"
})

export class HomeComponent {}
