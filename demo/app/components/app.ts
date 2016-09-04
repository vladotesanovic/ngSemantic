import { Component, enableProdMode, AfterViewInit, ViewChild, ElementRef, Renderer } from "@angular/core";

enableProdMode();

@Component({
	selector: "sm-app",
	templateUrl: "/demo/app/components/app.html"
})
export class AppComponent implements AfterViewInit {

	@ViewChild("leftSidebar") leftSidebar: ElementRef;

	constructor(public renderer: Renderer) {}

	ngAfterViewInit() {
		this.setFullHeight();
		window.onresize = (): any => this.setFullHeight();
	}

	setFullHeight(): void {
		this.renderer.setElementStyle(this.leftSidebar.nativeElement, "height", jQuery(window).height() + "px");
	}
}
