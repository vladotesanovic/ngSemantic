import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";
import { FORM_DIRECTIVES } from "angular2/common";

/**
 * Implementation of Input element
 * 
 * @link http://semantic-ui.com/elements/input.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-input"
})
@View({
  directives: [FORM_DIRECTIVES],
  template: `<input type="text" [(ngModel)]="value" placeholder="{{placeholder}}...">`
})
export class SemanticInput {
  @Input("value") value: string;
  @Input("placeholder") placeholder: string;
}
