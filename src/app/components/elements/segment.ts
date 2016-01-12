import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "../../directives/semantic/semantic";
import { DataServices } from "../../services/data";

@Component({
	selector : "segment",
    providers: [DataServices]
})
@View({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
	template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Segment</h1>
        <p>Semantic UI segment element <i class="icon external"></i> <a href="http://semantic-ui.com/elements/segment.html" target="_blank">Semantic UI Segment</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo raised</h4>
    <sm-segment class="raised">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="2" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-segment class="raised">...</sm-segment>
</textarea>
        </div>
      </div>
      <div class="ui divider"></div>
      <h4 class="ui header">Demo stacked</h4>
    <sm-segment class="stacked">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>
    
    <h4 class="ui header">Code</h4>
 <div class="ui form">
        <div class="field">
<textarea rows="2" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-segment class="stacked">...</sm-segment>
</textarea>
        </div>
      </div>
</div>
`
})

export class SegmentComponent {}
