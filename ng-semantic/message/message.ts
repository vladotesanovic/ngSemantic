import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from "@angular/core";

/**
 * Implementation of Message collection
 * 
 * @link http://semantic-ui.com/collections/message.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: "sm-message",
  styles: [`sm-message { display: block; }`],
  template: `<i *ngIf="icon" class="icon {{icon}}"></i>
  <p><ng-content></ng-content></p>`
})
export class SemanticMessageComponent {
  @Input("icon") icon: string;
}
