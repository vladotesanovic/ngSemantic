import { Component, AfterViewInit } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig } from "angular2/router";

import { HomeComponent } from "./home/home";
import { LoaderComponent } from "./elements/loader";
import { ListComponent } from "./elements/list";
import { SegmentComponent } from "./elements/segment";
import { MenuComponent } from "./elements/menu";
import { MessageComponent } from "./elements/message";
import { ModalComponent } from "./elements/modal";
import { PopupComponent } from "./elements/popup";
import { TabComponent } from "./elements/tab";
import { ButtonComponent } from "./elements/button";
import { CardComponent } from "./elements/card";
import { FormComponent } from "./elements/form";
import { SidebarComponent } from "./elements/sidebar";
import { DimmerComponent } from "./elements/dimmer";
import { ProgressComponent } from "./elements/progress";
import { FlagComponent } from "./elements/flag";

@Component({
    	directives: [ROUTER_DIRECTIVES],
        selector: "app",
		templateUrl: "./app/components/app.html"
})
@RouteConfig([
	{ component: HomeComponent, path: "/", useAsDefault: true },
	{ component: LoaderComponent, path: "/elements/loader" },
	{ component: ListComponent, path: "/elements/list" },
	{ component: FormComponent, path: "/elements/form" },
	{ component: CardComponent, path: "/elements/card" },
	{ component: SegmentComponent, path: "/elements/segment" },
	{ component: MenuComponent, path: "/elements/menu" },
	{ component: MessageComponent, path: "/elements/message" },
	{ component: DimmerComponent, path: "/elements/dimmer" },
	{ component: ProgressComponent, path: "/elements/progress" },
	{ component: FlagComponent, path: "/elements/flag" },
	{ component: ModalComponent, path: "/elements/modal" },
	{ component: PopupComponent, path: "/elements/popup" },
	{ component: SidebarComponent, path: "/elements/sidebar" },
	{ component: TabComponent, path: "/elements/tab" },
	{ component: ButtonComponent, path: "/elements/button" },
])

export class AppComponent implements AfterViewInit {
	ngAfterViewInit() {
		jQuery("#page .full.height").css("height", jQuery(window).height() + "px");
	}
}
