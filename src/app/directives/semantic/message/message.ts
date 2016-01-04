import { Component, View } from "angular2/core";
import { MessageService } from "../../../services/message";

@Component({
  properties: [],
  selector: "ui-message"
})

@View({
  template: `<div *ngIf="messages.length" class="ui message">
  <div class="header">
    Message list ( message expire after 5 seconds )
  </div>
  <ul class="list">
    <li *ngFor="#message of messages">Message emitted at: {{message}}</li>
  </ul>
</div>`
})

export class SemanticMessageComponent {
  messages: Array<string> = new Array<string>();
  private LENGTH: number = 5000;

  constructor(public ms: MessageService) {
    this.ms._rx.subscribe((data: any) => {

      // display message
      this.messages.push(data);
      // remove message
      setTimeout(() => {
        this.messages.shift();
      }, this.LENGTH);
    });
  }
}
