System.register(["angular2/core", "ng-semantic/semantic", "../../services/message"], function(exports_1) {
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
    var MessageComponent;
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
            MessageComponent = (function () {
                function MessageComponent(ms) {
                    var _this = this;
                    this.ms = ms;
                    this.messages = new Array();
                    this.LENGTH = 5000;
                    ms._rx.subscribe(function (data) {
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
                MessageComponent.prototype.submitMessage = function (event, message) {
                    this.ms.emitMessage(message);
                };
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: "message",
                        providers: [message_1.MessageService]
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Message</h1>\n        <p>Semantic UI message element <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/collections/message.html\" target=\"_blank\">Semantic UI Message</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <p>Once created, message will expire for 10 seconds.</p>\n    <sm-message *ngFor=\"#message of messages\" [type]=\"message.type\" [text]=\"message.text\" [icon]=\"message.icon\"></sm-message><br/>\n    <button class=\"ui button\" (click)=\"submitMessage($event, {icon: 'inbox', text: 'Icon, Icon'})\">\n        Icon message\n    </button>\n    <button class=\"ui button blue\" (click)=\"submitMessage($event, {type: 'info', text: 'Info, Info'})\">\n        Info message\n    </button>\n    <button class=\"ui button red\" (click)=\"submitMessage($event, {type: 'warning', text: 'Warning, Warning'})\">\n        Warning message\n    </button>\n    <button class=\"ui button positive\" (click)=\"submitMessage($event, {type: 'positive', text: 'Positive, Positive'})\">\n        Positive message\n    </button>\n\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n\n<textarea rows=\"12\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-message *ngFor=\"#message of messages\" [type]=\"message.type\" [text]=\"message.text\" [icon]=\"message.icon\"></sm-message>\n\n<button class=\"ui button\" (click)=\"submitMessage($event, {type: 'info', icon: 'inbox', text: 'Icon, Icon'})\">Icon message</button>\n<button class=\"ui button blue\" (click)=\"submitMessage($event, {type: 'info', text: 'Info, Info'})\">Info message</button>\n<button class=\"ui button red\" (click)=\"submitMessage($event, {type: 'warning', text: 'Warning, Warning'})\">Warning message</button>\n<button class=\"ui button positive\" (click)=\"submitMessage($event, {type: 'positive', text: 'Positive, Positive'})\">Positive message</button>\n</textarea>\n        </div>\n      </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [message_1.MessageService])
                ], MessageComponent);
                return MessageComponent;
            })();
            exports_1("MessageComponent", MessageComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbIk1lc3NhZ2VDb21wb25lbnQiLCJNZXNzYWdlQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiTWVzc2FnZUNvbXBvbmVudC5zdWJtaXRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkF1REVBLDBCQUFtQkEsRUFBa0JBO29CQXZEdkNDLGlCQWdGQ0E7b0JBekJvQkEsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBZ0JBO29CQUpyQ0EsYUFBUUEsR0FBa0JBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO29CQUV0Q0EsV0FBTUEsR0FBV0EsSUFBSUEsQ0FBQ0E7b0JBRzVCQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFTQTt3QkFFekJBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLElBQUlBLEtBQUtBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBOzRCQUM3QkEsSUFBSUEsR0FBR0E7Z0NBQ0xBLElBQUlBLEVBQUVBLElBQUlBOzZCQUNYQSxDQUFDQTt3QkFDSkEsQ0FBQ0E7d0JBR0RBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUd6QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3BCQSxVQUFVQSxDQUFDQTtnQ0FDVEEsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7NEJBQ3hCQSxDQUFDQSxFQUFFQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTt3QkFDbEJBLENBQUNBO29CQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRURELHdDQUFhQSxHQUFiQSxVQUFjQSxLQUFZQSxFQUFFQSxPQUFlQTtvQkFDekNFLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUMvQkEsQ0FBQ0E7Z0JBOUVIRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxTQUFTQTt3QkFDbkJBLFNBQVNBLEVBQUVBLENBQUNBLHdCQUFjQSxDQUFDQTtxQkFDNUJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDSkEsVUFBVUEsRUFBRUEsQ0FBQ0EsOEJBQW1CQSxFQUFFQSw4QkFBbUJBLENBQUNBO3dCQUN0REEsUUFBUUEsRUFBRUEsd25FQXdDWEE7cUJBQ0FBLENBQUNBOztxQ0FpQ0RBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0FBQ0EsQUFoRkQsSUFnRkM7WUFoRkQsK0NBZ0ZDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpYy9zZW1hbnRpY1wiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbWVzc2FnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWVzc2FnZVwiLFxuICBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cbn0pXG5AVmlldyh7XG4gIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcbiAgdGVtcGxhdGU6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5NZXNzYWdlPC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgbWVzc2FnZSBlbGVtZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVzc2FnZS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgTWVzc2FnZTwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxwPk9uY2UgY3JlYXRlZCwgbWVzc2FnZSB3aWxsIGV4cGlyZSBmb3IgMTAgc2Vjb25kcy48L3A+XG4gICAgPHNtLW1lc3NhZ2UgKm5nRm9yPVwiI21lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbdHlwZV09XCJtZXNzYWdlLnR5cGVcIiBbdGV4dF09XCJtZXNzYWdlLnRleHRcIiBbaWNvbl09XCJtZXNzYWdlLmljb25cIj48L3NtLW1lc3NhZ2U+PGJyLz5cbiAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7aWNvbjogJ2luYm94JywgdGV4dDogJ0ljb24sIEljb24nfSlcIj5cbiAgICAgICAgSWNvbiBtZXNzYWdlXG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBibHVlXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ2luZm8nLCB0ZXh0OiAnSW5mbywgSW5mbyd9KVwiPlxuICAgICAgICBJbmZvIG1lc3NhZ2VcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIHJlZFwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICd3YXJuaW5nJywgdGV4dDogJ1dhcm5pbmcsIFdhcm5pbmcnfSlcIj5cbiAgICAgICAgV2FybmluZyBtZXNzYWdlXG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBwb3NpdGl2ZVwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICdwb3NpdGl2ZScsIHRleHQ6ICdQb3NpdGl2ZSwgUG9zaXRpdmUnfSlcIj5cbiAgICAgICAgUG9zaXRpdmUgbWVzc2FnZVxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG5cbjx0ZXh0YXJlYSByb3dzPVwiMTJcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20tbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFt0eXBlXT1cIm1lc3NhZ2UudHlwZVwiIFt0ZXh0XT1cIm1lc3NhZ2UudGV4dFwiIFtpY29uXT1cIm1lc3NhZ2UuaWNvblwiPjwvc20tbWVzc2FnZT5cblxuPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvblwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICdpbmZvJywgaWNvbjogJ2luYm94JywgdGV4dDogJ0ljb24sIEljb24nfSlcIj5JY29uIG1lc3NhZ2U8L2J1dHRvbj5cbjxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gYmx1ZVwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICdpbmZvJywgdGV4dDogJ0luZm8sIEluZm8nfSlcIj5JbmZvIG1lc3NhZ2U8L2J1dHRvbj5cbjxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gcmVkXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ3dhcm5pbmcnLCB0ZXh0OiAnV2FybmluZywgV2FybmluZyd9KVwiPldhcm5pbmcgbWVzc2FnZTwvYnV0dG9uPlxuPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBwb3NpdGl2ZVwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICdwb3NpdGl2ZScsIHRleHQ6ICdQb3NpdGl2ZSwgUG9zaXRpdmUnfSlcIj5Qb3NpdGl2ZSBtZXNzYWdlPC9idXR0b24+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG5cbiAgbWVzc2FnZXM6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIExFTkdUSDogbnVtYmVyID0gNTAwMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbXM6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgbXMuX3J4LnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIHRleHQ6IGRhdGFcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gZGlzcGxheSBtZXNzYWdlXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSk7XG5cbiAgICAgIC8vIHJlbW92ZSBtZXNzYWdlXG4gICAgICBpZiAodGhpcy5MRU5HVEggPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubWVzc2FnZXMuc2hpZnQoKTtcbiAgICAgICAgfSwgdGhpcy5MRU5HVEgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3VibWl0TWVzc2FnZShldmVudDogRXZlbnQsIG1lc3NhZ2U6IE9iamVjdCkge1xuICAgIHRoaXMubXMuZW1pdE1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxufVxuIl19