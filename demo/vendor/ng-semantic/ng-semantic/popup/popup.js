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
    __decorate([
        core_1.Input("selector"), 
        __metadata('design:type', String)
    ], SemanticPopup.prototype, "selector", void 0);
    SemanticPopup = __decorate([
        core_1.Component({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3B1cC50cyJdLCJuYW1lcyI6WyJTTVBvcHVwRGlyZWN0aXZlIiwiU01Qb3B1cERpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlNNUG9wdXBEaXJlY3RpdmUub25DbGljayIsIlNlbWFudGljUG9wdXAiLCJTZW1hbnRpY1BvcHVwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxxQkFBOEQsZUFBZSxDQUFDLENBQUE7QUFjOUU7SUFZSUEsMEJBQW1CQSxPQUFtQkE7UUFBbkJDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVlBO0lBQUdBLENBQUNBO0lBRTFDRCxrQ0FBT0EsR0FBUEE7UUFFSUUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLCtDQUErQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0RBLE1BQU1BLENBQUNBO1FBQ1hBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3JDQSxRQUFRQSxFQUFFQSxJQUFJQTtZQUNkQSxTQUFTQSxFQUFFQSxJQUFJQTtZQUNmQSxVQUFVQSxFQUFFQSxJQUFJQTtZQUNoQkEsRUFBRUEsRUFBRUEsT0FBT0E7WUFDWEEsS0FBS0EsRUFBRUEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUE7WUFDMUNBLFFBQVFBLEVBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBO1lBQzdCQSxRQUFRQSxFQUFFQSxJQUFJQTtTQUNqQkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFFckJBLENBQUNBO0lBL0JMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsSUFBSUEsRUFBRUE7Z0JBQ0ZBLFNBQVNBLEVBQUVBLFdBQVdBO2FBQ3pCQTtZQUNEQSxNQUFNQSxFQUFFQTtnQkFDSkEsb0JBQW9CQTthQUN2QkE7WUFDREEsUUFBUUEsRUFBRUEsZ0JBQWdCQTtTQUM3QkEsQ0FBQ0E7O3lCQXlCREE7SUFBREEsdUJBQUNBO0FBQURBLENBQUNBLEFBakNELElBaUNDO0FBeEJZLHdCQUFnQixtQkF3QjVCLENBQUE7QUFPRDtJQUFBRztJQVlBQyxDQUFDQTtJQURHRDtRQUFDQSxZQUFLQSxDQUFDQSxVQUFVQSxDQUFDQTs7T0FBQ0EsbUNBQVFBLFVBQVNBO0lBWHhDQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsVUFBVUE7U0FDdkJBLENBQUNBO1FBQ0RBLFdBQUlBLENBQUNBO1lBQ0ZBLFFBQVFBLEVBQUVBLHFJQUlQQTtTQUNOQSxDQUFDQTs7c0JBR0RBO0lBQURBLG9CQUFDQTtBQUFEQSxDQUFDQSxBQVpELElBWUM7QUFGWSxxQkFBYSxnQkFFekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIENvbXBvbmVudCwgVmlldywgSW5wdXQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5cbi8qKlxuICogRGlyZWN0aXZlLCBpbXBsZW1lbnRhdGlvbiBvZiBTZW1hbnRpYyBVSSBwb3B1cCBjb21wb25lbnRzLlxuICpcbiAqIE9iamVjdCB0aGF0IG5lZWQgdG8gYmUgcGFzc2VkIHRvIHRoaXMgY29tcG9uZW50cyBpczpcbiAqIHtcbiAqICAgICAgcG9zaXRpb246IHN0cmluZyxcbiAqICAgICAgc2VsZWN0b3I6IHN0cmluZ1xuICogfVxuICpcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9wb3B1cC5odG1sXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY2xpY2spXCI6IFwib25DbGljaygpXCJcbiAgICB9LFxuICAgIGlucHV0czogW1xuICAgICAgICBcImRhdGE6IHNtLWRpci1wb3B1cFwiXG4gICAgXSxcbiAgICBzZWxlY3RvcjogXCJbc20tZGlyLXBvcHVwXVwiXG59KVxuZXhwb3J0IGNsYXNzIFNNUG9wdXBEaXJlY3RpdmUge1xuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICAgIG9uQ2xpY2soKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuaGFzT3duUHJvcGVydHkoXCJwb3NpdGlvblwiKSB8fCAhdGhpcy5kYXRhLmhhc093blByb3BlcnR5KFwic2VsZWN0b3JcIikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zaXRpb24gb3IgdGFyZ2V0IHNlbGVjdG9yIG1pc3NpbmcgZm9yIHBvcHVwXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5wb3B1cCh7XG4gICAgICAgICAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RSZXNvcnQ6IHRydWUsXG4gICAgICAgICAgICBvbjogXCJjbGlja1wiLFxuICAgICAgICAgICAgcG9wdXA6IFwiLlwiICsgdGhpcy5kYXRhLnNlbGVjdG9yICsgXCIucG9wdXBcIixcbiAgICAgICAgICAgIHBvc2l0aW9uIDogdGhpcy5kYXRhLnBvc2l0aW9uLFxuICAgICAgICAgICAgcHJlc2VydmU6IHRydWVcbiAgICAgICAgfSkucG9wdXAoXCJzaG93XCIpO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogQ29tcG9uZW50LCBpbXBsZW1lbnRhdGlvbiBvZiBTZW1hbnRpYyBVSSBwb3B1cCBjb21wb25lbnRzLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIHRyaWdnZXJlZCBieSBVSVBvcHVwRGlyZWN0aXZlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzbS1wb3B1cFwiXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInVpIHBvcHVwIHZlcnkgd2lkZSB7e3NlbGVjdG9yfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljUG9wdXAge1xuICAgIEBJbnB1dChcInNlbGVjdG9yXCIpIHNlbGVjdG9yOiBzdHJpbmc7XG59XG4iXX0=