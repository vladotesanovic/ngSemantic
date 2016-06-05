System.register(["@angular/core", "Prism"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Prism;
    var PrismJsDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Prism_1) {
                Prism = Prism_1;
            }],
        execute: function() {
            PrismJsDirective = (function () {
                function PrismJsDirective(viewContainer) {
                    this.viewContainer = viewContainer;
                }
                PrismJsDirective.prototype.ngAfterViewInit = function () {
                    var html = Prism.highlight(this.viewContainer.element.nativeElement.innerText, Prism.languages[this.language]);
                    var elClass = 'language-' + this.language;
                    this.viewContainer.element.nativeElement.innerHTML = "<pre class=" + elClass + "><code>" + html + "</code></pre>";
                };
                __decorate([
                    core_1.Input("prismjs"), 
                    __metadata('design:type', String)
                ], PrismJsDirective.prototype, "language", void 0);
                PrismJsDirective = __decorate([
                    core_1.Directive({
                        selector: "[prismjs]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef])
                ], PrismJsDirective);
                return PrismJsDirective;
            }());
            exports_1("PrismJsDirective", PrismJsDirective);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpc21qcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmlzbWpzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUdJLDBCQUFtQixhQUErQjtvQkFBL0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO2dCQUFHLENBQUM7Z0JBRXRELDBDQUFlLEdBQWY7b0JBQ0ksSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2pILElBQU0sT0FBTyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLGdCQUFjLE9BQU8sZUFBVSxJQUFJLGtCQUFlLENBQUM7Z0JBQzVHLENBQUM7Z0JBUkQ7b0JBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7a0VBQUE7Z0JBSnJCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7cUJBQ3hCLENBQUM7O29DQUFBO2dCQVlGLHVCQUFDO1lBQUQsQ0FBQyxBQVhELElBV0M7WUFYRCwrQ0FXQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBQcmlzbSBmcm9tIFwiUHJpc21cIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3ByaXNtanNdXCJcbn0pXG5leHBvcnQgY2xhc3MgUHJpc21Kc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dChcInByaXNtanNcIikgbGFuZ3VhZ2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6YW55IHtcbiAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodCh0aGlzLnZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCwgUHJpc20ubGFuZ3VhZ2VzW3RoaXMubGFuZ3VhZ2VdKTtcbiAgICAgICAgY29uc3QgZWxDbGFzcyA9ICdsYW5ndWFnZS0nICsgdGhpcy5sYW5ndWFnZTtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBgPHByZSBjbGFzcz0ke2VsQ2xhc3N9Pjxjb2RlPiR7aHRtbH08L2NvZGU+PC9wcmU+YDtcbiAgICB9XG5cbn0iXX0=