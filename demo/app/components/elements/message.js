System.register(["@angular/core", "ng-semantic", "../../prismjs/prismjs", "../../services/message"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, prismjs_1, message_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent(ms) {
                    var _this = this;
                    this.ms = ms;
                    this.messages = [];
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
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        providers: [message_1.MessageService],
                        selector: "message",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Message</h1>\n\t<p>Semantic UI Message element <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/collections/message.html\" target=\"_blank\">Semantic UI Message</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <p>Once created, message will expire for 10 seconds.</p>\n    <sm-message *ngFor=\"let message of messages\" class=\"ui message {{message.type}}\"\n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{{message.text}}</sm-message>\n\n    <sm-button (click)=\"submitMessage($event, {icon: 'inbox', text: 'Icon, Icon'})\">\n\tIcon message\n    </sm-button>\n    <sm-button class=\"blue\" (click)=\"submitMessage($event, {type: 'info', text: 'Info, Info'})\">\n\tInfo message\n    </sm-button>\n    <sm-button class=\"red\" (click)=\"submitMessage($event, {type: 'warning', text: 'Warning, Warning'})\">\n\tWarning message\n    </sm-button>\n    <sm-button class=\"positive\" (click)=\"submitMessage($event, {type: 'positive', text: 'Positive, Positive'})\">\n\tPositive message\n    </sm-button>\n\n    <h4 class=\"ui header\">Code</h4>\n<codeblock prismjs=\"html\">\n&lt;sm-message *ngFor=\"#message of messages\" class=\"ui message { {message.type} }\"\n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{ {message.text} }&lt;/sm-message>\n</codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [message_1.MessageService])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_1("MessageComponent", MessageComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4Q0E7Z0JBTUUsMEJBQW1CLEVBQWtCO29CQU52QyxpQkErQkM7b0JBekJvQixPQUFFLEdBQUYsRUFBRSxDQUFnQjtvQkFKckMsYUFBUSxHQUFrQixFQUFFLENBQUM7b0JBRXJCLFdBQU0sR0FBVyxJQUFJLENBQUM7b0JBRzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUzt3QkFFekIsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsSUFBSSxHQUFHO2dDQUNMLElBQUksRUFBRSxJQUFJOzZCQUNYLENBQUM7d0JBQ0csQ0FBQzt3QkFHRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFHekIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixVQUFVLENBQUM7Z0NBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDeEIsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDWCxDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsd0NBQWEsR0FBYixVQUFjLEtBQVksRUFBRSxPQUFlO29CQUN6QyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFyRUg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxVQUFVLEVBQUUsQ0FBQyxpQ0FBbUIsRUFBRSxpQ0FBbUIsRUFBUSw0QkFBa0IsRUFBUSwwQkFBZ0IsQ0FBQzt3QkFDeEcsU0FBUyxFQUFFLENBQUMsd0JBQWMsQ0FBQzt3QkFDM0IsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSwwN0NBaUNYO3FCQUNBLENBQUM7O29DQUFBO2dCQWlDRix1QkFBQztZQUFELENBQUMsQUEvQkQsSUErQkM7WUEvQkQsK0NBK0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcbmltcG9ydCB7IENvZGVibG9ja0NvbXBvbmVudCwgUHJpc21Kc0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9wcmlzbWpzL3ByaXNtanNcIjtcblxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbWVzc2FnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIDxUeXBlPkNvZGVibG9ja0NvbXBvbmVudCwgPFR5cGU+UHJpc21Kc0RpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlXSxcbiAgc2VsZWN0b3I6IFwibWVzc2FnZVwiLFxuICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cblx0PGgxPk1lc3NhZ2U8L2gxPlxuXHQ8cD5TZW1hbnRpYyBVSSBNZXNzYWdlIGVsZW1lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuXHQ8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZXNzYWdlLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBNZXNzYWdlPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICAgPHA+T25jZSBjcmVhdGVkLCBtZXNzYWdlIHdpbGwgZXhwaXJlIGZvciAxMCBzZWNvbmRzLjwvcD5cbiAgICA8c20tbWVzc2FnZSAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiIGNsYXNzPVwidWkgbWVzc2FnZSB7e21lc3NhZ2UudHlwZX19XCJcbiAgICBbbmdDbGFzc109XCJ7IGljb246IG1lc3NhZ2UuaWNvbn1cIiBbaWNvbl09XCJtZXNzYWdlLmljb25cIj57e21lc3NhZ2UudGV4dH19PC9zbS1tZXNzYWdlPlxuXG4gICAgPHNtLWJ1dHRvbiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHtpY29uOiAnaW5ib3gnLCB0ZXh0OiAnSWNvbiwgSWNvbid9KVwiPlxuXHRJY29uIG1lc3NhZ2VcbiAgICA8L3NtLWJ1dHRvbj5cbiAgICA8c20tYnV0dG9uIGNsYXNzPVwiYmx1ZVwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICdpbmZvJywgdGV4dDogJ0luZm8sIEluZm8nfSlcIj5cblx0SW5mbyBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cInJlZFwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICd3YXJuaW5nJywgdGV4dDogJ1dhcm5pbmcsIFdhcm5pbmcnfSlcIj5cblx0V2FybmluZyBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cInBvc2l0aXZlXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ3Bvc2l0aXZlJywgdGV4dDogJ1Bvc2l0aXZlLCBQb3NpdGl2ZSd9KVwiPlxuXHRQb3NpdGl2ZSBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbjxjb2RlYmxvY2sgcHJpc21qcz1cImh0bWxcIj5cbiZsdDtzbS1tZXNzYWdlICpuZ0Zvcj1cIiNtZXNzYWdlIG9mIG1lc3NhZ2VzXCIgY2xhc3M9XCJ1aSBtZXNzYWdlIHsge21lc3NhZ2UudHlwZX0gfVwiXG4gICAgW25nQ2xhc3NdPVwieyBpY29uOiBtZXNzYWdlLmljb259XCIgW2ljb25dPVwibWVzc2FnZS5pY29uXCI+eyB7bWVzc2FnZS50ZXh0fSB9Jmx0Oy9zbS1tZXNzYWdlPlxuPC9jb2RlYmxvY2s+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcblxuICBtZXNzYWdlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIExFTkdUSDogbnVtYmVyID0gNTAwMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbXM6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgbXMuX3J4LnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuXHRkYXRhID0ge1xuXHQgIHRleHQ6IGRhdGFcblx0fTtcbiAgICAgIH1cblxuICAgICAgLy8gZGlzcGxheSBtZXNzYWdlXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSk7XG5cbiAgICAgIC8vIHJlbW92ZSBtZXNzYWdlXG4gICAgICBpZiAodGhpcy5MRU5HVEggPiAwKSB7XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHQgIHRoaXMubWVzc2FnZXMuc2hpZnQoKTtcblx0fSwgdGhpcy5MRU5HVEgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3VibWl0TWVzc2FnZShldmVudDogRXZlbnQsIG1lc3NhZ2U6IE9iamVjdCkge1xuICAgIHRoaXMubXMuZW1pdE1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxufVxuIl19