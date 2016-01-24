import { Component, View, Input } from "angular2/core";

@Component({
  selector: "sm-button"
})

@View({
  template: `<button [ngClass]="{icon: icon}" class="ui {{class}} button">
  <i *ngIf="icon" class="{{icon}} icon"></i>
    <ng-content></ng-content>
</button>`
})
export class SemanticButton {
  @Input("class") class: any;
  @Input("icon") icon: any;
}
