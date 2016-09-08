import { SemanticMenuComponent } from "./menu/menu";
import { SemanticMessageComponent } from "./message/message";
import { SMTooltipDirective } from "./popup/tooltip";
import { SemanticPopupComponent } from "./popup/popup";
import { SemanticModalComponent } from "./modal/modal";
import { SemanticSegmentComponent } from "./segment/segment";
import { SemanticListComponent } from "./list/list";
import { SemanticButtonComponent } from "./button/button";
import { SemanticItemComponent } from "./item/item";
import { SMVisibilityDirective, SMDeviceVisibilityDirective } from "./visibility/visibility";
import { SemanticDropdownComponent } from "./dropdown/dropdown";
import { SemanticSelectComponent } from "./select/select";
import { SemanticSearchComponent } from "./search/search";
import { SemanticLoaderComponent } from "./loader/loader";
import { SemanticCardComponent, SemanticCardsComponent } from "./card/card";
import { SemanticInputComponent, SemanticTextareaComponent, SemanticCheckboxComponent } from "./input/input";
import { SemanticSidebarComponent } from "./sidebar/sidebar";
import { SemanticTabsComponent, SemanticTabComponent } from "./tab/tab";
import { SemanticFlagComponent } from "./flag/flag";
import { SemanticContextMenuComponent } from "./contextmenu/contextmenu";
import { SemanticProgressComponent } from "./progress/progress";
import { SemanticDimmerComponent } from "./dimmer/dimmer";
import { SemanticTransitionComponent } from "./transition/transition";
import { SemanticShapeComponent } from "./shape/shape";
import { SemanticAccordionComponent, SemanticAccordionItemComponent } from "./accordion/accordion";
import { SemanticRatingComponent } from "./rating/rating";

export * from "./menu/menu";
export * from "./contextmenu/contextmenu";
export *  from "./message/message";
export * from "./popup/tooltip";
export *  from "./popup/popup";
export *  from "./visibility/visibility";
export *  from "./modal/modal";
export *  from "./segment/segment";
export *  from "./rating/rating";
export *  from "./list/list";
export *  from "./button/button";
export *  from "./search/search";
export *  from "./item/item";
export *  from "./dropdown/dropdown";
export *  from "./select/select";
export *  from "./loader/loader";
export *  from "./card/card";
export *  from "./input/input";
export *  from "./sidebar/sidebar";
export *  from "./tab/tab";
export *  from "./flag/flag";
export *  from "./progress/progress";
export *  from "./dimmer/dimmer";
export *  from "./transition/transition";
export *  from "./shape/shape";
export *  from "./accordion/accordion";

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
	SMDeviceVisibilityDirective
];

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [ SEMANTIC_DIRECTIVES, SEMANTIC_COMPONENTS ],
	exports:      [ SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES ],
	imports:      [ CommonModule, FormsModule, ReactiveFormsModule ]
})
export class NgSemanticModule { }
