/// <reference path="../../typings/main.d.ts"/>
import { bootstrap } from "angular2/platform/browser";
import { provide } from "angular2/core";
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from "angular2/router";
import { HTTP_PROVIDERS } from "angular2/http";

import { AppComponent } from "./components/app";

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
