/// <reference path="../../../typings/tsd.d.ts" />
import { Component, View, AfterViewInit } from "angular2/core";
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
import { InputComponent } from "./elements/input";
import { SidebarComponent } from "./elements/sidebar";

@Component({
	selector: "app"
})
@View({
	directives: [ROUTER_DIRECTIVES],
	templateUrl: "./app/components/app.html"
})
@RouteConfig([
	{ component: HomeComponent, path: "/", useAsDefault: true },
	{ component: LoaderComponent, path: "/elements/loader" },
	{ component: ListComponent, path: "/elements/list" },
	{ component: InputComponent, path: "/elements/input" },
	{ component: CardComponent, path: "/elements/card" },
	{ component: SegmentComponent, path: "/elements/segment" },
	{ component: MenuComponent, path: "/elements/menu" },
	{ component: MessageComponent, path: "/elements/message" },
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
