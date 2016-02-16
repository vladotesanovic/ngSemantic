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
require("semantic-ui/dist/components/popup.min");
require("semantic-ui/dist/components/transition.min");
var SMTooltipDirective = (function () {
    function SMTooltipDirective(element) {
        this.element = element;
    }
    SMTooltipDirective.prototype.onMouseEnter = function () {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvb2x0aXAudHMiXSwibmFtZXMiOlsiU01Ub29sdGlwRGlyZWN0aXZlIiwiU01Ub29sdGlwRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiU01Ub29sdGlwRGlyZWN0aXZlLm9uTW91c2VFbnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBQ3RELFFBQU8sdUNBQXVDLENBQUMsQ0FBQTtBQUMvQyxRQUFPLDRDQUE0QyxDQUFDLENBQUE7QUFPcEQ7SUFZSUEsNEJBQW1CQSxPQUFtQkE7UUFBbkJDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVlBO0lBQUlBLENBQUNBO0lBRTNDRCx5Q0FBWUEsR0FBWkE7UUFDSUUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsTUFBTUEsS0FBS0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaENBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7WUFDcENBLE1BQU1BLENBQUNBO1FBQ1hBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3JDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxJQUFJQTtZQUNsQkEsU0FBU0EsRUFBRUEsSUFBSUE7WUFDZkEsVUFBVUEsRUFBRUEsSUFBSUE7U0FDbkJBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO0lBQ3JCQSxDQUFDQTtJQXpCTEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLElBQUlBLEVBQUVBO2dCQUNGQSxjQUFjQSxFQUFFQSxnQkFBZ0JBO2FBQ25DQTtZQUNEQSxNQUFNQSxFQUFFQTtnQkFDSkEsc0JBQXNCQTthQUN6QkE7WUFDREEsUUFBUUEsRUFBRUEsa0JBQWtCQTtTQUMvQkEsQ0FBQ0E7OzJCQWtCREE7SUFBREEseUJBQUNBO0FBQURBLENBQUNBLEFBMUJELElBMEJDO0FBakJZLDBCQUFrQixxQkFpQjlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCBcInNlbWFudGljLXVpL2Rpc3QvY29tcG9uZW50cy9wb3B1cC5taW5cIjtcbmltcG9ydCBcInNlbWFudGljLXVpL2Rpc3QvY29tcG9uZW50cy90cmFuc2l0aW9uLm1pblwiO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIFNlbWFudGljIFVJIHBvcHVwXG4gKlxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3BvcHVwLmh0bWxcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgaG9zdDoge1xuICAgICAgICBcIihtb3VzZWVudGVyKVwiOiBcIm9uTW91c2VFbnRlcigpXCJcbiAgICB9LFxuICAgIGlucHV0czogW1xuICAgICAgICBcInRleHQ6IHNtLWRpci10b29sdGlwXCJcbiAgICBdLFxuICAgIHNlbGVjdG9yOiBcIltzbS1kaXItdG9vbHRpcF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTTVRvb2x0aXBEaXJlY3RpdmUge1xuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikgeyB9XG5cbiAgICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImpRdWVyeSBpcyBub3QgbG9hZGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5wb3B1cCh7XG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLnRleHQsXG4gICAgICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBsYXN0UmVzb3J0OiB0cnVlXG4gICAgICAgIH0pLnBvcHVwKFwic2hvd1wiKTtcbiAgICB9XG59XG4iXX0=