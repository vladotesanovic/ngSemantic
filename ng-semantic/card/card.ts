import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-card"
})

@View({
  template: `<div class="ui card">
  <div class="image">
    <img src="{{image}}">
  </div>
  <div class="content">
    <a class="header">{{title}}</a>
    <div class="meta">
      <span class="date">{{date}}</span>
    </div>
    <div class="description">
      <ng-content select="[text]"></ng-content>
    </div>
  </div>
  <div class="extra content">
    <ng-content select="[extra]"></ng-content>
  </div>
</div>`
})
export class SemanticCard {
  @Input("image") image: string;
  @Input("title") title: string;
  @Input("date") date: string;
}
