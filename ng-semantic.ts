import { SemanticMenu } from "./ng-semantic/menu/menu";
import { SemanticMessage } from "./ng-semantic/message/message";
import { SMTooltipDirective } from "./ng-semantic/popup/tooltip";
import { SemanticPopup, SMPopupDirective } from "./ng-semantic/popup/popup";
import { SemanticModal, SMModalDirective } from "./ng-semantic/modal/modal";
import { SemanticSegment } from "./ng-semantic/segment/segment";
import { SemanticList } from "./ng-semantic/list/list";
import { SemanticButton } from "./ng-semantic/button/button";
import { SemanticItem } from "./ng-semantic/item/item";
import { SemanticLoader } from "./ng-semantic/loader/loader";
import { SemanticCard } from "./ng-semantic/card/card";
import { SemanticInput, SemanticForm, SemanticTextarea, SemanticCheckbox } from "./ng-semantic/input/input";
import { SemanticSidebar, SMSidebarDirective } from "./ng-semantic/sidebar/sidebar";
import { SemanticTabs, SemanticTab } from "./ng-semantic/tab/tab";
import { SemanticFlag } from "./ng-semantic/flag/flag";
import { SemanticProgress } from "./ng-semantic/progress/progress";
import { SemanticDimmer, SMDimmerDirective } from "./ng-semantic/dimmer/dimmer";

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

export let SEMANTIC_COMPONENTS: Array<any> = [
	SemanticCard,
	SemanticInput,
	SemanticTextarea,
	SemanticCheckbox,
	SemanticForm,
	SemanticMenu,
	SemanticMessage,
	SemanticSegment,
	SemanticDimmer,
	SemanticPopup,
	SemanticList,
	SemanticFlag,
	SemanticItem,
	SemanticSidebar,
	SemanticProgress,
	SemanticModal,
	SemanticTabs,
	SemanticTab,
	SemanticButton,
	SemanticLoader
];

export let SEMANTIC_DIRECTIVES: Array<any> = [
	SMTooltipDirective,
	SMPopupDirective,
	SMModalDirective,
	SMSidebarDirective,
	SMDimmerDirective
];