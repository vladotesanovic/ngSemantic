/// <reference path="../../../typings/angular2/angular2.d.ts" />

import { Component, View, NgFor, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { ArrayFilterPipe } from "../../pipes/array";

class ToDo {
	header: string;
	description: string;
}

@Component({
	selector : "home-component"
})
@View({
	directives: [NgFor, NgIf, FORM_DIRECTIVES],
	pipes: [ArrayFilterPipe],
	templateUrl : "./templates/components/home/home.html"
})

export class HomeComponent {
	items: Array<ToDo>;
	menus: Array<string>;
	item = new ToDo();

	constructor() {
		this.items = new Array<ToDo>();
		this.menus = ["Inbox", "Inox", "Trash"];
	}

	addTodo() {
		this.items.push(this.item);
		this.item = new ToDo();
	}
}
