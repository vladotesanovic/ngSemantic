import { Component, View } from "angular2/core";

@Component({
  properties: ["type", "icon","text"],
  selector: "sm-message"
})

@View({
  template: `<div [ngClass]="{ icon: icon}" class="ui message {{type}}">
  <i *ngIf="icon" class="icon {{icon}}"></i>
  Message: {{text}}
</div>`
})
export class SemanticMessage {}
