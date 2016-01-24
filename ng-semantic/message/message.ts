import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-message"
})

@View({
  template: `<div [ngClass]="{ icon: icon}" class="ui message {{type}}">
  <i *ngIf="icon" class="icon {{icon}}"></i>
  Message: {{text}}
</div>`
})
export class SemanticMessage {
  @Input("type") type: string;
  @Input("icon") icon: string;
  @Input("icon") text: string;
}
