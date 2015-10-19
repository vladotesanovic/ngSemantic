/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Injectable } from "angular2/angular2";
import { Http } from "angular2/http";

/**
 * Menu services "must have" items array.
 * 
 * [Injectable description]
 */
@Injectable()
export class MenuServices {
	private menu;

	constructor(public http: Http) {

		this.menu = http.request("./assets/data/menu.json");
	}
	getMenu(): any {

		return this.menu;
	}
}

// this interface must be implemented
// on items returned by getMenu() function
export interface MenuInterface<T> {
	title: string;
	link: string;
	icon?: string;
	position?: string;
}
