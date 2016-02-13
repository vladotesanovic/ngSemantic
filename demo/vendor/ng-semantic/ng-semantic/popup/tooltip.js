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
require("semantic/popup.min");
require("semantic/transition.min");
var SMTooltipDirective = (function () {
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
exports.SMTooltipDirective = SMTooltipDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvb2x0aXAudHMiXSwibmFtZXMiOlsiU01Ub29sdGlwRGlyZWN0aXZlIiwiU01Ub29sdGlwRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiU01Ub29sdGlwRGlyZWN0aXZlLm9uTW91c2VFbnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBQ3RELFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQUM1QixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFPakM7SUFZSUEsNEJBQW1CQSxPQUFtQkE7UUFBbkJDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVlBO0lBQUlBLENBQUNBO0lBRTNDRCx5Q0FBWUEsR0FBWkE7UUFFSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFDckNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLElBQUlBO1lBQ2xCQSxTQUFTQSxFQUFFQSxJQUFJQTtZQUNmQSxVQUFVQSxFQUFFQSxJQUFJQTtTQUNuQkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDckJBLENBQUNBO0lBckJMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsSUFBSUEsRUFBRUE7Z0JBQ0ZBLGNBQWNBLEVBQUVBLGdCQUFnQkE7YUFDbkNBO1lBQ0RBLE1BQU1BLEVBQUVBO2dCQUNKQSxzQkFBc0JBO2FBQ3pCQTtZQUNEQSxRQUFRQSxFQUFFQSxrQkFBa0JBO1NBQy9CQSxDQUFDQTs7MkJBY0RBO0lBQURBLHlCQUFDQTtBQUFEQSxDQUFDQSxBQXRCRCxJQXNCQztBQWJZLDBCQUFrQixxQkFhOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IFwic2VtYW50aWMvcG9wdXAubWluXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy90cmFuc2l0aW9uLm1pblwiO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIFNlbWFudGljIFVJIHBvcHVwXG4gKlxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3BvcHVwLmh0bWxcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgaG9zdDoge1xuICAgICAgICBcIihtb3VzZWVudGVyKVwiOiBcIm9uTW91c2VFbnRlcigpXCJcbiAgICB9LFxuICAgIGlucHV0czogW1xuICAgICAgICBcInRleHQ6IHNtLWRpci10b29sdGlwXCJcbiAgICBdLFxuICAgIHNlbGVjdG9yOiBcIltzbS1kaXItdG9vbHRpcF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTTVRvb2x0aXBEaXJlY3RpdmUge1xuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikgeyB9XG5cbiAgICBvbk1vdXNlRW50ZXIoKSB7XG5cbiAgICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5wb3B1cCh7XG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLnRleHQsXG4gICAgICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBsYXN0UmVzb3J0OiB0cnVlXG4gICAgICAgIH0pLnBvcHVwKFwic2hvd1wiKTtcbiAgICB9XG59XG4iXX0=