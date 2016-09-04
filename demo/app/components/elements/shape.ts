import { Component } from "@angular/core";

@Component({
    selector: "sm-page-shape",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Shape</h1>
        <p>Shape UI rating: <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/shape.html" target="_blank">Semantic UI Shape</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Simple</h4>

    <sm-button icon="arrow left" (click)="shape.show('flip left')"></sm-button>
    <sm-button icon="arrow right" (click)="shape.show('flip right')"></sm-button>
    <sm-button icon="arrow up" (click)="shape.show('flip up')"></sm-button>
    <sm-button icon="arrow down" (click)="shape.show('flip down')"></sm-button>
    
    <div class="ui divider"></div>
    
    <sm-shape class="text" #shape (beforeChange)="beforeChange($event)" (onChange)="onChange($event)">
        <div class="sides">
        <div class="ui header active side">This side starts visible.</div>
        <div class="ui header side">This is yet another side</div>
        <div class="ui header side">This is the last side</div>
      </div>
    </sm-shape>
    
    <h4 class="ui header dividing">Events:</h4>
    <sm-list>
        <sm-item *ngFor="let event of events">{{event}}</sm-item>
    </sm-list>
    
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-shape class="text" #shape (beforeChange)="beforeChange($event)" (onChange)="onChange($event)">
  &lt;div class="sides">
    &lt;div class="ui header active side">This side starts visible.&lt;/div>
    &lt;div class="ui header side">This is yet another side&lt;/div>
    &lt;div class="ui header side">This is the last side&lt;/div>
  &lt;/div>
&lt;/sm-shape>
</sm-codeblock>

<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Options</h4>
<table class="ui celled striped table">
  <tbody>
    <tr><td colspan="2">Options</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [class]
      </td>
      <td>List of CSS classes associated with shape element.</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [options]
      </td>
      <td>Semantic UI options object for Shape element: 
      <a href="http://semantic-ui.com/modules/shape.html#/settings"
       target="_blank"><i class="icon external"></i></a>
       </td>
    </tr>
    <tr>
        <td colspan="2">Events </td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle up icon"></i> [beforeChange]
      </td>
      <td>Is called before side changes.</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle up icon"></i> [onChange]
      </td>
      <td>Is called after side changes.</td>
    </tr>
  </tbody>
</table>
</div>
`
})

export class ShapeComponent {

    events: string[] = [];

    beforeChange(data: boolean) {
        this.events = [...this.events, "beforeChange"];
    }

    onChange(data: boolean) {
        this.events = [...this.events, "onChange"];
    }
}
