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
var SMPopupDirective = (function () {
    function SMPopupDirective(element) {
        this.element = element;
    }
    SMPopupDirective.prototype.onClick = function () {
        if (!this.data.hasOwnProperty("position") || !this.data.hasOwnProperty("selector")) {
            console.log("position or target selector missing for popup");
            return;
        }
        jQuery(this.element.nativeElement).popup({
            closable: true,
            exclusive: true,
            lastResort: true,
            on: "click",
            popup: "." + this.data.selector + ".popup",
            position: this.data.position,
            preserve: true
        }).popup("show");
    };
    SMPopupDirective = __decorate([
        core_1.Directive({
            host: {
                "(click)": "onClick()"
            },
            inputs: [
                "data: sm-dir-popup"
            ],
            selector: "[sm-dir-popup]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SMPopupDirective);
    return SMPopupDirective;
})();
exports.SMPopupDirective = SMPopupDirective;
var SemanticPopup = (function () {
    function SemanticPopup() {
    }
    SemanticPopup = __decorate([
        core_1.Component({
            properties: ["selector"],
            selector: "sm-popup"
        }),
        core_1.View({
            template: "<div class=\"ui popup very wide {{selector}}\">\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticPopup);
    return SemanticPopup;
})();
exports.SemanticPopup = SemanticPopup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3B1cC50cyJdLCJuYW1lcyI6WyJTTVBvcHVwRGlyZWN0aXZlIiwiU01Qb3B1cERpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlNNUG9wdXBEaXJlY3RpdmUub25DbGljayIsIlNlbWFudGljUG9wdXAiLCJTZW1hbnRpY1BvcHVwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFjdkU7SUFZSUEsMEJBQW1CQSxPQUFtQkE7UUFBbkJDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVlBO0lBQUdBLENBQUNBO0lBRTFDRCxrQ0FBT0EsR0FBUEE7UUFFSUUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLCtDQUErQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0RBLE1BQU1BLENBQUNBO1FBQ1hBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3JDQSxRQUFRQSxFQUFFQSxJQUFJQTtZQUNkQSxTQUFTQSxFQUFFQSxJQUFJQTtZQUNmQSxVQUFVQSxFQUFFQSxJQUFJQTtZQUNoQkEsRUFBRUEsRUFBRUEsT0FBT0E7WUFDWEEsS0FBS0EsRUFBRUEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUE7WUFDMUNBLFFBQVFBLEVBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBO1lBQzdCQSxRQUFRQSxFQUFFQSxJQUFJQTtTQUNqQkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFFckJBLENBQUNBO0lBL0JMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsSUFBSUEsRUFBRUE7Z0JBQ0ZBLFNBQVNBLEVBQUVBLFdBQVdBO2FBQ3pCQTtZQUNEQSxNQUFNQSxFQUFFQTtnQkFDSkEsb0JBQW9CQTthQUN2QkE7WUFDREEsUUFBUUEsRUFBRUEsZ0JBQWdCQTtTQUM3QkEsQ0FBQ0E7O3lCQXlCREE7SUFBREEsdUJBQUNBO0FBQURBLENBQUNBLEFBakNELElBaUNDO0FBeEJZLHdCQUFnQixtQkF3QjVCLENBQUE7QUFPRDtJQUFBRztJQVc0QkMsQ0FBQ0E7SUFYN0JEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxVQUFVQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQTtZQUN4QkEsUUFBUUEsRUFBRUEsVUFBVUE7U0FDdkJBLENBQUNBO1FBQ0RBLFdBQUlBLENBQUNBO1lBQ0ZBLFFBQVFBLEVBQUVBLHFJQUlQQTtTQUNOQSxDQUFDQTs7c0JBQzJCQTtJQUFEQSxvQkFBQ0E7QUFBREEsQ0FBQ0EsQUFYN0IsSUFXNkI7QUFBaEIscUJBQWEsZ0JBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuXG4vKipcbiAqIERpcmVjdGl2ZSwgaW1wbGVtZW50YXRpb24gb2YgU2VtYW50aWMgVUkgcG9wdXAgY29tcG9uZW50cy5cbiAqXG4gKiBPYmplY3QgdGhhdCBuZWVkIHRvIGJlIHBhc3NlZCB0byB0aGlzIGNvbXBvbmVudHMgaXM6XG4gKiB7XG4gKiAgICAgIHBvc2l0aW9uOiBzdHJpbmcsXG4gKiAgICAgIHNlbGVjdG9yOiBzdHJpbmdcbiAqIH1cbiAqXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvcG9wdXAuaHRtbFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNsaWNrKVwiOiBcIm9uQ2xpY2soKVwiXG4gICAgfSxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgXCJkYXRhOiBzbS1kaXItcG9wdXBcIlxuICAgIF0sXG4gICAgc2VsZWN0b3I6IFwiW3NtLWRpci1wb3B1cF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTTVBvcHVwRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICBvbkNsaWNrKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmhhc093blByb3BlcnR5KFwicG9zaXRpb25cIikgfHwgIXRoaXMuZGF0YS5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdG9yXCIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc2l0aW9uIG9yIHRhcmdldCBzZWxlY3RvciBtaXNzaW5nIGZvciBwb3B1cFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkucG9wdXAoe1xuICAgICAgICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBsYXN0UmVzb3J0OiB0cnVlLFxuICAgICAgICAgICAgb246IFwiY2xpY2tcIixcbiAgICAgICAgICAgIHBvcHVwOiBcIi5cIiArIHRoaXMuZGF0YS5zZWxlY3RvciArIFwiLnBvcHVwXCIsXG4gICAgICAgICAgICBwb3NpdGlvbiA6IHRoaXMuZGF0YS5wb3NpdGlvbixcbiAgICAgICAgICAgIHByZXNlcnZlOiB0cnVlXG4gICAgICAgIH0pLnBvcHVwKFwic2hvd1wiKTtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIENvbXBvbmVudCwgaW1wbGVtZW50YXRpb24gb2YgU2VtYW50aWMgVUkgcG9wdXAgY29tcG9uZW50cy5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB0cmlnZ2VyZWQgYnkgVUlQb3B1cERpcmVjdGl2ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvcGVydGllczogW1wic2VsZWN0b3JcIl0sXG4gICAgc2VsZWN0b3I6IFwic20tcG9wdXBcIlxufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1aSBwb3B1cCB2ZXJ5IHdpZGUge3tzZWxlY3Rvcn19XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1BvcHVwIHt9XG4iXX0=