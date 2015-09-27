/// <reference path="../../../typings/angular2/angular2.d.ts" />

import {Component, View} from "angular2/angular2";

@Component({
	selector: "about-component"
})
@View({
	templateUrl: "./templates/components/page/page.html"
})

export class AboutComponent {
	text: string;
	constructor() {
		this.text = "About us page";
	}
}
