import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

/**
 * Implementation of Menu component
 * 
 * @link http://semantic-ui.com/collections/menu.html
 * @link http://semantic-ui.com/elements/icon.html
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-menu",
    template: `
<a href="#/" *ngIf="logo" class="header item">
    <img class="logo" alt="{{title}}" src="{{logo}}">
</a>

<ng-content></ng-content>
`
})
export class SemanticMenuComponent {
    @Input("logo") logo: string;
}
