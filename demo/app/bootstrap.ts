import { bootstrap } from "@angular/platform-browser-dynamic";
import { Type } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { APP_ROUTER_PROVIDERS } from "./routes";
import { HTTP_PROVIDERS } from "@angular/http";
import { provideForms } from "@angular/forms";

import { AppComponent } from "./components/app";
import { ContextMenuService } from "./services/contextmenu";

bootstrap(<Type>AppComponent, [
	HTTP_PROVIDERS,
	APP_ROUTER_PROVIDERS,
	ContextMenuService,
	provideForms(),
	{ provide: LocationStrategy, useClass: HashLocationStrategy }
]);
