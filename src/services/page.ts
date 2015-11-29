import { Injectable } from "angular2/angular2";
import { Http } from "angular2/http";

@Injectable()
export class PageServices {

	constructor(public http: Http) {}
	getPage(): any {
		return this.http.get("./assets/data/pages.json")
			.map((res: any) => res.json());
	}
}
