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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2RpcmVjdGl2ZXMvc2VtYW50aWMvbW9kYWwvbW9kYWwudHMiXSwibmFtZXMiOlsiU01Nb2RhbERpcmVjdGl2ZSIsIlNNTW9kYWxEaXJlY3RpdmUuY29uc3RydWN0b3IiLCJTTU1vZGFsRGlyZWN0aXZlLm9uQ2xpY2siLCJTZW1hbnRpY01vZGFsIiwiU2VtYW50aWNNb2RhbC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQUM1QixRQUFPLHFCQUFxQixDQUFDLENBQUE7QUFZN0I7SUFBQUE7SUF1QkFDLENBQUNBO0lBWEdELGtDQUFPQSxHQUFQQTtRQUVJRSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4Q0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUNBQW1DQSxDQUFDQSxDQUFDQTtZQUNqREEsTUFBTUEsQ0FBQ0E7UUFDWEEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFFNURBLENBQUNBO0lBckJMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsSUFBSUEsRUFBRUE7Z0JBQ0ZBLFNBQVNBLEVBQUVBLFdBQVdBO2FBQ3pCQTtZQUNEQSxNQUFNQSxFQUFFQTtnQkFDSkEsb0JBQW9CQTthQUN2QkE7WUFDREEsUUFBUUEsRUFBRUEsZ0JBQWdCQTtTQUM3QkEsQ0FBQ0E7O3lCQWVEQTtJQUFEQSx1QkFBQ0E7QUFBREEsQ0FBQ0EsQUF2QkQsSUF1QkM7QUFkWSx3QkFBZ0IsbUJBYzVCLENBQUE7QUFPRDtJQUFBRztJQWU0QkMsQ0FBQ0E7SUFmN0JEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxVQUFVQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFFQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUFDQTtZQUMxQ0EsUUFBUUEsRUFBRUEsVUFBVUE7U0FDdkJBLENBQUNBO1FBQ0RBLFdBQUlBLENBQUNBO1lBQ0ZBLFFBQVFBLEVBQUVBLHdPQVFQQTtTQUNOQSxDQUFDQTs7c0JBQzJCQTtJQUFEQSxvQkFBQ0E7QUFBREEsQ0FBQ0EsQUFmN0IsSUFlNkI7QUFBaEIscUJBQWEsZ0JBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7IERpcmVjdGl2ZSwgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCBcInNlbWFudGljL21vZGFsLm1pblwiO1xuaW1wb3J0IFwic2VtYW50aWMvZGltbWVyLm1pblwiO1xuXG4vKipcbiAqIERpcmVjdGl2ZSwgaW1wbGVtZW50YXRpb24gb2YgU2VtYW50aWMgVUkgbW9kYWwgY29tcG9uZW50cy5cbiAqXG4gKiBPYmplY3QgdGhhdCBuZWVkIHRvIGJlIHBhc3NlZCB0byB0aGlzIGNvbXBvbmVudHMgaXM6XG4gKiB7XG4gKiAgICAgIHNlbGVjdG9yOiBzdHJpbmdcbiAqIH1cbiAqXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvbW9kYWwuaHRtbFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNsaWNrKVwiOiBcIm9uQ2xpY2soKVwiXG4gICAgfSxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgXCJkYXRhOiBzbS1kaXItbW9kYWxcIlxuICAgIF0sXG4gICAgc2VsZWN0b3I6IFwiW3NtLWRpci1tb2RhbF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTTU1vZGFsRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuXG4gICAgb25DbGljaygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdG9yXCIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcmdldCBzZWxlY3RvciBtaXNzaW5nIGZvciBtb2RhbFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeShcIi51aS5tb2RhbC5cIiArIHRoaXMuZGF0YS5zZWxlY3RvcikubW9kYWwoXCJzaG93XCIpO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogQ29tcG9uZW50LCBpbXBsZW1lbnRhdGlvbiBvZiBTZW1hbnRpYyBVSSBtb2RhbCBjb21wb25lbnRzLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIHRyaWdnZXJlZCBieSBTTU1vZGFsRGlyZWN0aXZlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBwcm9wZXJ0aWVzOiBbXCJzZWxlY3RvclwiLCBcInRpdGxlXCIsIFwiY2xhc3NcIl0sXG4gICAgc2VsZWN0b3I6IFwic20tbW9kYWxcIlxufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1aSBtb2RhbCB7e3NlbGVjdG9yfX0ge3tjbGFzc319XCI+XG4gICAgPGkgY2xhc3M9XCJjbG9zZSBpY29uXCI+PC9pPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBpY29uIGhlYWRlclwiPlxuICAgICAge3t0aXRsZX19XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY01vZGFsIHt9XG4iXX0=