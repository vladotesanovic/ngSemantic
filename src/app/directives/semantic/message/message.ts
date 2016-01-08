import { Component, View, AfterViewInit } from "angular2/core";
import { MessageService } from "../../../services/message";

@Component({
  properties: ["duration"],
  selector: "sm-message"
})

@View({
  template: `<div *ngFor="#message of messages" [ngClass]="{icon: message.icon}" class="ui message {{message.type}}">
  <i *ngIf="message.icon" class="icon {{message.icon}}"></i>
  Message: {{message.text}}
</div>`
})
export class SemanticMessage implements AfterViewInit {
  messages: Array<string> = new Array<string>();
  private LENGTH: number = 5000;
  duration: number;

  constructor(public ms: MessageService) {

    this.ms._rx.subscribe((data: any) => {

      if (typeof data === "string") {
        data = {
          text: data
        };
      }
      
      // display message
      this.messages.push(data);
      
      // remove message
      if (this.LENGTH > 0) {
        setTimeout(() => {
          this.messages.shift();
        }, this.LENGTH);
      }
    });
  }

  ngAfterViewInit() {
    
    if (typeof this.duration !== "undefined" && Number(this.duration) >= 0) {
      this.LENGTH = Number(this.duration);
    } else {
      console.log("Invalid format for duration");
    }

  }

}
