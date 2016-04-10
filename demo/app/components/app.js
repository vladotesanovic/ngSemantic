System.register(["angular2/core", "angular2/router", "./home/home", "./elements/loader", "./elements/list", "./elements/segment", "./elements/menu", "./elements/message", "./elements/modal", "./elements/popup", "./elements/tab", "./elements/button", "./elements/card", "./elements/form", "./elements/sidebar", "./elements/dimmer", "./elements/progress", "./elements/flag"], function(exports_1, context_1) {
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
    var core_1, router_1, home_1, loader_1, list_1, segment_1, menu_1, message_1, modal_1, popup_1, tab_1, button_1, card_1, form_1, sidebar_1, dimmer_1, progress_1, flag_1;
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
            },
            function (dimmer_1_1) {
                dimmer_1 = dimmer_1_1;
            },
            function (progress_1_1) {
                progress_1 = progress_1_1;
            },
            function (flag_1_1) {
                flag_1 = flag_1_1;
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
                        { component: dimmer_1.DimmerComponent, path: "/elements/dimmer" },
                        { component: progress_1.ProgressComponent, path: "/elements/progress" },
                        { component: flag_1.FlagComponent, path: "/elements/flag" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRDQTtnQkFBQTtnQkFJQSxDQUFDO2dCQUhBLHNDQUFlLEdBQWY7b0JBQ0MsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzVFLENBQUM7Z0JBM0JGO29CQUFDLGdCQUFTLENBQUM7d0JBQ04sVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQzVCLFFBQVEsRUFBRSxLQUFLO3dCQUNyQixXQUFXLEVBQUUsMkJBQTJCO3FCQUN6QyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1osRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQzNELEVBQUUsU0FBUyxFQUFFLHdCQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO3dCQUN4RCxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDcEQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNwRCxFQUFFLFNBQVMsRUFBRSwwQkFBZ0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7d0JBQzFELEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNwRCxFQUFFLFNBQVMsRUFBRSwwQkFBZ0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7d0JBQzFELEVBQUUsU0FBUyxFQUFFLHdCQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO3dCQUN4RCxFQUFFLFNBQVMsRUFBRSw0QkFBaUIsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7d0JBQzVELEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNwRCxFQUFFLFNBQVMsRUFBRSxzQkFBYyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTt3QkFDdEQsRUFBRSxTQUFTLEVBQUUsc0JBQWMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7d0JBQ3RELEVBQUUsU0FBUyxFQUFFLDBCQUFnQixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTt3QkFDMUQsRUFBRSxTQUFTLEVBQUUsa0JBQVksRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO3dCQUNsRCxFQUFFLFNBQVMsRUFBRSx3QkFBZSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtxQkFDeEQsQ0FBQzs7Z0NBQUE7Z0JBTUYsbUJBQUM7WUFBRCxDQUFDLEFBSkQsSUFJQztZQUpELHVDQUlDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcgfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lXCI7XHJcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2xvYWRlclwiO1xyXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbGlzdFwiO1xyXG5pbXBvcnQgeyBTZWdtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvc2VnbWVudFwiO1xyXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbWVudVwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21vZGFsXCI7XHJcbmltcG9ydCB7IFBvcHVwQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvcG9wdXBcIjtcclxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvdGFiXCI7XHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvY2FyZFwiO1xyXG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvZm9ybVwiO1xyXG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvc2lkZWJhclwiO1xyXG5pbXBvcnQgeyBEaW1tZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9kaW1tZXJcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9wcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyBGbGFnQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvZmxhZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBcdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICAgICAgc2VsZWN0b3I6IFwiYXBwXCIsXHJcblx0XHR0ZW1wbGF0ZVVybDogXCIuL2FwcC9jb21wb25lbnRzL2FwcC5odG1sXCJcclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgcGF0aDogXCIvXCIsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG5cdHsgY29tcG9uZW50OiBMb2FkZXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2xvYWRlclwiIH0sXHJcblx0eyBjb21wb25lbnQ6IExpc3RDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2xpc3RcIiB9LFxyXG5cdHsgY29tcG9uZW50OiBGb3JtQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9mb3JtXCIgfSxcclxuXHR7IGNvbXBvbmVudDogQ2FyZENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvY2FyZFwiIH0sXHJcblx0eyBjb21wb25lbnQ6IFNlZ21lbnRDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3NlZ21lbnRcIiB9LFxyXG5cdHsgY29tcG9uZW50OiBNZW51Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tZW51XCIgfSxcclxuXHR7IGNvbXBvbmVudDogTWVzc2FnZUNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbWVzc2FnZVwiIH0sXHJcblx0eyBjb21wb25lbnQ6IERpbW1lckNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvZGltbWVyXCIgfSxcclxuXHR7IGNvbXBvbmVudDogUHJvZ3Jlc3NDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3Byb2dyZXNzXCIgfSxcclxuXHR7IGNvbXBvbmVudDogRmxhZ0NvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvZmxhZ1wiIH0sXHJcblx0eyBjb21wb25lbnQ6IE1vZGFsQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tb2RhbFwiIH0sXHJcblx0eyBjb21wb25lbnQ6IFBvcHVwQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9wb3B1cFwiIH0sXHJcblx0eyBjb21wb25lbnQ6IFNpZGViYXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3NpZGViYXJcIiB9LFxyXG5cdHsgY29tcG9uZW50OiBUYWJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3RhYlwiIH0sXHJcblx0eyBjb21wb25lbnQ6IEJ1dHRvbkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvYnV0dG9uXCIgfSxcclxuXSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHRqUXVlcnkoXCIjcGFnZSAuZnVsbC5oZWlnaHRcIikuY3NzKFwiaGVpZ2h0XCIsIGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpICsgXCJweFwiKTtcclxuXHR9XHJcbn1cclxuIl19