import { Component, Input, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

/**
 * Implementation of Menu component
 *
 * @link http://semantic-ui.com/collections/menu.html
 * @link http://semantic-ui.com/elements/icon.html
 */
@Component({
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-menu",
    template: `<div class="ui menu {{class}}" #innerElement>
<a href="#/" *ngIf="logo" class="header item">
    <img class="logo" alt="{{title}}" src="{{logo}}">
</a>

<ng-content></ng-content>
</div>
`
})
export class SemanticMenuComponent implements AfterViewInit {
    @Input() logo: string;
    @Input() class: string;
    @Input() title: string;
    @ViewChild("innerElement") innerElement: ElementRef;

    ngAfterViewInit() {
        Array.from(this.innerElement.nativeElement.childNodes)
            .filter((element: Element) => element.nodeName === "SM-MENU")
            .map((element: Element) => element.firstElementChild.classList.remove("ui"));
    }
}
