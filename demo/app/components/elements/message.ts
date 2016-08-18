import { Component } from "@angular/core";

import { MessageService } from "../../services/message";

@Component({
  providers: [MessageService],
  selector: "sm-page-message",
  template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
	<h1>Message</h1>
	<p>Semantic UI Message element <i class="icon external"></i>
	<a href="http://semantic-ui.com/collections/message.html" target="_blank">Semantic UI Message</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo ( simple message )</h4>
    <sm-message icon="warning">
        <message-header>
            Changes in Service
        </message-header>
        <message-content>
            We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.
        </message-content>
    </sm-message>
    
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-message icon="warning">
    &lt;message-header>Changes in Service&lt;/message-header>
    &lt;message-content>
        We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.
    &lt;/message-content>
&lt;/sm-message>
</sm-codeblock>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo</h4>
    <p>Once created, message will expire for 5 seconds.</p>
    <sm-message *ngFor="let message of messages" class="{{message?.type}}" [icon]="message?.icon">
        <message-header>
            {{message?.text}} header
        </message-header>
        <message-content>
            {{message?.text}}
        </message-content>
    </sm-message>

    <sm-button (click)="submitMessage($event, {icon: 'inbox', text: 'Icon, text'})">
	Icon message
    </sm-button>
    <sm-button class="blue" (click)="submitMessage($event, {type: 'info', text: 'Info, text'})">
	Info message
    </sm-button>
    <sm-button class="orange" (click)="submitMessage($event, {type: 'warning', text: 'Warning, text'})">
	Warning message
    </sm-button>
    <sm-button class="positive" (click)="submitMessage($event, {type: 'positive', text: 'Positive, text'})">
	Positive message
    </sm-button>
    <sm-button class="red" (click)="submitMessage($event, {type: 'negative', text: 'Negative, text'})">
	Negative message
    </sm-button>

    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-message *ngFor="let message of messages" class="{{message?.type}}" [icon]="message.icon">
    &lt;message-header>
        {{'{'}}{{'{'}}message?.text{{'}'}}{{'}'}} header
    &lt;/message-header>
    &lt;message-content>
        {{'{'}}{{'{'}}message?.text{{'}'}}{{'}'}}
    &lt;/message-content>
&lt;/sm-message>
</sm-codeblock>
<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Options</h4>
<table class="ui celled striped table">
  <tbody>
    <tr><td colspan="2">Options</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [icon]
      </td>
      <td>Semantic UI icon ( name of icon ). <a href="http://semantic-ui.com/elements/icon.html"
       target="_blank"><i class="icon external"></i> </a> </td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [class]
      </td>
      <td>List of CSS classes associated with select element.</td>
    </tr>
  </tbody>
</table>
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
