import { ElementRef, Component, Input, ViewChild } from "@angular/core";

declare var jQuery: any;

/**
 * Component, implementation of Semantic UI popup components.
 *
 * This component is triggered by UIPopupDirective.
 */
@Component({
    selector: "sm-popup",
    template: `<div class="ui popup very wide {{selector}}" #popup>
    <div class="content">
        <ng-content></ng-content>
    </div>
</div>`
})
export class SemanticPopupComponent {
    @ViewChild("popup") popup: ElementRef;

    show(element: Event, data: { position?: string} = {}) {

        jQuery(element.srcElement).popup({
            closable: true,
            exclusive: true,
            lastResort: true,
            on: "click",
            popup: this.popup.nativeElement,
            position : (data.hasOwnProperty("position")) ? data.position : "bottom center",
            preserve: true
        }).popup("show");
    }
}
