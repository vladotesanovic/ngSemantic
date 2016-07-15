import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { DataServices } from "../../services/data";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    providers: [DataServices],
    selector: "sm-page-list",
    template: `
    <div class="ui masthead vertical segment">
        <div class="ui container">
            <h1>List</h1>
            <p>Semantic UI List element <i class="icon external"></i>
            <a href="http://semantic-ui.com/elements/list.html" target="_blank">Semantic UI List</a></p>
        </div>
    </div>
    <div class="main ui container">
        <h4 class="ui header">Demo Normal</h4>
        <sm-list class="ui list">
            <sm-item *ngFor="let item of flatArray | async" class="item">{{item}}</sm-item>
        </sm-list>

        <h4 class="ui header">Code</h4>
            <sm-codeblock smPrismjs="html">
&lt;sm-list class="ui list">
    &lt;sm-item *ngFor="let item of flatArray" class="item">{ {item} }&lt;/sm-item>
&lt;/sm-list>
</sm-codeblock>

        <h4 class="ui header">Demo Bulleted</h4>
        <sm-list class="ui list bulleted">
            <sm-item *ngFor="let item of flatArray | async" class="item">{ {item} }</sm-item>
        </sm-list>

        <h4 class="ui header">Code</h4>
            <sm-codeblock smPrismjs="html">
&lt;sm-list class="ui list bulleted">
    &lt;sm-item *ngFor="let item of flatArray" class="item">{ {item} }&lt;/sm-item>
&lt;/sm-list>
</sm-codeblock>

        <h4 class="ui header">Demo Ordered</h4>
        <sm-list class="ui list ordered">
            <sm-item *ngFor="let item of flatArray | async" class="item">{ {item} }</sm-item>
        </sm-list>
        <h4 class="ui header">Code</h4>
            <sm-codeblock smPrismjs="html">
&lt;sm-list class="ui list ordered">
    &lt;sm-item *ngFor="let item of flatArray" class="item">{ {item} }&lt;/sm-item>
&lt;/sm-list>
</sm-codeblock>

        <h4 class="ui header">Demo avatar</h4>
        <sm-list class="ui list">
            <sm-item *ngFor="let item of usersArray | async" class="item" [image]="item.avatar" [header]="item.user">{{item.date}}</sm-item>
        </sm-list>
        <h4 class="ui header">Code</h4>
            <sm-codeblock smPrismjs="html">
&lt;sm-list class="ui list">
    &lt;sm-item *ngFor="let item of usersArray | async" class="item" [image]="item.avatar" [header]="item.user">{ {item.date} }&lt;/sm-item>
&lt;/sm-list>
</sm-codeblock>
        <div class="ui divider"></div>

        <h4 class="ui header">Demo avatar horizontal</h4>
        <sm-list class="ui list horizontal">
            <a sm-item *ngFor="let item of usersArray | async" class="item" [image]="item.avatar" [header]="item.user">{{item.date}}</a>
        </sm-list>
        <div class="ui divider"></div>

        <h4 class="ui header">Demo avatar horizontal ordered</h4>
        <sm-list class="ui list horizontal ordered">
            <a sm-item *ngFor="let item of usersArray | async" class="item" [image]="item.avatar" [header]="item.user">{{item.date}}</a>
        </sm-list>
        <div class="ui divider"></div>

        <h4 class="ui header">Demo avatar animated</h4>
        <sm-list class="ui list animated">
            <a sm-item *ngFor="let item of usersArray | async" class="item" [image]="item.avatar" [header]="item.user">{{item.date}}</a>
        </sm-list>
    </div>
    `
})

export class ListComponent {
    flatArray: any;
    usersArray: any;

    constructor(public ds: DataServices) {
        this.flatArray = ds.array("flat");
        this.usersArray = ds.array("users");
    }
}
