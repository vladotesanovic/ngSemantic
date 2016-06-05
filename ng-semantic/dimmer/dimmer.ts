import { Component, Input, ChangeDetectionStrategy, Directive } from "@angular/core";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-dimmer",
    template: `<div class="ui {{selector}} dimmer">
  <div class="content">
    <ng-content></ng-content>
  </div>
</div>`
})
export class SemanticDimmer {
    @Input("selector") selector: string;
}

/**
 * Directive which trigger sidebar.
 *
 * @link http://semantic-ui.com/modules/dimmer.html
 */
@Directive({
    host: {
        "(click)": "toggleDimmer()"
    },
    inputs: [
        "data: sm-dir-dimmer"
    ],
    selector: "[sm-dir-dimmer]"
})
export class SMDimmerDirective {

    public data: any;

    toggleDimmer() {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }

        jQuery(".ui.dimmer." + this.data)
            .dimmer('toggle');
    }

}
