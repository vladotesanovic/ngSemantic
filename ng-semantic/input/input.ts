import {
    Component, Input, ChangeDetectionStrategy, Output, ViewContainerRef,
    EventEmitter, OnInit
} from "@angular/core";
import { FormControl } from "@angular/forms";

/**
 * Implementation of Input element
 *
 * @link http://semantic-ui.com/elements/input.html
 *
 * @example
 * <sm-input icon="dollar" type="number" [(model)]="model" class="right fluid" placeholder="Enter a sum..."></sm-input>
 */
@Component({
  selector: "sm-input",
  template: `<div class="field" [ngClass]="{error: (!control.valid && control.dirty && isInsideForm) }">
  <label *ngIf="label && isInsideForm">{{label}}</label>
  <div class="ui input {{class}}" [ngClass]="{'icon': icon, 'error': (!control.valid && control.dirty &&!isInsideForm)}">
  <label *ngIf="label && !isInsideForm" class="ui label">{{label}}</label>
  <input [type]="type" [formControl]="control" [value]="model" (keyup)="modelChange.emit(input.value)" #input placeholder="{{placeholder}}">
  <i *ngIf="icon" class="{{icon}} icon"></i>
</div>
</div>`
})
export class SemanticInputComponent implements OnInit {
  @Input() label: string;
  @Input() class: string;
  @Input() icon: string;
  @Input() type: string = "text";
  @Input() placeholder: string;
  @Input() model: {};
  @Input() control: FormControl = new FormControl();
  @Output() modelChange: EventEmitter<string|number> = new EventEmitter<string|number>();

  private isInsideForm: boolean = false;

  constructor(public viewRef: ViewContainerRef) {}

  ngOnInit() {
    // if input field is inside form
    if (this.inForm(this.viewRef.element.nativeElement, "form")) {
      this.isInsideForm = true;
    }
  }

  inForm(el: Node, classname: string): boolean {
    if (el.parentNode) {
      if (el.parentNode.nodeName.toLowerCase() === classname.toLowerCase()) {
        return !!el.parentNode;
      } else {
        return this.inForm(el.parentNode, classname);
      }
    } else {
      return false;
    }
  }
}

/**
 * Implementation of Checkbox element
 *
 * @link http://semantic-ui.com/modules/checkbox.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  selector: "sm-textarea",
  template: `<div class="field" [ngClass]="{error: (!control.valid && control.dirty) }">
    <label *ngIf="label">{{label}}</label>
    <textarea rows="{{rows}}" [formControl]="control"></textarea>
  </div>`
})
export class SemanticTextareaComponent {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() rows: string;
}
