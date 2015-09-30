/// <reference path="../../../typings/angular2/angular2.d.ts" />

import { Component, View, LifecycleEvent, NgFor } from "angular2/angular2";
import { RouteParams } from "angular2/router";
import { SEMANTIC_COMPONENTS } from "../../directives/semantic/semantic";
import { PageServices } from "../../services/page";

@Component({
	bindings: [PageServices],
	lifecycle: [LifecycleEvent.OnDestroy, LifecycleEvent.OnChanges, LifecycleEvent.OnInit,
		LifecycleEvent.AfterContentInit],
		selector: "page"
})
@View({
	directives: [SEMANTIC_COMPONENTS, NgFor],
	templateUrl: "./templates/components/page/page.html"
})

export class PageComponent {
	public text: string;
	public title: string;
	public events: Array<string> = new Array<string>();

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
