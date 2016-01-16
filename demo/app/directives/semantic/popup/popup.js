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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2RpcmVjdGl2ZXMvc2VtYW50aWMvcG9wdXAvcG9wdXAudHMiXSwibmFtZXMiOlsiU01Qb3B1cERpcmVjdGl2ZSIsIlNNUG9wdXBEaXJlY3RpdmUuY29uc3RydWN0b3IiLCJTTVBvcHVwRGlyZWN0aXZlLm9uQ2xpY2siLCJTZW1hbnRpY1BvcHVwIiwiU2VtYW50aWNQb3B1cC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBWUlBLDBCQUFtQkEsT0FBbUJBO29CQUFuQkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBWUE7Z0JBQUdBLENBQUNBO2dCQUUxQ0Qsa0NBQU9BLEdBQVBBO29CQUVJRSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDakZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLCtDQUErQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQzdEQSxNQUFNQSxDQUFDQTtvQkFDWEEsQ0FBQ0E7b0JBRURBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO3dCQUNyQ0EsUUFBUUEsRUFBRUEsSUFBSUE7d0JBQ2RBLFNBQVNBLEVBQUVBLElBQUlBO3dCQUNmQSxVQUFVQSxFQUFFQSxJQUFJQTt3QkFDaEJBLEVBQUVBLEVBQUVBLE9BQU9BO3dCQUNYQSxLQUFLQSxFQUFFQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQTt3QkFDMUNBLFFBQVFBLEVBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBO3dCQUM3QkEsUUFBUUEsRUFBRUEsSUFBSUE7cUJBQ2pCQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFFckJBLENBQUNBO2dCQS9CTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsSUFBSUEsRUFBRUE7NEJBQ0ZBLFNBQVNBLEVBQUVBLFdBQVdBO3lCQUN6QkE7d0JBQ0RBLE1BQU1BLEVBQUVBOzRCQUNKQSxvQkFBb0JBO3lCQUN2QkE7d0JBQ0RBLFFBQVFBLEVBQUVBLGdCQUFnQkE7cUJBQzdCQSxDQUFDQTs7cUNBeUJEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBQUNBLEFBakNELElBaUNDO1lBakNELCtDQWlDQyxDQUFBO1lBT0Q7Z0JBQUFHO2dCQVc0QkMsQ0FBQ0E7Z0JBWDdCRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxVQUFVQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQTt3QkFDeEJBLFFBQVFBLEVBQUVBLFVBQVVBO3FCQUN2QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNGQSxRQUFRQSxFQUFFQSxxSUFJUEE7cUJBQ05BLENBQUNBOztrQ0FDMkJBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FBQ0EsQUFYN0IsSUFXNkI7WUFYN0IseUNBVzZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cblxuLyoqXG4gKiBEaXJlY3RpdmUsIGltcGxlbWVudGF0aW9uIG9mIFNlbWFudGljIFVJIHBvcHVwIGNvbXBvbmVudHMuXG4gKlxuICogT2JqZWN0IHRoYXQgbmVlZCB0byBiZSBwYXNzZWQgdG8gdGhpcyBjb21wb25lbnRzIGlzOlxuICoge1xuICogICAgICBwb3NpdGlvbjogc3RyaW5nLFxuICogICAgICBzZWxlY3Rvcjogc3RyaW5nXG4gKiB9XG4gKlxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3BvcHVwLmh0bWxcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgaG9zdDoge1xuICAgICAgICBcIihjbGljaylcIjogXCJvbkNsaWNrKClcIlxuICAgIH0sXG4gICAgaW5wdXRzOiBbXG4gICAgICAgIFwiZGF0YTogc20tZGlyLXBvcHVwXCJcbiAgICBdLFxuICAgIHNlbGVjdG9yOiBcIltzbS1kaXItcG9wdXBdXCJcbn0pXG5leHBvcnQgY2xhc3MgU01Qb3B1cERpcmVjdGl2ZSB7XG4gICAgcHVibGljIGRhdGE6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gICAgb25DbGljaygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5oYXNPd25Qcm9wZXJ0eShcInBvc2l0aW9uXCIpIHx8ICF0aGlzLmRhdGEuaGFzT3duUHJvcGVydHkoXCJzZWxlY3RvclwiKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3NpdGlvbiBvciB0YXJnZXQgc2VsZWN0b3IgbWlzc2luZyBmb3IgcG9wdXBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBqUXVlcnkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnBvcHVwKHtcbiAgICAgICAgICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbGFzdFJlc29ydDogdHJ1ZSxcbiAgICAgICAgICAgIG9uOiBcImNsaWNrXCIsXG4gICAgICAgICAgICBwb3B1cDogXCIuXCIgKyB0aGlzLmRhdGEuc2VsZWN0b3IgKyBcIi5wb3B1cFwiLFxuICAgICAgICAgICAgcG9zaXRpb24gOiB0aGlzLmRhdGEucG9zaXRpb24sXG4gICAgICAgICAgICBwcmVzZXJ2ZTogdHJ1ZVxuICAgICAgICB9KS5wb3B1cChcInNob3dcIik7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBDb21wb25lbnQsIGltcGxlbWVudGF0aW9uIG9mIFNlbWFudGljIFVJIHBvcHVwIGNvbXBvbmVudHMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgdHJpZ2dlcmVkIGJ5IFVJUG9wdXBEaXJlY3RpdmUuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHByb3BlcnRpZXM6IFtcInNlbGVjdG9yXCJdLFxuICAgIHNlbGVjdG9yOiBcInNtLXBvcHVwXCJcbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWkgcG9wdXAgdmVyeSB3aWRlIHt7c2VsZWN0b3J9fVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNQb3B1cCB7fVxuIl19