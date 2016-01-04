import { Injectable } from "angular2/core";
import { Http } from "angular2/http";

@Injectable()
export class TableServices {
	public columns: Array<string>;
	public items: Array<Object>;

	constructor(public http: Http) {
		this.items = new Array<Object>();
		this.columns = new Array<string>();
	};
	getTable(): Array<Object> {
		return this.items;
	}
}
