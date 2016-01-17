import { Component, View } from "angular2/core";

/**
 * Implementation of Segment component
 * 
 * @link http://semantic-ui.com/elements/segment.html
 */
@Component({
    properties: ["class"],
	selector : "sm-segment"
})
@View({
    template: `<div class="ui segment {{class}}">
  <p><ng-content></ng-content></p>
</div>`
})
export class SemanticSegment {}
