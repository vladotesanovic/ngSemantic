import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { MessageService } from "../../services/message";
import { Codeblock } from "ng2-prism/codeblock";
import { Markup } from "ng2-prism/languages";

@Component({
  directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, Codeblock, Markup],
  providers: [MessageService],
  selector: "message",
  template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
	<h1>Message</h1>
	<p>Semantic UI Message element <i class="icon external"></i>
	<a href="http://semantic-ui.com/collections/message.html" target="_blank">Semantic UI Message</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <p>Once created, message will expire for 10 seconds.</p>
    <sm-message *ngFor="#message of messages" class="ui message {{message.type}}"
    [ngClass]="{ icon: message.icon}" [icon]="message.icon">{{message.text}}</sm-message>

    <sm-button (click)="submitMessage($event, {icon: 'inbox', text: 'Icon, Icon'})">
	Icon message
    </sm-button>
    <sm-button class="blue" (click)="submitMessage($event, {type: 'info', text: 'Info, Info'})">
	Info message
    </sm-button>
    <sm-button class="red" (click)="submitMessage($event, {type: 'warning', text: 'Warning, Warning'})">
	Warning message
    </sm-button>
    <sm-button class="positive" (click)="submitMessage($event, {type: 'positive', text: 'Positive, Positive'})">
	Positive message
    </sm-button>

    <h4 class="ui header">Code</h4>
<codeblock markup>
&lt;sm-message *ngFor="#message of messages" class="ui message { {message.type} }"
    [ngClass]="{ icon: message.icon}" [icon]="message.icon">{ {message.text} }&lt;/sm-message>
</codeblock>
</div>
`
})

export class MessageComponent {

  messages: Array<string> = [];
  duration: number;
  private LENGTH: number = 5000;

  constructor(public ms: MessageService) {
    ms._rx.subscribe((data: any) => {

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

  submitMessage(event: Event, message: Object) {
    this.ms.emitMessage(message);
  }

}
