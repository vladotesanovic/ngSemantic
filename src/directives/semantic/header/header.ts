import { Component, View, Pipe } from "angular2/angular2";
import { NgFor, NgIf} from "angular2/angular2";

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

@Pipe({
    name: "arrayFilter"
})
export class ArrayFilterPipe {
    private _tmp: Array<string>;

    transform(array: Array<string>, text: any): Array<string> {
        if (typeof text === "object" && typeof text[0] === "undefined") {
            return array;
        }

        this._tmp = new Array<string>();
        // 1 mean that array is flat
        // 2 mean that we deal with array of objects
        if (text.length === 1) {
            array.map(item => {
                if (item.toLowerCase().search(text.toString().toLowerCase()) >= 0) {
                    this._tmp.push(item);
                }
            });
        } else {
            array.map(item => {
                if (item[text[0]].toLowerCase().search(text[1].toString().toLowerCase()) >= 0) {
                    this._tmp.push(item);
                }
            });
        }

        return this._tmp;
    }
}

@Component({
    properties: ["title", "logo", "items", "class"],
	selector : "header"
})
@View({
    directives: [NgFor, NgIf, LinkItem],
    pipes: [ArrayFilterPipe],
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
