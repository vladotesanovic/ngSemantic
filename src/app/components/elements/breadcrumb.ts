import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";
@Component({
    selector: "ui-breadcumb"
})
@View({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    template: `
       <div class="ui masthead vertical segment">
        <div class="ui container">
            <h1>Breadcrumb</h1>
            <p>Semantic UI Breadcrumb element <i class="icon external"></i>
                <a href="http://semantic-ui.com/collections/breadcrumb.html" target="_blank">Semantic UI Breadcrumb</a>
            </p>
        </div>
    </div>
    <div class="main ui container">
        <h4 class="ui header">Demo Breadcrumb</h4>
        <sm-breadcrumb [steaps]="steaps"></sm-breadcrumb>
        <h4 class="ui header">Code</h4>
        <div class="ui form">
            <div class="field">
          <textarea rows="5" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
          <sm-breadcrumb [steaps]="steaps"></sm-breadcrumb>
          </textarea>
        </div>
        </div>
        
        <h3 class="ui header">Params</h3>
        <table class="ui celled selectable blue table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Array</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>steaps</td>
                    <td>String</td>
                    <td class="positive">Yes</td>
                </tr>
            </tbody>
        </table>
        <br><br><br><br>
        Page source: <a target="_blank" 
        href="https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/collections/breadcrumb.ts">
        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/collections/breadcrumb.ts
      </a>
    </div>
    `
})

export class BreadCrumbComponent {
    steaps: Array<string>= ["Home", "Registration", "Personal Information"];
}
