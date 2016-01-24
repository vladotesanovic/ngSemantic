import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-list"
})

@View({
  template: `<div class="ui list {{class}}">
  <ng-content></ng-content>
</div>`
})
export class SemanticList {
  @Input("class") class: string;
}
