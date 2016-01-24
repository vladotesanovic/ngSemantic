import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";

/**
 * Implementation of Segment component
 * 
 * @link http://semantic-ui.com/elements/segment.html
 */
@Component({
  	changeDetection: ChangeDetectionStrategy.OnPush,
	selector : "sm-segment"
})
@View({
    template: `<div class="ui segment {{class}}">
  <p><ng-content></ng-content></p>
</div>`
})
export class SemanticSegment {
  @Input("class") class: string;
}
