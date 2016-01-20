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
    SemanticMessage = __decorate([
        core_1.Component({
            properties: ["type", "icon", "text"],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOlsiU2VtYW50aWNNZXNzYWdlIiwiU2VtYW50aWNNZXNzYWdlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQ7SUFBQUE7SUFXOEJDLENBQUNBO0lBWC9CRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsVUFBVUEsRUFBRUEsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsRUFBQ0EsTUFBTUEsQ0FBQ0E7WUFDbkNBLFFBQVFBLEVBQUVBLFlBQVlBO1NBQ3ZCQSxDQUFDQTtRQUVEQSxXQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSxnSkFHTEE7U0FDTkEsQ0FBQ0E7O3dCQUM2QkE7SUFBREEsc0JBQUNBO0FBQURBLENBQUNBLEFBWC9CLElBVytCO0FBQWxCLHVCQUFlLGtCQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczogW1widHlwZVwiLCBcImljb25cIixcInRleHRcIl0sXG4gIHNlbGVjdG9yOiBcInNtLW1lc3NhZ2VcIlxufSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwieyBpY29uOiBpY29ufVwiIGNsYXNzPVwidWkgbWVzc2FnZSB7e3R5cGV9fVwiPlxuICA8aSAqbmdJZj1cImljb25cIiBjbGFzcz1cImljb24ge3tpY29ufX1cIj48L2k+XG4gIE1lc3NhZ2U6IHt7dGV4dH19XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljTWVzc2FnZSB7fVxuIl19