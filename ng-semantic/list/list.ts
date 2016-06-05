import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from "@angular/core";

/**
 * Implementation of List collection
 * 
 * @link http://semantic-ui.com/elements/list.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-list",
  template: `<ng-content></ng-content>`,
  styles: [`sm-list { display: block; }`],
  encapsulation: ViewEncapsulation.None
})
export class SemanticList {}
