System.register(["angular2/core", "angular2/http", "rxjs/Rx"], function(exports_1, context_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUdDLHNCQUFtQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBRnJCLGFBQVEsR0FBRyxJQUFJLGtCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBR3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFFRCw4QkFBTyxHQUFQO29CQUFBLGlCQVdDO29CQVRBLE1BQU0sQ0FBQyxlQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBYTt3QkFFN0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTOzRCQUU5QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUV4QixDQUFDLENBQUMsQ0FBQztvQkFFUCxDQUFDLENBQUMsQ0FBQztnQkFDVixDQUFDO2dCQW5CRjtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkFvQmIsbUJBQUM7WUFBRCxDQUFDLEFBbkJELElBbUJDO1lBbkJELHVDQW1CQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuXG4vKipcbiAqIER1bW15IHNlcnZpY2UgZm9yIHJldHJpZXZpbmcgbWVudSBpbiBhcHBsaWNhdGlvbi5cbiAqIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2VzIHtcblx0cHJpdmF0ZSBfc3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7XG5cdFx0dGhpcy5odHRwLmdldChcIi9hc3NldHMvZGF0YS9tZW51Lmpzb25cIikuc3Vic2NyaWJlKHRoaXMuX3N1YmplY3QpO1xuXHR9XG5cblx0Z2V0TWVudSgpOiBhbnkge1xuXG5cdFx0cmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuX3N1YmplY3Quc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZGF0YSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXHR9XG59XG4iXX0=