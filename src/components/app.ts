/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Component, View } from "angular2/angular2";
import { RouterOutlet, RouteConfig, RouterLink } from "angular2/router";

import { HomeComponent } from "../components/home/home";
import { AboutComponent } from "../components/about/about";
import { MenuComponent } from "../components/menu/menu";

@Component({
	selector: "app"
})
@View({
	directives: [RouterOutlet, RouterLink, MenuComponent],
	templateUrl: "./templates/shared/master.html"
})
@RouteConfig([
	{ as: "home", component: HomeComponent, path: "/" },
	{ as: "about", component: AboutComponent, path: "/about" }
])

export class AppComponent { }
