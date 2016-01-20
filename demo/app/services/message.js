System.register(["angular2/core"], function(exports_1) {
    var core_1;
    var MessageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService() {
                    this._emitter = new core_1.EventEmitter();
                    this._rx = this._emitter;
                }
                MessageService.prototype.emitMessage = function (data) {
                    this._rx.next(data);
                };
                return MessageService;
            })();
            exports_1("MessageService", MessageService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvbWVzc2FnZS50cyJdLCJuYW1lcyI6WyJNZXNzYWdlU2VydmljZSIsIk1lc3NhZ2VTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiTWVzc2FnZVNlcnZpY2UuZW1pdE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztZQUVBO2dCQUdDQTtvQkFGQUMsYUFBUUEsR0FBc0JBLElBQUlBLG1CQUFZQSxFQUFPQSxDQUFDQTtvQkFHckRBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBQ0RELG9DQUFXQSxHQUFYQSxVQUFZQSxJQUFTQTtvQkFDcEJFLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBQ0ZGLHFCQUFDQTtZQUFEQSxDQUFDQSxBQVRELElBU0M7WUFURCwyQ0FTQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcblx0X2VtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdF9yeDogYW55O1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl9yeCA9IHRoaXMuX2VtaXR0ZXI7XG5cdH1cblx0ZW1pdE1lc3NhZ2UoZGF0YTogYW55KSB7XG5cdFx0dGhpcy5fcngubmV4dChkYXRhKTtcblx0fVxufVxuIl19