import { Component, View } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig } from "angular2/router";

import { HomeComponent } from "../components/home/home";
import { PageComponent } from "../components/page/page";

@Component({
	selector: "app"
})
@View({
	directives: [ ROUTER_DIRECTIVES ],
	template: "<router-outlet></router-outlet>"
})
@RouteConfig([
	{ component: HomeComponent, path: "/" },
	{ component: PageComponent, path: "/page/:slug" }
])

export class AppComponent { }
