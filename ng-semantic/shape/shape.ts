import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from "@angular/core";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-shape",
    template: `
    <div #shape class="ui text shape">
        <ng-content></ng-content>
    </div>
    `
})
export class SemanticShapeComponent {
    @ViewChild("shape") shape: ElementRef;

    /**
     * Show shape element
     *
     * @param options
     */
    show(options?: {}) {
        jQuery(this.shape.nativeElement)
            .shape(options || {})
    }

}
