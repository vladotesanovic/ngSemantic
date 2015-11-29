import { Component, View, COMMON_DIRECTIVES } from "angular2/angular2";
import { MessageService } from "../../../services/message";

@Component({
  properties: [],
  selector: "message"
})

@View({
  directives: [COMMON_DIRECTIVES],
  template: `<div *ng-if="messages.length" class="ui message">
  <div class="header">
    Message list ( message expire after 5 seconds )
  </div>
  <ul class="list">
    <li *ng-for="#message of messages">Message emitted at: {{message}}</li>
  </ul>
</div>`
})

export class UIMessageComponent {
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
