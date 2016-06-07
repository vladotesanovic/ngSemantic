import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector : "sm-page-sidebar",
    template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Sidebar</h1>
        <p>Semantic UI Sidebar module <i class="icon external"></i> 
        <a href="http://semantic-ui.com/modules/sidebar.html" target="_blank">Semantic UI Sidebar</a></p>
    </div>
</div>
<div class="main ui container">
    <p>Options can be passed in form of JavaScript object. Full list of settings can be found on: </p>
        <a href="http://semantic-ui.com/modules/sidebar.html#/settings" target="_blank">
        http://semantic-ui.com/modules/sidebar.html#/settings
        </a>
        
    <h4 class="ui header">Demo</h4>
   	<sm-button class="positive icon" icon="sidebar" 
   	[smDirSidebar]="{selector: 'left', transition: 'overlay'}">Lunch left sidebar</sm-button> 
    <sm-button class="" [smDirSidebar]="{selector: 'bottom', dimPage: false }">Lunch bottom sidebar</sm-button>
    <sm-sidebar class="left vertical inverted sidebar labeled icon menu">        
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

    <h4 class="ui header">Code</h4>
        <codeblock prismjs="html">
&lt;sm-button class="positive" [smDirSidebar]="{selector: 'left'}">Lunch left sidebar&lt;/sm-button>
&lt;sm-sidebar class="left vertical inverted sidebar labeled icon menu">        
    &lt;a class="item">
        <i class="home icon"></i> Home
    &lt;/a>
    &lt;a class="item">
        <i class="block layout icon"></i> Topics
    &lt;/a>
    &lt;a class="item">
        <i class="smile icon"></i> Friends
    &lt;/a>
&lt;/sm-sidebar>
    </codeblock>
     
     <sm-sidebar class="bottom inverted nine item labeled icon sidebar menu">        
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
        <a class="item">
            <i class="calendar icon"></i>
            History
        </a>
        <a class="item">
            <i class="mail icon"></i>
            Messages
        </a>
        <a class="item">
            <i class="chat icon"></i>
            Discussions
        </a>
        <a class="item">
            <i class="trophy icon"></i>
            Achievements
        </a>
        <a class="item">
            <i class="shop icon"></i>
            Store
        </a>
        <a class="item">
            <i class="settings icon"></i>
            Settings
        </a>
    </sm-sidebar>
</div>
`
})

export class SidebarComponent {
    default: string = "test";
}
