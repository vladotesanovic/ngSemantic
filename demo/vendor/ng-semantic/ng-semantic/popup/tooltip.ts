/// <reference path="../../typings/main.d.ts" />
import { Directive, ElementRef } from "angular2/core";
import "semantic-ui/dist/components/popup.min";
import "semantic-ui/dist/components/transition.min";

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
