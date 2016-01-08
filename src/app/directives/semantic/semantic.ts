import { SemanticHeader } from "./header/header";
import { SemanticMessage } from "./message/message";
import { SMTooltipDirective } from "./popup/tooltip";
import { SemanticPopup, SMPopupDirective } from "./popup/popup";
import { SemanticSegment } from "./segment/segment";
import { SemanticList } from "./list/list";

export let SEMANTIC_COMPONENTS: Array<any> = [
	SemanticHeader,
	SemanticMessage,
	SemanticSegment,
	SemanticPopup,
	SemanticList
];

export let SEMANTIC_DIRECTIVES: Array<any> = [
	SMTooltipDirective,
	SMPopupDirective
];
