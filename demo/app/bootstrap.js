System.register(["angular2/platform/browser", "angular2/core", "angular2/router", "angular2/http", "./components/app"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, router_1, http_1, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBLG1CQUFTLENBQUMsa0JBQVksRUFBRTtnQkFDdkIscUJBQWM7Z0JBQ2QseUJBQWdCO2dCQUNoQixXQUFJLENBQUMseUJBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsNkJBQW9CLENBQUM7YUFDcEQsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIvPlxuaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSBcImFuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXJcIjtcbmltcG9ydCB7IGJpbmQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgUk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwXCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcblx0SFRUUF9QUk9WSURFUlMsXG5cdFJPVVRFUl9QUk9WSURFUlMsXG5cdGJpbmQoTG9jYXRpb25TdHJhdGVneSkudG9DbGFzcyhIYXNoTG9jYXRpb25TdHJhdGVneSlcbl0pO1xuIl19