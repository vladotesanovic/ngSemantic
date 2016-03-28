/// <reference path="../../typings/main.d.ts" />
import { Directive, Component, View, Input, ChangeDetectionStrategy } from "angular2/core";
import "semantic-ui/dist/components/dropdown.min";
import "semantic-ui/dist/components/dimmer.min";

/**
 * Directive, implementation of Semantic UI dropdown components.
 *
 * Object that need to be passed to this components is:
 * {
 *      selector: string
 * }
 *
 * @link http://semantic-ui.com/modules/dropdown.html
 */
@Directive({
    selector: "[sm-dir-dropdown]",
    host: {
        "(click)": "onClick()"
    }
})
export class SMDropdownDirective {

    constructor() {}

    onClick() {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }

        jQuery(".ui.dropdown").dropdown();

    }

}

/**
 * Component, implementation of Semantic UI dropdown components.
 *
 * This component is triggered by SMDropdownDirective.
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-dropdown"
})
@View({
    template: `<div class="ui dropdown {{selector}}">
                    <div class="text">{{title}}</div>
                    <i class="dropdown icon"></i>
                    <div class="menu">
                        <ng-content></ng-content>
                    </div>
               </div>
    `
})
export class SemanticDropdown {
    @Input("selector") selector: string;
    @Input("title") title: string;
}
