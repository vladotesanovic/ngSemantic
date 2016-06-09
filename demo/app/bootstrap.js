System.register(["@angular/platform-browser-dynamic", "@angular/core", "@angular/common", "@angular/router", "@angular/http", "./components/app", "./services/contextmenu"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, common_1, router_1, http_1, app_1, contextmenu_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (contextmenu_1_1) {
                contextmenu_1 = contextmenu_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                contextmenu_1.ContextMenuService,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQSxvQ0FBUyxDQUFPLGtCQUFZLEVBQUU7Z0JBQzdCLHFCQUFjO2dCQUNkLHlCQUFnQjtnQkFDaEIsZ0NBQWtCO2dCQUNsQixjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQVEsNkJBQW9CLEVBQUMsQ0FBQzthQUNqRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXAgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljXCI7XG5pbXBvcnQgeyBwcm92aWRlLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBcIjtcbmltcG9ydCB7IENvbnRleHRNZW51U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbnRleHRtZW51XCI7XG5cbmJvb3RzdHJhcCg8VHlwZT5BcHBDb21wb25lbnQsIFtcblx0SFRUUF9QUk9WSURFUlMsXG5cdFJPVVRFUl9QUk9WSURFUlMsXG5cdENvbnRleHRNZW51U2VydmljZSxcblx0cHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IDxUeXBlPkhhc2hMb2NhdGlvblN0cmF0ZWd5fSlcbl0pO1xuIl19