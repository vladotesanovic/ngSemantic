import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "../../directives/semantic/semantic";
import { MessageService } from "../../services/message";

@Component({
	selector : "message",
    providers: [MessageService]
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Message</h1>
        <p>Semantic UI message element <i class="icon external"></i> <a href="http://semantic-ui.com/collections/message.html" target="_blank">Semantic UI Message</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <p>Once created, message will expire for 10 seconds.</p>
    <sm-message duration="10000"></sm-message><br/>
    <button class="ui button" (click)="submitMessage($event, {icon: 'inbox', text: 'Icon, Icon'})">Icon message</button>
    <button class="ui button blue" (click)="submitMessage($event, {type: 'info', text: 'Info, Info'})">Info message</button>
    <button class="ui button red" (click)="submitMessage($event, {type: 'warning', text: 'Warning, Warning'})">Warning message</button>
    <button class="ui button positive" (click)="submitMessage($event, {type: 'positive', text: 'Positive, Positive'})">Positive message</button>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="12" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-message duration="10000"></sm-message> // 10 seconds

<button class="ui button" (click)="submitMessage($event, {type: 'info', icon: 'inbox', text: 'Icon, Icon'})">Icon message</button>
<button class="ui button blue" (click)="submitMessage($event, {type: 'info', text: 'Info, Info'})">Info message</button>
<button class="ui button red" (click)="submitMessage($event, {type: 'warning', text: 'Warning, Warning'})">Warning message</button>
<button class="ui button positive" (click)="submitMessage($event, {type: 'positive', text: 'Positive, Positive'})">Positive message</button>
</textarea>
        </div>
      </div>
</div>
`
})

export class MessageComponent {
    
	constructor(public ms: MessageService) {}
    
	submitMessage(event: Event, message: Object) {
		this.ms.emitMessage(message);
	}
}
