import { Component, View } from "angular2/core";
import { MessageService } from "../../../services/message";

@Component({
  properties: [],
  selector: "sm-message"
})

@View({
  template: `<div *ngFor="#message of messages" class="ui message info">
  Message: {{message}} ( message expire after 5 seconds )
</div>`
})
export class SemanticMessage {
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
