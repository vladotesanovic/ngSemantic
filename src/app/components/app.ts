import { Component, View } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig } from "angular2/router";

import { HomeComponent } from "./home/home";
import { PageComponent } from "./page/page";

import { SemanticMessage } from "../directives/semantic/semantic";

@Component({
	selector: "app"
})
@View({
	directives: [ ROUTER_DIRECTIVES, SemanticMessage],
	template: "<router-outlet></router-outlet><ui-message></ui-message>"
})
@RouteConfig([
	{ component: HomeComponent, path: "/" },
	{ component: PageComponent, path: "/page/:slug" }
])

export class AppComponent { }
