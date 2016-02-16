import { Component, View, Input, ChangeDetectionStrategy } from "angular2/core";

/**
 * Implementation of Button component
 * 
 * @link http://semantic-ui.com/collections/breadcrumb.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-breadcrumb"
})

@View({
  template: `
  
<div [ngSwitch]="i" class="ui breadcrumb" *ngFor="#steap of steaps; #i = index">
      <template ngSwitchDefault> 
        <a class="section">{{steap}}</a>
        <i class="right arrow icon divider"></i>
      </template>
      <template [ngSwitchWhen]="steaps.length -1">
         <div class="active section">{{steap}}</div>
      </template>
</div>
  
  `  
})
export class SemanticBreadcrumb {
   @Input("steaps") steaps: Array<string>;
}
