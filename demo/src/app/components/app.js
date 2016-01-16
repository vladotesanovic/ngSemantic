var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var home_1 = require("./home/home");
var loader_1 = require("./elements/loader");
var list_1 = require("./elements/list");
var segment_1 = require("./elements/segment");
var menu_1 = require("./elements/menu");
var message_1 = require("./elements/message");
var modal_1 = require("./elements/modal");
var popup_1 = require("./elements/popup");
var tab_1 = require("./elements/tab");
var AppComponent = (function () {
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
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDb21wb25lbnQiLCJBcHBDb21wb25lbnQuY29uc3RydWN0b3IiLCJBcHBDb21wb25lbnQubmdBZnRlclZpZXdJbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBK0MsZUFBZSxDQUFDLENBQUE7QUFDL0QsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFFakUscUJBQThCLGFBQWEsQ0FBQyxDQUFBO0FBQzVDLHVCQUFnQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BELHFCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUFpQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3RELHFCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUFpQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3RELHNCQUErQixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2xELHNCQUErQixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2xELG9CQUE2QixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTlDO0lBQUFBO0lBdUJDQyxDQUFDQTtJQUhERCxzQ0FBZUEsR0FBZkE7UUFDQ0UsTUFBTUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUM1RUEsQ0FBQ0E7SUF0QkZGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTtTQUNmQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNMQSxVQUFVQSxFQUFFQSxDQUFFQSwwQkFBaUJBLENBQUNBO1lBQ2hDQSxXQUFXQSxFQUFHQSwyQkFBMkJBO1NBQ3pDQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWkEsRUFBRUEsU0FBU0EsRUFBRUEsb0JBQWFBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBO1lBQ3ZDQSxFQUFFQSxTQUFTQSxFQUFFQSx3QkFBZUEsRUFBRUEsSUFBSUEsRUFBRUEsa0JBQWtCQSxFQUFFQTtZQUN4REEsRUFBRUEsU0FBU0EsRUFBRUEsb0JBQWFBLEVBQUVBLElBQUlBLEVBQUVBLGdCQUFnQkEsRUFBRUE7WUFDcERBLEVBQUVBLFNBQVNBLEVBQUVBLDBCQUFnQkEsRUFBRUEsSUFBSUEsRUFBRUEsbUJBQW1CQSxFQUFFQTtZQUMxREEsRUFBRUEsU0FBU0EsRUFBRUEsb0JBQWFBLEVBQUVBLElBQUlBLEVBQUVBLGdCQUFnQkEsRUFBRUE7WUFDcERBLEVBQUVBLFNBQVNBLEVBQUVBLDBCQUFnQkEsRUFBRUEsSUFBSUEsRUFBRUEsbUJBQW1CQSxFQUFFQTtZQUMxREEsRUFBRUEsU0FBU0EsRUFBRUEsc0JBQWNBLEVBQUVBLElBQUlBLEVBQUVBLGlCQUFpQkEsRUFBRUE7WUFDdERBLEVBQUVBLFNBQVNBLEVBQUVBLHNCQUFjQSxFQUFFQSxJQUFJQSxFQUFFQSxpQkFBaUJBLEVBQUVBO1lBQ3REQSxFQUFFQSxTQUFTQSxFQUFFQSxrQkFBWUEsRUFBRUEsSUFBSUEsRUFBRUEsZUFBZUEsRUFBRUE7U0FDbERBLENBQUNBOztxQkFNQUE7SUFBREEsbUJBQUNBO0FBQURBLENBQUNBLEFBdkJGLElBdUJFO0FBSlcsb0JBQVksZUFJdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcgfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2xvYWRlclwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2xpc3RcIjtcbmltcG9ydCB7IFNlZ21lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9zZWdtZW50XCI7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbWVudVwiO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21lc3NhZ2VcIjtcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbW9kYWxcIjtcbmltcG9ydCB7IFBvcHVwQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvcG9wdXBcIjtcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3RhYlwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiYXBwXCJcbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFsgUk9VVEVSX0RJUkVDVElWRVNdLFxuXHR0ZW1wbGF0ZVVybCA6IFwiLi9hcHAvY29tcG9uZW50cy9hcHAuaHRtbFwiXG59KVxuQFJvdXRlQ29uZmlnKFtcblx0eyBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHBhdGg6IFwiL1wiIH0sXG5cdHsgY29tcG9uZW50OiBMb2FkZXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2xvYWRlclwiIH0sXG5cdHsgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9saXN0XCIgfSxcblx0eyBjb21wb25lbnQ6IFNlZ21lbnRDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL3NlZ21lbnRcIiB9LFxuXHR7IGNvbXBvbmVudDogTWVudUNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbWVudVwiIH0sXG5cdHsgY29tcG9uZW50OiBNZXNzYWdlQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tZXNzYWdlXCIgfSxcblx0eyBjb21wb25lbnQ6IE1vZGFsQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tb2RhbFwiIH0sXG5cdHsgY29tcG9uZW50OiBQb3B1cENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvcG9wdXBcIiB9LFxuXHR7IGNvbXBvbmVudDogVGFiQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy90YWJcIiB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRqUXVlcnkoXCIjcGFnZSAuZnVsbC5oZWlnaHRcIikuY3NzKFwiaGVpZ2h0XCIsIGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpICsgXCJweFwiKTtcblx0fVxuIH1cbiJdfQ==