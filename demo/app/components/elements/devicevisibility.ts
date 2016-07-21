import { Component, Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-devicevisibility",
    template: `
    <div class="ui masthead vertical segment">
        <div class="ui container">
            <h1>Device Visibility</h1>
            <p>Custom implementation, based on container sizes <i class="icon external"></i>
            <a href="http://semantic-ui.com/elements/container.html#/introduction" target="_blank">Container</a></p>
        </div>
    </div>
    <div class="main ui container">
        <br/>
        <h4 class="ui header">Demo ( single screen )</h4>
        <p>Resize screen <i class="icon resize horizontal"></i> . </p>
        <sm-segment class="inverted teal" smDeviceVisibility="mobile">
            <p>This segment is only visible on mobile.</p>
        </sm-segment>
       
       <sm-segment class="inverted red" smDeviceVisibility="tablet">
            <p>This segment is only visible on tablet.</p>
       </sm-segment>
       
       <sm-segment class="inverted orange" smDeviceVisibility="computer">
            <p>This segment is only visible on computer.</p>
       </sm-segment>
<h4 class="ui header">Code</h4>
    <sm-codeblock smPrismjs="html">
&lt;sm-segment class="inverted teal" smDeviceVisibility="mobile">
    &lt;p>This segment is only visible on mobile.&lt;/p>
&lt;/sm-segment>
&lt;sm-segment class="inverted teal" smDeviceVisibility="tablet">
    &lt;p>This segment is only visible on mobile.&lt;/p>
&lt;/sm-segment> 
&lt;sm-segment class="inverted teal" smDeviceVisibility="computer">
    &lt;p>This segment is only visible on mobile.&lt;/p>
&lt;/sm-segment>
</sm-codeblock>
<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
       <h4 class="ui header">Demo ( multiple screens )</h4>
       <sm-segment class="inverted pink" smDeviceVisibility="tablet computer">
            <p>This segment is visible on tablet and computer.</p>
       </sm-segment>
<h4 class="ui header">Code</h4>
    <sm-codeblock smPrismjs="html">
&lt;sm-segment class="inverted pink" smDeviceVisibility="tablet computer">
    &lt;p>This segment is visible on tablet and computer.&lt;/p>
&lt;/sm-segment>
</sm-codeblock>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo with mobile menu</h4>
    <p>Resize screen to see mobile menu!</p>
       <sm-menu title="Angular2" class="ui menu inverted red" logo="/demo/assets/images/angular.png">
        <div smDeviceVisibility="tablet computer">
            <a sm-item href="#/elements/menu" icon="home">Home</a>
        </div>
        
        <sm-menu class="ui menu right secondary icon" smDeviceVisibility="mobile only">
            <a sm-item icon="sidebar big" (click)="menuSidebar.show({transition: 'overlay'})"></a>
            <sm-sidebar class="right vertical inverted sidebar labeled menu icon red" #menuSidebar>
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
    <sm-codeblock smPrismjs="html">
&lt;sm-menu title="Angular2" class="ui menu inverted red" logo="/assets/images/angular.png">
    &lt;div smDeviceVisibility="tablet computer">
        &lt;a sm-item href="#/elements/menu" icon="home">Home&lt;/a>
    &lt;/div>
    
    &lt;sm-menu class="ui menu right secondary icon" smDeviceVisibility="mobile only">
    
        &lt;a sm-item icon="sidebar big" (click)="mobileSidebar.show({transition: 'overlay'})">&lt;/a>
        
        &lt;sm-sidebar class="right vertical inverted sidebar labeled menu icon red" #mobileSidebar>
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
    &lt;/sm-menu>
&lt;/sm-menu>
</sm-codeblock>
<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">CSS requirement <i class="icon warning red"></i> </h4>
<p>Copy this into your custom css stylesheet: </p>
<sm-codeblock smPrismjs="css">
@media only screen and (max-width: 767px) {
    .mobile { display: inherit !important; }
}

@media only screen and (min-width: 768px) and (max-width:991px) {
    .tablet { display: inherit !important; }
}

@media only screen and (min-width: 992px) {
    .computer { display: inherit !important; }
}

@media only screen and (min-width: 768px) {
    .mobile { display: none; }
    .mobile.only { display: none !important; }
}

@media only screen and (min-width: 992px)  {
    .tablet { display: none;  }
    .tablet.only { display: none !important; }
}

@media only screen and (max-width: 767px) {
    .tablet { display: none;  }
    .tablet.only { display: none !important; }
}

@media only screen and (max-width: 992px) {
    .computer { display: none;  }
    .computer.only { display: none !important; }
}
</sm-codeblock>
    </div>
    `
})

export class DeviceVisibilityComponent {}
