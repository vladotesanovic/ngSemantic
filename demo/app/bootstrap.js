System.register(["angular2/platform/browser", "angular2/core", "angular2/router", "angular2/http", "./components/app"], function(exports_1) {
    "use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUEsbUJBQVMsQ0FBQyxrQkFBWSxFQUFFO2dCQUN2QixxQkFBYztnQkFDZCx5QkFBZ0I7Z0JBQ2hCLFdBQUksQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2QkFBb0IsQ0FBQzthQUNwRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIi8+XG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tIFwiYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3NlclwiO1xuaW1wb3J0IHsgYmluZCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuXHRIVFRQX1BST1ZJREVSUyxcblx0Uk9VVEVSX1BST1ZJREVSUyxcblx0YmluZChMb2NhdGlvblN0cmF0ZWd5KS50b0NsYXNzKEhhc2hMb2NhdGlvblN0cmF0ZWd5KVxuXSk7XG4iXX0=