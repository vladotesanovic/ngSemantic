System.register(["@angular/platform-browser-dynamic", "@angular/common", "./routes", "@angular/http", "@angular/forms", "./components/app", "./services/contextmenu"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, common_1, routes_1, http_1, forms_1, app_1, contextmenu_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
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
                routes_1.APP_ROUTER_PROVIDERS,
                contextmenu_1.ContextMenuService,
                forms_1.provideForms(),
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQSxvQ0FBUyxDQUFPLGtCQUFZLEVBQUU7Z0JBQzdCLHFCQUFjO2dCQUNkLDZCQUFvQjtnQkFDcEIsZ0NBQWtCO2dCQUNsQixvQkFBWSxFQUFFO2dCQUNkLEVBQUUsT0FBTyxFQUFFLHlCQUFnQixFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBRTthQUM3RCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXAgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljXCI7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQVBQX1JPVVRFUl9QUk9WSURFUlMgfSBmcm9tIFwiLi9yb3V0ZXNcIjtcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IHByb3ZpZGVGb3JtcyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcFwiO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY29udGV4dG1lbnVcIjtcblxuYm9vdHN0cmFwKDxUeXBlPkFwcENvbXBvbmVudCwgW1xuXHRIVFRQX1BST1ZJREVSUyxcblx0QVBQX1JPVVRFUl9QUk9WSURFUlMsXG5cdENvbnRleHRNZW51U2VydmljZSxcblx0cHJvdmlkZUZvcm1zKCksXG5cdHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH1cbl0pO1xuIl19