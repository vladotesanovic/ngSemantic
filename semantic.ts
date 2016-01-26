import { SemanticHeader } from "./ng-semantic/header/header";
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
import { SemanticInput } from "./ng-semantic/input/input";
import { SemanticTabs, SemanticTab } from "./ng-semantic/tab/tab";

export let SEMANTIC_COMPONENTS: Array<any> = [
	SemanticCard,
	SemanticInput,
	SemanticHeader,
	SemanticMessage,
	SemanticSegment,
	SemanticPopup,
	SemanticList,
	SemanticItem,
	SemanticModal,
	SemanticTabs,
	SemanticTab,
	SemanticButton,
	SemanticLoader
];

export let SEMANTIC_DIRECTIVES: Array<any> = [
	SMTooltipDirective,
	SMPopupDirective,
	SMModalDirective
];