System.register(["angular2/core", "semantic/modal.min", "semantic/dimmer.min"], function(exports_1) {
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
    var SMModalDirective, SemanticModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            SMModalDirective = (function () {
                function SMModalDirective() {
                }
                SMModalDirective.prototype.onClick = function () {
                    if (!this.data.hasOwnProperty("selector")) {
                        console.log("target selector missing for modal");
                        return;
                    }
                    jQuery(".ui.modal." + this.data.selector).modal("show");
                };
                SMModalDirective = __decorate([
                    core_1.Directive({
                        host: {
                            "(click)": "onClick()"
                        },
                        inputs: [
                            "data: sm-dir-modal"
                        ],
                        selector: "[sm-dir-modal]"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SMModalDirective);
                return SMModalDirective;
            })();
            exports_1("SMModalDirective", SMModalDirective);
            SemanticModal = (function () {
                function SemanticModal() {
                }
                SemanticModal = __decorate([
                    core_1.Component({
                        properties: ["selector", "title", "class"],
                        selector: "sm-modal"
                    }),
                    core_1.View({
                        template: "<div class=\"ui modal {{selector}} {{class}}\">\n    <i class=\"close icon\"></i>\n    <div class=\"ui icon header\">\n      {{title}}\n    </div>\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SemanticModal);
                return SemanticModal;
            })();
            exports_1("SemanticModal", SemanticModal);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC50cyJdLCJuYW1lcyI6WyJTTU1vZGFsRGlyZWN0aXZlIiwiU01Nb2RhbERpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlNNTW9kYWxEaXJlY3RpdmUub25DbGljayIsIlNlbWFudGljTW9kYWwiLCJTZW1hbnRpY01vZGFsLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUFBQTtnQkF1QkFDLENBQUNBO2dCQVhHRCxrQ0FBT0EsR0FBUEE7b0JBRUlFLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4Q0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUNBQW1DQSxDQUFDQSxDQUFDQTt3QkFDakRBLE1BQU1BLENBQUNBO29CQUNYQSxDQUFDQTtvQkFFREEsTUFBTUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBRTVEQSxDQUFDQTtnQkFyQkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLElBQUlBLEVBQUVBOzRCQUNGQSxTQUFTQSxFQUFFQSxXQUFXQTt5QkFDekJBO3dCQUNEQSxNQUFNQSxFQUFFQTs0QkFDSkEsb0JBQW9CQTt5QkFDdkJBO3dCQUNEQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO3FCQUM3QkEsQ0FBQ0E7O3FDQWVEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBQUNBLEFBdkJELElBdUJDO1lBdkJELCtDQXVCQyxDQUFBO1lBT0Q7Z0JBQUFHO2dCQWU0QkMsQ0FBQ0E7Z0JBZjdCRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxVQUFVQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFFQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUFDQTt3QkFDMUNBLFFBQVFBLEVBQUVBLFVBQVVBO3FCQUN2QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNGQSxRQUFRQSxFQUFFQSx3T0FRUEE7cUJBQ05BLENBQUNBOztrQ0FDMkJBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FBQ0EsQUFmN0IsSUFlNkI7WUFmN0IseUNBZTZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQgeyBEaXJlY3RpdmUsIENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy9tb2RhbC5taW5cIjtcbmltcG9ydCBcInNlbWFudGljL2RpbW1lci5taW5cIjtcblxuLyoqXG4gKiBEaXJlY3RpdmUsIGltcGxlbWVudGF0aW9uIG9mIFNlbWFudGljIFVJIG1vZGFsIGNvbXBvbmVudHMuXG4gKlxuICogT2JqZWN0IHRoYXQgbmVlZCB0byBiZSBwYXNzZWQgdG8gdGhpcyBjb21wb25lbnRzIGlzOlxuICoge1xuICogICAgICBzZWxlY3Rvcjogc3RyaW5nXG4gKiB9XG4gKlxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL21vZGFsLmh0bWxcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgaG9zdDoge1xuICAgICAgICBcIihjbGljaylcIjogXCJvbkNsaWNrKClcIlxuICAgIH0sXG4gICAgaW5wdXRzOiBbXG4gICAgICAgIFwiZGF0YTogc20tZGlyLW1vZGFsXCJcbiAgICBdLFxuICAgIHNlbGVjdG9yOiBcIltzbS1kaXItbW9kYWxdXCJcbn0pXG5leHBvcnQgY2xhc3MgU01Nb2RhbERpcmVjdGl2ZSB7XG4gICAgcHVibGljIGRhdGE6IGFueTtcblxuICAgIG9uQ2xpY2soKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuaGFzT3duUHJvcGVydHkoXCJzZWxlY3RvclwiKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXJnZXQgc2VsZWN0b3IgbWlzc2luZyBmb3IgbW9kYWxcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBqUXVlcnkoXCIudWkubW9kYWwuXCIgKyB0aGlzLmRhdGEuc2VsZWN0b3IpLm1vZGFsKFwic2hvd1wiKTtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIENvbXBvbmVudCwgaW1wbGVtZW50YXRpb24gb2YgU2VtYW50aWMgVUkgbW9kYWwgY29tcG9uZW50cy5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB0cmlnZ2VyZWQgYnkgU01Nb2RhbERpcmVjdGl2ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgcHJvcGVydGllczogW1wic2VsZWN0b3JcIiwgXCJ0aXRsZVwiLCBcImNsYXNzXCJdLFxuICAgIHNlbGVjdG9yOiBcInNtLW1vZGFsXCJcbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWkgbW9kYWwge3tzZWxlY3Rvcn19IHt7Y2xhc3N9fVwiPlxuICAgIDxpIGNsYXNzPVwiY2xvc2UgaWNvblwiPjwvaT5cbiAgICA8ZGl2IGNsYXNzPVwidWkgaWNvbiBoZWFkZXJcIj5cbiAgICAgIHt7dGl0bGV9fVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNNb2RhbCB7fVxuIl19