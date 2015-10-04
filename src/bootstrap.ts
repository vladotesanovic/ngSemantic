/// <reference path="../typings/angular2/angular2.d.ts" />

import { bootstrap, bind } from "angular2/angular2";
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy } from "angular2/router";
import { HTTP_BINDINGS } from "angular2/http";

import { AppComponent } from "./components/app";

bootstrap(AppComponent, [
	ROUTER_BINDINGS,
	HTTP_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
