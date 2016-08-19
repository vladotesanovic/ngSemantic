import { Component } from "@angular/core";
import { DataServices } from "../../services/data";
import "rxjs/add/operator/filter";

@Component({
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
        <h4 class="ui header">Normal</h4>
        <sm-list class="">
            <sm-item *ngFor="let item of flatArray | async">{{item}}</sm-item>
        </sm-list>
<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-list>
    &lt;sm-item *ngFor="let item of flatArray">{{'{'}}{{'{'}}item{{'}'}}{{'}'}}&lt;/sm-item>
&lt;/sm-list>
</sm-codeblock>
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        
<h4 class="ui header">Nested bulleted</h4>
<sm-list class="bulleted">
    <sm-item *ngFor="let item of flatArray | async">{{item}}</sm-item>
    <sm-list>
        <sm-item *ngFor="let item of flatArray | async">{{item}}</sm-item>
    </sm-list>
</sm-list>

<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-list class="bulleted">
    &lt;sm-item *ngFor="let item of flatArray">{{'{'}}{{'{'}}item{{'}'}}{{'}'}}&lt;/sm-item>
    &lt;sm-list>
        &lt;sm-item *ngFor="let item of flatArray">{{'{'}}{{'{'}}item{{'}'}}{{'}'}}&lt;/sm-item>
    &lt;/sm-list>
&lt;/sm-list>
</sm-codeblock>
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        
        <h4 class="ui header">Bulleted Relaxed</h4>
        <sm-list class="bulleted relaxed">
            <sm-item *ngFor="let item of flatArray | async">{{item}}</sm-item>
        </sm-list>        
        
<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-list class="bulleted relaxed">
    &lt;sm-item *ngFor="let item of flatArray">{{'{'}}{{'{'}}item{{'}'}}{{'}'}}&lt;/sm-item>
&lt;/sm-list>
</sm-codeblock>

        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Ordered</h4>
        <sm-list class="ordered">
            <sm-item *ngFor="let item of flatArray | async">{{item}}</sm-item>
        </sm-list>
        <h4 class="ui header">Code</h4>
            <sm-codeblock smPrismjs="html">
&lt;sm-list class="ordered">
    &lt;sm-item *ngFor="let item of flatArray">{{item}}&lt;/sm-item>
&lt;/sm-list>
</sm-codeblock>
        <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
        <h4 class="ui header">Demo avatar</h4>
        <sm-list class="divided">
            <sm-item *ngFor="let item of usersArray | async" [image]="item.avatar" [header]="item.user">{{item?.date}}</sm-item>
        </sm-list>
        <h4 class="ui header">Code</h4>
            <sm-codeblock smPrismjs="html">
&lt;sm-list class="divided">
    &lt;sm-item *ngFor="let item of usersArray | async" [image]="item.avatar" [header]="item.user">
     {{'{'}}{{'{'}}item?.date{{'}'}}{{'}'}}
    &lt;/sm-item>
&lt;/sm-list>
</sm-codeblock>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Avatar horizontal</h4>
    <sm-list class="horizontal">
        <a sm-item *ngFor="let item of usersArray | async" [image]="item.avatar" [header]="item.user">{{item?.date}}</a>
    </sm-list>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    
    <h4 class="ui header">Avatar horizontal ordered</h4>
    <sm-list class="horizontal ordered">
        <a sm-item *ngFor="let item of usersArray | async" [image]="item.avatar" [header]="item.user">{{item?.date}}</a>
    </sm-list>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    
    <h4 class="ui header">Avatar animated</h4>
    <sm-list class="animated">
        <a sm-item *ngFor="let item of usersArray | async" [image]="item.avatar" [header]="item.user">{{item?.date}}</a>
    </sm-list>
 
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Search and list</h4>
    <sm-segment>
        <sm-input icon="search" [(model)]="searchString" class="fluid" placeholder="Search..."></sm-input>
        <div class="ui divider"></div>
        <sm-list class="animated divided relaxed">
            <a sm-item *ngFor="let item of ('https://jsonplaceholder.typicode.com/users' | smFetch | smArraySearch:searchString)" 
            [header]="item?.name">{{item?.email}}</a>
        </sm-list>
    </sm-segment>
</div>`
})
export class ListComponent {
    flatArray: any;
    usersArray: any;
    searchString: string;

    constructor(public ds: DataServices) {
        this.flatArray = ds.array("flat");
        this.usersArray = ds.array("users");
    }
}