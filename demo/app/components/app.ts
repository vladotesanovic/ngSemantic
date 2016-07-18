import { Component, AfterViewInit, enableProdMode } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

enableProdMode();

@Component({
	directives: [ROUTER_DIRECTIVES],
	selector: "sm-app",
	templateUrl: "/demo/app/components/app.html"
})
export class AppComponent implements AfterViewInit {

	ngAfterViewInit() {
		const _resize = (): any => {
			jQuery("#page .article").css("height", jQuery(window).height() + "px");
		};
		_resize();
		window.onresize = (): any => {
			_resize();
		};
	}
}
