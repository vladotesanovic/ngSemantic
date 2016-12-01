import { Component, Input, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

/**
 * Implementation of Item view
 *
 * @link http://semantic-ui.com/views/item.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "a[sm-item], sm-item",
  template: `<i *ngIf="icon" class="{{icon}} icon"></i>
<img *ngIf="image" class="ui avatar image" src="{{image}}">
<div class="content" #innerItemElement>
  <div *ngIf="header" class="header">
    {{header}}
  </div>
  <ng-content></ng-content>
</div>`
})
export class SemanticItemComponent implements AfterViewInit {
  @Input() icon: string;
  @Input() header: string;
  @Input() image: string;

  @ViewChild("innerItemElement") innerItemElement: ElementRef;

  ngAfterViewInit() {
    this.innerItemElement.nativeElement.parentElement.classList.add("item");
  }
}
