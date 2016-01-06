import { Component, View } from "angular2/core";
import { SemanticHeader } from "../../directives/semantic/semantic";

@Component({
	selector : "elements"
})
@View({
	directives: [SemanticHeader],
	templateUrl : "./app/components/elements/elements.html"
})

export class ElementsComponent {}
