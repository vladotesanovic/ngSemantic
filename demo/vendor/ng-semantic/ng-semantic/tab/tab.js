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
var core_1 = require("angular2/core");
require("semantic/tab.min");
var SemanticTab = (function () {
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
exports.SemanticTab = SemanticTab;
var SemanticTabs = (function () {
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
exports.SemanticTabs = SemanticTabs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFiLnRzIl0sIm5hbWVzIjpbIlNlbWFudGljVGFiIiwiU2VtYW50aWNUYWIuY29uc3RydWN0b3IiLCJTZW1hbnRpY1RhYnMiLCJTZW1hbnRpY1RhYnMuY29uc3RydWN0b3IiLCJTZW1hbnRpY1RhYnMubmdBZnRlclZpZXdJbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0YsZUFBZSxDQUFDLENBQUE7QUFDcEcsUUFBTyxrQkFBa0IsQ0FBQyxDQUFBO0FBRTFCO0lBQUFBO0lBVUFDLENBQUNBO0lBRENEO1FBQUNBLFlBQUtBLENBQUNBLEtBQUtBLENBQUNBOztPQUFDQSxrQ0FBU0EsVUFBU0E7SUFUbENBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxVQUFVQSxFQUFFQSxDQUFDQSxPQUFPQSxFQUFFQSxVQUFVQSxFQUFFQSxPQUFPQSxDQUFDQTtZQUMxQ0EsUUFBUUEsRUFBRUEsUUFBUUE7U0FDbkJBLENBQUNBO1FBRURBLFdBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLDJCQUEyQkE7U0FDdENBLENBQUNBOztvQkFHREE7SUFBREEsa0JBQUNBO0FBQURBLENBQUNBLEFBVkQsSUFVQztBQUZZLG1CQUFXLGNBRXZCLENBQUE7QUFHRDtJQWVFRSxzQkFBaUNBLElBQTRCQSxFQUFTQSxVQUFzQkE7UUFBdEJDLGVBQVVBLEdBQVZBLFVBQVVBLENBQVlBO1FBQzFGQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7SUFFREQsc0NBQWVBLEdBQWZBO1FBQ0VFLE1BQU1BLENBQUNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0E7WUFDaENBLFlBQVlBLEVBQUVBLElBQUlBO1lBQ2xCQSxPQUFPQSxFQUFFQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxhQUFhQSxDQUFDQTtTQUMvQ0EsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUF4QkhGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxVQUFVQSxFQUFFQSxFQUFFQTtZQUNkQSxRQUFRQSxFQUFFQSxTQUFTQTtTQUNwQkEsQ0FBQ0E7UUFFREEsV0FBSUEsQ0FBQ0E7WUFDSkEsUUFBUUEsRUFBRUEsa09BSVhBO1NBQ0FBLENBQUNBO1FBSWFBLFdBQUNBLFlBQUtBLENBQUNBLFdBQVdBLENBQUNBLENBQUFBOztxQkFVakNBO0lBQURBLG1CQUFDQTtBQUFEQSxDQUFDQSxBQXpCRCxJQXlCQztBQWJZLG9CQUFZLGVBYXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIFF1ZXJ5LCBRdWVyeUxpc3QsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCBcInNlbWFudGljL3RhYi5taW5cIjtcblxuQENvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IFtcInRpdGxlXCIsIFwiZGF0YS10YWJcIiwgXCJjbGFzc1wiXSxcbiAgc2VsZWN0b3I6IFwic20tdGFiXCJcbn0pXG5cbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1RhYiB7XG4gIEBJbnB1dChcInRhYlwiKSBkYXRhRGF0YWI6IHN0cmluZztcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczogW10sXG4gIHNlbGVjdG9yOiBcInNtLXRhYnNcIlxufSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1aSB0b3AgYXR0YWNoZWQgdGFidWxhciBtZW51XCI+XG4gIDxhIGNsYXNzPVwiaXRlbVwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IGkgPT09IDB9XCIgKm5nRm9yPVwiI3RhYiBvZiB0YWJzOyAjaSA9IGluZGV4XCIgYXR0ci5kYXRhLXRhYj1cInt7dGFiLmRhdGFEYXRhYn19XCI+e3t0YWIudGl0bGV9fTwvYT5cbjwvZGl2PlxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1RhYnMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgdGFiczogUXVlcnlMaXN0PFNlbWFudGljVGFiPjtcblxuICBjb25zdHJ1Y3RvciggQFF1ZXJ5KFNlbWFudGljVGFiKSB0YWJzOiBRdWVyeUxpc3Q8U2VtYW50aWNUYWI+LCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMudGFicyA9IHRhYnM7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgalF1ZXJ5KFwiLm1lbnUudGFidWxhciAuaXRlbVwiKS50YWIoe1xuICAgICAgY2hpbGRyZW5Pbmx5OiB0cnVlLFxuICAgICAgY29udGV4dDogalF1ZXJ5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KVxuICAgIH0pO1xuICB9XG59XG4iXX0=