/// <reference path="../../../../typings/typings.d.ts" />

import { Component, View } from "angular2/angular2";
import { NgFor, NgIf} from "angular2/angular2";
import { DebugPipe } from "../../../pipes/debug";
import { ArrayFilterPipe } from "../../../pipes/array";

@Component({
    properties: ["menu"],
    selector: "linkItem"
})
@View({
    directives: [NgIf],
    template: `<i *ng-if="menu.icon" class="icon {{menu.icon}}"></i>
    <span *ng-if="menu.type == 'link'">{{menu.title}}</span>`
})
class LinkItem {}

@Component({
    properties: ["title", "logo", "items", "class"],
	selector : "header"
})
@View({
    directives: [NgFor, NgIf, LinkItem],
    pipes: [DebugPipe, ArrayFilterPipe],
    template: `<div class="ui icon menu fixed {{class}}">
    <div class="ui fluid container">
        <a href="#/" class="header item">
            <img class="logo" alt="{{title}}" src="{{logo}}">
        </a>
        <div *ng-if="items" class="left menu">
            <a *ng-for="#menu of items|arrayFilter:'position':'left'" href="{{menu.link}}" class="item">
                <linkItem [menu]=menu></linkItem>
           </a>        
        </div>
        <div *ng-if="items" class="right menu">
            <a *ng-for="#menu of items|arrayFilter:'position':'right'" href="{{menu.link}}" class="item">
                <linkItem [menu]=menu></linkItem>
           </a>        
        </div>
    </div>
</div>`
})
export class UIHeaderComponent {}
