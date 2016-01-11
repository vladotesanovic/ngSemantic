import { SemanticHeader } from "./header/header";
import { SemanticMessage } from "./message/message";
import { SMTooltipDirective } from "./popup/tooltip";
import { SemanticPopup, SMPopupDirective } from "./popup/popup";
import { SemanticModal, SMModalDirective } from "./modal/modal";
import { SemanticSegment } from "./segment/segment";
import { SemanticList } from "./list/list";
import { SemanticTabs, SemanticTab } from "./tab/tab";

export let SEMANTIC_COMPONENTS: Array<any> = [
	SemanticHeader,
	SemanticMessage,
	SemanticSegment,
	SemanticPopup,
	SemanticList,
	SemanticModal,
	SemanticTabs,
	SemanticTab
];

export let SEMANTIC_DIRECTIVES: Array<any> = [
	SMTooltipDirective,
	SMPopupDirective,
	SMModalDirective
];
