import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "../../directives/semantic/semantic";
import { MessageService } from "../../services/message";
import { DataServices } from "../../services/data";

@Component({
	selector : "elements",
	providers: [DataServices]
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	templateUrl : "./app/components/elements/elements.html"
})

export class ElementsComponent {
	flatArray: Array<any> = [];
	constructor(public ms: MessageService, public ds: DataServices) {
		ds.flatArray().subscribe((data: any) => {
			this.flatArray = data;
		});
	}
	submitMessage(event: Event, message: Object) {
		this.ms.emitMessage(message);
	}
}
