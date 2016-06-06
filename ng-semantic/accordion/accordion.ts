import {Component, ChangeDetectionStrategy, Input, Directive, ElementRef, OnInit, Type } from "@angular/core";

declare var jQuery: any;

/**
 * Implementation of Semantic UI accordion
 *
 * @link http://semantic-ui.com/modules/accordion.html
 */
@Directive({
    selector: "[smDirAccordion]"
})
class SMAccordionDirective implements OnInit {

    @Input() smDirAccordion: string;

    constructor(public element: ElementRef) {}

    ngOnInit() {
        jQuery(this.element.nativeElement).accordion(this.smDirAccordion || {});
    }
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [<Type>SMAccordionDirective],
    selector: "sm-accordion",
    styles: [`sm-accordion sm-accordion-item:first-child .title { border-top: none !important; }`],
    template: `
<div class="ui accordion {{class}}" [smDirAccordion]="options">
    <ng-content></ng-content>
</div>
`
})
export class SemanticAccordionComponent {
    @Input("class") class: string;
    @Input("options") options: string;
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-accordion-item",
    template: `
<div class="active title">
    <i class="dropdown icon"></i>
    {{title}}
</div>
<div class="content">
    <p><ng-content></ng-content></p>
</div>
`

})
export class SemanticAccordionItemComponent {
    @Input("title") title: string;
}
