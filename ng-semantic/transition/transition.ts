import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from "@angular/core";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-transition",
    template: `
    <div #transition>
        <ng-content></ng-content>
    </div>
    `
})
export class SemanticTransitionComponent {
    @ViewChild("transition") transition: ElementRef;

    /**
     * Show transition element
     *
     * @param options
     */
    show(options?: {}) {
        jQuery(this.transition.nativeElement)
            .transition(options || {})
    }

}
