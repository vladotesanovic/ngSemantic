System.register(["angular2/core"], function(exports_1) {
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
    var SMPopupDirective, SemanticPopup;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SMPopupDirective = (function () {
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
            exports_1("SMPopupDirective", SMPopupDirective);
            SemanticPopup = (function () {
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
            exports_1("SemanticPopup", SemanticPopup);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3B1cC50cyJdLCJuYW1lcyI6WyJTTVBvcHVwRGlyZWN0aXZlIiwiU01Qb3B1cERpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlNNUG9wdXBEaXJlY3RpdmUub25DbGljayIsIlNlbWFudGljUG9wdXAiLCJTZW1hbnRpY1BvcHVwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFZSUEsMEJBQW1CQSxPQUFtQkE7b0JBQW5CQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFZQTtnQkFBR0EsQ0FBQ0E7Z0JBRTFDRCxrQ0FBT0EsR0FBUEE7b0JBRUlFLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqRkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsK0NBQStDQSxDQUFDQSxDQUFDQTt3QkFDN0RBLE1BQU1BLENBQUNBO29CQUNYQSxDQUFDQTtvQkFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQ3JDQSxRQUFRQSxFQUFFQSxJQUFJQTt3QkFDZEEsU0FBU0EsRUFBRUEsSUFBSUE7d0JBQ2ZBLFVBQVVBLEVBQUVBLElBQUlBO3dCQUNoQkEsRUFBRUEsRUFBRUEsT0FBT0E7d0JBQ1hBLEtBQUtBLEVBQUVBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBO3dCQUMxQ0EsUUFBUUEsRUFBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUE7d0JBQzdCQSxRQUFRQSxFQUFFQSxJQUFJQTtxQkFDakJBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUVyQkEsQ0FBQ0E7Z0JBL0JMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxJQUFJQSxFQUFFQTs0QkFDRkEsU0FBU0EsRUFBRUEsV0FBV0E7eUJBQ3pCQTt3QkFDREEsTUFBTUEsRUFBRUE7NEJBQ0pBLG9CQUFvQkE7eUJBQ3ZCQTt3QkFDREEsUUFBUUEsRUFBRUEsZ0JBQWdCQTtxQkFDN0JBLENBQUNBOztxQ0F5QkRBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0FBQ0EsQUFqQ0QsSUFpQ0M7WUFqQ0QsK0NBaUNDLENBQUE7WUFPRDtnQkFBQUc7Z0JBVzRCQyxDQUFDQTtnQkFYN0JEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFVBQVVBLEVBQUVBLENBQUNBLFVBQVVBLENBQUNBO3dCQUN4QkEsUUFBUUEsRUFBRUEsVUFBVUE7cUJBQ3ZCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0ZBLFFBQVFBLEVBQUVBLHFJQUlQQTtxQkFDTkEsQ0FBQ0E7O2tDQUMyQkE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQUFDQSxBQVg3QixJQVc2QjtZQVg3Qix5Q0FXNkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuXG4vKipcbiAqIERpcmVjdGl2ZSwgaW1wbGVtZW50YXRpb24gb2YgU2VtYW50aWMgVUkgcG9wdXAgY29tcG9uZW50cy5cbiAqXG4gKiBPYmplY3QgdGhhdCBuZWVkIHRvIGJlIHBhc3NlZCB0byB0aGlzIGNvbXBvbmVudHMgaXM6XG4gKiB7XG4gKiAgICAgIHBvc2l0aW9uOiBzdHJpbmcsXG4gKiAgICAgIHNlbGVjdG9yOiBzdHJpbmdcbiAqIH1cbiAqXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvcG9wdXAuaHRtbFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNsaWNrKVwiOiBcIm9uQ2xpY2soKVwiXG4gICAgfSxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgXCJkYXRhOiBzbS1kaXItcG9wdXBcIlxuICAgIF0sXG4gICAgc2VsZWN0b3I6IFwiW3NtLWRpci1wb3B1cF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTTVBvcHVwRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICBvbkNsaWNrKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmhhc093blByb3BlcnR5KFwicG9zaXRpb25cIikgfHwgIXRoaXMuZGF0YS5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdG9yXCIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc2l0aW9uIG9yIHRhcmdldCBzZWxlY3RvciBtaXNzaW5nIGZvciBwb3B1cFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkucG9wdXAoe1xuICAgICAgICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBsYXN0UmVzb3J0OiB0cnVlLFxuICAgICAgICAgICAgb246IFwiY2xpY2tcIixcbiAgICAgICAgICAgIHBvcHVwOiBcIi5cIiArIHRoaXMuZGF0YS5zZWxlY3RvciArIFwiLnBvcHVwXCIsXG4gICAgICAgICAgICBwb3NpdGlvbiA6IHRoaXMuZGF0YS5wb3NpdGlvbixcbiAgICAgICAgICAgIHByZXNlcnZlOiB0cnVlXG4gICAgICAgIH0pLnBvcHVwKFwic2hvd1wiKTtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIENvbXBvbmVudCwgaW1wbGVtZW50YXRpb24gb2YgU2VtYW50aWMgVUkgcG9wdXAgY29tcG9uZW50cy5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB0cmlnZ2VyZWQgYnkgVUlQb3B1cERpcmVjdGl2ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvcGVydGllczogW1wic2VsZWN0b3JcIl0sXG4gICAgc2VsZWN0b3I6IFwic20tcG9wdXBcIlxufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1aSBwb3B1cCB2ZXJ5IHdpZGUge3tzZWxlY3Rvcn19XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1BvcHVwIHt9XG4iXX0=