import { SemanticHeader } from "./header/header";
import { SemanticMessage } from "./message/message";
import { SMTooltipDirective } from "./popup/tooltip";
import { SemanticPopup, SMPopupDirective } from "./popup/popup";
import { SemanticSegment } from "./segment/segment";

export let SEMANTIC_COMPONENTS: Array<any> = [
	SemanticHeader,
	SemanticMessage,
	SemanticSegment,
	SemanticPopup
];

export let SEMANTIC_DIRECTIVES: Array<any> = [
	SMTooltipDirective,
	SMPopupDirective
];
