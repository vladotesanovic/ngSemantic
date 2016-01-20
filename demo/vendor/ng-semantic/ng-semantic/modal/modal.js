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
require("semantic/modal.min");
require("semantic/dimmer.min");
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
exports.SemanticModal = SemanticModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC50cyJdLCJuYW1lcyI6WyJTTU1vZGFsRGlyZWN0aXZlIiwiU01Nb2RhbERpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlNNTW9kYWxEaXJlY3RpdmUub25DbGljayIsIlNlbWFudGljTW9kYWwiLCJTZW1hbnRpY01vZGFsLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsUUFBTyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzVCLFFBQU8scUJBQXFCLENBQUMsQ0FBQTtBQVk3QjtJQUFBQTtJQXVCQUMsQ0FBQ0E7SUFYR0Qsa0NBQU9BLEdBQVBBO1FBRUlFLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtQ0FBbUNBLENBQUNBLENBQUNBO1lBQ2pEQSxNQUFNQSxDQUFDQTtRQUNYQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUU1REEsQ0FBQ0E7SUFyQkxGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxJQUFJQSxFQUFFQTtnQkFDRkEsU0FBU0EsRUFBRUEsV0FBV0E7YUFDekJBO1lBQ0RBLE1BQU1BLEVBQUVBO2dCQUNKQSxvQkFBb0JBO2FBQ3ZCQTtZQUNEQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO1NBQzdCQSxDQUFDQTs7eUJBZURBO0lBQURBLHVCQUFDQTtBQUFEQSxDQUFDQSxBQXZCRCxJQXVCQztBQWRZLHdCQUFnQixtQkFjNUIsQ0FBQTtBQU9EO0lBQUFHO0lBZTRCQyxDQUFDQTtJQWY3QkQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFVBQVVBLEVBQUVBLENBQUNBLFVBQVVBLEVBQUVBLE9BQU9BLEVBQUVBLE9BQU9BLENBQUNBO1lBQzFDQSxRQUFRQSxFQUFFQSxVQUFVQTtTQUN2QkEsQ0FBQ0E7UUFDREEsV0FBSUEsQ0FBQ0E7WUFDRkEsUUFBUUEsRUFBRUEsd09BUVBBO1NBQ05BLENBQUNBOztzQkFDMkJBO0lBQURBLG9CQUFDQTtBQUFEQSxDQUFDQSxBQWY3QixJQWU2QjtBQUFoQixxQkFBYSxnQkFBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IFwic2VtYW50aWMvbW9kYWwubWluXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy9kaW1tZXIubWluXCI7XG5cbi8qKlxuICogRGlyZWN0aXZlLCBpbXBsZW1lbnRhdGlvbiBvZiBTZW1hbnRpYyBVSSBtb2RhbCBjb21wb25lbnRzLlxuICpcbiAqIE9iamVjdCB0aGF0IG5lZWQgdG8gYmUgcGFzc2VkIHRvIHRoaXMgY29tcG9uZW50cyBpczpcbiAqIHtcbiAqICAgICAgc2VsZWN0b3I6IHN0cmluZ1xuICogfVxuICpcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9tb2RhbC5odG1sXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY2xpY2spXCI6IFwib25DbGljaygpXCJcbiAgICB9LFxuICAgIGlucHV0czogW1xuICAgICAgICBcImRhdGE6IHNtLWRpci1tb2RhbFwiXG4gICAgXSxcbiAgICBzZWxlY3RvcjogXCJbc20tZGlyLW1vZGFsXVwiXG59KVxuZXhwb3J0IGNsYXNzIFNNTW9kYWxEaXJlY3RpdmUge1xuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG5cbiAgICBvbkNsaWNrKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmhhc093blByb3BlcnR5KFwic2VsZWN0b3JcIikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0IHNlbGVjdG9yIG1pc3NpbmcgZm9yIG1vZGFsXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgalF1ZXJ5KFwiLnVpLm1vZGFsLlwiICsgdGhpcy5kYXRhLnNlbGVjdG9yKS5tb2RhbChcInNob3dcIik7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBDb21wb25lbnQsIGltcGxlbWVudGF0aW9uIG9mIFNlbWFudGljIFVJIG1vZGFsIGNvbXBvbmVudHMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgdHJpZ2dlcmVkIGJ5IFNNTW9kYWxEaXJlY3RpdmUuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHByb3BlcnRpZXM6IFtcInNlbGVjdG9yXCIsIFwidGl0bGVcIiwgXCJjbGFzc1wiXSxcbiAgICBzZWxlY3RvcjogXCJzbS1tb2RhbFwiXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInVpIG1vZGFsIHt7c2VsZWN0b3J9fSB7e2NsYXNzfX1cIj5cbiAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIj48L2k+XG4gICAgPGRpdiBjbGFzcz1cInVpIGljb24gaGVhZGVyXCI+XG4gICAgICB7e3RpdGxlfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljTW9kYWwge31cbiJdfQ==