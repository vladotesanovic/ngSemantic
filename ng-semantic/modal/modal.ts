import { Directive, Component, Input, HostListener, ChangeDetectionStrategy } from "@angular/core";

declare var jQuery: any;

/**
 * Directive, implementation of Semantic UI modal components.
 *
 * Object that need to be passed to this components is:
 * {
 *      selector: string
 * }
 *
 * @link http://semantic-ui.com/modules/modal.html
 */
@Directive({
    selector: "[smDirModal]"
})
export class SMModalDirective {

    @Input() smDirModal: { selector: string };

    @HostListener("click", ["$event.target"])
    onClick() {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }

        if (!this.smDirModal.hasOwnProperty("selector")) {
            console.log("target selector missing for modal");
            return;
        }

        jQuery(".ui.modal." + this.smDirModal.selector)
            .modal(this.smDirModal || {})
            .modal("toggle");
    }

}

/**
 * Component, implementation of Semantic UI modal components.
 *
 * This component is triggered by SMModalDirective.
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-modal",
    template: `<div class="ui modal {{selector}} {{class}}">
    <i class="close icon"></i>
    <div [ngClass]="{'icon': icon}" class="ui header">
        <i *ngIf="icon" class="icon {{icon}}"></i>
        {{title}}
    </div>  
    <div class="content">
        <ng-content></ng-content>
    </div>
</div>`
})
export class SemanticModalComponent {
    @Input() class: string;
    @Input() selector: string;
    @Input() title: string;
    @Input() icon: string;
}
