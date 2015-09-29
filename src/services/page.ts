/// <reference path="../../typings/angular2/angular2.d.ts" />
import { Injectable } from "angular2/angular2";
import { Http } from "angular2/http";

@Injectable()
export class PageServices {
	constructor(public http: Http) {
		this.http = http;
	}
	getPage(): any {
		return this.http.get("./assets/data/pages.json")
			.toRx()
			.map(res => res.json());
	}
}
