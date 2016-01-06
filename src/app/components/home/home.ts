import { Component, View } from "angular2/core";
import { SemanticHeader, SMTooltipDirective, SemanticMessage } from "../../directives/semantic/semantic";
import { MessageService } from "../../services/message";

@Component({
	selector : "home"
})
@View({
	directives: [SemanticHeader, SMTooltipDirective, SemanticMessage],
	templateUrl : "./app/components/home/home.html"
})

export class HomeComponent {
	
	constructor(public ms: MessageService) {}
	
	submitMessage() {
		this.ms.emitMessage(new Date().toISOString());
	}
}
