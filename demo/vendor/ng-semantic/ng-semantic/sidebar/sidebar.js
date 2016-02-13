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
require("semantic/sidebar.min");
jQuery.fn.fixSidebar = function () {
    var allModules = jQuery(this);
    allModules
        .each(function () {
        var selector = { pusher: '.pusher' }, module = jQuery(this), context = jQuery('body');
        if (module.nextAll(selector.pusher).length === 0) {
            module.detach().prependTo(context);
        }
    });
    return this;
};
var SemanticSidebar = (function () {
    function SemanticSidebar() {
    }
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticSidebar.prototype, "class", void 0);
    SemanticSidebar = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-sidebar"
        }),
        core_1.View({
            template: "<div class=\"ui sidebar {{class}}\"><ng-content></ng-content></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticSidebar);
    return SemanticSidebar;
})();
exports.SemanticSidebar = SemanticSidebar;
var SMSidebarDirective = (function () {
    function SMSidebarDirective() {
    }
    SMSidebarDirective.prototype.toggleSidebar = function () {
        jQuery(".ui.sidebar." + this.data)
            .fixSidebar()
            .sidebar({
            error: {
                movedSidebar: "Sidebar moving."
            },
            transition: "overlay",
            verbose: false
        })
            .sidebar("toggle");
    };
    SMSidebarDirective = __decorate([
        core_1.Directive({
            host: {
                "(click)": "toggleSidebar()"
            },
            inputs: [
                "data: sm-dir-sidebar"
            ],
            selector: "[sm-dir-sidebar]"
        }), 
        __metadata('design:paramtypes', [])
    ], SMSidebarDirective);
    return SMSidebarDirective;
})();
exports.SMSidebarDirective = SMSidebarDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZGViYXIudHMiXSwibmFtZXMiOlsiU2VtYW50aWNTaWRlYmFyIiwiU2VtYW50aWNTaWRlYmFyLmNvbnN0cnVjdG9yIiwiU01TaWRlYmFyRGlyZWN0aXZlIiwiU01TaWRlYmFyRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiU01TaWRlYmFyRGlyZWN0aXZlLnRvZ2dsZVNpZGViYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLHFCQUEyRSxlQUFlLENBQUMsQ0FBQTtBQUMzRixRQUFPLHNCQUFzQixDQUFDLENBQUE7QUFFOUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUc7SUFDbkIsSUFBSSxVQUFVLEdBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWxDLFVBQVU7U0FDTCxJQUFJLENBQUM7UUFDRixJQUNJLFFBQVEsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFDaEMsTUFBTSxHQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFDdkIsT0FBTyxHQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBR0Y7SUFBQUE7SUFVQUMsQ0FBQ0E7SUFEQ0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O09BQUNBLGtDQUFLQSxVQUFTQTtJQVRoQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDL0NBLFFBQVFBLEVBQUVBLFlBQVlBO1NBQ3ZCQSxDQUFDQTtRQUVEQSxXQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSxxRUFBbUVBO1NBQzlFQSxDQUFDQTs7d0JBR0RBO0lBQURBLHNCQUFDQTtBQUFEQSxDQUFDQSxBQVZELElBVUM7QUFGWSx1QkFBZSxrQkFFM0IsQ0FBQTtBQUVEO0lBQUFFO0lBMkJBQyxDQUFDQTtJQWRHRCwwQ0FBYUEsR0FBYkE7UUFFSUUsTUFBTUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7YUFDN0JBLFVBQVVBLEVBQUVBO2FBQ1pBLE9BQU9BLENBQUNBO1lBQ0xBLEtBQUtBLEVBQUVBO2dCQUNIQSxZQUFZQSxFQUFFQSxpQkFBaUJBO2FBQ2xDQTtZQUNEQSxVQUFVQSxFQUFFQSxTQUFTQTtZQUNyQkEsT0FBT0EsRUFBRUEsS0FBS0E7U0FDakJBLENBQUNBO2FBQ0RBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO0lBQzNCQSxDQUFDQTtJQXpCTEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLElBQUlBLEVBQUVBO2dCQUNGQSxTQUFTQSxFQUFFQSxpQkFBaUJBO2FBQy9CQTtZQUNEQSxNQUFNQSxFQUFFQTtnQkFDSkEsc0JBQXNCQTthQUN6QkE7WUFDREEsUUFBUUEsRUFBRUEsa0JBQWtCQTtTQUMvQkEsQ0FBQ0E7OzJCQW1CREE7SUFBREEseUJBQUNBO0FBQURBLENBQUNBLEFBM0JELElBMkJDO0FBbEJZLDBCQUFrQixxQkFrQjlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIERpcmVjdGl2ZSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy9zaWRlYmFyLm1pblwiO1xuXG5qUXVlcnkuZm4uZml4U2lkZWJhciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhbGxNb2R1bGVzICAgICA9IGpRdWVyeSh0aGlzKTtcblxuICAgIGFsbE1vZHVsZXNcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHsgcHVzaGVyOiAnLnB1c2hlcicgfSxcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA9IGpRdWVyeSh0aGlzKSxcbiAgICAgICAgICAgICAgICBjb250ZXh0ICA9IGpRdWVyeSgnYm9keScpO1xuXG4gICAgICAgICAgICBpZihtb2R1bGUubmV4dEFsbChzZWxlY3Rvci5wdXNoZXIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5kZXRhY2goKS5wcmVwZW5kVG8oY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6IFwic20tc2lkZWJhclwiXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInVpIHNpZGViYXIge3tjbGFzc319XCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNTaWRlYmFyIHtcbiAgQElucHV0KFwiY2xhc3NcIikgY2xhc3M6IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgaG9zdDoge1xuICAgICAgICBcIihjbGljaylcIjogXCJ0b2dnbGVTaWRlYmFyKClcIlxuICAgIH0sXG4gICAgaW5wdXRzOiBbXG4gICAgICAgIFwiZGF0YTogc20tZGlyLXNpZGViYXJcIlxuICAgIF0sXG4gICAgc2VsZWN0b3I6IFwiW3NtLWRpci1zaWRlYmFyXVwiXG59KVxuZXhwb3J0IGNsYXNzIFNNU2lkZWJhckRpcmVjdGl2ZSB7XG5cbiAgICBwdWJsaWMgZGF0YTogYW55O1xuXG4gICAgdG9nZ2xlU2lkZWJhcigpIHtcblxuICAgICAgICBqUXVlcnkoXCIudWkuc2lkZWJhci5cIiArIHRoaXMuZGF0YSlcbiAgICAgICAgICAgIC5maXhTaWRlYmFyKClcbiAgICAgICAgICAgIC5zaWRlYmFyKHtcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlZFNpZGViYXI6IFwiU2lkZWJhciBtb3ZpbmcuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwib3ZlcmxheVwiLFxuICAgICAgICAgICAgICAgIHZlcmJvc2U6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNpZGViYXIoXCJ0b2dnbGVcIik7XG4gICAgfVxuXG59XG4iXX0=