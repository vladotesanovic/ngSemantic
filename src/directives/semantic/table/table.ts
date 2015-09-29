/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import { Component, View, NgFor } from "angular2/angular2";
import { TableServices } from "../../../services/table";

@Component({
    bindings: [TableServices],
    properties: [],
    selector: "table"
})

@View({
    directives: [NgFor],
    template: `<table class="ui left aligned striped fixed table">
<thead>
  <tr>
    <th *ng-for="var header of table.columns" class="left aligned">{{header}}</th>
  </tr>
</thead>
<tbody>
  <tr *ng-for="var row of table.items">
    <td class="left aligned" *ng-for="var header of table.columns">{{row[header]}}</td>
  </tr>
</tbody>
</table>`
})

export class UITableComponent {

    constructor(private table: TableServices) {}
}
