import { Component, View, Input, ChangeDetectionStrategy, ViewEncapsulation } from "angular2/core";
import { FORM_DIRECTIVES, FORM_PROVIDERS } from "angular2/common";

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
  template: `<input type="text" [ngControl]="inputControl" placeholder="{{placeholder}}...">`,
  encapsulation: ViewEncapsulation.None
})
export class SemanticInput {
  @Input("inputControl") inputControl: string;
  @Input("placeholder") placeholder: string;
}

/**
 * Implementation of Form element
 *
 * @link
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-form",
  providers: [FORM_PROVIDERS]
})
@View({
  directives: [FORM_DIRECTIVES],
  template: `<form [ngFormModel]="loginForm">
    <ng-content></ng-content>
</form>`,
  encapsulation: ViewEncapsulation.None
})
export class SemanticForm {
  @Input("formModel") formModel: any;
}
