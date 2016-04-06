"use strict";
var menu_1 = require("./ng-semantic/menu/menu");
var message_1 = require("./ng-semantic/message/message");
var tooltip_1 = require("./ng-semantic/popup/tooltip");
var popup_1 = require("./ng-semantic/popup/popup");
var modal_1 = require("./ng-semantic/modal/modal");
var segment_1 = require("./ng-semantic/segment/segment");
var list_1 = require("./ng-semantic/list/list");
var button_1 = require("./ng-semantic/button/button");
var item_1 = require("./ng-semantic/item/item");
var loader_1 = require("./ng-semantic/loader/loader");
var card_1 = require("./ng-semantic/card/card");
var input_1 = require("./ng-semantic/input/input");
var sidebar_1 = require("./ng-semantic/sidebar/sidebar");
var tab_1 = require("./ng-semantic/tab/tab");
var flag_1 = require("./ng-semantic/flag/flag");
var progress_1 = require("./ng-semantic/progress/progress");
var dimmer_1 = require("./ng-semantic/dimmer/dimmer");
exports.SEMANTIC_COMPONENTS = [
    card_1.SemanticCard,
    input_1.SemanticInput,
    input_1.SemanticTextarea,
    input_1.SemanticCheckbox,
    input_1.SemanticForm,
    menu_1.SemanticMenu,
    message_1.SemanticMessage,
    segment_1.SemanticSegment,
    dimmer_1.SemanticDimmer,
    popup_1.SemanticPopup,
    list_1.SemanticList,
    flag_1.SemanticFlag,
    item_1.SemanticItem,
    sidebar_1.SemanticSidebar,
    progress_1.SemanticProgress,
    modal_1.SemanticModal,
    tab_1.SemanticTabs,
    tab_1.SemanticTab,
    button_1.SemanticButton,
    loader_1.SemanticLoader
];
exports.SEMANTIC_DIRECTIVES = [
    tooltip_1.SMTooltipDirective,
    popup_1.SMPopupDirective,
    modal_1.SMModalDirective,
    sidebar_1.SMSidebarDirective,
    dimmer_1.SMDimmerDirective
];
