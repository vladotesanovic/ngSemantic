import { ElementRef, Component, ViewChild } from "@angular/core";

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
    private visible: boolean = false;
    private element: Element;

    show(element: Event, data: { position?: string} = {}) {

        if (!this.visible) {

            this.visible = true;
            this.element = element.srcElement;

            jQuery(element.srcElement).popup({
                closable: true,
                exclusive: true,
                lastResort: true,
                on: "click",
                popup: this.popup.nativeElement,
                position : (data.hasOwnProperty("position")) ? data.position : "bottom center",
                preserve: true
            }).popup("toggle");
        }
    }

    hide() {
        if (this.visible && this.element) {

            this.visible = false;

            jQuery(this.element)
                .popup("hide");
        }
    }
}
