/// <reference path="../../../../typings/typings.d.ts" />

import { Component, View, NgFor, NgIf, NgClass, NgSwitch, NgSwitchWhen, AfterContentInit } from "angular2/angular2";
import { DebugPipe } from "../../../pipes/debug";

@Component({
    properties: ["title", "logo", "items"],
	selector : "header"
})

@View({
    directives: [NgFor, NgIf, NgClass, NgSwitch, NgSwitchWhen],
    pipes: [DebugPipe],
	template: `<div class="ui menu fixed">
    <div class="ui fluid container">
        <a href="#/" class="header item">
            <img class="logo" alt="{{title}}" src="{{logo}}">
        </a>
        <div *ng-if="items" class="left menu">
            <ANY *ng-for="#menu of items">
                <div *ng-if="menu.type === 'button'" class="item">
                  <div class="ui left labeled button" tabindex="0">
                    <a class="ui basic right label" [ng-class]="{pointing:menu.settings === 1}" href="{{menu.link}}">
                        <i class="icon {{menu.icon}}"></i> {{menu.title}}
                    </a>
                    <div *ng-if="menu.settings === 1" class="ui icon button">
                        <i class="setting icon"></i>
                    </div>
                  </div>
               </div>
                <div *ng-if="menu.type === 'link'" class="item">
                  <a href="{{menu.link}}" class="item">{{menu.title}}</a>
                </div>
            </ANY>
        </div>
    </div>
</div>`
})

export class UIHeaderComponent implements AfterContentInit {
    public leftMenu: Array<Object>;

    afterContentInit() {

        setTimeout(() => {
            let object = this;
            this.leftMenu = new Array<Object>();

            object.items.map((item) => {
                if (item.position === "left") {
                    this.leftMenu.push(item);
                }
            });
        }, 100);
    }
}
