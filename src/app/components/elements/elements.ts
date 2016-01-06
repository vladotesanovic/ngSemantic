import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "../../directives/semantic/semantic";

@Component({
	selector : "elements"
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	templateUrl : "./app/components/elements/elements.html"
})

export class ElementsComponent {}
