import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";

/**
 * Implementation of Button component
 * 
 * @link http://semantic-ui.com/elements/button.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-button"
})

@View({
  template: `<button [ngClass]="{icon: icon}" class="ui {{class}} button">
  <i *ngIf="icon" class="{{icon}} icon"></i>
    <ng-content></ng-content>
</button>`
})
export class SemanticButton {
  @Input("class") class: string;
  @Input("icon") icon: string;
}
