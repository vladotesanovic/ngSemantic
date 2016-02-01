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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3B1cC50cyJdLCJuYW1lcyI6WyJTTVBvcHVwRGlyZWN0aXZlIiwiU01Qb3B1cERpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlNNUG9wdXBEaXJlY3RpdmUub25DbGljayIsIlNlbWFudGljUG9wdXAiLCJTZW1hbnRpY1BvcHVwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxxQkFBOEQsZUFBZSxDQUFDLENBQUE7QUFjOUU7SUFZSUEsMEJBQW1CQSxPQUFtQkE7UUFBbkJDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVlBO0lBQUdBLENBQUNBO0lBRTFDRCxrQ0FBT0EsR0FBUEE7UUFFSUUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLCtDQUErQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0RBLE1BQU1BLENBQUNBO1FBQ1hBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3JDQSxRQUFRQSxFQUFFQSxJQUFJQTtZQUNkQSxTQUFTQSxFQUFFQSxJQUFJQTtZQUNmQSxVQUFVQSxFQUFFQSxJQUFJQTtZQUNoQkEsRUFBRUEsRUFBRUEsT0FBT0E7WUFDWEEsS0FBS0EsRUFBRUEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUE7WUFDMUNBLFFBQVFBLEVBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBO1lBQzdCQSxRQUFRQSxFQUFFQSxJQUFJQTtTQUNqQkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFFckJBLENBQUNBO0lBL0JMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsSUFBSUEsRUFBRUE7Z0JBQ0ZBLFNBQVNBLEVBQUVBLFdBQVdBO2FBQ3pCQTtZQUNEQSxNQUFNQSxFQUFFQTtnQkFDSkEsb0JBQW9CQTthQUN2QkE7WUFDREEsUUFBUUEsRUFBRUEsZ0JBQWdCQTtTQUM3QkEsQ0FBQ0E7O3lCQXlCREE7SUFBREEsdUJBQUNBO0FBQURBLENBQUNBLEFBakNELElBaUNDO0FBeEJZLHdCQUFnQixtQkF3QjVCLENBQUE7QUFPRDtJQUFBRztJQVlBQyxDQUFDQTtJQURHRDtRQUFDQSxZQUFLQSxDQUFDQSxVQUFVQSxDQUFDQTs7T0FBQ0EsbUNBQVFBLFVBQVNBO0lBWHhDQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsVUFBVUE7U0FDdkJBLENBQUNBO1FBQ0RBLFdBQUlBLENBQUNBO1lBQ0ZBLFFBQVFBLEVBQUVBLHFJQUlQQTtTQUNOQSxDQUFDQTs7c0JBR0RBO0lBQURBLG9CQUFDQTtBQUFEQSxDQUFDQSxBQVpELElBWUM7QUFGWSxxQkFBYSxnQkFFekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQ29tcG9uZW50LCBWaWV3LCBJbnB1dCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cblxuLyoqXG4gKiBEaXJlY3RpdmUsIGltcGxlbWVudGF0aW9uIG9mIFNlbWFudGljIFVJIHBvcHVwIGNvbXBvbmVudHMuXG4gKlxuICogT2JqZWN0IHRoYXQgbmVlZCB0byBiZSBwYXNzZWQgdG8gdGhpcyBjb21wb25lbnRzIGlzOlxuICoge1xuICogICAgICBwb3NpdGlvbjogc3RyaW5nLFxuICogICAgICBzZWxlY3Rvcjogc3RyaW5nXG4gKiB9XG4gKlxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3BvcHVwLmh0bWxcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgaG9zdDoge1xuICAgICAgICBcIihjbGljaylcIjogXCJvbkNsaWNrKClcIlxuICAgIH0sXG4gICAgaW5wdXRzOiBbXG4gICAgICAgIFwiZGF0YTogc20tZGlyLXBvcHVwXCJcbiAgICBdLFxuICAgIHNlbGVjdG9yOiBcIltzbS1kaXItcG9wdXBdXCJcbn0pXG5leHBvcnQgY2xhc3MgU01Qb3B1cERpcmVjdGl2ZSB7XG4gICAgcHVibGljIGRhdGE6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gICAgb25DbGljaygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5oYXNPd25Qcm9wZXJ0eShcInBvc2l0aW9uXCIpIHx8ICF0aGlzLmRhdGEuaGFzT3duUHJvcGVydHkoXCJzZWxlY3RvclwiKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3NpdGlvbiBvciB0YXJnZXQgc2VsZWN0b3IgbWlzc2luZyBmb3IgcG9wdXBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBqUXVlcnkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnBvcHVwKHtcbiAgICAgICAgICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbGFzdFJlc29ydDogdHJ1ZSxcbiAgICAgICAgICAgIG9uOiBcImNsaWNrXCIsXG4gICAgICAgICAgICBwb3B1cDogXCIuXCIgKyB0aGlzLmRhdGEuc2VsZWN0b3IgKyBcIi5wb3B1cFwiLFxuICAgICAgICAgICAgcG9zaXRpb24gOiB0aGlzLmRhdGEucG9zaXRpb24sXG4gICAgICAgICAgICBwcmVzZXJ2ZTogdHJ1ZVxuICAgICAgICB9KS5wb3B1cChcInNob3dcIik7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBDb21wb25lbnQsIGltcGxlbWVudGF0aW9uIG9mIFNlbWFudGljIFVJIHBvcHVwIGNvbXBvbmVudHMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgdHJpZ2dlcmVkIGJ5IFVJUG9wdXBEaXJlY3RpdmUuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNtLXBvcHVwXCJcbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWkgcG9wdXAgdmVyeSB3aWRlIHt7c2VsZWN0b3J9fVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNQb3B1cCB7XG4gICAgQElucHV0KFwic2VsZWN0b3JcIikgc2VsZWN0b3I6IHN0cmluZztcbn1cbiJdfQ==