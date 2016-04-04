/// <reference path="../../typings/main.d.ts" />
import { Directive, Component, View, Input, ChangeDetectionStrategy } from "angular2/core";
import "semantic-ui/dist/components/accordion.min";

/**
 * Directive, implementation of Semantic UI accordion components.
 *
 * Object that need to be passed to this components is:
 * {
 *      selector: string
 * }
 *
 * @link http://semantic-ui.com/modules/accordion.html
 */
@Directive({
    selector: "[sm-dir-accordion]",
    host: {
        "(click)": "onClick()"
    }
})
export class SMAccordionDirective {

    constructor() {}

    onClick() {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }

        jQuery(".ui.accordion").accordion();

    }

}

/**
 * Component, implementation of Semantic UI accordion components.
 *
 * This component is triggered by SMAccordionDirective.
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-accordion"
})
@View({
    template:
        `<div class="ui accordion {{selector}}">
              <div class="title">
                    <i class="dropdown icon"></i>
                    {{header}}
              </div>
              <div class="content">
                    <ng-content></ng-content>
              </div>
         </div>
`
})
export class SemanticAccordion {
    @Input("selector") selector: string;
    @Input("header") header: string;
}