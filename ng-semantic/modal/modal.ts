import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef } from "@angular/core";

declare var jQuery: any;

/**
 * Component, implementation of Semantic UI modal components.
 *
 * This component is triggered by SMModalDirective.
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-modal",
    template: `<div class="ui modal {{class}}" #modal>
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
    @Input() title: string;
    @Input() icon: string;
    @ViewChild("modal") modal: ElementRef;

    show(data?: {}) {
        jQuery(this.modal.nativeElement)
            .modal(data || {})
            .modal("toggle");
    }
}
