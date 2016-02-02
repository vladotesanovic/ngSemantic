import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";

/**
 * Implementation of Card collection
 * 
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-card"
})
@View({
  template: `<div class="image">
    <img src="{{image}}">
  </div>
  <div class="content">
    <a class="header">{{title}}</a>
    <div class="meta">
      <span class="date">{{subtitle}}</span>
    </div>
    <div class="description">
      <ng-content select="conntent"></ng-content>
    </div>
  </div>
  <div class="extra content">
    <ng-content select="extra"></ng-content>
  </div>`
})
export class SemanticCard {
  @Input("image") image: string;
  @Input("title") title: string;
  @Input("subtitle") subtitle: string;
}
