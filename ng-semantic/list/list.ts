import { Component, View, Input } from "angular2/core";

@Component({
  selector: "sm-list"
})

@View({
  template: `<div *ngFor="#item of items" class="ui list {{class}}">
  <div class="item">{{item}}</div>
</div>`
})
export class SemanticList {
  @Input("class") class: any;
  @Input("items") items: any;
}
