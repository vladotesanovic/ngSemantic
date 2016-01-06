import { Component, View } from "angular2/core";
import { SemanticHeader } from "../../directives/semantic/semantic";

@Component({
	selector : "home"
})
@View({
	directives: [SemanticHeader],
	templateUrl : "./app/components/header/header.html"
})

export class HeaderComponent {}
