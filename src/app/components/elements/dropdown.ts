import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";

@Component({
    selector : "dropdown",
})
@View({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Dropdown</h1>
        <p>Semantic UI dropdown module <i class="icon external"></i> 
        <a href="http://semantic-ui.com/modules/dropdown.html" target="_blank">Semantic UI Dropdown</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo basic</h4>
    
    <sm-dropdown [sm-dir-dropdown] title="File">
        <div class="item">New</div>
        <div class="item">
            <span class="description">ctrl + o</span>
            Open...
        </div>
        <div class="item">
            <span class="description">ctrl + s</span>
            Save as...
        </div>
        <div class="item">
            <span class="description">ctrl + r</span>
            Rename
        </div>
        <div class="item">Make a copy</div>
        <div class="item">
            <i class="folder icon"></i>
            Move to folder
        </div>
        <div class="item">
            <i class="trash icon"></i>
            Move to trash
        </div>
        <div class="divider"></div>
        <div class="item">Download As...</div>
        <div class="item">
            <i class="dropdown icon"></i>
            Publish To Web
            <div class="menu">
                <div class="item">Google Docs</div>
                <div class="item">Google Drive</div>
                <div class="item">Dropbox</div>
                <div class="item">Adobe Creative Cloud</div>
                <div class="item">Private FTP</div>
                <div class="item">Another Service...</div>
            </div>
        </div>
        <div class="item">E-mail Collaborators</div>
    </sm-dropdown>
 
    <h4 class="ui header">Code</h4>
  <div class="ui form">
        <div class="field">
<textarea rows="50" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-dropdown [sm-dir-dropdown] title="File">
        <div class="item">New</div>
        <div class="item">
            <span class="description">ctrl + o</span>
            Open...
        </div>
        <div class="item">
            <span class="description">ctrl + s</span>
            Save as...
        </div>
        <div class="item">
            <span class="description">ctrl + r</span>
            Rename
        </div>
        <div class="item">Make a copy</div>
        <div class="item">
            <i class="folder icon"></i>
            Move to folder
        </div>
        <div class="item">
            <i class="trash icon"></i>
            Move to trash
        </div>
        <div class="divider"></div>
        <div class="item">Download As...</div>
        <div class="item">
            <i class="dropdown icon"></i>
            Publish To Web
            <div class="menu">
                <div class="item">Google Docs</div>
                <div class="item">Google Drive</div>
                <div class="item">Dropbox</div>
                <div class="item">Adobe Creative Cloud</div>
                <div class="item">Private FTP</div>
                <div class="item">Another Service...</div>
            </div>
        </div>
        <div class="item">E-mail Collaborators</div>
    </sm-dropdown>
</textarea>
        </div>
      </div>
</div>
`
})

export class DropdownComponent {}
