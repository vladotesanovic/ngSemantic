import { Component, AfterViewInit, Type } from "@angular/core";
import { ROUTER_DIRECTIVES, Routes } from "@angular/router";

import { HomeComponent } from "./home/home";
import { ContextmenuComponent } from "./elements/contextmenu";
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
import { AccordionComponent } from "./elements/accordion";

@Component({
    	directives: [ROUTER_DIRECTIVES],
		providers: [Location],
        selector: "sm-app",
		templateUrl: "/demo/app/components/app.html"
})
@Routes([
	{ component: <Type>HomeComponent, path: "/" },
	{ component: <Type>LoaderComponent, path: "/elements/loader" },
	{ component: <Type>ContextmenuComponent, path: "/elements/contextmenu" },
	{ component: <Type>AccordionComponent, path: "/elements/accordion" },
	{ component: <Type>ListComponent, path: "/elements/list" },
	{ component: <Type>FormComponent, path: "/elements/form" },
	{ component: <Type>CardComponent, path: "/elements/card" },
	{ component: <Type>SegmentComponent, path: "/elements/segment" },
	{ component: <Type>MenuComponent, path: "/elements/menu" },
	{ component: <Type>MessageComponent, path: "/elements/message" },
	{ component: <Type>DimmerComponent, path: "/elements/dimmer" },
	{ component: <Type>ProgressComponent, path: "/elements/progress" },
	{ component: <Type>FlagComponent, path: "/elements/flag" },
	{ component: <Type>ModalComponent, path: "/elements/modal" },
	{ component: <Type>PopupComponent, path: "/elements/popup" },
	{ component: <Type>SidebarComponent, path: "/elements/sidebar" },
	{ component: <Type>TabComponent, path: "/elements/tab" },
	{ component: <Type>ButtonComponent, path: "/elements/button" },
])

export class AppComponent implements AfterViewInit {

	ngAfterViewInit() {
		const _resize = (): any => {
			jQuery("#page .full.height").css("height", jQuery(window).height() + "px");
		};
		_resize();
		window.onresize = function(event): any {
			_resize();
		};
	}
}
