import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES, FormControl } from "@angular/forms";

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
  template: `<div class="field" [ngClass]="{error: (!control.value && control?.validator) }">
    <div class="ui {{classType}} checkbox">
      <input type="checkbox" 
      [attr.value]="value"
      [attr.type]="inputType" tabindex="0" [attr.name]="name" [formControl]="control" [attr.disabled]="disabled">
      <label *ngIf="label">{{label}}</label>
    </div>
  </div>`
})
export class SemanticCheckboxComponent {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() value: string|number;
  @Input() name: string;
  @Input("type")
  set type(data: string) {
    if (data && data !== "checkbox") {
      this.classType = data;
      if (data === "radio") {
        this.inputType = data;
      }
    }
  }
  private inputType: string = "checkbox";
  private classType = "checkbox";
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
