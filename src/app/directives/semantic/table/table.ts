import { Component, View } from "angular2/core";
import { TableServices } from "../../../services/table";

@Component({
    bindings: [TableServices],
    properties: [],
    selector: "table"
})

@View({
    template: `<table class="ui left aligned striped fixed table">
<thead>
  <tr>
    <th *ngFor="var header of table.columns" class="left aligned">{{header}}</th>
  </tr>
</thead>
<tbody>
  <tr *ngFor="var row of table.items">
    <td class="left aligned" *ngFor="var header of table.columns">{{row[header]}}</td>
  </tr>
</tbody>
</table>`
})

export class UITableComponent {

    constructor(private table: TableServices) {}
}
