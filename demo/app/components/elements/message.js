System.register(["angular2/core", "ng-semantic/semantic", "../../services/message"], function(exports_1) {
    "use strict";
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
            }());
            exports_1("MessageComponent", MessageComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5REE7Z0JBTUUsMEJBQW1CLEVBQWtCO29CQU52QyxpQkErQkM7b0JBekJvQixPQUFFLEdBQUYsRUFBRSxDQUFnQjtvQkFKckMsYUFBUSxHQUFrQixJQUFJLEtBQUssRUFBVSxDQUFDO29CQUV0QyxXQUFNLEdBQVcsSUFBSSxDQUFDO29CQUc1QixFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVM7d0JBRXpCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7NEJBQzdCLElBQUksR0FBRztnQ0FDTCxJQUFJLEVBQUUsSUFBSTs2QkFDWCxDQUFDO3dCQUNKLENBQUM7d0JBR0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBR3pCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDcEIsVUFBVSxDQUFDO2dDQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ3hCLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ2xCLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCx3Q0FBYSxHQUFiLFVBQWMsS0FBWSxFQUFFLE9BQWU7b0JBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQWxGSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxTQUFTO3dCQUNuQixTQUFTLEVBQUUsQ0FBQyx3QkFBYyxDQUFDO3FCQUM1QixDQUFDO29CQUNELFdBQUksQ0FBQzt3QkFDSixVQUFVLEVBQUUsQ0FBQyw4QkFBbUIsRUFBRSw4QkFBbUIsQ0FBQzt3QkFDdEQsUUFBUSxFQUFFLDg4REE0Q1g7cUJBQ0EsQ0FBQzs7b0NBQUE7Z0JBaUNGLHVCQUFDO1lBQUQsQ0FBQyxBQS9CRCxJQStCQztZQS9CRCwrQ0ErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljL3NlbWFudGljXCI7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtZXNzYWdlXCIsXG4gIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlXVxufSlcbkBWaWV3KHtcbiAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPk1lc3NhZ2U8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBtZXNzYWdlIGVsZW1lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZXNzYWdlLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBNZXNzYWdlPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgPHA+T25jZSBjcmVhdGVkLCBtZXNzYWdlIHdpbGwgZXhwaXJlIGZvciAxMCBzZWNvbmRzLjwvcD5cbiAgICA8c20tbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIGNsYXNzPVwidWkgbWVzc2FnZSB7e21lc3NhZ2UudHlwZX19XCIgXG4gICAgW25nQ2xhc3NdPVwieyBpY29uOiBtZXNzYWdlLmljb259XCIgW2ljb25dPVwibWVzc2FnZS5pY29uXCI+e3ttZXNzYWdlLnRleHR9fTwvc20tbWVzc2FnZT5cbiAgICBcbiAgICA8c20tYnV0dG9uIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge2ljb246ICdpbmJveCcsIHRleHQ6ICdJY29uLCBJY29uJ30pXCI+XG4gICAgICAgIEljb24gbWVzc2FnZVxuICAgIDwvc20tYnV0dG9uPlxuICAgIDxzbS1idXR0b24gY2xhc3M9XCJibHVlXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ2luZm8nLCB0ZXh0OiAnSW5mbywgSW5mbyd9KVwiPlxuICAgICAgICBJbmZvIG1lc3NhZ2VcbiAgICA8L3NtLWJ1dHRvbj5cbiAgICA8c20tYnV0dG9uIGNsYXNzPVwicmVkXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ3dhcm5pbmcnLCB0ZXh0OiAnV2FybmluZywgV2FybmluZyd9KVwiPlxuICAgICAgICBXYXJuaW5nIG1lc3NhZ2VcbiAgICA8L3NtLWJ1dHRvbj5cbiAgICA8c20tYnV0dG9uIGNsYXNzPVwicG9zaXRpdmVcIiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHt0eXBlOiAncG9zaXRpdmUnLCB0ZXh0OiAnUG9zaXRpdmUsIFBvc2l0aXZlJ30pXCI+XG4gICAgICAgIFBvc2l0aXZlIG1lc3NhZ2VcbiAgICA8L3NtLWJ1dHRvbj5cblxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuXG48dGV4dGFyZWEgcm93cz1cIjNcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20tbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIGNsYXNzPVwidWkgbWVzc2FnZSB7IHttZXNzYWdlLnR5cGV9IH1cIiBcbiAgICBbbmdDbGFzc109XCJ7IGljb246IG1lc3NhZ2UuaWNvbn1cIiBbaWNvbl09XCJtZXNzYWdlLmljb25cIj57IHttZXNzYWdlLnRleHR9IH08L3NtLW1lc3NhZ2U+XG48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgPGJyLz48YnIvPlxuICAgICAgICBQYWdlIHNvdXJjZTogPGEgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvbWVzc2FnZS50c1wiPlxuICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvbWVzc2FnZS50c1xuICAgICAgPC9hPlxuPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG5cbiAgbWVzc2FnZXM6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIExFTkdUSDogbnVtYmVyID0gNTAwMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbXM6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgbXMuX3J4LnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIHRleHQ6IGRhdGFcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gZGlzcGxheSBtZXNzYWdlXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSk7XG5cbiAgICAgIC8vIHJlbW92ZSBtZXNzYWdlXG4gICAgICBpZiAodGhpcy5MRU5HVEggPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubWVzc2FnZXMuc2hpZnQoKTtcbiAgICAgICAgfSwgdGhpcy5MRU5HVEgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3VibWl0TWVzc2FnZShldmVudDogRXZlbnQsIG1lc3NhZ2U6IE9iamVjdCkge1xuICAgIHRoaXMubXMuZW1pdE1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxufVxuIl19