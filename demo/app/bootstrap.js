System.register(["angular2/platform/browser", "angular2/core", "angular2/router", "angular2/http", "./components/app"], function(exports_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSxtQkFBUyxDQUFDLGtCQUFZLEVBQUU7Z0JBQ3ZCLHFCQUFjO2dCQUNkLHlCQUFnQjtnQkFDaEIsV0FBSSxDQUFDLHlCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLDZCQUFvQixDQUFDO2FBQ3BELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gXCJhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyXCI7XG5pbXBvcnQgeyBiaW5kIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFJPVVRFUl9QUk9WSURFUlMsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcFwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG5cdEhUVFBfUFJPVklERVJTLFxuXHRST1VURVJfUFJPVklERVJTLFxuXHRiaW5kKExvY2F0aW9uU3RyYXRlZ3kpLnRvQ2xhc3MoSGFzaExvY2F0aW9uU3RyYXRlZ3kpXG5dKTtcbiJdfQ==