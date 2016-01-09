/// <reference path="../../../../../typings/tsd.d.ts" />
import { Directive, ElementRef, Component, View } from "angular2/core";


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
    properties: ["selector"],
    selector: "sm-popup"
})
@View({
    template: `<div class="ui popup very wide {{selector}}">
    <div class="content">
        <ng-content></ng-content>
    </div>
</div>`
})
export class SemanticPopup {}
