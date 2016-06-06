import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from "@angular/core";

/**
 * Implementation of List collection
 * 
 * @link http://semantic-ui.com/elements/list.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: "sm-list",
  styles: [`sm-list { display: block; }`],
  template: `<ng-content></ng-content>`
})
export class SemanticListComponent {}
