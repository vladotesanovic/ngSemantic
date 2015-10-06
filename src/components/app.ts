/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />

import { Component, View } from "angular2/angular2";
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
