import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

/**
 * Implementation of Card collection
 * 
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-card",
  template: `<div class="image">
    <img src="{{image}}">
  </div>
  <div class="content">
    <a class="header">{{title}}</a>
    <div class="meta">
      <span class="date">{{subtitle}}</span>
    </div>
    <div class="description">
      <ng-content select="content"></ng-content>
    </div>
  </div>
  <div class="extra content">
    <ng-content select="extra"></ng-content>
  </div>`
})
export class SemanticCardComponent {
  @Input("image") image: string;
  @Input("title") title: string;
  @Input("subtitle") subtitle: string;
}
