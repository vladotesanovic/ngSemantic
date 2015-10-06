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
	private items: Array<Object>;

	constructor(public http: Http) {
		this.items = new Array<Object>();
		this.http
			.get("./assets/data/menu.json")
			.map(res => res.json())
			.subscribe(res => {
				this.items = res;
			});
	}
	getMenu(): Array<Object> {
		return this.items;
	}
}
