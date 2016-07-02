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
                        selector: "sm-page-message",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Message</h1>\n\t<p>Semantic UI Message element <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/collections/message.html\" target=\"_blank\">Semantic UI Message</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <p>Once created, message will expire for 10 seconds.</p>\n    <sm-message *ngFor=\"let message of messages\" class=\"ui message {{message.type}}\"\n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{{message.text}}</sm-message>\n\n    <sm-button (click)=\"submitMessage($event, {icon: 'inbox', text: 'Icon, Icon'})\">\n\tIcon message\n    </sm-button>\n    <sm-button class=\"blue\" (click)=\"submitMessage($event, {type: 'info', text: 'Info, Info'})\">\n\tInfo message\n    </sm-button>\n    <sm-button class=\"red\" (click)=\"submitMessage($event, {type: 'warning', text: 'Warning, Warning'})\">\n\tWarning message\n    </sm-button>\n    <sm-button class=\"positive\" (click)=\"submitMessage($event, {type: 'positive', text: 'Positive, Positive'})\">\n\tPositive message\n    </sm-button>\n\n    <h4 class=\"ui header\">Code</h4>\n<sm-codeblock smPrismjs=\"html\">\n&lt;sm-message *ngFor=\"#message of messages\" class=\"ui message { {message.type} }\"\n    [ngClass]=\"{ icon: message.icon}\" [icon]=\"message.icon\">{ {message.text} }&lt;/sm-message>\n</sm-codeblock>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [message_1.MessageService])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_1("MessageComponent", MessageComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4Q0E7Z0JBTUUsMEJBQW1CLEVBQWtCO29CQU52QyxpQkErQkM7b0JBekJvQixPQUFFLEdBQUYsRUFBRSxDQUFnQjtvQkFKckMsYUFBUSxHQUFrQixFQUFFLENBQUM7b0JBRXJCLFdBQU0sR0FBVyxJQUFJLENBQUM7b0JBRzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUzt3QkFFekIsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsSUFBSSxHQUFHO2dDQUNMLElBQUksRUFBRSxJQUFJOzZCQUNYLENBQUM7d0JBQ0csQ0FBQzt3QkFHRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFHekIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixVQUFVLENBQUM7Z0NBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDeEIsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDWCxDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsd0NBQWEsR0FBYixVQUFjLEtBQVksRUFBRSxPQUFlO29CQUN6QyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFyRUg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxVQUFVLEVBQUUsQ0FBQyxpQ0FBbUIsRUFBRSxpQ0FBbUIsRUFBUSw0QkFBa0IsRUFBUSwwQkFBZ0IsQ0FBQzt3QkFDeEcsU0FBUyxFQUFFLENBQUMsd0JBQWMsQ0FBQzt3QkFDM0IsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLGs4Q0FpQ1g7cUJBQ0EsQ0FBQzs7b0NBQUE7Z0JBaUNGLHVCQUFDO1lBQUQsQ0FBQyxBQS9CRCxJQStCQztZQS9CRCwrQ0ErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCAsIFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xuaW1wb3J0IHsgQ29kZWJsb2NrQ29tcG9uZW50LCBQcmlzbUpzRGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL3ByaXNtanMvcHJpc21qc1wiO1xuXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUywgPFR5cGU+Q29kZWJsb2NrQ29tcG9uZW50LCA8VHlwZT5QcmlzbUpzRGlyZWN0aXZlXSxcbiAgcHJvdmlkZXJzOiBbTWVzc2FnZVNlcnZpY2VdLFxuICBzZWxlY3RvcjogXCJzbS1wYWdlLW1lc3NhZ2VcIixcbiAgdGVtcGxhdGU6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG5cdDxoMT5NZXNzYWdlPC9oMT5cblx0PHA+U2VtYW50aWMgVUkgTWVzc2FnZSBlbGVtZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cblx0PGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVzc2FnZS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgTWVzc2FnZTwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxwPk9uY2UgY3JlYXRlZCwgbWVzc2FnZSB3aWxsIGV4cGlyZSBmb3IgMTAgc2Vjb25kcy48L3A+XG4gICAgPHNtLW1lc3NhZ2UgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBjbGFzcz1cInVpIG1lc3NhZ2Uge3ttZXNzYWdlLnR5cGV9fVwiXG4gICAgW25nQ2xhc3NdPVwieyBpY29uOiBtZXNzYWdlLmljb259XCIgW2ljb25dPVwibWVzc2FnZS5pY29uXCI+e3ttZXNzYWdlLnRleHR9fTwvc20tbWVzc2FnZT5cblxuICAgIDxzbS1idXR0b24gKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7aWNvbjogJ2luYm94JywgdGV4dDogJ0ljb24sIEljb24nfSlcIj5cblx0SWNvbiBtZXNzYWdlXG4gICAgPC9zbS1idXR0b24+XG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cImJsdWVcIiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHt0eXBlOiAnaW5mbycsIHRleHQ6ICdJbmZvLCBJbmZvJ30pXCI+XG5cdEluZm8gbWVzc2FnZVxuICAgIDwvc20tYnV0dG9uPlxuICAgIDxzbS1idXR0b24gY2xhc3M9XCJyZWRcIiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHt0eXBlOiAnd2FybmluZycsIHRleHQ6ICdXYXJuaW5nLCBXYXJuaW5nJ30pXCI+XG5cdFdhcm5pbmcgbWVzc2FnZVxuICAgIDwvc20tYnV0dG9uPlxuICAgIDxzbS1idXR0b24gY2xhc3M9XCJwb3NpdGl2ZVwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICdwb3NpdGl2ZScsIHRleHQ6ICdQb3NpdGl2ZSwgUG9zaXRpdmUnfSlcIj5cblx0UG9zaXRpdmUgbWVzc2FnZVxuICAgIDwvc20tYnV0dG9uPlxuXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG48c20tY29kZWJsb2NrIHNtUHJpc21qcz1cImh0bWxcIj5cbiZsdDtzbS1tZXNzYWdlICpuZ0Zvcj1cIiNtZXNzYWdlIG9mIG1lc3NhZ2VzXCIgY2xhc3M9XCJ1aSBtZXNzYWdlIHsge21lc3NhZ2UudHlwZX0gfVwiXG4gICAgW25nQ2xhc3NdPVwieyBpY29uOiBtZXNzYWdlLmljb259XCIgW2ljb25dPVwibWVzc2FnZS5pY29uXCI+eyB7bWVzc2FnZS50ZXh0fSB9Jmx0Oy9zbS1tZXNzYWdlPlxuPC9zbS1jb2RlYmxvY2s+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcblxuICBtZXNzYWdlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIExFTkdUSDogbnVtYmVyID0gNTAwMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbXM6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgbXMuX3J4LnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuXHRkYXRhID0ge1xuXHQgIHRleHQ6IGRhdGFcblx0fTtcbiAgICAgIH1cblxuICAgICAgLy8gZGlzcGxheSBtZXNzYWdlXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSk7XG5cbiAgICAgIC8vIHJlbW92ZSBtZXNzYWdlXG4gICAgICBpZiAodGhpcy5MRU5HVEggPiAwKSB7XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHQgIHRoaXMubWVzc2FnZXMuc2hpZnQoKTtcblx0fSwgdGhpcy5MRU5HVEgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3VibWl0TWVzc2FnZShldmVudDogRXZlbnQsIG1lc3NhZ2U6IE9iamVjdCkge1xuICAgIHRoaXMubXMuZW1pdE1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxufVxuIl19