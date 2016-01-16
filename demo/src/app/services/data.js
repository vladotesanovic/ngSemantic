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
var http_1 = require("angular2/http");
var DataServices = (function () {
    function DataServices(http) {
        this.http = http;
    }
    DataServices.prototype.flatArray = function () {
        return this.http
            .get("/assets/data/flat.json")
            .map(function (response) { return response.json(); });
    };
    DataServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataServices);
    return DataServices;
})();
exports.DataServices = DataServices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvZGF0YS50cyJdLCJuYW1lcyI6WyJEYXRhU2VydmljZXMiLCJEYXRhU2VydmljZXMuY29uc3RydWN0b3IiLCJEYXRhU2VydmljZXMuZmxhdEFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBR3JDO0lBR0NBLHNCQUFtQkEsSUFBVUE7UUFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7SUFBSUEsQ0FBQ0E7SUFFbENELGdDQUFTQSxHQUFUQTtRQUNDRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQTthQUNkQSxHQUFHQSxDQUFDQSx3QkFBd0JBLENBQUNBO2FBQzdCQSxHQUFHQSxDQUFDQSxVQUFDQSxRQUFhQSxJQUFLQSxPQUFBQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFmQSxDQUFlQSxDQUFDQSxDQUFDQTtJQUMzQ0EsQ0FBQ0E7SUFURkY7UUFBQ0EsaUJBQVVBLEVBQUVBOztxQkFVWkE7SUFBREEsbUJBQUNBO0FBQURBLENBQUNBLEFBVkQsSUFVQztBQVRZLG9CQUFZLGVBU3hCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZXMge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7IH1cblxuXHRmbGF0QXJyYXkoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5odHRwXG5cdFx0XHQuZ2V0KFwiL2Fzc2V0cy9kYXRhL2ZsYXQuanNvblwiKVxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblx0fVxufVxuIl19