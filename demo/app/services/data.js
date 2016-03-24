System.register(["angular2/core", "angular2/http", "rxjs/operator/map"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            },
            function (_1) {}],
        execute: function() {
            DataServices = (function () {
                function DataServices(http) {
                    this.http = http;
                }
                DataServices.prototype.array = function (name) {
                    return this.http
                        .get("/assets/data/" + name + ".json")
                        .map(function (respond) { return respond.json(); });
                };
                DataServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataServices);
                return DataServices;
            }());
            exports_1("DataServices", DataServices);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFFQyxzQkFBbUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUFJLENBQUM7Z0JBRWxDLDRCQUFLLEdBQUwsVUFBTSxJQUFZO29CQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7eUJBQ2QsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDO3lCQUNyQyxHQUFHLENBQUMsVUFBQyxPQUFZLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBVEY7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBVWIsbUJBQUM7WUFBRCxDQUFDLEFBVEQsSUFTQztZQVRELHVDQVNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL29wZXJhdG9yL21hcFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2VzIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkgeyB9XG5cblx0YXJyYXkobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5odHRwXG5cdFx0XHQuZ2V0KFwiL2Fzc2V0cy9kYXRhL1wiICsgbmFtZSArIFwiLmpzb25cIilcblx0XHRcdC5tYXAoKHJlc3BvbmQ6IGFueSkgPT4gcmVzcG9uZC5qc29uKCkpO1xuXHR9XG59XG4iXX0=