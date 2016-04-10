import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { MessageService } from "../../services/message";

@Component({
  directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
  providers: [MessageService],
  selector: "message",
  template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
	<h1>Message</h1>
	<p>Semantic UI message element <i class="icon external"></i>
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
 <div class="ui form">
	<div class="field">

<textarea rows="3" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-message *ngFor="#message of messages" class="ui message { {message.type} }"
    [ngClass]="{ icon: message.icon}" [icon]="message.icon">{ {message.text} }</sm-message>
</textarea>
	</div>
      </div>

       <br/><br/>
	Page source: <a target="_blank"
	href="https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/message.ts">
	https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/message.ts
      </a>
</div>
`
})

export class MessageComponent {

  messages: Array<string> = new Array<string>();
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
