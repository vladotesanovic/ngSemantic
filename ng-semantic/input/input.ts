import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { FORM_DIRECTIVES, Control, FORM_PROVIDERS } from "@angular/common";

/**
 * Implementation of Input element
 * 
 * @link http://semantic-ui.com/elements/input.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-input",
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
 * Implementation of Checkbox element
 * 
 * @link http://semantic-ui.com/modules/checkbox.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-checkbox",
  template: `<div class="field" [ngClass]="{error: (!control.valid) }">
    <div class="ui checkbox">
      <input type="checkbox" tabindex="0" [ngFormControl]="control">
      <label *ngIf="label">{{label}}</label>
    </div>
  </div>`
})
export class SemanticCheckbox {
  @Input("control") control: Control;
  @Input("label") label: string;
}

/**
 * Implementation of Textarea element
 * 
 * @link http://semantic-ui.com/collections/form.html#text-area
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-textarea",
  template: `<div class="field" [ngClass]="{error: (!control.valid && control.dirty) }">
    <label *ngIf="label">{{label}}</label>
    <textarea rows="{{rows}}" [ngFormControl]="control"></textarea>
  </div>`
})
export class SemanticTextarea {
  @Input("control") control: Control;
  @Input("label") label: string;
  @Input("rows") rows: string;
}

/**
 * Implementation of Form element
 * 
 * @link http://semantic-ui.com/collections/form.html
 */
@Component({
  directives: [FORM_DIRECTIVES],
  providers: [FORM_PROVIDERS],    
  selector: "form[sm-form]",
  template: `<ng-content></ng-content>`
})
export class SemanticForm {}
