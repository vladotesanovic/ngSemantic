/// <reference path="../typings/typings.d.ts" />

import { bootstrap, bind } from "angular2/angular2";
import { routerBindings } from "angular2/router";
import { HTTP_BINDINGS } from "angular2/http";

import { LocationStrategy, HashLocationStrategy } from "angular2/router";
import { AppComponent } from "./components/app";

bootstrap(AppComponent, [
	HTTP_BINDINGS,
	routerBindings(AppComponent),
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
