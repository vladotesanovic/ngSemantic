System.register(["angular2/core", "ng-semantic/semantic", "../../services/message"], function(exports_1, context_1) {
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
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        providers: [message_1.MessageService],
                        selector: "message",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Message</h1>\n\t<p>Semantic UI message element <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/collections/message.html\" target=\"_blank\">Semantic UI Message</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <p>Once created, message will expire for 10 seconds.</p>\n    <sm-message *ngFor=\"#message of messages\" class=\"ui message {{message.type}}\"\n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{{message.text}}</sm-message>\n\n    <sm-button (click)=\"submitMessage($event, {icon: 'inbox', text: 'Icon, Icon'})\">\n\tIcon message\n    </sm-button>\n    <sm-button class=\"blue\" (click)=\"submitMessage($event, {type: 'info', text: 'Info, Info'})\">\n\tInfo message\n    </sm-button>\n    <sm-button class=\"red\" (click)=\"submitMessage($event, {type: 'warning', text: 'Warning, Warning'})\">\n\tWarning message\n    </sm-button>\n    <sm-button class=\"positive\" (click)=\"submitMessage($event, {type: 'positive', text: 'Positive, Positive'})\">\n\tPositive message\n    </sm-button>\n\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n\t<div class=\"field\">\n\n<textarea rows=\"3\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-message *ngFor=\"#message of messages\" class=\"ui message { {message.type} }\"\n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{ {message.text} }</sm-message>\n</textarea>\n\t</div>\n      </div>\n\n       <br/><br/>\n\tPage source: <a target=\"_blank\"\n\thref=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/message.ts\">\n\thttps://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/message.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [message_1.MessageService])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_1("MessageComponent", MessageComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdURBO2dCQU1FLDBCQUFtQixFQUFrQjtvQkFOdkMsaUJBK0JDO29CQXpCb0IsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7b0JBSnJDLGFBQVEsR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQztvQkFFdEMsV0FBTSxHQUFXLElBQUksQ0FBQztvQkFHNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO3dCQUV6QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUNwQyxJQUFJLEdBQUc7Z0NBQ0wsSUFBSSxFQUFFLElBQUk7NkJBQ1gsQ0FBQzt3QkFDRyxDQUFDO3dCQUdELEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUd6QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzNCLFVBQVUsQ0FBQztnQ0FDVCxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUN4QixDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNYLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCx3Q0FBYSxHQUFiLFVBQWMsS0FBWSxFQUFFLE9BQWU7b0JBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQWhGSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFVBQVUsRUFBRSxDQUFDLDhCQUFtQixFQUFFLDhCQUFtQixDQUFDO3dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3QkFBYyxDQUFDO3dCQUMzQixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLHkzREE0Q1g7cUJBQ0EsQ0FBQzs7b0NBQUE7Z0JBaUNGLHVCQUFDO1lBQUQsQ0FBQyxBQS9CRCxJQStCQztZQS9CRCwrQ0ErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljL3NlbWFudGljXCI7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG4gIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlXSxcbiAgc2VsZWN0b3I6IFwibWVzc2FnZVwiLFxuICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cblx0PGgxPk1lc3NhZ2U8L2gxPlxuXHQ8cD5TZW1hbnRpYyBVSSBtZXNzYWdlIGVsZW1lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuXHQ8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZXNzYWdlLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBNZXNzYWdlPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgPHA+T25jZSBjcmVhdGVkLCBtZXNzYWdlIHdpbGwgZXhwaXJlIGZvciAxMCBzZWNvbmRzLjwvcD5cbiAgICA8c20tbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIGNsYXNzPVwidWkgbWVzc2FnZSB7e21lc3NhZ2UudHlwZX19XCJcbiAgICBbbmdDbGFzc109XCJ7IGljb246IG1lc3NhZ2UuaWNvbn1cIiBbaWNvbl09XCJtZXNzYWdlLmljb25cIj57e21lc3NhZ2UudGV4dH19PC9zbS1tZXNzYWdlPlxuXG4gICAgPHNtLWJ1dHRvbiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHtpY29uOiAnaW5ib3gnLCB0ZXh0OiAnSWNvbiwgSWNvbid9KVwiPlxuXHRJY29uIG1lc3NhZ2VcbiAgICA8L3NtLWJ1dHRvbj5cbiAgICA8c20tYnV0dG9uIGNsYXNzPVwiYmx1ZVwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICdpbmZvJywgdGV4dDogJ0luZm8sIEluZm8nfSlcIj5cblx0SW5mbyBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cInJlZFwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICd3YXJuaW5nJywgdGV4dDogJ1dhcm5pbmcsIFdhcm5pbmcnfSlcIj5cblx0V2FybmluZyBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cInBvc2l0aXZlXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ3Bvc2l0aXZlJywgdGV4dDogJ1Bvc2l0aXZlLCBQb3NpdGl2ZSd9KVwiPlxuXHRQb3NpdGl2ZSBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuXHQ8ZGl2IGNsYXNzPVwiZmllbGRcIj5cblxuPHRleHRhcmVhIHJvd3M9XCIzXCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxuPHNtLW1lc3NhZ2UgKm5nRm9yPVwiI21lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBjbGFzcz1cInVpIG1lc3NhZ2UgeyB7bWVzc2FnZS50eXBlfSB9XCJcbiAgICBbbmdDbGFzc109XCJ7IGljb246IG1lc3NhZ2UuaWNvbn1cIiBbaWNvbl09XCJtZXNzYWdlLmljb25cIj57IHttZXNzYWdlLnRleHR9IH08L3NtLW1lc3NhZ2U+XG48L3RleHRhcmVhPlxuXHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAgPGJyLz48YnIvPlxuXHRQYWdlIHNvdXJjZTogPGEgdGFyZ2V0PVwiX2JsYW5rXCJcblx0aHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljL2Jsb2IvbWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZXNzYWdlLnRzXCI+XG5cdGh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljL2Jsb2IvbWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZXNzYWdlLnRzXG4gICAgICA8L2E+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcblxuICBtZXNzYWdlczogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHByaXZhdGUgTEVOR1RIOiBudW1iZXIgPSA1MDAwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtczogTWVzc2FnZVNlcnZpY2UpIHtcbiAgICBtcy5fcnguc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG5cdGRhdGEgPSB7XG5cdCAgdGV4dDogZGF0YVxuXHR9O1xuICAgICAgfVxuXG4gICAgICAvLyBkaXNwbGF5IG1lc3NhZ2VcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhKTtcblxuICAgICAgLy8gcmVtb3ZlIG1lc3NhZ2VcbiAgICAgIGlmICh0aGlzLkxFTkdUSCA+IDApIHtcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdCAgdGhpcy5tZXNzYWdlcy5zaGlmdCgpO1xuXHR9LCB0aGlzLkxFTkdUSCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdWJtaXRNZXNzYWdlKGV2ZW50OiBFdmVudCwgbWVzc2FnZTogT2JqZWN0KSB7XG4gICAgdGhpcy5tcy5lbWl0TWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG59XG4iXX0=