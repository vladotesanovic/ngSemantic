import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    selector : "test-sidebar",
    template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Sidebar</h1>
        <p>Semantic UI Sidebar module <i class="icon external"></i> 
        <a href="http://semantic-ui.com/modules/sidebar.html" target="_blank">Semantic UI Sidebar</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
   	<sm-button class="positive icon" icon="sidebar" sm-dir-sidebar="left">Lunch left sidebar</sm-button> 
    <sm-button class="" sm-dir-sidebar="bottom">Lunch bottom sidebar</sm-button>
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
    <div class="ui form">
        <div class="field">
<textarea rows="14" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-button class="positive" sm-dir-sidebar="left">Lunch left sidebar</sm-button>
<sm-sidebar class="left vertical inverted sidebar labeled icon menu">        
    <a class="item">
        <i class="home icon"></i> Home
    </a>
    <a class="item">
        <i class="block layout icon"></i> Topics
    </a>
    <a class="item">
        <i class="smile icon"></i> Friends
    </a>
</sm-sidebar>
</textarea>
        </div>
     </div>
     
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
