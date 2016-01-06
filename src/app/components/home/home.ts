import { Component, View } from "angular2/core";
import { SemanticHeader, SMTooltipDirective } from "../../directives/semantic/semantic";

@Component({
	selector : "home"
})
@View({
	directives: [SemanticHeader, SMTooltipDirective],
	templateUrl : "./app/components/home/home.html"
})

export class HomeComponent {}
