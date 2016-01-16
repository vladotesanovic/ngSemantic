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
var message_1 = require("../../../services/message");
var SemanticMessage = (function () {
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
exports.SemanticMessage = SemanticMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvZGlyZWN0aXZlcy9zZW1hbnRpYy9tZXNzYWdlL21lc3NhZ2UudHMiXSwibmFtZXMiOlsiU2VtYW50aWNNZXNzYWdlIiwiU2VtYW50aWNNZXNzYWdlLmNvbnN0cnVjdG9yIiwiU2VtYW50aWNNZXNzYWdlLm5nQWZ0ZXJWaWV3SW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQStDLGVBQWUsQ0FBQyxDQUFBO0FBQy9ELHdCQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBRTNEO0lBZ0JFQSx5QkFBbUJBLEVBQWtCQTtRQWhCdkNDLGlCQThDQ0E7UUE5Qm9CQSxPQUFFQSxHQUFGQSxFQUFFQSxDQUFnQkE7UUFKckNBLGFBQVFBLEdBQWtCQSxJQUFJQSxLQUFLQSxFQUFVQSxDQUFDQTtRQUV0Q0EsV0FBTUEsR0FBV0EsSUFBSUEsQ0FBQ0E7UUFJNUJBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLElBQVNBO1lBRTlCQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxJQUFJQSxLQUFLQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDN0JBLElBQUlBLEdBQUdBO29CQUNMQSxJQUFJQSxFQUFFQSxJQUFJQTtpQkFDWEEsQ0FBQ0E7WUFDSkEsQ0FBQ0E7WUFHREEsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFHekJBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNwQkEsVUFBVUEsQ0FBQ0E7b0JBQ1RBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO2dCQUN4QkEsQ0FBQ0EsRUFBRUEsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDbEJBLENBQUNBO1FBQ0hBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBRURELHlDQUFlQSxHQUFmQTtRQUVFRSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxRQUFRQSxLQUFLQSxXQUFXQSxJQUFJQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2RUEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDdENBLENBQUNBO0lBRUhBLENBQUNBO0lBNUNIRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsVUFBVUEsRUFBRUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFDeEJBLFFBQVFBLEVBQUVBLFlBQVlBO1NBQ3ZCQSxDQUFDQTtRQUVEQSxXQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSx1TkFHTEE7U0FDTkEsQ0FBQ0E7O3dCQW9DREE7SUFBREEsc0JBQUNBO0FBQURBLENBQUNBLEFBOUNELElBOENDO0FBbkNZLHVCQUFlLGtCQW1DM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiBbXCJkdXJhdGlvblwiXSxcbiAgc2VsZWN0b3I6IFwic20tbWVzc2FnZVwiXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFtuZ0NsYXNzXT1cIntpY29uOiBtZXNzYWdlLmljb259XCIgY2xhc3M9XCJ1aSBtZXNzYWdlIHt7bWVzc2FnZS50eXBlfX1cIj5cbiAgPGkgKm5nSWY9XCJtZXNzYWdlLmljb25cIiBjbGFzcz1cImljb24ge3ttZXNzYWdlLmljb259fVwiPjwvaT5cbiAgTWVzc2FnZToge3ttZXNzYWdlLnRleHR9fVxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY01lc3NhZ2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgbWVzc2FnZXM6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIExFTkdUSDogbnVtYmVyID0gNTAwMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbXM6IE1lc3NhZ2VTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLm1zLl9yeC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICB0ZXh0OiBkYXRhXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIGRpc3BsYXkgbWVzc2FnZVxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEpO1xuXG4gICAgICAvLyByZW1vdmUgbWVzc2FnZVxuICAgICAgaWYgKHRoaXMuTEVOR1RIID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnNoaWZ0KCk7XG4gICAgICAgIH0sIHRoaXMuTEVOR1RIKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5kdXJhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBOdW1iZXIodGhpcy5kdXJhdGlvbikgPj0gMCkge1xuICAgICAgdGhpcy5MRU5HVEggPSBOdW1iZXIodGhpcy5kdXJhdGlvbik7XG4gICAgfVxuXG4gIH1cblxufVxuIl19