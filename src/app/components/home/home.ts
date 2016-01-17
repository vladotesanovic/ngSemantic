import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
	selector: "home"
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	templateUrl: "./app/components/home/home.html"
})

export class HomeComponent { }
