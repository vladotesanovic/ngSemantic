import {
    Component, Input, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef,
    Renderer
} from "@angular/core";

/**
 * Implementation of Message collection
 *
 * @link http://semantic-ui.com/collections/message.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: "sm-message",
  styles: [`sm-message { display: block; margin: 1em 0; } message-header {display: block}`],
  template: `<div class="ui message {{class}}" [ngClass]="{'icon': icon}" #message>
<i class="close icon" (click)="close()"></i>
<i *ngIf="icon" class="icon {{icon}}"></i>
  <div class="content">
    <div class="header">
      <ng-content select="message-header"></ng-content>
    </div>
    <ng-content select="message-content"></ng-content>
  </div>
</div>`
})
export class SemanticMessageComponent {
  @Input() icon: string;
  @Input() class: string;
  @ViewChild("message") message: ElementRef;

  constructor(public renderer: Renderer) {}

  close() {
    this.renderer.detachView([this.message.nativeElement]);
  }
}
