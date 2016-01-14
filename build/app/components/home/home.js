System.register(["angular2/core", "../../directives/semantic/semantic", "../../services/message"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, semantic_1, message_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(ms) {
                    this.ms = ms;
                }
                HomeComponent.prototype.submitMessage = function () {
                    this.ms.emitMessage(new Date().toISOString());
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: "home"
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        templateUrl: "./app/components/home/home.html"
                    }), 
                    __metadata('design:paramtypes', [message_1.MessageService])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUudHMiXSwibmFtZXMiOlsiSG9tZUNvbXBvbmVudCIsIkhvbWVDb21wb25lbnQuY29uc3RydWN0b3IiLCJIb21lQ29tcG9uZW50LnN1Ym1pdE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQVVDQSx1QkFBbUJBLEVBQWtCQTtvQkFBbEJDLE9BQUVBLEdBQUZBLEVBQUVBLENBQWdCQTtnQkFBSUEsQ0FBQ0E7Z0JBRTFDRCxxQ0FBYUEsR0FBYkE7b0JBQ0NFLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLENBQUNBO2dCQUMvQ0EsQ0FBQ0E7Z0JBZEZGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLE1BQU1BO3FCQUNoQkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBbUJBLEVBQUVBLDhCQUFtQkEsQ0FBQ0E7d0JBQ3REQSxXQUFXQSxFQUFFQSxpQ0FBaUNBO3FCQUM5Q0EsQ0FBQ0E7O2tDQVNEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBQUNBLEFBZkQsSUFlQztZQWZELHlDQWVDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCIuLi8uLi9kaXJlY3RpdmVzL3NlbWFudGljL3NlbWFudGljXCI7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJob21lXCJcbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcblx0dGVtcGxhdGVVcmw6IFwiLi9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIG1zOiBNZXNzYWdlU2VydmljZSkgeyB9XG5cblx0c3VibWl0TWVzc2FnZSgpIHtcblx0XHR0aGlzLm1zLmVtaXRNZXNzYWdlKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XG5cdH1cbn1cbiJdfQ==