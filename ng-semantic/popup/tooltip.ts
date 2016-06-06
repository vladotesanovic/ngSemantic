import { Directive, ElementRef, HostListener, Input } from "@angular/core";

declare var jQuery: any;

/**
 * Implementation of Semantic UI popup
 *
 * @link http://semantic-ui.com/modules/popup.html
 */
@Directive({
    selector: "[smDirTooltip]"
})
export class SMTooltipDirective {

    @Input() smDirTooltip: string;

    constructor(public element: ElementRef) { }

    @HostListener("mouseenter", ["$event.target"])
    onMouseEnter() {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }

        jQuery(this.element.nativeElement).popup({
            content: this.smDirTooltip,
            exclusive: true,
            lastResort: true
        }).popup("show");
    }
}
