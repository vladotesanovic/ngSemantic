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
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Message</h1>\n        <p>Semantic UI message element <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/collections/message.html\" target=\"_blank\">Semantic UI Message</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <p>Once created, message will expire for 10 seconds.</p>\n    <sm-message *ngFor=\"#message of messages\" class=\"ui message {{message.type}}\" \n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{{message.text}}</sm-message>\n    \n    <sm-button (click)=\"submitMessage($event, {icon: 'inbox', text: 'Icon, Icon'})\">\n        Icon message\n    </sm-button>\n    <sm-button class=\"blue\" (click)=\"submitMessage($event, {type: 'info', text: 'Info, Info'})\">\n        Info message\n    </sm-button>\n    <sm-button class=\"red\" (click)=\"submitMessage($event, {type: 'warning', text: 'Warning, Warning'})\">\n        Warning message\n    </sm-button>\n    <sm-button class=\"positive\" (click)=\"submitMessage($event, {type: 'positive', text: 'Positive, Positive'})\">\n        Positive message\n    </sm-button>\n\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n\n<textarea rows=\"3\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-message *ngFor=\"#message of messages\" class=\"ui message { {message.type} }\" \n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{ {message.text} }</sm-message>\n</textarea>\n        </div>\n      </div>\n      \n       <br/><br/>\n        Page source: <a target=\"_blank\" \n        href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/message.ts\">\n        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/message.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [message_1.MessageService])
                ], MessageComponent);
                return MessageComponent;
            })();
            exports_1("MessageComponent", MessageComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbIk1lc3NhZ2VDb21wb25lbnQiLCJNZXNzYWdlQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiTWVzc2FnZUNvbXBvbmVudC5zdWJtaXRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkEyREVBLDBCQUFtQkEsRUFBa0JBO29CQTNEdkNDLGlCQW9GQ0E7b0JBekJvQkEsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBZ0JBO29CQUpyQ0EsYUFBUUEsR0FBa0JBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO29CQUV0Q0EsV0FBTUEsR0FBV0EsSUFBSUEsQ0FBQ0E7b0JBRzVCQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFTQTt3QkFFekJBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLElBQUlBLEtBQUtBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBOzRCQUM3QkEsSUFBSUEsR0FBR0E7Z0NBQ0xBLElBQUlBLEVBQUVBLElBQUlBOzZCQUNYQSxDQUFDQTt3QkFDSkEsQ0FBQ0E7d0JBR0RBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUd6QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3BCQSxVQUFVQSxDQUFDQTtnQ0FDVEEsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7NEJBQ3hCQSxDQUFDQSxFQUFFQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTt3QkFDbEJBLENBQUNBO29CQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRURELHdDQUFhQSxHQUFiQSxVQUFjQSxLQUFZQSxFQUFFQSxPQUFlQTtvQkFDekNFLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUMvQkEsQ0FBQ0E7Z0JBbEZIRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxTQUFTQTt3QkFDbkJBLFNBQVNBLEVBQUVBLENBQUNBLHdCQUFjQSxDQUFDQTtxQkFDNUJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDSkEsVUFBVUEsRUFBRUEsQ0FBQ0EsOEJBQW1CQSxFQUFFQSw4QkFBbUJBLENBQUNBO3dCQUN0REEsUUFBUUEsRUFBRUEsODhEQTRDWEE7cUJBQ0FBLENBQUNBOztxQ0FpQ0RBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0FBQ0EsQUFwRkQsSUFvRkM7WUFwRkQsK0NBb0ZDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpYy9zZW1hbnRpY1wiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbWVzc2FnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWVzc2FnZVwiLFxuICBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cbn0pXG5AVmlldyh7XG4gIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcbiAgdGVtcGxhdGU6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5NZXNzYWdlPC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgbWVzc2FnZSBlbGVtZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVzc2FnZS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgTWVzc2FnZTwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxwPk9uY2UgY3JlYXRlZCwgbWVzc2FnZSB3aWxsIGV4cGlyZSBmb3IgMTAgc2Vjb25kcy48L3A+XG4gICAgPHNtLW1lc3NhZ2UgKm5nRm9yPVwiI21lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBjbGFzcz1cInVpIG1lc3NhZ2Uge3ttZXNzYWdlLnR5cGV9fVwiIFxuICAgIFtuZ0NsYXNzXT1cInsgaWNvbjogbWVzc2FnZS5pY29ufVwiIFtpY29uXT1cIm1lc3NhZ2UuaWNvblwiPnt7bWVzc2FnZS50ZXh0fX08L3NtLW1lc3NhZ2U+XG4gICAgXG4gICAgPHNtLWJ1dHRvbiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHtpY29uOiAnaW5ib3gnLCB0ZXh0OiAnSWNvbiwgSWNvbid9KVwiPlxuICAgICAgICBJY29uIG1lc3NhZ2VcbiAgICA8L3NtLWJ1dHRvbj5cbiAgICA8c20tYnV0dG9uIGNsYXNzPVwiYmx1ZVwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICdpbmZvJywgdGV4dDogJ0luZm8sIEluZm8nfSlcIj5cbiAgICAgICAgSW5mbyBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cInJlZFwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICd3YXJuaW5nJywgdGV4dDogJ1dhcm5pbmcsIFdhcm5pbmcnfSlcIj5cbiAgICAgICAgV2FybmluZyBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cInBvc2l0aXZlXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ3Bvc2l0aXZlJywgdGV4dDogJ1Bvc2l0aXZlLCBQb3NpdGl2ZSd9KVwiPlxuICAgICAgICBQb3NpdGl2ZSBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cblxuPHRleHRhcmVhIHJvd3M9XCIzXCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLW1lc3NhZ2UgKm5nRm9yPVwiI21lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBjbGFzcz1cInVpIG1lc3NhZ2UgeyB7bWVzc2FnZS50eXBlfSB9XCIgXG4gICAgW25nQ2xhc3NdPVwieyBpY29uOiBtZXNzYWdlLmljb259XCIgW2ljb25dPVwibWVzc2FnZS5pY29uXCI+eyB7bWVzc2FnZS50ZXh0fSB9PC9zbS1tZXNzYWdlPlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgUGFnZSBzb3VyY2U6IDxhIHRhcmdldD1cIl9ibGFua1wiIFxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL21lc3NhZ2UudHNcIj5cbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL21lc3NhZ2UudHNcbiAgICAgIDwvYT5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuXG4gIG1lc3NhZ2VzOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgcHJpdmF0ZSBMRU5HVEg6IG51bWJlciA9IDUwMDA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG1zOiBNZXNzYWdlU2VydmljZSkge1xuICAgIG1zLl9yeC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICB0ZXh0OiBkYXRhXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIGRpc3BsYXkgbWVzc2FnZVxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEpO1xuXG4gICAgICAvLyByZW1vdmUgbWVzc2FnZVxuICAgICAgaWYgKHRoaXMuTEVOR1RIID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnNoaWZ0KCk7XG4gICAgICAgIH0sIHRoaXMuTEVOR1RIKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN1Ym1pdE1lc3NhZ2UoZXZlbnQ6IEV2ZW50LCBtZXNzYWdlOiBPYmplY3QpIHtcbiAgICB0aGlzLm1zLmVtaXRNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbn1cbiJdfQ==