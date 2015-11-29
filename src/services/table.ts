import { Injectable } from "angular2/angular2";
import { Http } from "angular2/http";

@Injectable()
export class TableServices {
	public columns: Array<string>;
	public items: Array<Object>;

	constructor(public http: Http) {
		this.items = new Array<Object>();
		this.columns = new Array<string>();
		this.http
			.get("./assets/data/table.json")
			.map((res: any) => res.json())
			.subscribe(res => {
				this.items = res;
				if ( typeof this.items !== "undefined" ) {
					for (let key in this.items[0]) {
						if (typeof key === "string") {
							this.columns.push(key);
						}
					}
				}
			});
	};
	getTable(): Array<Object> {
		return this.items;
	}
}
