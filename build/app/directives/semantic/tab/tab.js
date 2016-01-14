System.register(["angular2/core", "semantic/tab.min"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var SemanticTab, SemanticTabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            SemanticTab = (function () {
                function SemanticTab() {
                }
                __decorate([
                    core_1.Input("tab"), 
                    __metadata('design:type', String)
                ], SemanticTab.prototype, "dataDatab", void 0);
                SemanticTab = __decorate([
                    core_1.Component({
                        properties: ["title", "data-tab", "class"],
                        selector: "sm-tab"
                    }),
                    core_1.View({
                        template: "<ng-content></ng-content>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SemanticTab);
                return SemanticTab;
            })();
            exports_1("SemanticTab", SemanticTab);
            SemanticTabs = (function () {
                function SemanticTabs(tabs, elementRef) {
                    this.elementRef = elementRef;
                    this.tabs = tabs;
                }
                SemanticTabs.prototype.ngAfterViewInit = function () {
                    jQuery(".menu.tabular .item").tab({
                        childrenOnly: true,
                        context: jQuery(this.elementRef.nativeElement)
                    });
                };
                SemanticTabs = __decorate([
                    core_1.Component({
                        properties: [],
                        selector: "sm-tabs"
                    }),
                    core_1.View({
                        template: "<div class=\"ui top attached tabular menu\">\n  <a class=\"item\" [ngClass]=\"{active: i === 0}\" *ngFor=\"#tab of tabs; #i = index\" attr.data-tab=\"{{tab.dataDatab}}\">{{tab.title}}</a>\n</div>\n<ng-content></ng-content>\n"
                    }),
                    __param(0, core_1.Query(SemanticTab)), 
                    __metadata('design:paramtypes', [core_1.QueryList, core_1.ElementRef])
                ], SemanticTabs);
                return SemanticTabs;
            })();
            exports_1("SemanticTabs", SemanticTabs);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9kaXJlY3RpdmVzL3NlbWFudGljL3RhYi90YWIudHMiXSwibmFtZXMiOlsiU2VtYW50aWNUYWIiLCJTZW1hbnRpY1RhYi5jb25zdHJ1Y3RvciIsIlNlbWFudGljVGFicyIsIlNlbWFudGljVGFicy5jb25zdHJ1Y3RvciIsIlNlbWFudGljVGFicy5uZ0FmdGVyVmlld0luaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7Z0JBVUFDLENBQUNBO2dCQURDRDtvQkFBQ0EsWUFBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7O21CQUFDQSxrQ0FBU0EsVUFBU0E7Z0JBVGxDQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNUQSxVQUFVQSxFQUFFQSxDQUFDQSxPQUFPQSxFQUFFQSxVQUFVQSxFQUFFQSxPQUFPQSxDQUFDQTt3QkFDMUNBLFFBQVFBLEVBQUVBLFFBQVFBO3FCQUNuQkEsQ0FBQ0E7b0JBRURBLFdBQUlBLENBQUNBO3dCQUNKQSxRQUFRQSxFQUFFQSwyQkFBMkJBO3FCQUN0Q0EsQ0FBQ0E7O2dDQUdEQTtnQkFBREEsa0JBQUNBO1lBQURBLENBQUNBLEFBVkQsSUFVQztZQVZELHFDQVVDLENBQUE7WUFHRDtnQkFlRUUsc0JBQWlDQSxJQUE0QkEsRUFBU0EsVUFBc0JBO29CQUF0QkMsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBWUE7b0JBQzFGQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDbkJBLENBQUNBO2dCQUVERCxzQ0FBZUEsR0FBZkE7b0JBQ0VFLE1BQU1BLENBQUNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0E7d0JBQ2hDQSxZQUFZQSxFQUFFQSxJQUFJQTt3QkFDbEJBLE9BQU9BLEVBQUVBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLGFBQWFBLENBQUNBO3FCQUMvQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQXhCSEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVEEsVUFBVUEsRUFBRUEsRUFBRUE7d0JBQ2RBLFFBQVFBLEVBQUVBLFNBQVNBO3FCQUNwQkEsQ0FBQ0E7b0JBRURBLFdBQUlBLENBQUNBO3dCQUNKQSxRQUFRQSxFQUFFQSxrT0FJWEE7cUJBQ0FBLENBQUNBO29CQUlhQSxXQUFDQSxZQUFLQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFBQTs7aUNBVWpDQTtnQkFBREEsbUJBQUNBO1lBQURBLENBQUNBLEFBekJELElBeUJDO1lBekJELHVDQXlCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3LCBRdWVyeSwgUXVlcnlMaXN0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy90YWIubWluXCI7XG5cbkBDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiBbXCJ0aXRsZVwiLCBcImRhdGEtdGFiXCIsIFwiY2xhc3NcIl0sXG4gIHNlbGVjdG9yOiBcInNtLXRhYlwiXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNUYWIge1xuICBASW5wdXQoXCJ0YWJcIikgZGF0YURhdGFiOiBzdHJpbmc7XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IFtdLFxuICBzZWxlY3RvcjogXCJzbS10YWJzXCJcbn0pXG5cbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWkgdG9wIGF0dGFjaGVkIHRhYnVsYXIgbWVudVwiPlxuICA8YSBjbGFzcz1cIml0ZW1cIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBpID09PSAwfVwiICpuZ0Zvcj1cIiN0YWIgb2YgdGFiczsgI2kgPSBpbmRleFwiIGF0dHIuZGF0YS10YWI9XCJ7e3RhYi5kYXRhRGF0YWJ9fVwiPnt7dGFiLnRpdGxlfX08L2E+XG48L2Rpdj5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNUYWJzIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHRhYnM6IFF1ZXJ5TGlzdDxTZW1hbnRpY1RhYj47XG5cbiAgY29uc3RydWN0b3IoIEBRdWVyeShTZW1hbnRpY1RhYikgdGFiczogUXVlcnlMaXN0PFNlbWFudGljVGFiPiwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnRhYnMgPSB0YWJzO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGpRdWVyeShcIi5tZW51LnRhYnVsYXIgLml0ZW1cIikudGFiKHtcbiAgICAgIGNoaWxkcmVuT25seTogdHJ1ZSxcbiAgICAgIGNvbnRleHQ6IGpRdWVyeSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudClcbiAgICB9KTtcbiAgfVxufVxuIl19