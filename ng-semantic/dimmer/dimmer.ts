import { Component, Input, HostListener, ChangeDetectionStrategy, Directive } from "@angular/core";

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
export class SemanticDimmerComponent {
    @Input("selector") selector: string;
}

/**
 * Directive which trigger sidebar.
 *
 * @link http://semantic-ui.com/modules/dimmer.html
 */
@Directive({
    selector: "[smDirDimmer]"
})
export class SMDimmerDirective {

    @Input() smDirDimmer: string;

    @HostListener("click", ["$event.target"])
    toggleDimmer() {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }

        jQuery(".ui.dimmer." + this.smDirDimmer)
            .dimmer("toggle");
    }

}
