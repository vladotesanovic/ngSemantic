System.register(["angular2/core", "angular2/router", "./home/home", "./elements/loader", "./elements/list", "./elements/segment", "./elements/menu", "./elements/message", "./elements/modal", "./elements/popup", "./elements/tab"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, loader_1, list_1, segment_1, menu_1, message_1, modal_1, popup_1, tab_1;
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
                        { component: tab_1.TabComponent, path: "/elements/tab" }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDb21wb25lbnQiLCJBcHBDb21wb25lbnQuY29uc3RydWN0b3IiLCJBcHBDb21wb25lbnQubmdBZnRlclZpZXdJbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQUE7Z0JBdUJDQyxDQUFDQTtnQkFIREQsc0NBQWVBLEdBQWZBO29CQUNDRSxNQUFNQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBO2dCQUM1RUEsQ0FBQ0E7Z0JBdEJGRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTtxQkFDZkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxVQUFVQSxFQUFFQSxDQUFFQSwwQkFBaUJBLENBQUNBO3dCQUNoQ0EsV0FBV0EsRUFBR0EsMkJBQTJCQTtxQkFDekNBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLFNBQVNBLEVBQUVBLG9CQUFhQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQTt3QkFDdkNBLEVBQUVBLFNBQVNBLEVBQUVBLHdCQUFlQSxFQUFFQSxJQUFJQSxFQUFFQSxrQkFBa0JBLEVBQUVBO3dCQUN4REEsRUFBRUEsU0FBU0EsRUFBRUEsb0JBQWFBLEVBQUVBLElBQUlBLEVBQUVBLGdCQUFnQkEsRUFBRUE7d0JBQ3BEQSxFQUFFQSxTQUFTQSxFQUFFQSwwQkFBZ0JBLEVBQUVBLElBQUlBLEVBQUVBLG1CQUFtQkEsRUFBRUE7d0JBQzFEQSxFQUFFQSxTQUFTQSxFQUFFQSxvQkFBYUEsRUFBRUEsSUFBSUEsRUFBRUEsZ0JBQWdCQSxFQUFFQTt3QkFDcERBLEVBQUVBLFNBQVNBLEVBQUVBLDBCQUFnQkEsRUFBRUEsSUFBSUEsRUFBRUEsbUJBQW1CQSxFQUFFQTt3QkFDMURBLEVBQUVBLFNBQVNBLEVBQUVBLHNCQUFjQSxFQUFFQSxJQUFJQSxFQUFFQSxpQkFBaUJBLEVBQUVBO3dCQUN0REEsRUFBRUEsU0FBU0EsRUFBRUEsc0JBQWNBLEVBQUVBLElBQUlBLEVBQUVBLGlCQUFpQkEsRUFBRUE7d0JBQ3REQSxFQUFFQSxTQUFTQSxFQUFFQSxrQkFBWUEsRUFBRUEsSUFBSUEsRUFBRUEsZUFBZUEsRUFBRUE7cUJBQ2xEQSxDQUFDQTs7aUNBTUFBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FBQ0EsQUF2QkYsSUF1QkU7WUF2QkYsdUNBdUJFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnIH0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lXCI7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9sb2FkZXJcIjtcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9saXN0XCI7XG5pbXBvcnQgeyBTZWdtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvc2VnbWVudFwiO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21lbnVcIjtcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9tZXNzYWdlXCI7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21vZGFsXCI7XG5pbXBvcnQgeyBQb3B1cENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy90YWJcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImFwcFwiXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbIFJPVVRFUl9ESVJFQ1RJVkVTXSxcblx0dGVtcGxhdGVVcmwgOiBcIi4vYXBwL2NvbXBvbmVudHMvYXBwLmh0bWxcIlxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHsgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBwYXRoOiBcIi9cIiB9LFxuXHR7IGNvbXBvbmVudDogTG9hZGVyQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9sb2FkZXJcIiB9LFxuXHR7IGNvbXBvbmVudDogTGlzdENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbGlzdFwiIH0sXG5cdHsgY29tcG9uZW50OiBTZWdtZW50Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9zZWdtZW50XCIgfSxcblx0eyBjb21wb25lbnQ6IE1lbnVDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL21lbnVcIiB9LFxuXHR7IGNvbXBvbmVudDogTWVzc2FnZUNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbWVzc2FnZVwiIH0sXG5cdHsgY29tcG9uZW50OiBNb2RhbENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbW9kYWxcIiB9LFxuXHR7IGNvbXBvbmVudDogUG9wdXBDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3BvcHVwXCIgfSxcblx0eyBjb21wb25lbnQ6IFRhYkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvdGFiXCIgfVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0alF1ZXJ5KFwiI3BhZ2UgLmZ1bGwuaGVpZ2h0XCIpLmNzcyhcImhlaWdodFwiLCBqUXVlcnkod2luZG93KS5oZWlnaHQoKSArIFwicHhcIik7XG5cdH1cbiB9XG4iXX0=