System.register(["angular2/core", "ng-semantic", "../../services/message", "ng2-prism/codeblock", "ng2-prism/languages"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, message_1, codeblock_1, languages_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (codeblock_1_1) {
                codeblock_1 = codeblock_1_1;
            },
            function (languages_1_1) {
                languages_1 = languages_1_1;
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
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, codeblock_1.Codeblock, languages_1.Markup],
                        providers: [message_1.MessageService],
                        selector: "message",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Message</h1>\n\t<p>Semantic UI Message element <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/collections/message.html\" target=\"_blank\">Semantic UI Message</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <p>Once created, message will expire for 10 seconds.</p>\n    <sm-message *ngFor=\"#message of messages\" class=\"ui message {{message.type}}\"\n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{{message.text}}</sm-message>\n\n    <sm-button (click)=\"submitMessage($event, {icon: 'inbox', text: 'Icon, Icon'})\">\n\tIcon message\n    </sm-button>\n    <sm-button class=\"blue\" (click)=\"submitMessage($event, {type: 'info', text: 'Info, Info'})\">\n\tInfo message\n    </sm-button>\n    <sm-button class=\"red\" (click)=\"submitMessage($event, {type: 'warning', text: 'Warning, Warning'})\">\n\tWarning message\n    </sm-button>\n    <sm-button class=\"positive\" (click)=\"submitMessage($event, {type: 'positive', text: 'Positive, Positive'})\">\n\tPositive message\n    </sm-button>\n\n    <h4 class=\"ui header\">Code</h4>\n<codeblock markup>\n&lt;sm-message *ngFor=\"#message of messages\" class=\"ui message { {message.type} }\"\n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{ {message.text} }&lt;/sm-message>\n</codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [message_1.MessageService])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_1("MessageComponent", MessageComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOENBO2dCQU1FLDBCQUFtQixFQUFrQjtvQkFOdkMsaUJBK0JDO29CQXpCb0IsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7b0JBSnJDLGFBQVEsR0FBa0IsRUFBRSxDQUFDO29CQUVyQixXQUFNLEdBQVcsSUFBSSxDQUFDO29CQUc1QixFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVM7d0JBRXpCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7NEJBQ3BDLElBQUksR0FBRztnQ0FDTCxJQUFJLEVBQUUsSUFBSTs2QkFDWCxDQUFDO3dCQUNHLENBQUM7d0JBR0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBR3pCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDM0IsVUFBVSxDQUFDO2dDQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ3hCLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ1gsQ0FBQztvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBYyxLQUFZLEVBQUUsT0FBZTtvQkFDekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBckVIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLEVBQUUscUJBQVMsRUFBRSxrQkFBTSxDQUFDO3dCQUN6RSxTQUFTLEVBQUUsQ0FBQyx3QkFBYyxDQUFDO3dCQUMzQixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLDY2Q0FpQ1g7cUJBQ0EsQ0FBQzs7b0NBQUE7Z0JBaUNGLHVCQUFDO1lBQUQsQ0FBQyxBQS9CRCxJQStCQztZQS9CRCwrQ0ErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBDb2RlYmxvY2sgfSBmcm9tIFwibmcyLXByaXNtL2NvZGVibG9ja1wiO1xyXG5pbXBvcnQgeyBNYXJrdXAgfSBmcm9tIFwibmcyLXByaXNtL2xhbmd1YWdlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMsIENvZGVibG9jaywgTWFya3VwXSxcclxuICBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV0sXHJcbiAgc2VsZWN0b3I6IFwibWVzc2FnZVwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cclxuXHQ8aDE+TWVzc2FnZTwvaDE+XHJcblx0PHA+U2VtYW50aWMgVUkgTWVzc2FnZSBlbGVtZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cclxuXHQ8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZXNzYWdlLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBNZXNzYWdlPC9hPjwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XHJcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vPC9oND5cclxuICAgIDxwPk9uY2UgY3JlYXRlZCwgbWVzc2FnZSB3aWxsIGV4cGlyZSBmb3IgMTAgc2Vjb25kcy48L3A+XHJcbiAgICA8c20tbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIGNsYXNzPVwidWkgbWVzc2FnZSB7e21lc3NhZ2UudHlwZX19XCJcclxuICAgIFtuZ0NsYXNzXT1cInsgaWNvbjogbWVzc2FnZS5pY29ufVwiIFtpY29uXT1cIm1lc3NhZ2UuaWNvblwiPnt7bWVzc2FnZS50ZXh0fX08L3NtLW1lc3NhZ2U+XHJcblxyXG4gICAgPHNtLWJ1dHRvbiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHtpY29uOiAnaW5ib3gnLCB0ZXh0OiAnSWNvbiwgSWNvbid9KVwiPlxyXG5cdEljb24gbWVzc2FnZVxyXG4gICAgPC9zbS1idXR0b24+XHJcbiAgICA8c20tYnV0dG9uIGNsYXNzPVwiYmx1ZVwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICdpbmZvJywgdGV4dDogJ0luZm8sIEluZm8nfSlcIj5cclxuXHRJbmZvIG1lc3NhZ2VcclxuICAgIDwvc20tYnV0dG9uPlxyXG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cInJlZFwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICd3YXJuaW5nJywgdGV4dDogJ1dhcm5pbmcsIFdhcm5pbmcnfSlcIj5cclxuXHRXYXJuaW5nIG1lc3NhZ2VcclxuICAgIDwvc20tYnV0dG9uPlxyXG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cInBvc2l0aXZlXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ3Bvc2l0aXZlJywgdGV4dDogJ1Bvc2l0aXZlLCBQb3NpdGl2ZSd9KVwiPlxyXG5cdFBvc2l0aXZlIG1lc3NhZ2VcclxuICAgIDwvc20tYnV0dG9uPlxyXG5cclxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxyXG48Y29kZWJsb2NrIG1hcmt1cD5cclxuJmx0O3NtLW1lc3NhZ2UgKm5nRm9yPVwiI21lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBjbGFzcz1cInVpIG1lc3NhZ2UgeyB7bWVzc2FnZS50eXBlfSB9XCJcclxuICAgIFtuZ0NsYXNzXT1cInsgaWNvbjogbWVzc2FnZS5pY29ufVwiIFtpY29uXT1cIm1lc3NhZ2UuaWNvblwiPnsge21lc3NhZ2UudGV4dH0gfSZsdDsvc20tbWVzc2FnZT5cclxuPC9jb2RlYmxvY2s+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XHJcblxyXG4gIG1lc3NhZ2VzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBwcml2YXRlIExFTkdUSDogbnVtYmVyID0gNTAwMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG1zOiBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgbXMuX3J4LnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcclxuXHRkYXRhID0ge1xyXG5cdCAgdGV4dDogZGF0YVxyXG5cdH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgbWVzc2FnZVxyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSk7XHJcblxyXG4gICAgICAvLyByZW1vdmUgbWVzc2FnZVxyXG4gICAgICBpZiAodGhpcy5MRU5HVEggPiAwKSB7XHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICB0aGlzLm1lc3NhZ2VzLnNoaWZ0KCk7XHJcblx0fSwgdGhpcy5MRU5HVEgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdE1lc3NhZ2UoZXZlbnQ6IEV2ZW50LCBtZXNzYWdlOiBPYmplY3QpIHtcclxuICAgIHRoaXMubXMuZW1pdE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=