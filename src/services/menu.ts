/// <reference path="../../typings/angular2/angular2.d.ts" />
import { Injectable } from "angular2/angular2";

@Injectable()
export class MenuServices {
	private items: Array<Object>;

	constructor() {
		this.items = new Array<Object>();
		this.setMenu({ "title": "Home", "link": "#/" });
		this.setMenu({ "title": "About", "link": "#/page/about" });
		this.setMenu({ "title": "Contact Us", "link": "#/page/contact-us" });
	}
	setMenu(item) {
		this.items.push(item);
	}
	getMenu(): Array<Object> {
		return this.items;
	}
}
