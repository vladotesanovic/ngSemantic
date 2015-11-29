import { Component, View, NgFor, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { ArrayFilterPipe } from "../../pipes/array";
import { SEMANTIC_COMPONENTS } from "../../directives/semantic/semantic";
import { MenuServices, MenuInterface } from "../../services/menu";
import { MessageService } from "../../services/message";

class ToDo {
	header: string;
	description: string;
}

@Component({
	providers: [MenuServices],
	selector : "home"
})
@View({
	directives: [NgFor, NgIf, FORM_DIRECTIVES, SEMANTIC_COMPONENTS],
	pipes: [ArrayFilterPipe],
	templateUrl : "./templates/components/home/home.html"
})

export class HomeComponent {
	public items: Array<ToDo>;
	public list: Array<string>;
	public menuItems: MenuInterface<Object>;
	public item = new ToDo();

	constructor(private menu: MenuServices, public ms: MessageService) {

		menu.getMenu().subscribe(res => this.menuItems = res.json());

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
