import { Injectable } from "angular2/core";
import { Http } from "angular2/http";

@Injectable()
export class PageServices {

	constructor(public http: Http) {}
	getPage(): any {
		return this.http.get("./assets/data/pages.json");
	}
}
