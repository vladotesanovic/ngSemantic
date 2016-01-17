/// <reference path="../../typings/tsd.d.ts" />
import { Directive, ElementRef } from "angular2/core";
import "semantic/popup.min";
import "semantic/transition.min";

/**
 * Implementation of Semantic UI popup
 *
 * @link http://semantic-ui.com/modules/popup.html
 */
@Directive({
    host: {
        "(mouseenter)": "onMouseEnter()"
    },
    inputs: [
        "text: sm-dir-tooltip"
    ],
    selector: "[sm-dir-tooltip]"
})
export class SMTooltipDirective {
    public text: string;

    constructor(public element: ElementRef) { }

    onMouseEnter() {

        jQuery(this.element.nativeElement).popup({
            content: this.text,
            exclusive: true,
            lastResort: true
        }).popup("show");
    }
}
