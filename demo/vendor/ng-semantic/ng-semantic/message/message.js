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
var SemanticMessage = (function () {
    function SemanticMessage() {
    }
    __decorate([
        core_1.Input("type"), 
        __metadata('design:type', String)
    ], SemanticMessage.prototype, "type", void 0);
    __decorate([
        core_1.Input("icon"), 
        __metadata('design:type', String)
    ], SemanticMessage.prototype, "icon", void 0);
    __decorate([
        core_1.Input("icon"), 
        __metadata('design:type', String)
    ], SemanticMessage.prototype, "text", void 0);
    SemanticMessage = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-message"
        }),
        core_1.View({
            template: "<div [ngClass]=\"{ icon: icon}\" class=\"ui message {{type}}\">\n  <i *ngIf=\"icon\" class=\"icon {{icon}}\"></i>\n  Message: {{text}}\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticMessage);
    return SemanticMessage;
})();
exports.SemanticMessage = SemanticMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOlsiU2VtYW50aWNNZXNzYWdlIiwiU2VtYW50aWNNZXNzYWdlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0UsZUFBZSxDQUFDLENBQUE7QUFFaEY7SUFBQUE7SUFlQUMsQ0FBQ0E7SUFIQ0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7O09BQUNBLGlDQUFJQSxVQUFTQTtJQUM1QkE7UUFBQ0EsWUFBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7O09BQUNBLGlDQUFJQSxVQUFTQTtJQUM1QkE7UUFBQ0EsWUFBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7O09BQUNBLGlDQUFJQSxVQUFTQTtJQWQ5QkE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7WUFDL0NBLFFBQVFBLEVBQUVBLFlBQVlBO1NBQ3ZCQSxDQUFDQTtRQUVEQSxXQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSxnSkFHTEE7U0FDTkEsQ0FBQ0E7O3dCQUtEQTtJQUFEQSxzQkFBQ0E7QUFBREEsQ0FBQ0EsQUFmRCxJQWVDO0FBSlksdUJBQWUsa0JBSTNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6IFwic20tbWVzc2FnZVwiXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgPGRpdiBbbmdDbGFzc109XCJ7IGljb246IGljb259XCIgY2xhc3M9XCJ1aSBtZXNzYWdlIHt7dHlwZX19XCI+XG4gIDxpICpuZ0lmPVwiaWNvblwiIGNsYXNzPVwiaWNvbiB7e2ljb259fVwiPjwvaT5cbiAgTWVzc2FnZToge3t0ZXh0fX1cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNNZXNzYWdlIHtcbiAgQElucHV0KFwidHlwZVwiKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dChcImljb25cIikgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoXCJpY29uXCIpIHRleHQ6IHN0cmluZztcbn1cbiJdfQ==