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
    host: {
        "(click)": "onClick()"
    },
    inputs: [
        "data: sm-dir-dropdown"
    ],
    selector: "[sm-dir-dropdown]"
})
export class SMDropdownDirective {
    public data: any;

    onClick() {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }

        if (!this.data.hasOwnProperty("selector")) {
            console.log("target selector missing for dropdown");
            return;
        }

        jQuery(".ui.dropdown." + this.data.selector).dropdown();

    }

}

/**
 * Component, implementation of Semantic UI modal components.
 *
 * This component is triggered by SMModalDirective.
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-dropdown"
})
@View({
    template: `<div class="ui dropdown">
    <input name="gender" type="hidden">
  <i class="dropdown icon"></i>
  <div class="default text">Gender</div>
  <div class="menu">
    <div class="item" data-value="male">Male</div>
    <div class="item" data-value="female">Female</div>
  </div>
</div>`
})
export class SemanticDropdown {
    @Input("selector") selector: string;
    @Input("title") title: string;
    @Input("class") class: string;
}
