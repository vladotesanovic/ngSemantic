System.register(["@angular/core", "@angular/router", "./home/home", "./elements/loader", "./elements/list", "./elements/segment", "./elements/menu", "./elements/message", "./elements/modal", "./elements/popup", "./elements/tab", "./elements/button", "./elements/card", "./elements/form", "./elements/sidebar", "./elements/dimmer", "./elements/progress", "./elements/flag", "./elements/accordion"], function(exports_1, context_1) {
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
    var core_1, router_1, home_1, loader_1, list_1, segment_1, menu_1, message_1, modal_1, popup_1, tab_1, button_1, card_1, form_1, sidebar_1, dimmer_1, progress_1, flag_1, accordion_1;
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
            },
            function (accordion_1_1) {
                accordion_1 = accordion_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    var _resize = function () {
                        jQuery("#page .full.height").css("height", jQuery(window).height() + "px");
                    };
                    _resize();
                    window.onresize = function (event) {
                        _resize();
                    };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: "app",
                        templateUrl: "./app/components/app.html"
                    }),
                    router_1.Routes([
                        { component: home_1.HomeComponent, path: "/" },
                        { component: loader_1.LoaderComponent, path: "/elements/loader" },
                        { component: accordion_1.AccordionComponent, path: "/elements/accordion" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOENBO2dCQUFBO2dCQVdBLENBQUM7Z0JBVkEsc0NBQWUsR0FBZjtvQkFFQyxJQUFNLE9BQU8sR0FBRzt3QkFDZixNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDNUUsQ0FBQyxDQUFDO29CQUNGLE9BQU8sRUFBRSxDQUFDO29CQUNWLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBUyxLQUFLO3dCQUMvQixPQUFPLEVBQUUsQ0FBQztvQkFDWCxDQUFDLENBQUM7Z0JBQ0gsQ0FBQztnQkFuQ0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDTixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDNUIsUUFBUSxFQUFFLEtBQUs7d0JBQ3JCLFdBQVcsRUFBRSwyQkFBMkI7cUJBQ3pDLENBQUM7b0JBQ0QsZUFBTSxDQUFDO3dCQUNQLEVBQUUsU0FBUyxFQUFRLG9CQUFhLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTt3QkFDN0MsRUFBRSxTQUFTLEVBQVEsd0JBQWUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7d0JBQzlELEVBQUUsU0FBUyxFQUFRLDhCQUFrQixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTt3QkFDcEUsRUFBRSxTQUFTLEVBQVEsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQzFELEVBQUUsU0FBUyxFQUFRLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUMxRCxFQUFFLFNBQVMsRUFBUSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDMUQsRUFBRSxTQUFTLEVBQVEsMEJBQWdCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO3dCQUNoRSxFQUFFLFNBQVMsRUFBUSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDMUQsRUFBRSxTQUFTLEVBQVEsMEJBQWdCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO3dCQUNoRSxFQUFFLFNBQVMsRUFBUSx3QkFBZSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTt3QkFDOUQsRUFBRSxTQUFTLEVBQVEsNEJBQWlCLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO3dCQUNsRSxFQUFFLFNBQVMsRUFBUSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDMUQsRUFBRSxTQUFTLEVBQVEsc0JBQWMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7d0JBQzVELEVBQUUsU0FBUyxFQUFRLHNCQUFjLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO3dCQUM1RCxFQUFFLFNBQVMsRUFBUSwwQkFBZ0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7d0JBQ2hFLEVBQUUsU0FBUyxFQUFRLGtCQUFZLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTt3QkFDeEQsRUFBRSxTQUFTLEVBQVEsd0JBQWUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7cUJBQzlELENBQUM7O2dDQUFBO2dCQWFGLG1CQUFDO1lBQUQsQ0FBQyxBQVhELElBV0M7WUFYRCx1Q0FXQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2xvYWRlclwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2xpc3RcIjtcbmltcG9ydCB7IFNlZ21lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zZWdtZW50XCI7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbWVudVwiO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21lc3NhZ2VcIjtcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbW9kYWxcIjtcbmltcG9ydCB7IFBvcHVwQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvcG9wdXBcIjtcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3RhYlwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvY2FyZFwiO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2Zvcm1cIjtcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zaWRlYmFyXCI7XG5pbXBvcnQgeyBEaW1tZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9kaW1tZXJcIjtcbmltcG9ydCB7IFByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvcHJvZ3Jlc3NcIjtcbmltcG9ydCB7IEZsYWdDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9mbGFnXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9hY2NvcmRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgXHRkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgICAgICBzZWxlY3RvcjogXCJhcHBcIixcblx0XHR0ZW1wbGF0ZVVybDogXCIuL2FwcC9jb21wb25lbnRzL2FwcC5odG1sXCJcbn0pXG5AUm91dGVzKFtcblx0eyBjb21wb25lbnQ6IDxUeXBlPkhvbWVDb21wb25lbnQsIHBhdGg6IFwiL1wiIH0sXG5cdHsgY29tcG9uZW50OiA8VHlwZT5Mb2FkZXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2xvYWRlclwiIH0sXG5cdHsgY29tcG9uZW50OiA8VHlwZT5BY2NvcmRpb25Db21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2FjY29yZGlvblwiIH0sXG5cdHsgY29tcG9uZW50OiA8VHlwZT5MaXN0Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9saXN0XCIgfSxcblx0eyBjb21wb25lbnQ6IDxUeXBlPkZvcm1Db21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2Zvcm1cIiB9LFxuXHR7IGNvbXBvbmVudDogPFR5cGU+Q2FyZENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvY2FyZFwiIH0sXG5cdHsgY29tcG9uZW50OiA8VHlwZT5TZWdtZW50Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9zZWdtZW50XCIgfSxcblx0eyBjb21wb25lbnQ6IDxUeXBlPk1lbnVDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL21lbnVcIiB9LFxuXHR7IGNvbXBvbmVudDogPFR5cGU+TWVzc2FnZUNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbWVzc2FnZVwiIH0sXG5cdHsgY29tcG9uZW50OiA8VHlwZT5EaW1tZXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2RpbW1lclwiIH0sXG5cdHsgY29tcG9uZW50OiA8VHlwZT5Qcm9ncmVzc0NvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvcHJvZ3Jlc3NcIiB9LFxuXHR7IGNvbXBvbmVudDogPFR5cGU+RmxhZ0NvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvZmxhZ1wiIH0sXG5cdHsgY29tcG9uZW50OiA8VHlwZT5Nb2RhbENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbW9kYWxcIiB9LFxuXHR7IGNvbXBvbmVudDogPFR5cGU+UG9wdXBDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3BvcHVwXCIgfSxcblx0eyBjb21wb25lbnQ6IDxUeXBlPlNpZGViYXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3NpZGViYXJcIiB9LFxuXHR7IGNvbXBvbmVudDogPFR5cGU+VGFiQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy90YWJcIiB9LFxuXHR7IGNvbXBvbmVudDogPFR5cGU+QnV0dG9uQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9idXR0b25cIiB9LFxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cblx0XHRjb25zdCBfcmVzaXplID0gKCk6IGFueSA9PiB7XG5cdFx0XHRqUXVlcnkoXCIjcGFnZSAuZnVsbC5oZWlnaHRcIikuY3NzKFwiaGVpZ2h0XCIsIGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpICsgXCJweFwiKTtcblx0XHR9O1xuXHRcdF9yZXNpemUoKTtcblx0XHR3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbihldmVudCk6IGFueSB7XG5cdFx0XHRfcmVzaXplKCk7XG5cdFx0fTtcblx0fVxufVxuIl19