import {Component, ChangeDetectionStrategy, Input, Directive, ElementRef } from "angular2/core";

declare var jQuery: any;

/**
 * Implementation of Semantic UI accordination
 *
 * @link http://semantic-ui.com/modules/accordion.html
 */
@Directive({
    selector: "[sm-dir-accordination]"
})
class SMAccordinationDirective {
    constructor(public element: ElementRef) {
        jQuery(element.nativeElement).accordion();
    }
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [SMAccordinationDirective],
    selector: "sm-accordination",
    template: `
<div class="ui accordion {{class}}" sm-dir-accordination>
    <ng-content></ng-content>
</div>
`,
    styles: [`.ui.accordion.styled sm-accordination-item:first-child .title { border-top: none !important; }`]
})
export class SemanticAccordination {
    @Input("class") class: string;
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-accordination-item",
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
export class SemanticAccordinationItem {
    @Input("title") title: string;
}
