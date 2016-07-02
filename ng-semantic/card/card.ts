import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
/**
 * Implementation of Card collection
 * 
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-card",
  template: `<div class="ui {{class}}">
<div class="image" *ngIf="image">
    <img src="{{image}}">
  </div>
  <div class="content">
    <ng-content select="card-title"></ng-content>
    <div class="meta">
      <ng-content select="card-subtitle"></ng-content>
    </div>
    <div class="description">
      <ng-content select="card-content"></ng-content>
    </div>
  </div>
  <div class="extra content">
    <ng-content select="card-extra"></ng-content>
  </div>
  <ng-content></ng-content>
</div>`
})
export class SemanticCardComponent {
  @Input() class: string;
  @Input() image: string;
}

/**
 * Implementation of Cards collection
 *
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-cards",
  template: `<div class="ui cards {{class}}"><ng-content></ng-content></div>`
})
export class SemanticCardsComponent {
  @Input() class: string;
}
