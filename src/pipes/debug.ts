/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Pipe } from "angular2/angular2";

@Pipe({
	name: "debug"
})
export class DebugPipe {

	/**
	 * Export any variable to console
	 * 
	 * @param  any			data  Output to conosle
	 * @param  string       tag   Tag your output
	 * @return void
	 */
	transform(data: any, tag: string): any {

		console.log(tag + " ----------");
		console.log(data);
		console.log("-----------------");
	}
}
