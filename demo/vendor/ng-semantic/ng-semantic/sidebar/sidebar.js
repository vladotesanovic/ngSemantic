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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZGViYXIudHMiXSwibmFtZXMiOlsiU2VtYW50aWNTaWRlYmFyIiwiU2VtYW50aWNTaWRlYmFyLmNvbnN0cnVjdG9yIiwiU01TaWRlYmFyRGlyZWN0aXZlIiwiU01TaWRlYmFyRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiU01TaWRlYmFyRGlyZWN0aXZlLnRvZ2dsZVNpZGViYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLHFCQUEyRSxlQUFlLENBQUMsQ0FBQTtBQUMzRixRQUFPLHNCQUFzQixDQUFDLENBQUE7QUFFOUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUc7SUFDbkIsSUFBSSxVQUFVLEdBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWxDLFVBQVU7U0FDTCxJQUFJLENBQUM7UUFDRixJQUNJLFFBQVEsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFDaEMsTUFBTSxHQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFDdkIsT0FBTyxHQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBR0Y7SUFBQUE7SUFVQUMsQ0FBQ0E7SUFEQ0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O09BQUNBLGtDQUFLQSxVQUFTQTtJQVRoQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDL0NBLFFBQVFBLEVBQUVBLFlBQVlBO1NBQ3ZCQSxDQUFDQTtRQUVEQSxXQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSxxRUFBbUVBO1NBQzlFQSxDQUFDQTs7d0JBR0RBO0lBQURBLHNCQUFDQTtBQUFEQSxDQUFDQSxBQVZELElBVUM7QUFGWSx1QkFBZSxrQkFFM0IsQ0FBQTtBQUVEO0lBQUFFO0lBMkJBQyxDQUFDQTtJQWRHRCwwQ0FBYUEsR0FBYkE7UUFFSUUsTUFBTUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7YUFDN0JBLFVBQVVBLEVBQUVBO2FBQ1pBLE9BQU9BLENBQUNBO1lBQ0xBLEtBQUtBLEVBQUVBO2dCQUNIQSxZQUFZQSxFQUFFQSxpQkFBaUJBO2FBQ2xDQTtZQUNEQSxVQUFVQSxFQUFFQSxTQUFTQTtZQUNyQkEsT0FBT0EsRUFBRUEsS0FBS0E7U0FDakJBLENBQUNBO2FBQ0RBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO0lBQzNCQSxDQUFDQTtJQXpCTEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLElBQUlBLEVBQUVBO2dCQUNGQSxTQUFTQSxFQUFFQSxpQkFBaUJBO2FBQy9CQTtZQUNEQSxNQUFNQSxFQUFFQTtnQkFDSkEsc0JBQXNCQTthQUN6QkE7WUFDREEsUUFBUUEsRUFBRUEsa0JBQWtCQTtTQUMvQkEsQ0FBQ0E7OzJCQW1CREE7SUFBREEseUJBQUNBO0FBQURBLENBQUNBLEFBM0JELElBMkJDO0FBbEJZLDBCQUFrQixxQkFrQjlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRGlyZWN0aXZlIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCBcInNlbWFudGljL3NpZGViYXIubWluXCI7XG5cbmpRdWVyeS5mbi5maXhTaWRlYmFyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFsbE1vZHVsZXMgICAgID0galF1ZXJ5KHRoaXMpO1xuXG4gICAgYWxsTW9kdWxlc1xuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0geyBwdXNoZXI6ICcucHVzaGVyJyB9LFxuICAgICAgICAgICAgICAgIG1vZHVsZSAgID0galF1ZXJ5KHRoaXMpLFxuICAgICAgICAgICAgICAgIGNvbnRleHQgID0galF1ZXJ5KCdib2R5Jyk7XG5cbiAgICAgICAgICAgIGlmKG1vZHVsZS5uZXh0QWxsKHNlbGVjdG9yLnB1c2hlcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmRldGFjaCgpLnByZXBlbmRUbyhjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogXCJzbS1zaWRlYmFyXCJcbn0pXG5cbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWkgc2lkZWJhciB7e2NsYXNzfX1cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1NpZGViYXIge1xuICBASW5wdXQoXCJjbGFzc1wiKSBjbGFzczogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNsaWNrKVwiOiBcInRvZ2dsZVNpZGViYXIoKVwiXG4gICAgfSxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgXCJkYXRhOiBzbS1kaXItc2lkZWJhclwiXG4gICAgXSxcbiAgICBzZWxlY3RvcjogXCJbc20tZGlyLXNpZGViYXJdXCJcbn0pXG5leHBvcnQgY2xhc3MgU01TaWRlYmFyRGlyZWN0aXZlIHtcblxuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG5cbiAgICB0b2dnbGVTaWRlYmFyKCkge1xuXG4gICAgICAgIGpRdWVyeShcIi51aS5zaWRlYmFyLlwiICsgdGhpcy5kYXRhKVxuICAgICAgICAgICAgLmZpeFNpZGViYXIoKVxuICAgICAgICAgICAgLnNpZGViYXIoe1xuICAgICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVkU2lkZWJhcjogXCJTaWRlYmFyIG1vdmluZy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJvdmVybGF5XCIsXG4gICAgICAgICAgICAgICAgdmVyYm9zZTogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2lkZWJhcihcInRvZ2dsZVwiKTtcbiAgICB9XG5cbn1cbiJdfQ==