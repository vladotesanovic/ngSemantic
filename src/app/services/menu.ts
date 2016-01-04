import { Injectable } from "angular2/core";
import { Http } from "angular2/http";
import { Observable, Subscriber } from "rxjs/Rx";

/**
 * Menu services "must have" items array.
 * 
 * [Injectable description]
 */
@Injectable()
export class MenuServices {
	private menu: any;

	constructor(public http: Http) {}
	getMenu(): any {

		return Observable.create((observer: any) => {
		
			observer.next([{
				"title" : "Home",
				"link" : "#/",
				"icon" : "edit",
				"position": "left",
				"type": "link"
			}, {
				"title" : "About Us",
				"link" : "#/about",
				"position": "left",
				"type": "link"
			}]);
		});
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
