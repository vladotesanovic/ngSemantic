System.register(["angular2/core", "../../../services/message"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, message_1;
    var SemanticMessage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            SemanticMessage = (function () {
                function SemanticMessage(ms) {
                    var _this = this;
                    this.ms = ms;
                    this.messages = new Array();
                    this.LENGTH = 5000;
                    this.ms._rx.subscribe(function (data) {
                        if (typeof data === "string") {
                            data = {
                                text: data
                            };
                        }
                        _this.messages.push(data);
                        if (_this.LENGTH > 0) {
                            setTimeout(function () {
                                _this.messages.shift();
                            }, _this.LENGTH);
                        }
                    });
                }
                SemanticMessage.prototype.ngAfterViewInit = function () {
                    if (typeof this.duration !== "undefined" && Number(this.duration) >= 0) {
                        this.LENGTH = Number(this.duration);
                    }
                };
                SemanticMessage = __decorate([
                    core_1.Component({
                        properties: ["duration"],
                        selector: "sm-message"
                    }),
                    core_1.View({
                        template: "<div *ngFor=\"#message of messages\" [ngClass]=\"{icon: message.icon}\" class=\"ui message {{message.type}}\">\n  <i *ngIf=\"message.icon\" class=\"icon {{message.icon}}\"></i>\n  Message: {{message.text}}\n</div>"
                    }), 
                    __metadata('design:paramtypes', [message_1.MessageService])
                ], SemanticMessage);
                return SemanticMessage;
            })();
            exports_1("SemanticMessage", SemanticMessage);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvZGlyZWN0aXZlcy9zZW1hbnRpYy9tZXNzYWdlL21lc3NhZ2UudHMiXSwibmFtZXMiOlsiU2VtYW50aWNNZXNzYWdlIiwiU2VtYW50aWNNZXNzYWdlLmNvbnN0cnVjdG9yIiwiU2VtYW50aWNNZXNzYWdlLm5nQWZ0ZXJWaWV3SW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBZ0JFQSx5QkFBbUJBLEVBQWtCQTtvQkFoQnZDQyxpQkE4Q0NBO29CQTlCb0JBLE9BQUVBLEdBQUZBLEVBQUVBLENBQWdCQTtvQkFKckNBLGFBQVFBLEdBQWtCQSxJQUFJQSxLQUFLQSxFQUFVQSxDQUFDQTtvQkFFdENBLFdBQU1BLEdBQVdBLElBQUlBLENBQUNBO29CQUk1QkEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsSUFBU0E7d0JBRTlCQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxJQUFJQSxLQUFLQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDN0JBLElBQUlBLEdBQUdBO2dDQUNMQSxJQUFJQSxFQUFFQSxJQUFJQTs2QkFDWEEsQ0FBQ0E7d0JBQ0pBLENBQUNBO3dCQUdEQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFHekJBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUNwQkEsVUFBVUEsQ0FBQ0E7Z0NBQ1RBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBOzRCQUN4QkEsQ0FBQ0EsRUFBRUEsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7d0JBQ2xCQSxDQUFDQTtvQkFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVERCx5Q0FBZUEsR0FBZkE7b0JBRUVFLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLFFBQVFBLEtBQUtBLFdBQVdBLElBQUlBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN2RUEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3RDQSxDQUFDQTtnQkFFSEEsQ0FBQ0E7Z0JBNUNIRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNUQSxVQUFVQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQTt3QkFDeEJBLFFBQVFBLEVBQUVBLFlBQVlBO3FCQUN2QkEsQ0FBQ0E7b0JBRURBLFdBQUlBLENBQUNBO3dCQUNKQSxRQUFRQSxFQUFFQSx1TkFHTEE7cUJBQ05BLENBQUNBOztvQ0FvQ0RBO2dCQUFEQSxzQkFBQ0E7WUFBREEsQ0FBQ0EsQUE5Q0QsSUE4Q0M7WUE5Q0QsNkNBOENDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczogW1wiZHVyYXRpb25cIl0sXG4gIHNlbGVjdG9yOiBcInNtLW1lc3NhZ2VcIlxufSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYDxkaXYgKm5nRm9yPVwiI21lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbbmdDbGFzc109XCJ7aWNvbjogbWVzc2FnZS5pY29ufVwiIGNsYXNzPVwidWkgbWVzc2FnZSB7e21lc3NhZ2UudHlwZX19XCI+XG4gIDxpICpuZ0lmPVwibWVzc2FnZS5pY29uXCIgY2xhc3M9XCJpY29uIHt7bWVzc2FnZS5pY29ufX1cIj48L2k+XG4gIE1lc3NhZ2U6IHt7bWVzc2FnZS50ZXh0fX1cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VtYW50aWNNZXNzYWdlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIG1lc3NhZ2VzOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgcHJpdmF0ZSBMRU5HVEg6IG51bWJlciA9IDUwMDA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG1zOiBNZXNzYWdlU2VydmljZSkge1xuXG4gICAgdGhpcy5tcy5fcnguc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgdGV4dDogZGF0YVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyBkaXNwbGF5IG1lc3NhZ2VcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhKTtcblxuICAgICAgLy8gcmVtb3ZlIG1lc3NhZ2VcbiAgICAgIGlmICh0aGlzLkxFTkdUSCA+IDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlcy5zaGlmdCgpO1xuICAgICAgICB9LCB0aGlzLkxFTkdUSCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuZHVyYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgTnVtYmVyKHRoaXMuZHVyYXRpb24pID49IDApIHtcbiAgICAgIHRoaXMuTEVOR1RIID0gTnVtYmVyKHRoaXMuZHVyYXRpb24pO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==