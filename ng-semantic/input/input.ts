import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES, FORM_PROVIDERS, FormControl } from "@angular/forms";

/**
 * Implementation of Input element
 *
 * @link http://semantic-ui.com/elements/input.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [REACTIVE_FORM_DIRECTIVES],
  selector: "sm-input",
  template: `<div class="field" [ngClass]="{error: (!control.valid && control.dirty) }">
  <label *ngIf="label">{{label}}</label>
  <input type="text" [formControl]="control" placeholder="{{placeholder}}">
</div>`
})
export class SemanticInputComponent {
  @Input("control") control: FormControl;
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
  directives: [REACTIVE_FORM_DIRECTIVES],
  selector: "sm-checkbox",
  template: `<div class="field" [ngClass]="{error: (!control.valid) }">
    <div class="ui checkbox">
      <input type="checkbox" tabindex="0" [formControl]="control">
      <label *ngIf="label">{{label}}</label>
    </div>
  </div>`
})
export class SemanticCheckboxComponent {
  @Input("control") control: FormControl;
  @Input("label") label: string;
}

/**
 * Implementation of Textarea element
 *
 * @link http://semantic-ui.com/collections/form.html#text-area
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [REACTIVE_FORM_DIRECTIVES],
  selector: "sm-textarea",
  template: `<div class="field" [ngClass]="{error: (!control.valid && control.dirty) }">
    <label *ngIf="label">{{label}}</label>
    <textarea rows="{{rows}}" [formControl]="control"></textarea>
  </div>`
})
export class SemanticTextareaComponent {
  @Input("control") control: FormControl;
  @Input("label") label: string;
  @Input("rows") rows: string;
}

/**
 * Implementation of Form element
 *
 * @link http://semantic-ui.com/collections/form.html
 */
@Component({
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [FORM_PROVIDERS],
  selector: "form[smForm]",
  template: `<ng-content></ng-content>`
})
export class SemanticFormComponent {}
