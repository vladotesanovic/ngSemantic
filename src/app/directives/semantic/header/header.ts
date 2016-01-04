import { Component, View, Pipe } from "angular2/core";

@Component({
    properties: ["title", "logo", "items", "class"],
	selector : "ui-header"
})
@View({
    template: `<div class="ui icon menu fixed {{class}}">
    <div class="ui fluid container">
        <a href="#/" class="header item">
            <img class="logo" alt="{{title}}" src="{{logo}}">
        </a>
        <div *ngIf="items" class="left menu">
            <a *ngFor="#menu of items" href="{{menu.link}}" class="item">
                <i *ngIf="menu.icon" class="{{menu.icon}} icon"></i> {{menu.title}}
           </a>        
        </div>
    </div>
</div>`
})
export class SemanticHeaderComponent {}
