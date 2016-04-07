import {Component, Input, AfterViewInit, ElementRef, HostBinding} from "angular2/core";

@Component({
	host: {
		class: "ui styled accordion"
	},
	selector: "sm-accordion",
	styles: [`
		:host {
			display: block;
		}
	`],
	template: `
		<ng-content></ng-content>
	`
})
export class SemanticAccordion implements AfterViewInit {
	@Input("accordion-options") set accordionOptions(accordionOptions: {}) {
		this._accordionOptions = accordionOptions || this._accordionOptions;
	}
	private _accordionOptions: {} = {};

	public constructor(public elementRef: ElementRef) {}

	public ngAfterViewInit() {
		jQuery(this.elementRef.nativeElement).accordion(this._accordionOptions);
	}
}

@Component({
	host: {
		class: "title"
	},
	selector: "sm-accordion-title",
	styles: [`
		:host {
			display: block;
		}
	`],
	template: `
		<i class="dropdown icon"></i>
		<ng-content></ng-content>
	`
})
export class SemanticAccordionTitle {}

@Component({
	host: {
		class: "content"
	},
	selector: "sm-accordion-content",
	styles: [`
		:host {
			display: block;
		}
	`],
	template: `
		<ng-content></ng-content>
	`
})
export class SemanticAccordionContent {}
