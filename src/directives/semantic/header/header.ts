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
            <a *ng-for="#menu of items" href="{{menu.link}}" class="item">
              <i *ng-if="menu.icon" class="icon {{menu.icon}}"></i> {{menu.title}}
           </a>
        </div>
    </div>
</div>`
})
export class UIHeaderComponent implements AfterContentInit {

    afterContentInit() {
        console.log(this);
    }
}
