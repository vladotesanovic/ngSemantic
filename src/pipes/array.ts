/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Pipe } from "angular2/angular2";

/**
 * Filter trough array in Angular2
 *
 * Implementation: 
 * 
 *  Filter source: 
 *  <input type="text" [(ng-model)]="search" placeholder="Search list...">
 *
 *  For-Each
 *  <a class="item" *ng-for="var item of items | arrayFilter: search"> {{item}}</a>
 */
@Pipe({
	name: "arrayFilter"
})
export class ArrayFilterPipe {

	private _tmp: Array<string>;

	transform(array: Array<string>, text: string): Array<string> {
		if (typeof text === "undefined") {
			return array;
		}

		this._tmp = new Array<string>();

		array.map((item) => {
			if (item.toLowerCase().search(text) >= 0) {
				this._tmp.push(item);
			}
		});

		return this._tmp;
	}
}
