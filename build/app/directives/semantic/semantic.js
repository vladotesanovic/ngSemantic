System.register(["./header/header", "./message/message", "./popup/tooltip", "./popup/popup", "./modal/modal", "./segment/segment", "./list/list", "./tab/tab"], function(exports_1) {
    var header_1, message_1, tooltip_1, popup_1, modal_1, segment_1, list_1, tab_1;
    var SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES;
    return {
        setters:[
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (tooltip_1_1) {
                tooltip_1 = tooltip_1_1;
            },
            function (popup_1_1) {
                popup_1 = popup_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (segment_1_1) {
                segment_1 = segment_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            }],
        execute: function() {
            exports_1("SEMANTIC_COMPONENTS", SEMANTIC_COMPONENTS = [
                header_1.SemanticHeader,
                message_1.SemanticMessage,
                segment_1.SemanticSegment,
                popup_1.SemanticPopup,
                list_1.SemanticList,
                modal_1.SemanticModal,
                tab_1.SemanticTabs,
                tab_1.SemanticTab
            ]);
            exports_1("SEMANTIC_DIRECTIVES", SEMANTIC_DIRECTIVES = [
                tooltip_1.SMTooltipDirective,
                popup_1.SMPopupDirective,
                modal_1.SMModalDirective
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtYW50aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2RpcmVjdGl2ZXMvc2VtYW50aWMvc2VtYW50aWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFTVyxtQkFBbUIsRUFXbkIsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWG5CLGlDQUFBLG1CQUFtQixHQUFlO2dCQUM1Qyx1QkFBYztnQkFDZCx5QkFBZTtnQkFDZix5QkFBZTtnQkFDZixxQkFBYTtnQkFDYixtQkFBWTtnQkFDWixxQkFBYTtnQkFDYixrQkFBWTtnQkFDWixpQkFBVzthQUNYLENBQUEsQ0FBQztZQUVTLGlDQUFBLG1CQUFtQixHQUFlO2dCQUM1Qyw0QkFBa0I7Z0JBQ2xCLHdCQUFnQjtnQkFDaEIsd0JBQWdCO2FBQ2hCLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbWFudGljSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IHsgU2VtYW50aWNNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZS9tZXNzYWdlXCI7XG5pbXBvcnQgeyBTTVRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tIFwiLi9wb3B1cC90b29sdGlwXCI7XG5pbXBvcnQgeyBTZW1hbnRpY1BvcHVwLCBTTVBvcHVwRGlyZWN0aXZlIH0gZnJvbSBcIi4vcG9wdXAvcG9wdXBcIjtcbmltcG9ydCB7IFNlbWFudGljTW9kYWwsIFNNTW9kYWxEaXJlY3RpdmUgfSBmcm9tIFwiLi9tb2RhbC9tb2RhbFwiO1xuaW1wb3J0IHsgU2VtYW50aWNTZWdtZW50IH0gZnJvbSBcIi4vc2VnbWVudC9zZWdtZW50XCI7XG5pbXBvcnQgeyBTZW1hbnRpY0xpc3QgfSBmcm9tIFwiLi9saXN0L2xpc3RcIjtcbmltcG9ydCB7IFNlbWFudGljVGFicywgU2VtYW50aWNUYWIgfSBmcm9tIFwiLi90YWIvdGFiXCI7XG5cbmV4cG9ydCBsZXQgU0VNQU5USUNfQ09NUE9ORU5UUzogQXJyYXk8YW55PiA9IFtcblx0U2VtYW50aWNIZWFkZXIsXG5cdFNlbWFudGljTWVzc2FnZSxcblx0U2VtYW50aWNTZWdtZW50LFxuXHRTZW1hbnRpY1BvcHVwLFxuXHRTZW1hbnRpY0xpc3QsXG5cdFNlbWFudGljTW9kYWwsXG5cdFNlbWFudGljVGFicyxcblx0U2VtYW50aWNUYWJcbl07XG5cbmV4cG9ydCBsZXQgU0VNQU5USUNfRElSRUNUSVZFUzogQXJyYXk8YW55PiA9IFtcblx0U01Ub29sdGlwRGlyZWN0aXZlLFxuXHRTTVBvcHVwRGlyZWN0aXZlLFxuXHRTTU1vZGFsRGlyZWN0aXZlXG5dO1xuIl19