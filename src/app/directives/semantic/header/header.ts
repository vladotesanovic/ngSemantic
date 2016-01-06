import { Component, View, Pipe } from "angular2/core";
import { MenuServices } from "../../../services/menu";

/**
 * Implementation of Menu component
 * 
 * @link http://semantic-ui.com/collections/menu.html
 * @link http://semantic-ui.com/elements/icon.html
 */
@Component({
    providers: [MenuServices],
    properties: ["title", "logo", "class"],
	selector : "sm-header"
})
@View({
    template: `<div class="ui menu {{class}}">
    <a href="#/" *ngIf="logo" class="header item">
            <img class="logo" alt="{{title}}" src="{{logo}}">
        </a>
        <a *ngFor="#menu of items" href="{{menu.link}}" class="item">
            <i *ngIf="menu.icon" class="{{menu.icon}} icon"></i> {{menu.title}}
        </a>
</div>`
})
export class SemanticHeader {
    private items: Array<Object> = [];
    
    constructor(private menu: MenuServices) {
        
		menu.getMenu().subscribe((response: any) => {
            this.items = JSON.parse(response._body);
        });
    }
}
