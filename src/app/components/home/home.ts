import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "../../directives/semantic/semantic";
import { MessageService } from "../../services/message";

@Component({
	selector: "home"
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	templateUrl: "./app/components/home/home.html"
})

export class HomeComponent {

	constructor(public ms: MessageService) { }

	submitMessage() {
		this.ms.emitMessage(new Date().toISOString());
	}
}
