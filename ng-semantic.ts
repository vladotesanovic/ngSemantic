import { SemanticMenuComponent } from "./src/menu/menu";
import { SemanticMessageComponent } from "./src/message/message";
import { SMTooltipDirective } from "./src/popup/tooltip";
import { SemanticPopupComponent } from "./src/popup/popup";
import { SemanticModalComponent, SMModalTagsDirective } from "./src/modal/modal";
import { SemanticSegmentComponent } from "./src/segment/segment";
import { SemanticListComponent } from "./src/list/list";
import { SemanticButtonComponent } from "./src/button/button";
import { SemanticItemComponent } from "./src/item/item";
import { SMVisibilityDirective, SMDeviceVisibilityDirective } from "./src/visibility/visibility";
import { SemanticDropdownComponent } from "./src/dropdown/dropdown";
import { SemanticSelectComponent } from "./src/select/select";
import { SemanticSearchComponent } from "./src/search/search";
import { SemanticLoaderComponent } from "./src/loader/loader";
import { SemanticCardComponent, SemanticCardsComponent } from "./src/card/card";
import {
 SemanticInputComponent,
 SemanticTextareaComponent,
 SemanticCheckboxComponent
} from "./src/input/input";
import { SemanticSidebarComponent } from "./src/sidebar/sidebar";
import { SemanticTabsComponent, SemanticTabComponent } from "./src/tab/tab";
import { SemanticFlagComponent } from "./src/flag/flag";
import { SemanticContextMenuComponent } from "./src/contextmenu/contextmenu";
import { SemanticProgressComponent } from "./src/progress/progress";
import { SemanticDimmerComponent } from "./src/dimmer/dimmer";
import { SemanticTransitionComponent } from "./src/transition/transition";
import { SemanticShapeComponent } from "./src/shape/shape";
import { SemanticAccordionComponent, SemanticAccordionItemComponent } from "./src/accordion/accordion";
import { SemanticRatingComponent } from "./src/rating/rating";

export * from "./src/menu/menu";
export * from "./src/contextmenu/contextmenu";
export * from "./src/message/message";
export * from "./src/popup/tooltip";
export * from "./src/popup/popup";
export * from "./src/visibility/visibility";
export * from "./src/modal/modal";
export * from "./src/segment/segment";
export * from "./src/rating/rating";
export * from "./src/list/list";
export * from "./src/button/button";
export * from "./src/search/search";
export * from "./src/item/item";
export * from "./src/dropdown/dropdown";
export * from "./src/select/select";
export * from "./src/loader/loader";
export * from "./src/card/card";
export * from "./src/input/input";
export * from "./src/sidebar/sidebar";
export * from "./src/tab/tab";
export * from "./src/flag/flag";
export * from "./src/progress/progress";
export * from "./src/dimmer/dimmer";
export * from "./src/transition/transition";
export * from "./src/shape/shape";
export * from "./src/accordion/accordion";

export let SEMANTIC_COMPONENTS: Array<any> = [
 SemanticCardComponent,
 SemanticCardsComponent,
 SemanticContextMenuComponent,
 SemanticInputComponent,
 SemanticTextareaComponent,
 SemanticCheckboxComponent,
 SemanticMenuComponent,
 SemanticMessageComponent,
 SemanticSegmentComponent,
 SemanticDimmerComponent,
 SemanticTransitionComponent,
 SemanticShapeComponent,
 SemanticPopupComponent,
 SemanticDropdownComponent,
 SemanticListComponent,
 SemanticSelectComponent,
 SemanticFlagComponent,
 SemanticSearchComponent,
 SemanticItemComponent,
 SemanticSidebarComponent,
 SemanticProgressComponent,
 SemanticModalComponent,
 SemanticTabsComponent,
 SemanticTabComponent,
 SemanticButtonComponent,
 SemanticLoaderComponent,
 SemanticAccordionComponent,
 SemanticAccordionItemComponent,
 SemanticRatingComponent
];

export let SEMANTIC_DIRECTIVES: Array<any> = [
 SMTooltipDirective,
 SMVisibilityDirective,
 SMDeviceVisibilityDirective,
 SMModalTagsDirective, // directives with no functionality, simply declare tags
];

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
 declarations: [ SEMANTIC_DIRECTIVES, SEMANTIC_COMPONENTS ],
 exports: [ SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES ],
 imports: [ CommonModule, FormsModule, ReactiveFormsModule ]
})
export class NgSemanticModule {}
