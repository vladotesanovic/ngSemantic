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

	transform(array: Array<string>, text: any): Array<string> {
		if (typeof text === "object" && typeof text[0] === "undefined") {
			return array;
		}

		this._tmp = new Array<string>();
		// 1 mean that array is flat
		// 2 mean that we deal with array of objects
		if (text.length === 1) {
			array.map(item => {
				if (item.toLowerCase().search(text.toString().toLowerCase()) >= 0) {
					this._tmp.push(item);
				}
			});
		} else {
			array.map(item => {
				if (item[text[0]].toLowerCase().search(text[1].toString().toLowerCase()) >= 0) {
					this._tmp.push(item);
				}
			});
		}

		return this._tmp;
	}
}
