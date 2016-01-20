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
var SemanticList = (function () {
    function SemanticList() {
    }
    SemanticList = __decorate([
        core_1.Component({
            properties: ["items", "class"],
            selector: "sm-list"
        }),
        core_1.View({
            template: "<div *ngFor=\"#item of items\" class=\"ui list {{class}}\">\n  <div class=\"item\">{{item}}</div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticList);
    return SemanticList;
})();
exports.SemanticList = SemanticList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOlsiU2VtYW50aWNMaXN0IiwiU2VtYW50aWNMaXN0LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQ7SUFBQUE7SUFVMkJDLENBQUNBO0lBVjVCRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsVUFBVUEsRUFBRUEsQ0FBQ0EsT0FBT0EsRUFBRUEsT0FBT0EsQ0FBQ0E7WUFDOUJBLFFBQVFBLEVBQUVBLFNBQVNBO1NBQ3BCQSxDQUFDQTtRQUVEQSxXQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSwyR0FFTEE7U0FDTkEsQ0FBQ0E7O3FCQUMwQkE7SUFBREEsbUJBQUNBO0FBQURBLENBQUNBLEFBVjVCLElBVTRCO0FBQWYsb0JBQVksZUFBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IFtcIml0ZW1zXCIsIFwiY2xhc3NcIl0sXG4gIHNlbGVjdG9yOiBcInNtLWxpc3RcIlxufSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYDxkaXYgKm5nRm9yPVwiI2l0ZW0gb2YgaXRlbXNcIiBjbGFzcz1cInVpIGxpc3Qge3tjbGFzc319XCI+XG4gIDxkaXYgY2xhc3M9XCJpdGVtXCI+e3tpdGVtfX08L2Rpdj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNMaXN0IHt9XG4iXX0=