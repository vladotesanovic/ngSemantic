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
require("semantic-ui/dist/components/modal.min");
require("semantic-ui/dist/components/dimmer.min");
var SMModalDirective = (function () {
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
exports.SMModalDirective = SMModalDirective;
var SemanticModal = (function () {
    function SemanticModal() {
    }
    __decorate([
        core_1.Input("selector"), 
        __metadata('design:type', String)
    ], SemanticModal.prototype, "selector", void 0);
    __decorate([
        core_1.Input("title"), 
        __metadata('design:type', String)
    ], SemanticModal.prototype, "title", void 0);
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticModal.prototype, "class", void 0);
    SemanticModal = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-modal"
        }),
        core_1.View({
            template: "<div class=\"ui modal {{selector}} {{class}}\">\n    <i class=\"close icon\"></i>\n    <div class=\"ui icon header\">\n      {{title}}\n    </div>\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticModal);
    return SemanticModal;
})();
exports.SemanticModal = SemanticModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC50cyJdLCJuYW1lcyI6WyJTTU1vZGFsRGlyZWN0aXZlIiwiU01Nb2RhbERpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlNNTW9kYWxEaXJlY3RpdmUub25DbGljayIsIlNlbWFudGljTW9kYWwiLCJTZW1hbnRpY01vZGFsLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxxQkFBMkUsZUFBZSxDQUFDLENBQUE7QUFDM0YsUUFBTyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQy9DLFFBQU8sd0NBQXdDLENBQUMsQ0FBQTtBQVloRDtJQUFBQTtJQXVCQUMsQ0FBQ0E7SUFYR0Qsa0NBQU9BLEdBQVBBO1FBRUlFLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtQ0FBbUNBLENBQUNBLENBQUNBO1lBQ2pEQSxNQUFNQSxDQUFDQTtRQUNYQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUU1REEsQ0FBQ0E7SUFyQkxGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxJQUFJQSxFQUFFQTtnQkFDRkEsU0FBU0EsRUFBRUEsV0FBV0E7YUFDekJBO1lBQ0RBLE1BQU1BLEVBQUVBO2dCQUNKQSxvQkFBb0JBO2FBQ3ZCQTtZQUNEQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO1NBQzdCQSxDQUFDQTs7eUJBZURBO0lBQURBLHVCQUFDQTtBQUFEQSxDQUFDQSxBQXZCRCxJQXVCQztBQWRZLHdCQUFnQixtQkFjNUIsQ0FBQTtBQU9EO0lBQUFHO0lBbUJBQyxDQUFDQTtJQUhDRDtRQUFDQSxZQUFLQSxDQUFDQSxVQUFVQSxDQUFDQTs7T0FBQ0EsbUNBQVFBLFVBQVNBO0lBQ3BDQTtRQUFDQSxZQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTs7T0FBQ0EsZ0NBQUtBLFVBQVNBO0lBQzlCQTtRQUFDQSxZQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTs7T0FBQ0EsZ0NBQUtBLFVBQVNBO0lBbEJoQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDL0NBLFFBQVFBLEVBQUVBLFVBQVVBO1NBQ3ZCQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSx3T0FRUEE7U0FDTkEsQ0FBQ0E7O3NCQUtEQTtJQUFEQSxvQkFBQ0E7QUFBREEsQ0FBQ0EsQUFuQkQsSUFtQkM7QUFKWSxxQkFBYSxnQkFJekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgeyBEaXJlY3RpdmUsIENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCBcInNlbWFudGljLXVpL2Rpc3QvY29tcG9uZW50cy9tb2RhbC5taW5cIjtcbmltcG9ydCBcInNlbWFudGljLXVpL2Rpc3QvY29tcG9uZW50cy9kaW1tZXIubWluXCI7XG5cbi8qKlxuICogRGlyZWN0aXZlLCBpbXBsZW1lbnRhdGlvbiBvZiBTZW1hbnRpYyBVSSBtb2RhbCBjb21wb25lbnRzLlxuICpcbiAqIE9iamVjdCB0aGF0IG5lZWQgdG8gYmUgcGFzc2VkIHRvIHRoaXMgY29tcG9uZW50cyBpczpcbiAqIHtcbiAqICAgICAgc2VsZWN0b3I6IHN0cmluZ1xuICogfVxuICpcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9tb2RhbC5odG1sXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY2xpY2spXCI6IFwib25DbGljaygpXCJcbiAgICB9LFxuICAgIGlucHV0czogW1xuICAgICAgICBcImRhdGE6IHNtLWRpci1tb2RhbFwiXG4gICAgXSxcbiAgICBzZWxlY3RvcjogXCJbc20tZGlyLW1vZGFsXVwiXG59KVxuZXhwb3J0IGNsYXNzIFNNTW9kYWxEaXJlY3RpdmUge1xuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG5cbiAgICBvbkNsaWNrKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmhhc093blByb3BlcnR5KFwic2VsZWN0b3JcIikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0IHNlbGVjdG9yIG1pc3NpbmcgZm9yIG1vZGFsXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgalF1ZXJ5KFwiLnVpLm1vZGFsLlwiICsgdGhpcy5kYXRhLnNlbGVjdG9yKS5tb2RhbChcInNob3dcIik7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBDb21wb25lbnQsIGltcGxlbWVudGF0aW9uIG9mIFNlbWFudGljIFVJIG1vZGFsIGNvbXBvbmVudHMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgdHJpZ2dlcmVkIGJ5IFNNTW9kYWxEaXJlY3RpdmUuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHNlbGVjdG9yOiBcInNtLW1vZGFsXCJcbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWkgbW9kYWwge3tzZWxlY3Rvcn19IHt7Y2xhc3N9fVwiPlxuICAgIDxpIGNsYXNzPVwiY2xvc2UgaWNvblwiPjwvaT5cbiAgICA8ZGl2IGNsYXNzPVwidWkgaWNvbiBoZWFkZXJcIj5cbiAgICAgIHt7dGl0bGV9fVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNNb2RhbCB7XG4gIEBJbnB1dChcInNlbGVjdG9yXCIpIHNlbGVjdG9yOiBzdHJpbmc7XG4gIEBJbnB1dChcInRpdGxlXCIpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dChcImNsYXNzXCIpIGNsYXNzOiBzdHJpbmc7XG59XG4iXX0=