import { Component, Input, ChangeDetectionStrategy, HostListener } from "@angular/core";

/**
 * Implementation of Dropdown module on right click
 *
 * @link http://semantic-ui.com/modules/dropdown.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-contextmenu",
  styles: [`.sm-contextmenu { position: fixed; z-index: 1000; }`],
  template: `<div 
[style.left.px]="_position?.x" [style.top.px]="_position?.y"
[ngClass]="{'active visible': show}" class="ui dropdown sm-contextmenu">
 <div 
 [ngClass]="{'visible animating slide down in': show, 'hidden': !show}"  class="ui menu transition">
 <a (click)="menu.action()" *ngFor="let menu of items" class="item">
 <i class="{{menu.icon}} icon"></i>
 {{menu.title}}
 </a>
 </div>
 </div>
`
})
export class SemanticContextMenuComponent {
  _position: { x: number, y: number } = { x: 0, y: 0 };
  show: boolean = false;

  @Input() items: Array<{}>;

  @Input("position")
  set position(data: { x: number, y: number }) {
    if (data) {
      this._position = data;
      this.show = true;
    }
  }

  @HostListener("document:click")
  public clickedOutside(): void {
    this.show = false;
  }
}
