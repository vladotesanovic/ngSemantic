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
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC50cyJdLCJuYW1lcyI6WyJTTU1vZGFsRGlyZWN0aXZlIiwiU01Nb2RhbERpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlNNTW9kYWxEaXJlY3RpdmUub25DbGljayIsIlNlbWFudGljTW9kYWwiLCJTZW1hbnRpY01vZGFsLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxxQkFBMkUsZUFBZSxDQUFDLENBQUE7QUFDM0YsUUFBTyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQy9DLFFBQU8sd0NBQXdDLENBQUMsQ0FBQTtBQVloRDtJQUFBQTtJQTJCQUMsQ0FBQ0E7SUFmR0Qsa0NBQU9BLEdBQVBBO1FBQ0lFLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLE1BQU1BLEtBQUtBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxzQkFBc0JBLENBQUNBLENBQUNBO1lBQ3BDQSxNQUFNQSxDQUFDQTtRQUNYQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4Q0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUNBQW1DQSxDQUFDQSxDQUFDQTtZQUNqREEsTUFBTUEsQ0FBQ0E7UUFDWEEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFFNURBLENBQUNBO0lBekJMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsSUFBSUEsRUFBRUE7Z0JBQ0ZBLFNBQVNBLEVBQUVBLFdBQVdBO2FBQ3pCQTtZQUNEQSxNQUFNQSxFQUFFQTtnQkFDSkEsb0JBQW9CQTthQUN2QkE7WUFDREEsUUFBUUEsRUFBRUEsZ0JBQWdCQTtTQUM3QkEsQ0FBQ0E7O3lCQW1CREE7SUFBREEsdUJBQUNBO0FBQURBLENBQUNBLEFBM0JELElBMkJDO0FBbEJZLHdCQUFnQixtQkFrQjVCLENBQUE7QUFPRDtJQUFBRztJQW1CQUMsQ0FBQ0E7SUFIR0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0E7O09BQUNBLG1DQUFRQSxVQUFTQTtJQUNwQ0E7UUFBQ0EsWUFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O09BQUNBLGdDQUFLQSxVQUFTQTtJQUM5QkE7UUFBQ0EsWUFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O09BQUNBLGdDQUFLQSxVQUFTQTtJQWxCbENBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxlQUFlQSxFQUFFQSw4QkFBdUJBLENBQUNBLE1BQU1BO1lBQy9DQSxRQUFRQSxFQUFFQSxVQUFVQTtTQUN2QkEsQ0FBQ0E7UUFDREEsV0FBSUEsQ0FBQ0E7WUFDRkEsUUFBUUEsRUFBRUEsd09BUVBBO1NBQ05BLENBQUNBOztzQkFLREE7SUFBREEsb0JBQUNBO0FBQURBLENBQUNBLEFBbkJELElBbUJDO0FBSlkscUJBQWEsZ0JBSXpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBDb21wb25lbnQsIFZpZXcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS9kaXN0L2NvbXBvbmVudHMvbW9kYWwubWluXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS9kaXN0L2NvbXBvbmVudHMvZGltbWVyLm1pblwiO1xuXG4vKipcbiAqIERpcmVjdGl2ZSwgaW1wbGVtZW50YXRpb24gb2YgU2VtYW50aWMgVUkgbW9kYWwgY29tcG9uZW50cy5cbiAqXG4gKiBPYmplY3QgdGhhdCBuZWVkIHRvIGJlIHBhc3NlZCB0byB0aGlzIGNvbXBvbmVudHMgaXM6XG4gKiB7XG4gKiAgICAgIHNlbGVjdG9yOiBzdHJpbmdcbiAqIH1cbiAqXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvbW9kYWwuaHRtbFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNsaWNrKVwiOiBcIm9uQ2xpY2soKVwiXG4gICAgfSxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgXCJkYXRhOiBzbS1kaXItbW9kYWxcIlxuICAgIF0sXG4gICAgc2VsZWN0b3I6IFwiW3NtLWRpci1tb2RhbF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTTU1vZGFsRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBqUXVlcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwialF1ZXJ5IGlzIG5vdCBsb2FkZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdG9yXCIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcmdldCBzZWxlY3RvciBtaXNzaW5nIGZvciBtb2RhbFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeShcIi51aS5tb2RhbC5cIiArIHRoaXMuZGF0YS5zZWxlY3RvcikubW9kYWwoXCJzaG93XCIpO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogQ29tcG9uZW50LCBpbXBsZW1lbnRhdGlvbiBvZiBTZW1hbnRpYyBVSSBtb2RhbCBjb21wb25lbnRzLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIHRyaWdnZXJlZCBieSBTTU1vZGFsRGlyZWN0aXZlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBzZWxlY3RvcjogXCJzbS1tb2RhbFwiXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInVpIG1vZGFsIHt7c2VsZWN0b3J9fSB7e2NsYXNzfX1cIj5cbiAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIj48L2k+XG4gICAgPGRpdiBjbGFzcz1cInVpIGljb24gaGVhZGVyXCI+XG4gICAgICB7e3RpdGxlfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljTW9kYWwge1xuICAgIEBJbnB1dChcInNlbGVjdG9yXCIpIHNlbGVjdG9yOiBzdHJpbmc7XG4gICAgQElucHV0KFwidGl0bGVcIikgdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoXCJjbGFzc1wiKSBjbGFzczogc3RyaW5nO1xufVxuIl19