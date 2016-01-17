import { Component, View } from "angular2/core";

@Component({
  properties: ["items", "class"],
  selector: "sm-list"
})

@View({
  template: `<div *ngFor="#item of items" class="ui list {{class}}">
  <div class="item">{{item}}</div>
</div>`
})
export class SemanticList {}
