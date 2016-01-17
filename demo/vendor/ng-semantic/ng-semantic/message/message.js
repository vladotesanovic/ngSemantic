System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var MessageService, SemanticMessage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService() {
                    this._emitter = new core_2.EventEmitter();
                    this._rx = this._emitter;
                }
                MessageService.prototype.emitMessage = function (data) {
                    this._rx.next(data);
                };
                return MessageService;
            })();
            exports_1("MessageService", MessageService);
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
                        selector: "sm-message",
                        providers: [MessageService]
                    }),
                    core_1.View({
                        template: "<div *ngFor=\"#message of messages\" [ngClass]=\"{icon: message.icon}\" class=\"ui message {{message.type}}\">\n  <i *ngIf=\"message.icon\" class=\"icon {{message.icon}}\"></i>\n  Message: {{message.text}}\n</div>"
                    }), 
                    __metadata('design:paramtypes', [MessageService])
                ], SemanticMessage);
                return SemanticMessage;
            })();
            exports_1("SemanticMessage", SemanticMessage);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOlsiTWVzc2FnZVNlcnZpY2UiLCJNZXNzYWdlU2VydmljZS5jb25zdHJ1Y3RvciIsIk1lc3NhZ2VTZXJ2aWNlLmVtaXRNZXNzYWdlIiwiU2VtYW50aWNNZXNzYWdlIiwiU2VtYW50aWNNZXNzYWdlLmNvbnN0cnVjdG9yIiwiU2VtYW50aWNNZXNzYWdlLm5nQWZ0ZXJWaWV3SW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUdDQTtvQkFGQUMsYUFBUUEsR0FBc0JBLElBQUlBLG1CQUFZQSxFQUFPQSxDQUFDQTtvQkFHckRBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBQ0RELG9DQUFXQSxHQUFYQSxVQUFZQSxJQUFTQTtvQkFDcEJFLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBQ0ZGLHFCQUFDQTtZQUFEQSxDQUFDQSxBQVRELElBU0M7WUFURCwyQ0FTQyxDQUFBO1lBRUQ7Z0JBaUJFRyx5QkFBbUJBLEVBQWtCQTtvQkFqQnZDQyxpQkErQ0NBO29CQTlCb0JBLE9BQUVBLEdBQUZBLEVBQUVBLENBQWdCQTtvQkFKckNBLGFBQVFBLEdBQWtCQSxJQUFJQSxLQUFLQSxFQUFVQSxDQUFDQTtvQkFFdENBLFdBQU1BLEdBQVdBLElBQUlBLENBQUNBO29CQUk1QkEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsSUFBU0E7d0JBRTlCQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxJQUFJQSxLQUFLQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDN0JBLElBQUlBLEdBQUdBO2dDQUNMQSxJQUFJQSxFQUFFQSxJQUFJQTs2QkFDWEEsQ0FBQ0E7d0JBQ0pBLENBQUNBO3dCQUdEQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFHekJBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUNwQkEsVUFBVUEsQ0FBQ0E7Z0NBQ1RBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBOzRCQUN4QkEsQ0FBQ0EsRUFBRUEsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7d0JBQ2xCQSxDQUFDQTtvQkFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVERCx5Q0FBZUEsR0FBZkE7b0JBRUVFLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLFFBQVFBLEtBQUtBLFdBQVdBLElBQUlBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN2RUEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3RDQSxDQUFDQTtnQkFFSEEsQ0FBQ0E7Z0JBN0NIRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNUQSxVQUFVQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQTt3QkFDeEJBLFFBQVFBLEVBQUVBLFlBQVlBO3dCQUN0QkEsU0FBU0EsRUFBRUEsQ0FBQ0EsY0FBY0EsQ0FBQ0E7cUJBQzVCQSxDQUFDQTtvQkFFREEsV0FBSUEsQ0FBQ0E7d0JBQ0pBLFFBQVFBLEVBQUVBLHVOQUdMQTtxQkFDTkEsQ0FBQ0E7O29DQW9DREE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQUFDQSxBQS9DRCxJQStDQztZQS9DRCw2Q0ErQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcblx0X2VtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdF9yeDogYW55O1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl9yeCA9IHRoaXMuX2VtaXR0ZXI7XG5cdH1cblx0ZW1pdE1lc3NhZ2UoZGF0YTogYW55KSB7XG5cdFx0dGhpcy5fcngubmV4dChkYXRhKTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczogW1wiZHVyYXRpb25cIl0sXG4gIHNlbGVjdG9yOiBcInNtLW1lc3NhZ2VcIixcbiAgcHJvdmlkZXJzOiBbTWVzc2FnZVNlcnZpY2VdXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFtuZ0NsYXNzXT1cIntpY29uOiBtZXNzYWdlLmljb259XCIgY2xhc3M9XCJ1aSBtZXNzYWdlIHt7bWVzc2FnZS50eXBlfX1cIj5cbiAgPGkgKm5nSWY9XCJtZXNzYWdlLmljb25cIiBjbGFzcz1cImljb24ge3ttZXNzYWdlLmljb259fVwiPjwvaT5cbiAgTWVzc2FnZToge3ttZXNzYWdlLnRleHR9fVxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY01lc3NhZ2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgbWVzc2FnZXM6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIExFTkdUSDogbnVtYmVyID0gNTAwMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbXM6IE1lc3NhZ2VTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLm1zLl9yeC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICB0ZXh0OiBkYXRhXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIGRpc3BsYXkgbWVzc2FnZVxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEpO1xuXG4gICAgICAvLyByZW1vdmUgbWVzc2FnZVxuICAgICAgaWYgKHRoaXMuTEVOR1RIID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnNoaWZ0KCk7XG4gICAgICAgIH0sIHRoaXMuTEVOR1RIKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5kdXJhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBOdW1iZXIodGhpcy5kdXJhdGlvbikgPj0gMCkge1xuICAgICAgdGhpcy5MRU5HVEggPSBOdW1iZXIodGhpcy5kdXJhdGlvbik7XG4gICAgfVxuXG4gIH1cblxufVxuIl19