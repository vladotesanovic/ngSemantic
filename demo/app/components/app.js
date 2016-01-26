System.register(["angular2/core", "angular2/router", "./home/home", "./elements/loader", "./elements/list", "./elements/segment", "./elements/menu", "./elements/message", "./elements/modal", "./elements/popup", "./elements/tab", "./elements/button"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, loader_1, list_1, segment_1, menu_1, message_1, modal_1, popup_1, tab_1, button_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (loader_1_1) {
                loader_1 = loader_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (segment_1_1) {
                segment_1 = segment_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (popup_1_1) {
                popup_1 = popup_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    jQuery("#page .full.height").css("height", jQuery(window).height() + "px");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app"
                    }),
                    core_1.View({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: "./app/components/app.html"
                    }),
                    router_1.RouteConfig([
                        { component: home_1.HomeComponent, path: "/" },
                        { component: loader_1.LoaderComponent, path: "/elements/loader" },
                        { component: list_1.ListComponent, path: "/elements/list" },
                        { component: segment_1.SegmentComponent, path: "/elements/segment" },
                        { component: menu_1.MenuComponent, path: "/elements/menu" },
                        { component: message_1.MessageComponent, path: "/elements/message" },
                        { component: modal_1.ModalComponent, path: "/elements/modal" },
                        { component: popup_1.PopupComponent, path: "/elements/popup" },
                        { component: tab_1.TabComponent, path: "/elements/tab" },
                        { component: button_1.ButtonComponent, path: "/elements/button" }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDb21wb25lbnQiLCJBcHBDb21wb25lbnQuY29uc3RydWN0b3IiLCJBcHBDb21wb25lbnQubmdBZnRlclZpZXdJbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQUE7Z0JBd0JBQyxDQUFDQTtnQkFIQUQsc0NBQWVBLEdBQWZBO29CQUNDRSxNQUFNQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBO2dCQUM1RUEsQ0FBQ0E7Z0JBdkJGRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTtxQkFDZkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO3dCQUMvQkEsV0FBV0EsRUFBRUEsMkJBQTJCQTtxQkFDeENBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLFNBQVNBLEVBQUVBLG9CQUFhQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQTt3QkFDdkNBLEVBQUVBLFNBQVNBLEVBQUVBLHdCQUFlQSxFQUFFQSxJQUFJQSxFQUFFQSxrQkFBa0JBLEVBQUVBO3dCQUN4REEsRUFBRUEsU0FBU0EsRUFBRUEsb0JBQWFBLEVBQUVBLElBQUlBLEVBQUVBLGdCQUFnQkEsRUFBRUE7d0JBQ3BEQSxFQUFFQSxTQUFTQSxFQUFFQSwwQkFBZ0JBLEVBQUVBLElBQUlBLEVBQUVBLG1CQUFtQkEsRUFBRUE7d0JBQzFEQSxFQUFFQSxTQUFTQSxFQUFFQSxvQkFBYUEsRUFBRUEsSUFBSUEsRUFBRUEsZ0JBQWdCQSxFQUFFQTt3QkFDcERBLEVBQUVBLFNBQVNBLEVBQUVBLDBCQUFnQkEsRUFBRUEsSUFBSUEsRUFBRUEsbUJBQW1CQSxFQUFFQTt3QkFDMURBLEVBQUVBLFNBQVNBLEVBQUVBLHNCQUFjQSxFQUFFQSxJQUFJQSxFQUFFQSxpQkFBaUJBLEVBQUVBO3dCQUN0REEsRUFBRUEsU0FBU0EsRUFBRUEsc0JBQWNBLEVBQUVBLElBQUlBLEVBQUVBLGlCQUFpQkEsRUFBRUE7d0JBQ3REQSxFQUFFQSxTQUFTQSxFQUFFQSxrQkFBWUEsRUFBRUEsSUFBSUEsRUFBRUEsZUFBZUEsRUFBRUE7d0JBQ2xEQSxFQUFFQSxTQUFTQSxFQUFFQSx3QkFBZUEsRUFBRUEsSUFBSUEsRUFBRUEsa0JBQWtCQSxFQUFFQTtxQkFDeERBLENBQUNBOztpQ0FNREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQUFDQSxBQXhCRCxJQXdCQztZQXhCRCx1Q0F3QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7IENvbXBvbmVudCwgVmlldywgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcgfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2xvYWRlclwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2xpc3RcIjtcbmltcG9ydCB7IFNlZ21lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zZWdtZW50XCI7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbWVudVwiO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21lc3NhZ2VcIjtcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbW9kYWxcIjtcbmltcG9ydCB7IFBvcHVwQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvcG9wdXBcIjtcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3RhYlwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvYnV0dG9uXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJhcHBcIlxufSlcbkBWaWV3KHtcblx0ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcblx0dGVtcGxhdGVVcmw6IFwiLi9hcHAvY29tcG9uZW50cy9hcHAuaHRtbFwiXG59KVxuQFJvdXRlQ29uZmlnKFtcblx0eyBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHBhdGg6IFwiL1wiIH0sXG5cdHsgY29tcG9uZW50OiBMb2FkZXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2xvYWRlclwiIH0sXG5cdHsgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9saXN0XCIgfSxcblx0eyBjb21wb25lbnQ6IFNlZ21lbnRDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3NlZ21lbnRcIiB9LFxuXHR7IGNvbXBvbmVudDogTWVudUNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbWVudVwiIH0sXG5cdHsgY29tcG9uZW50OiBNZXNzYWdlQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tZXNzYWdlXCIgfSxcblx0eyBjb21wb25lbnQ6IE1vZGFsQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tb2RhbFwiIH0sXG5cdHsgY29tcG9uZW50OiBQb3B1cENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvcG9wdXBcIiB9LFxuXHR7IGNvbXBvbmVudDogVGFiQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy90YWJcIiB9LFxuXHR7IGNvbXBvbmVudDogQnV0dG9uQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9idXR0b25cIiB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRqUXVlcnkoXCIjcGFnZSAuZnVsbC5oZWlnaHRcIikuY3NzKFwiaGVpZ2h0XCIsIGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpICsgXCJweFwiKTtcblx0fVxufVxuIl19