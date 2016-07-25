import { Component, Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [<Type>CodeblockComponent, <Type>PrismJsDirective , SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    selector: "sm-page-home",
    templateUrl: "/demo/app/components/home/home.html"
})
export class HomeComponent {}
