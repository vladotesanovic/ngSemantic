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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvZGlyZWN0aXZlcy9zZW1hbnRpYy9wb3B1cC90b29sdGlwLnRzIl0sIm5hbWVzIjpbIlNNVG9vbHRpcERpcmVjdGl2ZSIsIlNNVG9vbHRpcERpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlNNVG9vbHRpcERpcmVjdGl2ZS5vbk1vdXNlRW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBWUlBLDRCQUFtQkEsT0FBbUJBO29CQUFuQkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBWUE7Z0JBQUlBLENBQUNBO2dCQUUzQ0QseUNBQVlBLEdBQVpBO29CQUVJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDckNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLElBQUlBO3dCQUNsQkEsU0FBU0EsRUFBRUEsSUFBSUE7d0JBQ2ZBLFVBQVVBLEVBQUVBLElBQUlBO3FCQUNuQkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQTtnQkFyQkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLElBQUlBLEVBQUVBOzRCQUNGQSxjQUFjQSxFQUFFQSxnQkFBZ0JBO3lCQUNuQ0E7d0JBQ0RBLE1BQU1BLEVBQUVBOzRCQUNKQSxzQkFBc0JBO3lCQUN6QkE7d0JBQ0RBLFFBQVFBLEVBQUVBLGtCQUFrQkE7cUJBQy9CQSxDQUFDQTs7dUNBY0RBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0FBQ0EsQUF0QkQsSUFzQkM7WUF0QkQsbURBc0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IFwic2VtYW50aWMvcG9wdXAubWluXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy90cmFuc2l0aW9uLm1pblwiO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIFNlbWFudGljIFVJIHBvcHVwXG4gKlxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3BvcHVwLmh0bWxcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgaG9zdDoge1xuICAgICAgICBcIihtb3VzZWVudGVyKVwiOiBcIm9uTW91c2VFbnRlcigpXCJcbiAgICB9LFxuICAgIGlucHV0czogW1xuICAgICAgICBcInRleHQ6IHNtLWRpci10b29sdGlwXCJcbiAgICBdLFxuICAgIHNlbGVjdG9yOiBcIltzbS1kaXItdG9vbHRpcF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTTVRvb2x0aXBEaXJlY3RpdmUge1xuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikgeyB9XG5cbiAgICBvbk1vdXNlRW50ZXIoKSB7XG5cbiAgICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5wb3B1cCh7XG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLnRleHQsXG4gICAgICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBsYXN0UmVzb3J0OiB0cnVlXG4gICAgICAgIH0pLnBvcHVwKFwic2hvd1wiKTtcbiAgICB9XG59XG4iXX0=