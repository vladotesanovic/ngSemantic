import { Component, View, Input } from "angular2/core";

@Component({
  selector: "sm-button"
})

@View({
  template: `<button class="ui {{class}} button">
  <i class="{{icon}} icon"></i>
    <ng-content></ng-content>
</button>`
})
export class SemanticButton {
  @Input("class") class: any;
  @Input("icon") icon: any;
  
  onChanges(value: any) {
    console.log(value);
    return;
  }
}
