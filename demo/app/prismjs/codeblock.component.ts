import { Component } from "@angular/core";

@Component({
    selector: "codeblock",
    template: `<pre><ng-content></ng-content></pre>`
})
export class CodeblockComponent {}