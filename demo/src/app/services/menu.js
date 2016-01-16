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
var Rx_1 = require("rxjs/Rx");
var MenuServices = (function () {
    function MenuServices(http) {
        this.http = http;
        this._subject = new Rx_1.ReplaySubject(1);
        this.http.get("/assets/data/menu.json").subscribe(this._subject);
    }
    MenuServices.prototype.getMenu = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this._subject.subscribe(function (data) {
                observer.next(data);
            });
        });
    };
    MenuServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MenuServices);
    return MenuServices;
})();
exports.MenuServices = MenuServices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvbWVudS50cyJdLCJuYW1lcyI6WyJNZW51U2VydmljZXMiLCJNZW51U2VydmljZXMuY29uc3RydWN0b3IiLCJNZW51U2VydmljZXMuZ2V0TWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUFxQixlQUFlLENBQUMsQ0FBQTtBQUNyQyxtQkFBMEMsU0FBUyxDQUFDLENBQUE7QUFNcEQ7SUFJQ0Esc0JBQW1CQSxJQUFVQTtRQUFWQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtRQUZyQkEsYUFBUUEsR0FBR0EsSUFBSUEsa0JBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBR3ZDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO0lBQ2xFQSxDQUFDQTtJQUVERCw4QkFBT0EsR0FBUEE7UUFBQUUsaUJBV0NBO1FBVEFBLE1BQU1BLENBQUNBLGVBQVVBLENBQUNBLE1BQU1BLENBQUNBLFVBQUNBLFFBQWFBO1lBRTdCQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFTQTtnQkFFOUJBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBRXhCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVQQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNWQSxDQUFDQTtJQW5CRkY7UUFBQ0EsaUJBQVVBLEVBQUVBOztxQkFvQlpBO0lBQURBLG1CQUFDQTtBQUFEQSxDQUFDQSxBQXBCRCxJQW9CQztBQW5CWSxvQkFBWSxlQW1CeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcblxuLyoqXG4gKiBEdW1teSBzZXJ2aWNlIGZvciByZXRyaWV2aW5nIG1lbnUgaW4gYXBwbGljYXRpb24uXG4gKiBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlcyB7XG5cdHByaXZhdGUgX3N1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuXHRcdHRoaXMuaHR0cC5nZXQoXCIvYXNzZXRzL2RhdGEvbWVudS5qc29uXCIpLnN1YnNjcmliZSh0aGlzLl9zdWJqZWN0KTtcblx0fVxuXG5cdGdldE1lbnUoKTogYW55IHtcblxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLl9zdWJqZWN0LnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGEpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblx0fVxufVxuIl19