import { Component, View } from "angular2/core";
import { FORM_DIRECTIVES } from "angular2/common";
import { ArrayFilterPipe } from "../../pipes/array";
import { SemanticHeader } from "../../directives/semantic/semantic";
import { MessageService } from "../../services/message";

class ToDo {
	header: string;
	description: string;
}

@Component({
	selector : "home"
})
@View({
	directives: [FORM_DIRECTIVES, SemanticHeader],
	pipes: [ArrayFilterPipe],
	templateUrl : "./app/components/home/home.html"
})

export class HomeComponent {
	public items: Array<ToDo>;
	public list: Array<string>;
	public item = new ToDo();

	constructor(public ms: MessageService) {

		this.items = new Array<ToDo>();
		this.list = ["Rachel", "Lindsay", "Matthew", "Jenny Hess", "Veronika Ossi", "Christian Rocha", "Mat"];
	}

	addTodo() {
		this.items.push(this.item);
		this.item = new ToDo();
	}
	submitMessage() {
		this.ms.emitMessage(new Date().toISOString());
	}
}
