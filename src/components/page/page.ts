/// <reference path="../../../typings/angular2/angular2.d.ts" />

import { Component, View } from "angular2/angular2";
import { RouteParams } from "angular2/router";
import { SEMANTIC_COMPONENTS } from "../../directives/semantic/semantic";
import { PageServices } from "../../services/page";

@Component({
	bindings: [PageServices],
	selector: "page"
})
@View({
	directives: [SEMANTIC_COMPONENTS],
	templateUrl: "./templates/components/page/page.html"
})

export class PageComponent {
	public text: string;
	public title: string;

	constructor(params: RouteParams, pageServ: PageServices) {
		pageServ.getPage().subscribe(res => {
			res.find((item) => {
				if (item.slug === params.get("slug")) {
					this.text = item.text;
					this.title = item.title;
				}
			});
		});
	}
}
