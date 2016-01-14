import { SemanticHeader } from "./src/app/directives/semantic/header/header";
import { SemanticMessage } from "./src/app/directives/semantic/message/message";
import { SMTooltipDirective } from "./src/app/directives/semantic/popup/tooltip";
import { SemanticPopup, SMPopupDirective } from "./src/app/directives/semantic/popup/popup";
import { SemanticModal, SMModalDirective } from "./src/app/directives/semantic/modal/modal";
import { SemanticSegment } from "./src/app/directives/semantic/segment/segment";
import { SemanticList } from "./src/app/directives/semantic/list/list";
import { SemanticTabs, SemanticTab } from "./src/app/directives/semantic/tab/tab";

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
