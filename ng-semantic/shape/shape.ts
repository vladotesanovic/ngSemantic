import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, Input } from "@angular/core";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-shape",
    template: `
    <div #shape class="ui shape">
        <ng-content></ng-content>
    </div>
    `
})
export class SemanticShapeComponent {
    @ViewChild("shape") shape: ElementRef;

    /**
     * Show shape element
     *
     * @param args
     */
    show(...args: string[]) {
        jQuery(this.shape.nativeElement)
            .shape(...args)
    }

}
