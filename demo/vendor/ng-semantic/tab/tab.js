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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFiLnRzIl0sIm5hbWVzIjpbIlNlbWFudGljVGFiIiwiU2VtYW50aWNUYWIuY29uc3RydWN0b3IiLCJTZW1hbnRpY1RhYnMiLCJTZW1hbnRpY1RhYnMuY29uc3RydWN0b3IiLCJTZW1hbnRpY1RhYnMubmdBZnRlclZpZXdJbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQVVBQyxDQUFDQTtnQkFEQ0Q7b0JBQUNBLFlBQUtBLENBQUNBLEtBQUtBLENBQUNBOzttQkFBQ0Esa0NBQVNBLFVBQVNBO2dCQVRsQ0E7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVEEsVUFBVUEsRUFBRUEsQ0FBQ0EsT0FBT0EsRUFBRUEsVUFBVUEsRUFBRUEsT0FBT0EsQ0FBQ0E7d0JBQzFDQSxRQUFRQSxFQUFFQSxRQUFRQTtxQkFDbkJBLENBQUNBO29CQUVEQSxXQUFJQSxDQUFDQTt3QkFDSkEsUUFBUUEsRUFBRUEsMkJBQTJCQTtxQkFDdENBLENBQUNBOztnQ0FHREE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQUFDQSxBQVZELElBVUM7WUFWRCxxQ0FVQyxDQUFBO1lBR0Q7Z0JBZUVFLHNCQUFpQ0EsSUFBNEJBLEVBQVNBLFVBQXNCQTtvQkFBdEJDLGVBQVVBLEdBQVZBLFVBQVVBLENBQVlBO29CQUMxRkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQ25CQSxDQUFDQTtnQkFFREQsc0NBQWVBLEdBQWZBO29CQUNFRSxNQUFNQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBO3dCQUNoQ0EsWUFBWUEsRUFBRUEsSUFBSUE7d0JBQ2xCQSxPQUFPQSxFQUFFQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxhQUFhQSxDQUFDQTtxQkFDL0NBLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkF4QkhGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFVBQVVBLEVBQUVBLEVBQUVBO3dCQUNkQSxRQUFRQSxFQUFFQSxTQUFTQTtxQkFDcEJBLENBQUNBO29CQUVEQSxXQUFJQSxDQUFDQTt3QkFDSkEsUUFBUUEsRUFBRUEsa09BSVhBO3FCQUNBQSxDQUFDQTtvQkFJYUEsV0FBQ0EsWUFBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQUE7O2lDQVVqQ0E7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQUFDQSxBQXpCRCxJQXlCQztZQXpCRCx1Q0F5QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgUXVlcnksIFF1ZXJ5TGlzdCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IFwic2VtYW50aWMvdGFiLm1pblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczogW1widGl0bGVcIiwgXCJkYXRhLXRhYlwiLCBcImNsYXNzXCJdLFxuICBzZWxlY3RvcjogXCJzbS10YWJcIlxufSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVGFiIHtcbiAgQElucHV0KFwidGFiXCIpIGRhdGFEYXRhYjogc3RyaW5nO1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiBbXSxcbiAgc2VsZWN0b3I6IFwic20tdGFic1wiXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInVpIHRvcCBhdHRhY2hlZCB0YWJ1bGFyIG1lbnVcIj5cbiAgPGEgY2xhc3M9XCJpdGVtXCIgW25nQ2xhc3NdPVwie2FjdGl2ZTogaSA9PT0gMH1cIiAqbmdGb3I9XCIjdGFiIG9mIHRhYnM7ICNpID0gaW5kZXhcIiBhdHRyLmRhdGEtdGFiPVwie3t0YWIuZGF0YURhdGFifX1cIj57e3RhYi50aXRsZX19PC9hPlxuPC9kaXY+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVGFicyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICB0YWJzOiBRdWVyeUxpc3Q8U2VtYW50aWNUYWI+O1xuXG4gIGNvbnN0cnVjdG9yKCBAUXVlcnkoU2VtYW50aWNUYWIpIHRhYnM6IFF1ZXJ5TGlzdDxTZW1hbnRpY1RhYj4sIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy50YWJzID0gdGFicztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBqUXVlcnkoXCIubWVudS50YWJ1bGFyIC5pdGVtXCIpLnRhYih7XG4gICAgICBjaGlsZHJlbk9ubHk6IHRydWUsXG4gICAgICBjb250ZXh0OiBqUXVlcnkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==