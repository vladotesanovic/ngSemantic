import { Directive, ElementRef, HostListener, Component, Input } from "@angular/core";

declare var jQuery: any;

/**
 * Directive, implementation of Semantic UI popup components.
 *
 * Object that need to be passed to this components is:
 * {
 *      position: string,
 *      selector: string
 * }
 *
 * @link http://semantic-ui.com/modules/popup.html
 */
@Directive({
    selector: "[smDirPopup]"
})
export class SMPopupDirective {

    @Input() smDirPopup: { selector: string, position: string};

    constructor(public element: ElementRef) {}

    @HostListener("click", ["$event.target"])
    onClick() {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }

        if (!this.smDirPopup.hasOwnProperty("position") || !this.smDirPopup.hasOwnProperty("selector")) {
            console.log("position or target selector missing for popup");
            return;
        }

        jQuery(this.element.nativeElement).popup({
            closable: true,
            exclusive: true,
            lastResort: true,
            on: "click",
            popup: "." + this.smDirPopup.selector + ".popup",
            position : this.smDirPopup.position,
            preserve: true
        }).popup("show");

    }

}

/**
 * Component, implementation of Semantic UI popup components.
 *
 * This component is triggered by UIPopupDirective.
 */
@Component({
    selector: "sm-popup",
    template: `<div class="ui popup very wide {{selector}}">
    <div class="content">
        <ng-content></ng-content>
    </div>
</div>`
})
export class SemanticPopupComponent {
    @Input("selector") selector: string;
}
