import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-item"
})

@View({
  template: `<div class="{{class}}">
	  <i *ngIf="icon" class="{{icon}} icon"></i>
    <img *ngIf="image" class="ui avatar image" src="{{image}}">
	  <div class="content">
	  	<ng-content></ng-content>
	  </div>
</div>`
})
export class SemanticItem {
  @Input("class") class: string;
  @Input("icon") icon: string;
  @Input("image") image: string;
}