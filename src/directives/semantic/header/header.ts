/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import { Component, View, NgFor, NgIf, AfterViewInit } from "angular2/angular2";

@Component({
    properties: ["title", "logo", "items"],
	selector : "header"
})

@View({
    directives: [NgFor, NgIf],
	template: `<div class="ui stackable menu fixed">
    <div class="ui fluid container">
        <a href="#/" class="header item">
            <img class="logo" alt="{{title}}" src="{{logo}}">
        </a>
        <div *ng-if="items" class="left menu">
            <a *ng-for="var menu of items" href="{{menu.link}}" class="item">{{menu.title}}</a>
        </div>
    </div>
</div>`
})

export class UIHeaderComponent implements AfterViewInit {
    afterViewInit() {
        console.log("Now we can access to binded properties");
    }
}
