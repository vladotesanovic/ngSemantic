import { Component } from "@angular/core";

@Component({
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
   	<sm-button class="positive icon" icon="sidebar" (click)="invertedSidebar.show({transition: 'overlay'})">
   	Lunch left sidebar</sm-button> 
    <sm-sidebar class="left vertical inverted sidebar labeled icon menu" #invertedSidebar>        
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
        <sm-codeblock smPrismjs="html">
&lt;sm-button class="positive" (click)="invertedSidebar.show({{ '{' }}transition: 'overlay'{{ '}' }})">Lunch left sidebar&lt;/sm-button>
&lt;sm-sidebar class="left vertical inverted sidebar labeled icon menu" #invertedSidebar>        
    &lt;a class="item">
        &lt;i class="home icon">&lt;/i> Home
    &lt;/a>
    &lt;a class="item">
        &lt;i class="block layout icon">&lt;/i> Topics
    &lt;/a>
    &lt;a class="item">
        &lt;i class="smile icon">&lt;/i> Friends
    &lt;/a>
&lt;/sm-sidebar>
    </sm-codeblock>
    
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>   
    <sm-button class="" (click)="bottomSidebar.show({dimPage: false})">Lunch bottom sidebar</sm-button>
         <h4 class="ui header">Code</h4>
        <sm-codeblock smPrismjs="html">
&lt;sm-button class="positive" (click)="bottomSidebar.show({{ '{' }}transition: 'overlay'{{ '}' }})">Lunch left sidebar&lt;/sm-button>
&lt;sm-sidebar class="bottom inverted nine item labeled icon sidebar menu" #bottomSidebar> 
   &lt;a class="item">
        &lt;i class="home icon">&lt;/i>
        Home
   &lt;/a>
   &lt;a class="item">
        &lt;i class="block layout icon">&lt;/i>
        Topics
   &lt;/a>
&lt;/sm-sidebar>
    </sm-codeblock>
     <sm-sidebar class="bottom inverted nine item labeled icon sidebar menu" #bottomSidebar>        
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
