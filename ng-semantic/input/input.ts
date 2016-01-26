import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";
import { FORM_DIRECTIVES } from "angular2/common";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-input"
})

@View({
  directives: [FORM_DIRECTIVES],
  template: `<div class="ui input">
  <input type="text" [(ngModel)]="model" placeholder="{{placeholder}}...">
</div>`
})
export class SemanticInput {
  @Input("model") model: string;
  @Input("placeholder") placeholder: string;
}
