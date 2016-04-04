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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdURBO2dCQU1FLDBCQUFtQixFQUFrQjtvQkFOdkMsaUJBK0JDO29CQXpCb0IsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7b0JBSnJDLGFBQVEsR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQztvQkFFdEMsV0FBTSxHQUFXLElBQUksQ0FBQztvQkFHNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO3dCQUV6QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUNwQyxJQUFJLEdBQUc7Z0NBQ0wsSUFBSSxFQUFFLElBQUk7NkJBQ1gsQ0FBQzt3QkFDRyxDQUFDO3dCQUdELEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUd6QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzNCLFVBQVUsQ0FBQztnQ0FDVCxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUN4QixDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNYLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCx3Q0FBYSxHQUFiLFVBQWMsS0FBWSxFQUFFLE9BQWU7b0JBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQWhGSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFVBQVUsRUFBRSxDQUFDLDhCQUFtQixFQUFFLDhCQUFtQixDQUFDO3dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3QkFBYyxDQUFDO3dCQUMzQixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLHkzREE0Q1g7cUJBQ0EsQ0FBQzs7b0NBQUE7Z0JBaUNGLHVCQUFDO1lBQUQsQ0FBQyxBQS9CRCxJQStCQztZQS9CRCwrQ0ErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbWVzc2FnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxyXG4gIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlXSxcclxuICBzZWxlY3RvcjogXCJtZXNzYWdlXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInVpIGNvbnRhaW5lclwiPlxyXG5cdDxoMT5NZXNzYWdlPC9oMT5cclxuXHQ8cD5TZW1hbnRpYyBVSSBtZXNzYWdlIGVsZW1lbnQgPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxyXG5cdDxhIGhyZWY9XCJodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL21lc3NhZ2UuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlNlbWFudGljIFVJIE1lc3NhZ2U8L2E+PC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cclxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxyXG4gICAgPHA+T25jZSBjcmVhdGVkLCBtZXNzYWdlIHdpbGwgZXhwaXJlIGZvciAxMCBzZWNvbmRzLjwvcD5cclxuICAgIDxzbS1tZXNzYWdlICpuZ0Zvcj1cIiNtZXNzYWdlIG9mIG1lc3NhZ2VzXCIgY2xhc3M9XCJ1aSBtZXNzYWdlIHt7bWVzc2FnZS50eXBlfX1cIlxyXG4gICAgW25nQ2xhc3NdPVwieyBpY29uOiBtZXNzYWdlLmljb259XCIgW2ljb25dPVwibWVzc2FnZS5pY29uXCI+e3ttZXNzYWdlLnRleHR9fTwvc20tbWVzc2FnZT5cclxuXHJcbiAgICA8c20tYnV0dG9uIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge2ljb246ICdpbmJveCcsIHRleHQ6ICdJY29uLCBJY29uJ30pXCI+XHJcblx0SWNvbiBtZXNzYWdlXHJcbiAgICA8L3NtLWJ1dHRvbj5cclxuICAgIDxzbS1idXR0b24gY2xhc3M9XCJibHVlXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ2luZm8nLCB0ZXh0OiAnSW5mbywgSW5mbyd9KVwiPlxyXG5cdEluZm8gbWVzc2FnZVxyXG4gICAgPC9zbS1idXR0b24+XHJcbiAgICA8c20tYnV0dG9uIGNsYXNzPVwicmVkXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ3dhcm5pbmcnLCB0ZXh0OiAnV2FybmluZywgV2FybmluZyd9KVwiPlxyXG5cdFdhcm5pbmcgbWVzc2FnZVxyXG4gICAgPC9zbS1idXR0b24+XHJcbiAgICA8c20tYnV0dG9uIGNsYXNzPVwicG9zaXRpdmVcIiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHt0eXBlOiAncG9zaXRpdmUnLCB0ZXh0OiAnUG9zaXRpdmUsIFBvc2l0aXZlJ30pXCI+XHJcblx0UG9zaXRpdmUgbWVzc2FnZVxyXG4gICAgPC9zbS1idXR0b24+XHJcblxyXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XHJcbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG5cclxuPHRleHRhcmVhIHJvd3M9XCIzXCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxyXG48c20tbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIGNsYXNzPVwidWkgbWVzc2FnZSB7IHttZXNzYWdlLnR5cGV9IH1cIlxyXG4gICAgW25nQ2xhc3NdPVwieyBpY29uOiBtZXNzYWdlLmljb259XCIgW2ljb25dPVwibWVzc2FnZS5pY29uXCI+eyB7bWVzc2FnZS50ZXh0fSB9PC9zbS1tZXNzYWdlPlxyXG48L3RleHRhcmVhPlxyXG5cdDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8YnIvPjxici8+XHJcblx0UGFnZSBzb3VyY2U6IDxhIHRhcmdldD1cIl9ibGFua1wiXHJcblx0aHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljL2Jsb2IvbWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZXNzYWdlLnRzXCI+XHJcblx0aHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL21lc3NhZ2UudHNcclxuICAgICAgPC9hPlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xyXG5cclxuICBtZXNzYWdlczogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBwcml2YXRlIExFTkdUSDogbnVtYmVyID0gNTAwMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG1zOiBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgbXMuX3J4LnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcclxuXHRkYXRhID0ge1xyXG5cdCAgdGV4dDogZGF0YVxyXG5cdH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgbWVzc2FnZVxyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSk7XHJcblxyXG4gICAgICAvLyByZW1vdmUgbWVzc2FnZVxyXG4gICAgICBpZiAodGhpcy5MRU5HVEggPiAwKSB7XHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICB0aGlzLm1lc3NhZ2VzLnNoaWZ0KCk7XHJcblx0fSwgdGhpcy5MRU5HVEgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdE1lc3NhZ2UoZXZlbnQ6IEV2ZW50LCBtZXNzYWdlOiBPYmplY3QpIHtcclxuICAgIHRoaXMubXMuZW1pdE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=