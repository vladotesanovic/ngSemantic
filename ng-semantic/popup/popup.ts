import { Directive, ElementRef, Component, Input } from "angular2/core";

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
    host: {
        "(click)": "onClick()"
    },
    inputs: [
        "data: sm-dir-popup"
    ],
    selector: "[sm-dir-popup]"
})
export class SMPopupDirective {
    public data: any;

    constructor(public element: ElementRef) {}

    onClick() {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }

        if (!this.data.hasOwnProperty("position") || !this.data.hasOwnProperty("selector")) {
            console.log("position or target selector missing for popup");
            return;
        }

        jQuery(this.element.nativeElement).popup({
            closable: true,
            exclusive: true,
            lastResort: true,
            on: "click",
            popup: "." + this.data.selector + ".popup",
            position : this.data.position,
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
export class SemanticPopup {
    @Input("selector") selector: string;
}
