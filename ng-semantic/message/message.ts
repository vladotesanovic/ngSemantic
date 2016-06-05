import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from "@angular/core";

/**
 * Implementation of Message collection
 * 
 * @link http://semantic-ui.com/collections/message.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-message",
  template: `<i *ngIf="icon" class="icon {{icon}}"></i>
  <p><ng-content></ng-content></p>`,
  styles: [`sm-message { display: block; }`],
  encapsulation: ViewEncapsulation.None
})
export class SemanticMessage {
  @Input("icon") icon: string;
}
