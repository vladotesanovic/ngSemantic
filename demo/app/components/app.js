System.register(["angular2/core", "angular2/router", "./home/home", "./elements/loader", "./elements/list", "./elements/segment", "./elements/menu", "./elements/message", "./elements/modal", "./elements/popup", "./elements/tab", "./elements/button", "./elements/card", "./elements/form", "./elements/sidebar"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, loader_1, list_1, segment_1, menu_1, message_1, modal_1, popup_1, tab_1, button_1, card_1, form_1, sidebar_1;
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
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (form_1_1) {
                form_1 = form_1_1;
            },
            function (sidebar_1_1) {
                sidebar_1 = sidebar_1_1;
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
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: "app",
                        templateUrl: "./app/components/app.html"
                    }),
                    router_1.RouteConfig([
                        { component: home_1.HomeComponent, path: "/", useAsDefault: true },
                        { component: loader_1.LoaderComponent, path: "/elements/loader" },
                        { component: list_1.ListComponent, path: "/elements/list" },
                        { component: form_1.FormComponent, path: "/elements/form" },
                        { component: card_1.CardComponent, path: "/elements/card" },
                        { component: segment_1.SegmentComponent, path: "/elements/segment" },
                        { component: menu_1.MenuComponent, path: "/elements/menu" },
                        { component: message_1.MessageComponent, path: "/elements/message" },
                        { component: modal_1.ModalComponent, path: "/elements/modal" },
                        { component: popup_1.PopupComponent, path: "/elements/popup" },
                        { component: sidebar_1.SidebarComponent, path: "/elements/sidebar" },
                        { component: tab_1.TabComponent, path: "/elements/tab" },
                        { component: button_1.ButtonComponent, path: "/elements/button" },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNDQTtnQkFBQTtnQkFJQSxDQUFDO2dCQUhBLHNDQUFlLEdBQWY7b0JBQ0MsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzVFLENBQUM7Z0JBeEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ04sVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQzVCLFFBQVEsRUFBRSxLQUFLO3dCQUN0QixXQUFXLEVBQUUsMkJBQTJCO3FCQUN4QyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1osRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQzNELEVBQUUsU0FBUyxFQUFFLHdCQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO3dCQUN4RCxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDcEQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNwRCxFQUFFLFNBQVMsRUFBRSwwQkFBZ0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7d0JBQzFELEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNwRCxFQUFFLFNBQVMsRUFBRSwwQkFBZ0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7d0JBQzFELEVBQUUsU0FBUyxFQUFFLHNCQUFjLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO3dCQUN0RCxFQUFFLFNBQVMsRUFBRSxzQkFBYyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTt3QkFDdEQsRUFBRSxTQUFTLEVBQUUsMEJBQWdCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO3dCQUMxRCxFQUFFLFNBQVMsRUFBRSxrQkFBWSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7d0JBQ2xELEVBQUUsU0FBUyxFQUFFLHdCQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO3FCQUN4RCxDQUFDOztnQ0FBQTtnQkFNRixtQkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsdUNBSUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZyB9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcclxuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbG9hZGVyXCI7XHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9saXN0XCI7XHJcbmltcG9ydCB7IFNlZ21lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zZWdtZW50XCI7XHJcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9tZW51XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9tZXNzYWdlXCI7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbW9kYWxcIjtcclxuaW1wb3J0IHsgUG9wdXBDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9wb3B1cFwiO1xyXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy90YWJcIjtcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9jYXJkXCI7XHJcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9mb3JtXCI7XHJcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zaWRlYmFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIFx0ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgICAgICBzZWxlY3RvcjogXCJhcHBcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2FwcC9jb21wb25lbnRzL2FwcC5odG1sXCJcclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgcGF0aDogXCIvXCIsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG5cdHsgY29tcG9uZW50OiBMb2FkZXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2xvYWRlclwiIH0sXHJcblx0eyBjb21wb25lbnQ6IExpc3RDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2xpc3RcIiB9LFxyXG5cdHsgY29tcG9uZW50OiBGb3JtQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9mb3JtXCIgfSxcclxuXHR7IGNvbXBvbmVudDogQ2FyZENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvY2FyZFwiIH0sXHJcblx0eyBjb21wb25lbnQ6IFNlZ21lbnRDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3NlZ21lbnRcIiB9LFxyXG5cdHsgY29tcG9uZW50OiBNZW51Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tZW51XCIgfSxcclxuXHR7IGNvbXBvbmVudDogTWVzc2FnZUNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbWVzc2FnZVwiIH0sXHJcblx0eyBjb21wb25lbnQ6IE1vZGFsQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tb2RhbFwiIH0sXHJcblx0eyBjb21wb25lbnQ6IFBvcHVwQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9wb3B1cFwiIH0sXHJcblx0eyBjb21wb25lbnQ6IFNpZGViYXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3NpZGViYXJcIiB9LFxyXG5cdHsgY29tcG9uZW50OiBUYWJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3RhYlwiIH0sXHJcblx0eyBjb21wb25lbnQ6IEJ1dHRvbkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvYnV0dG9uXCIgfSxcclxuXSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHRqUXVlcnkoXCIjcGFnZSAuZnVsbC5oZWlnaHRcIikuY3NzKFwiaGVpZ2h0XCIsIGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpICsgXCJweFwiKTtcclxuXHR9XHJcbn1cclxuIl19