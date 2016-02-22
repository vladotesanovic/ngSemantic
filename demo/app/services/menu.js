System.register(["angular2/core", "angular2/http", "rxjs/Rx"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1;
    var MenuServices;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            MenuServices = (function () {
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
            }());
            exports_1("MenuServices", MenuServices);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBR0Msc0JBQW1CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFGckIsYUFBUSxHQUFHLElBQUksa0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFHdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUVELDhCQUFPLEdBQVA7b0JBQUEsaUJBV0M7b0JBVEEsTUFBTSxDQUFDLGVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFhO3dCQUU3QixLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVM7NEJBRTlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRXhCLENBQUMsQ0FBQyxDQUFDO29CQUVQLENBQUMsQ0FBQyxDQUFDO2dCQUNWLENBQUM7Z0JBbkJGO29CQUFDLGlCQUFVLEVBQUU7O2dDQUFBO2dCQW9CYixtQkFBQztZQUFELENBQUMsQUFuQkQsSUFtQkM7WUFuQkQsdUNBbUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5cbi8qKlxuICogRHVtbXkgc2VydmljZSBmb3IgcmV0cmlldmluZyBtZW51IGluIGFwcGxpY2F0aW9uLlxuICogXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZXMge1xuXHRwcml2YXRlIF9zdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG5cblx0Y29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHApIHtcblx0XHR0aGlzLmh0dHAuZ2V0KFwiL2Fzc2V0cy9kYXRhL21lbnUuanNvblwiKS5zdWJzY3JpYmUodGhpcy5fc3ViamVjdCk7XG5cdH1cblxuXHRnZXRNZW51KCk6IGFueSB7XG5cblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5fc3ViamVjdC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cdH1cbn1cbiJdfQ==