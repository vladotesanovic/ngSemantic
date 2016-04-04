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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNDQTtnQkFBQTtnQkFJQSxDQUFDO2dCQUhBLHNDQUFlLEdBQWY7b0JBQ0MsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzVFLENBQUM7Z0JBeEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ04sVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQzVCLFFBQVEsRUFBRSxLQUFLO3dCQUN0QixXQUFXLEVBQUUsMkJBQTJCO3FCQUN4QyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1osRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQzNELEVBQUUsU0FBUyxFQUFFLHdCQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO3dCQUN4RCxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDcEQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNwRCxFQUFFLFNBQVMsRUFBRSwwQkFBZ0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7d0JBQzFELEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNwRCxFQUFFLFNBQVMsRUFBRSwwQkFBZ0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7d0JBQzFELEVBQUUsU0FBUyxFQUFFLHNCQUFjLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO3dCQUN0RCxFQUFFLFNBQVMsRUFBRSxzQkFBYyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTt3QkFDdEQsRUFBRSxTQUFTLEVBQUUsMEJBQWdCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO3dCQUMxRCxFQUFFLFNBQVMsRUFBRSxrQkFBWSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7d0JBQ2xELEVBQUUsU0FBUyxFQUFFLHdCQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO3FCQUN4RCxDQUFDOztnQ0FBQTtnQkFNRixtQkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsdUNBSUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcgfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2xvYWRlclwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2xpc3RcIjtcbmltcG9ydCB7IFNlZ21lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zZWdtZW50XCI7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbWVudVwiO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21lc3NhZ2VcIjtcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbW9kYWxcIjtcbmltcG9ydCB7IFBvcHVwQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvcG9wdXBcIjtcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3RhYlwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvY2FyZFwiO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2Zvcm1cIjtcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zaWRlYmFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIFx0ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICAgICAgc2VsZWN0b3I6IFwiYXBwXCIsXG5cdHRlbXBsYXRlVXJsOiBcIi4vYXBwL2NvbXBvbmVudHMvYXBwLmh0bWxcIlxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHsgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBwYXRoOiBcIi9cIiwgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXG5cdHsgY29tcG9uZW50OiBMb2FkZXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2xvYWRlclwiIH0sXG5cdHsgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9saXN0XCIgfSxcblx0eyBjb21wb25lbnQ6IEZvcm1Db21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2Zvcm1cIiB9LFxuXHR7IGNvbXBvbmVudDogQ2FyZENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvY2FyZFwiIH0sXG5cdHsgY29tcG9uZW50OiBTZWdtZW50Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9zZWdtZW50XCIgfSxcblx0eyBjb21wb25lbnQ6IE1lbnVDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL21lbnVcIiB9LFxuXHR7IGNvbXBvbmVudDogTWVzc2FnZUNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbWVzc2FnZVwiIH0sXG5cdHsgY29tcG9uZW50OiBNb2RhbENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbW9kYWxcIiB9LFxuXHR7IGNvbXBvbmVudDogUG9wdXBDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3BvcHVwXCIgfSxcblx0eyBjb21wb25lbnQ6IFNpZGViYXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3NpZGViYXJcIiB9LFxuXHR7IGNvbXBvbmVudDogVGFiQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy90YWJcIiB9LFxuXHR7IGNvbXBvbmVudDogQnV0dG9uQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9idXR0b25cIiB9LFxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0alF1ZXJ5KFwiI3BhZ2UgLmZ1bGwuaGVpZ2h0XCIpLmNzcyhcImhlaWdodFwiLCBqUXVlcnkod2luZG93KS5oZWlnaHQoKSArIFwicHhcIik7XG5cdH1cbn1cbiJdfQ==