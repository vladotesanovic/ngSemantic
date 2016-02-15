import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";
import { FORM_DIRECTIVES, Control, FORM_PROVIDERS } from "angular2/common";

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
  template: `<div class="field" [ngClass]="{error: (!control.valid && control.dirty) }">
  <label *ngIf="label">{{label}}</label>
  <input type="text" [ngFormControl]="control" placeholder="{{placeholder}}">
</div>`
})
export class SemanticInput {
  @Input("control") control: Control;
  @Input("label") label: string;
  @Input("placeholder") placeholder: string;
}

/**
 * Implementation of Form element
 * 
 * @link http://semantic-ui.com/collections/form.html
 */
@Component({
  selector: "form[sm-form]",
  providers: [FORM_PROVIDERS]
})
@View({
  directives: [FORM_DIRECTIVES],
  template: `<ng-content></ng-content>`
})
export class SemanticForm {}
