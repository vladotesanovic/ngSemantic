System.register(["angular2/core", "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var DataServices;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DataServices = (function () {
                function DataServices(http) {
                    this.http = http;
                }
                DataServices.prototype.flatArray = function () {
                    return this.http
                        .get("/assets/data/flat.json");
                };
                DataServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataServices);
                return DataServices;
            })();
            exports_1("DataServices", DataServices);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvZGF0YS50cyJdLCJuYW1lcyI6WyJEYXRhU2VydmljZXMiLCJEYXRhU2VydmljZXMuY29uc3RydWN0b3IiLCJEYXRhU2VydmljZXMuZmxhdEFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFHQ0Esc0JBQW1CQSxJQUFVQTtvQkFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7Z0JBQUlBLENBQUNBO2dCQUVsQ0QsZ0NBQVNBLEdBQVRBO29CQUNDRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQTt5QkFDZEEsR0FBR0EsQ0FBQ0Esd0JBQXdCQSxDQUFDQSxDQUFBQTtnQkFDaENBLENBQUNBO2dCQVJGRjtvQkFBQ0EsaUJBQVVBLEVBQUVBOztpQ0FTWkE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQUFDQSxBQVRELElBU0M7WUFURCx1Q0FTQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2VzIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkgeyB9XG5cblx0ZmxhdEFycmF5KCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxuXHRcdFx0LmdldChcIi9hc3NldHMvZGF0YS9mbGF0Lmpzb25cIilcblx0fVxufVxuIl19