/// <reference path="../../../typings/angular2/angular2.d.ts" />

import { Component, View, NgFor, NgIf, FORM_DIRECTIVES } from "angular2/angular2";
import { ArrayFilterPipe } from "../../pipes/array";
import { SEMANTIC_COMPONENTS } from "../../directives/semantic/semantic";
import { MenuServices } from "../../services/menu";

class ToDo {
	header: string;
	description: string;
}

@Component({
	bindings: [MenuServices],
	selector : "home"
})
@View({
	directives: [NgFor, NgIf, FORM_DIRECTIVES, SEMANTIC_COMPONENTS],
	pipes: [ArrayFilterPipe],
	templateUrl : "./templates/components/home/home.html"
})

export class HomeComponent {
	items: Array<ToDo>;
	list: Array<string>;
	menuItems: Array<Object>;
	item = new ToDo();

	constructor(private menu: MenuServices) {

		menu.getMenu().subscribe(res => this.menuItems = res.json());

		this.items = new Array<ToDo>();
		this.list = ["Rachel", "Lindsay", "Matthew", "Jenny Hess", "Veronika Ossi", "Christian Rocha", "Mat"];
	}

	addTodo() {
		this.items.push(this.item);
		this.item = new ToDo();
	}
}
