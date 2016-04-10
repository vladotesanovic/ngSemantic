import { Injectable } from "angular2/core";
import { Http } from "angular2/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class DataServices {

	constructor(public http: Http) { }

	array(name: string): Observable<any> {
		return this.http
			.get("/assets/data/" + name + ".json")
			.map((respond: any) => respond.json());
	}
}
