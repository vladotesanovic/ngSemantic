System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }());
            exports_1("MessageService", MessageService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUVBO2dCQUdDO29CQUZBLGFBQVEsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7b0JBR3JELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxvQ0FBVyxHQUFYLFVBQVksSUFBUztvQkFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0YscUJBQUM7WUFBRCxDQUFDLEFBVEQsSUFTQztZQVRELDJDQVNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuXHRfZW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0X3J4OiBhbnk7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX3J4ID0gdGhpcy5fZW1pdHRlcjtcblx0fVxuXHRlbWl0TWVzc2FnZShkYXRhOiBhbnkpIHtcblx0XHR0aGlzLl9yeC5uZXh0KGRhdGEpO1xuXHR9XG59XG4iXX0=