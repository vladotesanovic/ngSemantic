/// <reference path="../../../typings/angular2/angular2.d.ts" />

import {Component, View, NgFor} from "angular2/angular2";

@Component({
	selector : "menu-component"
})
@View({
	directives: [NgFor],
	templateUrl : "./templates/shared/menu.html"
})

export class MenuComponent {
	items: Array<any>;
	constructor() {
		this.items = new Array<any>();
		this.items.push({ link: "#/about", title: "About" });
	}
}
