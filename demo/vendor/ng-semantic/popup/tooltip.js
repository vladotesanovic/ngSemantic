System.register(["angular2/core", "semantic/popup.min", "semantic/transition.min"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SMTooltipDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            SMTooltipDirective = (function () {
                function SMTooltipDirective(element) {
                    this.element = element;
                }
                SMTooltipDirective.prototype.onMouseEnter = function () {
                    jQuery(this.element.nativeElement).popup({
                        content: this.text,
                        exclusive: true,
                        lastResort: true
                    }).popup("show");
                };
                SMTooltipDirective = __decorate([
                    core_1.Directive({
                        host: {
                            "(mouseenter)": "onMouseEnter()"
                        },
                        inputs: [
                            "text: sm-dir-tooltip"
                        ],
                        selector: "[sm-dir-tooltip]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SMTooltipDirective);
                return SMTooltipDirective;
            })();
            exports_1("SMTooltipDirective", SMTooltipDirective);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvb2x0aXAudHMiXSwibmFtZXMiOlsiU01Ub29sdGlwRGlyZWN0aXZlIiwiU01Ub29sdGlwRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiU01Ub29sdGlwRGlyZWN0aXZlLm9uTW91c2VFbnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFZSUEsNEJBQW1CQSxPQUFtQkE7b0JBQW5CQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFZQTtnQkFBSUEsQ0FBQ0E7Z0JBRTNDRCx5Q0FBWUEsR0FBWkE7b0JBRUlFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO3dCQUNyQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUE7d0JBQ2xCQSxTQUFTQSxFQUFFQSxJQUFJQTt3QkFDZkEsVUFBVUEsRUFBRUEsSUFBSUE7cUJBQ25CQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDckJBLENBQUNBO2dCQXJCTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsSUFBSUEsRUFBRUE7NEJBQ0ZBLGNBQWNBLEVBQUVBLGdCQUFnQkE7eUJBQ25DQTt3QkFDREEsTUFBTUEsRUFBRUE7NEJBQ0pBLHNCQUFzQkE7eUJBQ3pCQTt3QkFDREEsUUFBUUEsRUFBRUEsa0JBQWtCQTtxQkFDL0JBLENBQUNBOzt1Q0FjREE7Z0JBQURBLHlCQUFDQTtZQUFEQSxDQUFDQSxBQXRCRCxJQXNCQztZQXRCRCxtREFzQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy9wb3B1cC5taW5cIjtcbmltcG9ydCBcInNlbWFudGljL3RyYW5zaXRpb24ubWluXCI7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgU2VtYW50aWMgVUkgcG9wdXBcbiAqXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvcG9wdXAuaHRtbFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKG1vdXNlZW50ZXIpXCI6IFwib25Nb3VzZUVudGVyKClcIlxuICAgIH0sXG4gICAgaW5wdXRzOiBbXG4gICAgICAgIFwidGV4dDogc20tZGlyLXRvb2x0aXBcIlxuICAgIF0sXG4gICAgc2VsZWN0b3I6IFwiW3NtLWRpci10b29sdGlwXVwiXG59KVxuZXhwb3J0IGNsYXNzIFNNVG9vbHRpcERpcmVjdGl2ZSB7XG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmKSB7IH1cblxuICAgIG9uTW91c2VFbnRlcigpIHtcblxuICAgICAgICBqUXVlcnkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnBvcHVwKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMudGV4dCxcbiAgICAgICAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RSZXNvcnQ6IHRydWVcbiAgICAgICAgfSkucG9wdXAoXCJzaG93XCIpO1xuICAgIH1cbn1cbiJdfQ==