import { SemanticMenuComponent } from "./ng-semantic/menu/menu";
import { SemanticMessageComponent } from "./ng-semantic/message/message";
import { SMTooltipDirective } from "./ng-semantic/popup/tooltip";
import { SemanticPopupComponent, SMPopupDirective } from "./ng-semantic/popup/popup";
import { SemanticModalComponent, SMModalDirective } from "./ng-semantic/modal/modal";
import { SemanticSegmentComponent } from "./ng-semantic/segment/segment";
import { SemanticListComponent } from "./ng-semantic/list/list";
import { SemanticButtonComponent } from "./ng-semantic/button/button";
import { SemanticItemComponent } from "./ng-semantic/item/item";
import { SemanticLoaderComponent } from "./ng-semantic/loader/loader";
import { SemanticCardComponent } from "./ng-semantic/card/card";
import { SemanticInputComponent, SemanticFormComponent,
	SemanticTextareaComponent, SemanticCheckboxComponent } from "./ng-semantic/input/input";
import { SemanticSidebarComponent, SMSidebarDirective } from "./ng-semantic/sidebar/sidebar";
import { SemanticTabsComponent, SemanticTabComponent } from "./ng-semantic/tab/tab";
import { SemanticFlagComponent } from "./ng-semantic/flag/flag";
import { SemanticProgressComponent } from "./ng-semantic/progress/progress";
import { SemanticDimmerComponent, SMDimmerDirective } from "./ng-semantic/dimmer/dimmer";
import { SemanticAccordionComponent, SemanticAccordionItemComponent } from "./ng-semantic/accordion/accordion";

export * from "./ng-semantic/menu/menu";
export *  from "./ng-semantic/message/message";
export * from "./ng-semantic/popup/tooltip";
export *  from "./ng-semantic/popup/popup";
export *  from "./ng-semantic/modal/modal";
export *  from "./ng-semantic/segment/segment";
export *  from "./ng-semantic/list/list";
export *  from "./ng-semantic/button/button";
export *  from "./ng-semantic/item/item";
export *  from "./ng-semantic/loader/loader";
export *  from "./ng-semantic/card/card";
export *  from "./ng-semantic/input/input";
export *  from "./ng-semantic/sidebar/sidebar";
export *  from "./ng-semantic/tab/tab";
export *  from "./ng-semantic/flag/flag";
export *  from "./ng-semantic/progress/progress";
export *  from "./ng-semantic/dimmer/dimmer";
export *  from "./ng-semantic/accordion/accordion";

export let SEMANTIC_COMPONENTS: Array<any> = [
	SemanticCardComponent,
	SemanticInputComponent,
	SemanticTextareaComponent,
	SemanticCheckboxComponent,
	SemanticFormComponent,
	SemanticMenuComponent,
	SemanticMessageComponent,
	SemanticSegmentComponent,
	SemanticDimmerComponent,
	SemanticPopupComponent,
	SemanticListComponent,
	SemanticFlagComponent,
	SemanticItemComponent,
	SemanticSidebarComponent,
	SemanticProgressComponent,
	SemanticModalComponent,
	SemanticTabsComponent,
	SemanticTabComponent,
	SemanticButtonComponent,
	SemanticLoaderComponent,
	SemanticAccordionComponent,
	SemanticAccordionItemComponent
];

export let SEMANTIC_DIRECTIVES: Array<any> = [
	SMTooltipDirective,
	SMPopupDirective,
	SMModalDirective,
	SMSidebarDirective,
	SMDimmerDirective
];