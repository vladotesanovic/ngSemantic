import { bootstrap } from "angular2/platform/browser";
import { bind } from "angular2/core";
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from "angular2/router";
import { HTTP_PROVIDERS } from "angular2/http";

import { MessageService } from "./services/message";
import { AppComponent } from "./components/app";

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	MessageService,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
