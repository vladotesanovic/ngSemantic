import {
    Component, ChangeDetectionStrategy, Input, Directive, ElementRef, OnInit,
    AfterViewInit, ViewChild
} from "@angular/core";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-accordion",
    styles: [`sm-accordion sm-accordion-item:first-child .title { border-top: none !important; }`],
    template: `
<div class="ui accordion {{class}}" #accordion>
    <ng-content></ng-content>
</div>
`
})
export class SemanticAccordionComponent implements AfterViewInit {
    @Input() class: string;
    @Input() options: string;
    @ViewChild("accordion") accordion: ElementRef;

    ngAfterViewInit() {

        const inAccordion: HTMLElement|boolean = this.inAccordion(this.accordion.nativeElement, "accordion");

        if (inAccordion) {
            this.accordion.nativeElement.classList.remove("ui");
            jQuery(inAccordion).accordion(this.options || {});
        } else {
            jQuery(this.accordion.nativeElement).accordion(this.options || {});
        }
    }

    inAccordion(el: any, className: string): HTMLElement|boolean {

        if (el.parentNode) {
            if (el.parentNode.classList && el.parentNode.classList.contains(className)) {
                return el.parentNode;
            } else {
                return this.inAccordion(el.parentNode, className);
            }
        } else {
            return false;
        }
    }
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-accordion-item",
    template: `
<div class="{{class}} title">
    <i class="dropdown icon"></i>
    <ng-content select="accordion-title"></ng-content>
</div>
<div class="{{class}} content">
    <ng-content select="accordion-content"></ng-content>
</div>
`
})
export class SemanticAccordionItemComponent {
    @Input() class: string;
}
