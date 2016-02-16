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
require("semantic-ui/dist/components/sidebar.min");
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
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }
        jQuery(".ui.sidebar." + this.data)
            .fixSidebar()
            .sidebar({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZGViYXIudHMiXSwibmFtZXMiOlsiU2VtYW50aWNTaWRlYmFyIiwiU2VtYW50aWNTaWRlYmFyLmNvbnN0cnVjdG9yIiwiU01TaWRlYmFyRGlyZWN0aXZlIiwiU01TaWRlYmFyRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiU01TaWRlYmFyRGlyZWN0aXZlLnRvZ2dsZVNpZGViYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLHFCQUEyRSxlQUFlLENBQUMsQ0FBQTtBQUMzRixRQUFPLHlDQUF5QyxDQUFDLENBQUE7QUFJakQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUc7SUFDbkIsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTlCLFVBQVU7U0FDTCxJQUFJLENBQUM7UUFDRixJQUNJLFFBQVEsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFDaEMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFDckIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBT0Y7SUFBQUE7SUFVQUMsQ0FBQ0E7SUFER0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O09BQUNBLGtDQUFLQSxVQUFTQTtJQVRsQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDL0NBLFFBQVFBLEVBQUVBLFlBQVlBO1NBQ3pCQSxDQUFDQTtRQUVEQSxXQUFJQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSxxRUFBbUVBO1NBQ2hGQSxDQUFDQTs7d0JBR0RBO0lBQURBLHNCQUFDQTtBQUFEQSxDQUFDQSxBQVZELElBVUM7QUFGWSx1QkFBZSxrQkFFM0IsQ0FBQTtBQU9EO0lBQUFFO0lBNEJBQyxDQUFDQTtJQWZHRCwwQ0FBYUEsR0FBYkE7UUFDSUUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsTUFBTUEsS0FBS0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaENBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7WUFDcENBLE1BQU1BLENBQUNBO1FBQ1hBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO2FBQzdCQSxVQUFVQSxFQUFFQTthQUNaQSxPQUFPQSxDQUFDQTtZQUNMQSxVQUFVQSxFQUFFQSxTQUFTQTtZQUNyQkEsT0FBT0EsRUFBRUEsS0FBS0E7U0FDakJBLENBQUNBO2FBQ0RBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO0lBQzNCQSxDQUFDQTtJQTFCTEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLElBQUlBLEVBQUVBO2dCQUNGQSxTQUFTQSxFQUFFQSxpQkFBaUJBO2FBQy9CQTtZQUNEQSxNQUFNQSxFQUFFQTtnQkFDSkEsc0JBQXNCQTthQUN6QkE7WUFDREEsUUFBUUEsRUFBRUEsa0JBQWtCQTtTQUMvQkEsQ0FBQ0E7OzJCQW9CREE7SUFBREEseUJBQUNBO0FBQURBLENBQUNBLEFBNUJELElBNEJDO0FBbkJZLDBCQUFrQixxQkFtQjlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIERpcmVjdGl2ZSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS9kaXN0L2NvbXBvbmVudHMvc2lkZWJhci5taW5cIjtcblxuLy8gQmVjYXVzZSBhIG9mIGxvdCBvZiBzaGFkb3cgZG9tIGVsZW1lbnRzLCB3ZSBtdXN0IGNyZWF0ZSB0aGlzIGZpeFNpZGViYXJcbi8vIGZ1bmN0aW9uLCB0byBtb3ZlIGVsZW1lbnRzIHRvIHByb3BlciBsb2NhdGlvbiBiZWZvcmUgc2lkZWJhciBydW4uXG5qUXVlcnkuZm4uZml4U2lkZWJhciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhbGxNb2R1bGVzID0galF1ZXJ5KHRoaXMpO1xuXG4gICAgYWxsTW9kdWxlc1xuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0geyBwdXNoZXI6ICcucHVzaGVyJyB9LFxuICAgICAgICAgICAgICAgIG1vZHVsZSA9IGpRdWVyeSh0aGlzKSxcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0galF1ZXJ5KCdib2R5Jyk7XG5cbiAgICAgICAgICAgIGlmIChtb2R1bGUubmV4dEFsbChzZWxlY3Rvci5wdXNoZXIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5kZXRhY2goKS5wcmVwZW5kVG8oY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIFNpZGViYXIgbW9kdWxlXG4gKiBcbiAqIEBsaW5rIHNlbWFudGljLXVpLmNvbS9tb2R1bGVzL3NpZGViYXIuaHRtbFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBzZWxlY3RvcjogXCJzbS1zaWRlYmFyXCJcbn0pXG5cbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1aSBzaWRlYmFyIHt7Y2xhc3N9fVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljU2lkZWJhciB7XG4gICAgQElucHV0KFwiY2xhc3NcIikgY2xhc3M6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgd2hjaWggdHJpZ2dlciBzaWRlYmFyXG4gKiBcbiAqIEBsaW5rIHNlbWFudGljLXVpLmNvbS9tb2R1bGVzL3NpZGViYXIuaHRtbFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNsaWNrKVwiOiBcInRvZ2dsZVNpZGViYXIoKVwiXG4gICAgfSxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgXCJkYXRhOiBzbS1kaXItc2lkZWJhclwiXG4gICAgXSxcbiAgICBzZWxlY3RvcjogXCJbc20tZGlyLXNpZGViYXJdXCJcbn0pXG5leHBvcnQgY2xhc3MgU01TaWRlYmFyRGlyZWN0aXZlIHtcblxuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG5cbiAgICB0b2dnbGVTaWRlYmFyKCkge1xuICAgICAgICBpZiAodHlwZW9mIGpRdWVyeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJqUXVlcnkgaXMgbm90IGxvYWRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeShcIi51aS5zaWRlYmFyLlwiICsgdGhpcy5kYXRhKVxuICAgICAgICAgICAgLmZpeFNpZGViYXIoKVxuICAgICAgICAgICAgLnNpZGViYXIoe1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwib3ZlcmxheVwiLFxuICAgICAgICAgICAgICAgIHZlcmJvc2U6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNpZGViYXIoXCJ0b2dnbGVcIik7XG4gICAgfVxuXG59XG4iXX0=