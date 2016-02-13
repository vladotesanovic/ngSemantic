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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC50cyJdLCJuYW1lcyI6WyJTTU1vZGFsRGlyZWN0aXZlIiwiU01Nb2RhbERpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlNNTW9kYWxEaXJlY3RpdmUub25DbGljayIsIlNlbWFudGljTW9kYWwiLCJTZW1hbnRpY01vZGFsLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxxQkFBMkUsZUFBZSxDQUFDLENBQUE7QUFDM0YsUUFBTyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzVCLFFBQU8scUJBQXFCLENBQUMsQ0FBQTtBQVk3QjtJQUFBQTtJQXVCQUMsQ0FBQ0E7SUFYR0Qsa0NBQU9BLEdBQVBBO1FBRUlFLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtQ0FBbUNBLENBQUNBLENBQUNBO1lBQ2pEQSxNQUFNQSxDQUFDQTtRQUNYQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUU1REEsQ0FBQ0E7SUFyQkxGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxJQUFJQSxFQUFFQTtnQkFDRkEsU0FBU0EsRUFBRUEsV0FBV0E7YUFDekJBO1lBQ0RBLE1BQU1BLEVBQUVBO2dCQUNKQSxvQkFBb0JBO2FBQ3ZCQTtZQUNEQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO1NBQzdCQSxDQUFDQTs7eUJBZURBO0lBQURBLHVCQUFDQTtBQUFEQSxDQUFDQSxBQXZCRCxJQXVCQztBQWRZLHdCQUFnQixtQkFjNUIsQ0FBQTtBQU9EO0lBQUFHO0lBbUJBQyxDQUFDQTtJQUhDRDtRQUFDQSxZQUFLQSxDQUFDQSxVQUFVQSxDQUFDQTs7T0FBQ0EsbUNBQVFBLFVBQVNBO0lBQ3BDQTtRQUFDQSxZQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTs7T0FBQ0EsZ0NBQUtBLFVBQVNBO0lBQzlCQTtRQUFDQSxZQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTs7T0FBQ0EsZ0NBQUtBLFVBQVNBO0lBbEJoQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDL0NBLFFBQVFBLEVBQUVBLFVBQVVBO1NBQ3ZCQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSx3T0FRUEE7U0FDTkEsQ0FBQ0E7O3NCQUtEQTtJQUFEQSxvQkFBQ0E7QUFBREEsQ0FBQ0EsQUFuQkQsSUFtQkM7QUFKWSxxQkFBYSxnQkFJekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgeyBEaXJlY3RpdmUsIENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCBcInNlbWFudGljL21vZGFsLm1pblwiO1xuaW1wb3J0IFwic2VtYW50aWMvZGltbWVyLm1pblwiO1xuXG4vKipcbiAqIERpcmVjdGl2ZSwgaW1wbGVtZW50YXRpb24gb2YgU2VtYW50aWMgVUkgbW9kYWwgY29tcG9uZW50cy5cbiAqXG4gKiBPYmplY3QgdGhhdCBuZWVkIHRvIGJlIHBhc3NlZCB0byB0aGlzIGNvbXBvbmVudHMgaXM6XG4gKiB7XG4gKiAgICAgIHNlbGVjdG9yOiBzdHJpbmdcbiAqIH1cbiAqXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvbW9kYWwuaHRtbFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNsaWNrKVwiOiBcIm9uQ2xpY2soKVwiXG4gICAgfSxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgXCJkYXRhOiBzbS1kaXItbW9kYWxcIlxuICAgIF0sXG4gICAgc2VsZWN0b3I6IFwiW3NtLWRpci1tb2RhbF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTTU1vZGFsRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuXG4gICAgb25DbGljaygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdG9yXCIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcmdldCBzZWxlY3RvciBtaXNzaW5nIGZvciBtb2RhbFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeShcIi51aS5tb2RhbC5cIiArIHRoaXMuZGF0YS5zZWxlY3RvcikubW9kYWwoXCJzaG93XCIpO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogQ29tcG9uZW50LCBpbXBsZW1lbnRhdGlvbiBvZiBTZW1hbnRpYyBVSSBtb2RhbCBjb21wb25lbnRzLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIHRyaWdnZXJlZCBieSBTTU1vZGFsRGlyZWN0aXZlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBzZWxlY3RvcjogXCJzbS1tb2RhbFwiXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInVpIG1vZGFsIHt7c2VsZWN0b3J9fSB7e2NsYXNzfX1cIj5cbiAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIj48L2k+XG4gICAgPGRpdiBjbGFzcz1cInVpIGljb24gaGVhZGVyXCI+XG4gICAgICB7e3RpdGxlfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljTW9kYWwge1xuICBASW5wdXQoXCJzZWxlY3RvclwiKSBzZWxlY3Rvcjogc3RyaW5nO1xuICBASW5wdXQoXCJ0aXRsZVwiKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoXCJjbGFzc1wiKSBjbGFzczogc3RyaW5nO1xufVxuIl19