System.register(["angular2/core", "angular2/router", "./home/home", "./elements/loader", "./elements/list", "./elements/segment", "./elements/menu", "./elements/message", "./elements/modal", "./elements/popup", "./elements/tab", "./elements/button", "./elements/card", "./elements/form", "./elements/sidebar", "./elements/dimmer", "./elements/progress", "./elements/flag", "./elements/accordion"], function(exports_1, context_1) {
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
                    router_1.RouteConfig([
                        { component: home_1.HomeComponent, path: "/", useAsDefault: true },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThDQTtnQkFBQTtnQkFXQSxDQUFDO2dCQVZBLHNDQUFlLEdBQWY7b0JBRUMsSUFBTSxPQUFPLEdBQUc7d0JBQ2YsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQzVFLENBQUMsQ0FBQztvQkFDRixPQUFPLEVBQUUsQ0FBQztvQkFDVixNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVMsS0FBSzt3QkFDL0IsT0FBTyxFQUFFLENBQUM7b0JBQ1gsQ0FBQyxDQUFDO2dCQUNILENBQUM7Z0JBbkNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ04sVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQzVCLFFBQVEsRUFBRSxLQUFLO3dCQUNyQixXQUFXLEVBQUUsMkJBQTJCO3FCQUN6QyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1osRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQzNELEVBQUUsU0FBUyxFQUFFLHdCQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO3dCQUN4RCxFQUFFLFNBQVMsRUFBRSw4QkFBa0IsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7d0JBQzlELEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNwRCxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDcEQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLDBCQUFnQixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTt3QkFDMUQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLDBCQUFnQixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTt3QkFDMUQsRUFBRSxTQUFTLEVBQUUsd0JBQWUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7d0JBQ3hELEVBQUUsU0FBUyxFQUFFLDRCQUFpQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTt3QkFDNUQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLHNCQUFjLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO3dCQUN0RCxFQUFFLFNBQVMsRUFBRSxzQkFBYyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTt3QkFDdEQsRUFBRSxTQUFTLEVBQUUsMEJBQWdCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO3dCQUMxRCxFQUFFLFNBQVMsRUFBRSxrQkFBWSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7d0JBQ2xELEVBQUUsU0FBUyxFQUFFLHdCQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO3FCQUN4RCxDQUFDOztnQ0FBQTtnQkFhRixtQkFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsdUNBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZyB9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcclxuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbG9hZGVyXCI7XHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9saXN0XCI7XHJcbmltcG9ydCB7IFNlZ21lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zZWdtZW50XCI7XHJcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9tZW51XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9tZXNzYWdlXCI7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbW9kYWxcIjtcclxuaW1wb3J0IHsgUG9wdXBDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9wb3B1cFwiO1xyXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy90YWJcIjtcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9jYXJkXCI7XHJcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9mb3JtXCI7XHJcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zaWRlYmFyXCI7XHJcbmltcG9ydCB7IERpbW1lckNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2RpbW1lclwiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3Byb2dyZXNzXCI7XHJcbmltcG9ydCB7IEZsYWdDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9mbGFnXCI7XHJcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2FjY29yZGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBcdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICAgICAgc2VsZWN0b3I6IFwiYXBwXCIsXHJcblx0XHR0ZW1wbGF0ZVVybDogXCIuL2FwcC9jb21wb25lbnRzL2FwcC5odG1sXCJcclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgcGF0aDogXCIvXCIsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG5cdHsgY29tcG9uZW50OiBMb2FkZXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2xvYWRlclwiIH0sXHJcblx0eyBjb21wb25lbnQ6IEFjY29yZGlvbkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvYWNjb3JkaW9uXCIgfSxcclxuXHR7IGNvbXBvbmVudDogTGlzdENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbGlzdFwiIH0sXHJcblx0eyBjb21wb25lbnQ6IEZvcm1Db21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2Zvcm1cIiB9LFxyXG5cdHsgY29tcG9uZW50OiBDYXJkQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9jYXJkXCIgfSxcclxuXHR7IGNvbXBvbmVudDogU2VnbWVudENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvc2VnbWVudFwiIH0sXHJcblx0eyBjb21wb25lbnQ6IE1lbnVDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL21lbnVcIiB9LFxyXG5cdHsgY29tcG9uZW50OiBNZXNzYWdlQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tZXNzYWdlXCIgfSxcclxuXHR7IGNvbXBvbmVudDogRGltbWVyQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9kaW1tZXJcIiB9LFxyXG5cdHsgY29tcG9uZW50OiBQcm9ncmVzc0NvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvcHJvZ3Jlc3NcIiB9LFxyXG5cdHsgY29tcG9uZW50OiBGbGFnQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9mbGFnXCIgfSxcclxuXHR7IGNvbXBvbmVudDogTW9kYWxDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL21vZGFsXCIgfSxcclxuXHR7IGNvbXBvbmVudDogUG9wdXBDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3BvcHVwXCIgfSxcclxuXHR7IGNvbXBvbmVudDogU2lkZWJhckNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvc2lkZWJhclwiIH0sXHJcblx0eyBjb21wb25lbnQ6IFRhYkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvdGFiXCIgfSxcclxuXHR7IGNvbXBvbmVudDogQnV0dG9uQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9idXR0b25cIiB9LFxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHJcblx0XHRjb25zdCBfcmVzaXplID0gKCk6IGFueSA9PiB7XHJcblx0XHRcdGpRdWVyeShcIiNwYWdlIC5mdWxsLmhlaWdodFwiKS5jc3MoXCJoZWlnaHRcIiwgalF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgKyBcInB4XCIpO1xyXG5cdFx0fTtcclxuXHRcdF9yZXNpemUoKTtcclxuXHRcdHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KTogYW55IHtcclxuXHRcdFx0X3Jlc2l6ZSgpO1xyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuIl19