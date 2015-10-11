/// <reference path="../../../typings/angular2/angular2.d.ts" />

import { Component, View, NgFor } from "angular2/angular2";
import { RouteParams } from "angular2/router";
import { SEMANTIC_COMPONENTS } from "../../directives/semantic/semantic";
import { PageServices } from "../../services/page";
import { MenuServices } from "../../services/menu";

@Component({
	bindings: [PageServices, MenuServices],
	selector: "page"
})
@View({
	directives: [SEMANTIC_COMPONENTS, NgFor],
	templateUrl: "./templates/components/page/page.html"
})

export class PageComponent {
	public text: string;
	public title: string;
	public menuItems: Array<Object>;
	public events: Array<string> = new Array<string>();

	constructor(params: RouteParams, pageServ: PageServices, menu: MenuServices) {

		menu.getMenu().subscribe(res => this.menuItems = res.json());

		pageServ.getPage().subscribe(res => {
			res.find((item) => {
				if (item.slug === params.get("slug")) {
					this.text = item.text;
					this.title = item.title;
				}
			});
		});
	}
	onChange(value: string) {
		this.text = value;
	}
	onInit() {
		this.events.push("onInit");
	}
	onChanges() {
		this.events.push("onChanges");
	}
	afterContentInit() {
		this.events.push("afterContentInit");
	}
	onDestroy() {
		this.events.push("onDestroy");
	}
}
