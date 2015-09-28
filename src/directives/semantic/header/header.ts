/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import { Component, View, NgFor } from "angular2/angular2";

@Component({
	properties: ["title:title"],
	selector : "header"
})

@View({
	directives: [NgFor],
	template: `<div class="ui stackable menu fixed">
    <div class="ui container">
        <a href="#/" class="header item">
            <img class="logo" src="/assets/images/semantic.png">&amp;
            <img class="logo second" src="/assets/images/angular.png">
            {{title}}
        </a>
        <a *ng-for="var menu of items" href="{{menu.link}}" class="item">{{menu.title}}</a>
    </div>
</div>`
})

export class HeaderDirective {
	items: Array<any>;

	constructor() {
		this.items = new Array<any>();
		this.items.push({ link: "#/about", title: "About" });
	}
}
