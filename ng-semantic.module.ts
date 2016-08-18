import { NgModule }           from "@angular/core";
import { CommonModule }       from "@angular/common";
import { FormsModule }        from "@angular/forms";

import { SEMANTIC_DIRECTIVES, SEMANTIC_COMPONENTS } from "./ng-semantic";

@NgModule({
    declarations: [ SEMANTIC_DIRECTIVES, SEMANTIC_COMPONENTS ],
    exports:      [ SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES ],
    imports:      [ CommonModule, FormsModule ]
})
export class SemanticModule { }
