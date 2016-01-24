import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-loader"
})

@View({
  template: `<div *ngIf="!complete" class="ui active dimmer {{class}}">
    <div [ngClass]="{text: text}" class="ui loader">{{text}}</div>
  </div>`
})
export class SemanticLoader {
  @Input("class") class: string;
  @Input("text") text: string;
  @Input("complete") complete: boolean = false;
}
