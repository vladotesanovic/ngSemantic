import { Component, View, Input, ChangeDetectionStrategy, ViewEncapsulation } from "angular2/core";

/**
 * Implementation of List collection
 * 
 * @link http://semantic-ui.com/elements/list.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-list"
})
@View({
  template: `<ng-content></ng-content>`,
  styles: [`sm-list { display: block; }`],
  encapsulation: ViewEncapsulation.None
})
export class SemanticList {}
