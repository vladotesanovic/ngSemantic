import { Component, View } from "angular2/core";
import { RouteParams } from "angular2/router";
import { SemanticHeader } from "../../directives/semantic/semantic";
import { PageServices } from "../../services/page";
import { MenuServices } from "../../services/menu";

@Component({
	bindings: [PageServices, MenuServices],
	selector: "page"
})
@View({
	directives: [SemanticHeader],
	templateUrl: "./app/components/page/page.html"
})

export class PageComponent {
	public text: string;
	public title: string;
	public menuItems: Array<Object>;
	public events: Array<string> = new Array<string>();

	constructor(params: RouteParams, pageServ: PageServices, menu: MenuServices) {

		menu.getMenu().subscribe((res: any) => this.menuItems = res.json());

		pageServ.getPage().subscribe((res: any) => {
			res.find((item: any) => {
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
