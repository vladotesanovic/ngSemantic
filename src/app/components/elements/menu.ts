import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
	selector : "menu-cp"
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, ROUTER_DIRECTIVES],
	template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Menu</h1>
        <p>Semantic UI menu component <i class="icon external"></i> 
        <a href="http://semantic-ui.com/collections/menu.html" target="_blank">Semantic UI Menu</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo inverted</h4>
    <sm-menu title="Angular2" class="ui menu inverted teal" logo="/assets/images/semantic.png">
        <a sm-item href="#/elements/menu" *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}</a>
        
        <sm-menu class="ui menu right secondary icon">
            <a sm-item href="#/elements/menu" icon="sidebar big" class="item" sm-dir-sidebar="right"></a>
            <sm-sidebar class="right vertical inverted sidebar labeled menu teal huge">        
                <a class="item">
                    <i class="home icon"></i>
                    Home
                </a>
                <a class="item">
                    <i class="block layout icon"></i>
                    Topics
                </a>
                <a class="item">
                    <i class="smile icon"></i>
                    Friends
                </a>
            </sm-sidebar>
        </sm-menu>
    </sm-menu>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="8" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-menu title="Angular2" class="ui menu inverted teal" logo="/assets/images/semantic.png">
    <a sm-item *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}</a>
    
    <sm-menu class="ui menu right secondary">
        <a sm-item icon="sidebar big" class="item"></a>
    </sm-menu>
</sm-menu>
</textarea>
        </div>
      </div>
      <div class="ui divider"></div>
    <h4 class="ui header">Demo vertical</h4>
    <sm-menu title="Vertical" class="ui menu vertical">
        <a sm-item *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}</a>
    </sm-menu>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="4" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-menu title="Vertical" class="ui menu vertical">
    <a sm-item *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}</a>
</sm-menu>
</textarea>
        </div>
      </div>
      <div class="ui divider"></div>
      <h4 class="ui header">Demo secondary</h4>
    <sm-menu title="Secondary" class="ui menu secondary">
        <a sm-item *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}</a>
    </sm-menu>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="4" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-menu title="Secondary" class="ui menu secondary">
    <a sm-item *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}</a>
</sm-menu>
</textarea>
        </div>
      </div>
      
</div>
`
})

export class MenuComponent {
    items: Array<any> = [];

    constructor() {
        this.items = [{
            "title" : "Home",
            "link" : "Home",
            "icon" : "home"
        }, {
            "title" : "About Us",
            "link" : "#/"
        }, {
            "title" : "Contact",
            "link" : "#/"
        }];
    }
}
