import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

/**
 * Implementation of Loader element
 * 
 * @link http://semantic-ui.com/elements/loader.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-loader",
  template: `<div *ngIf="!complete" class="ui active dimmer {{class}}">
    <div [ngClass]="{text: text}" class="ui loader">{{text}}</div>
  </div>`
})
export class SemanticLoader {
  @Input("class") class: string;
  @Input("text") text: string;
  @Input("complete") complete: boolean = false;
}
