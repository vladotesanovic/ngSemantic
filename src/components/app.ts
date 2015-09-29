/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Component, View } from "angular2/angular2";
import { RouterOutlet, RouteConfig, RouterLink } from "angular2/router";

import { HomeComponent } from "../components/home/home";
import { PageComponent } from "../components/page/page";

@Component({
	selector: "app"
})
@View({
	directives: [RouterOutlet, RouterLink],
	template: "<router-outlet></router-outlet>"
})
@RouteConfig([
	{ as: "home", component: HomeComponent, path: "/" },
	{ as: "page", component: PageComponent, path: "/page/:slug" }
])

export class AppComponent { }
