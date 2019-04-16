import { Directive, ViewContainerRef, Input, OnInit } from "@angular/core";

declare var jQuery: any;

/**
 * Implementation of Semantic UI popup
 *
 * @link http://semantic-ui.com/modules/popup.html
 */
@Directive({
  selector: "[smDirTooltip]"
})
export class SMTooltipDirective implements OnInit {

  @Input() smDirTooltip: string;
  @Input() smDirPosition: string;

  constructor(public element: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.element.element.nativeElement.setAttribute("data-position", this.smDirPosition || "top center");
    this.element.element.nativeElement.setAttribute("data-tooltip", this.smDirTooltip);
  }
}
