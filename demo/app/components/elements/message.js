System.register(["angular2/core", "ng-semantic/semantic"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, semantic_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent() {
                }
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: "message",
                        providers: [semantic_1.MessageService]
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Message</h1>\n        <p>Semantic UI message element <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/collections/message.html\" target=\"_blank\">Semantic UI Message</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n    <p>Once created, message will expire for 10 seconds.</p>\n    <sm-message duration=\"10000\"></sm-message><br/>\n    <button class=\"ui button\" (click)=\"submitMessage($event, {icon: 'inbox', text: 'Icon, Icon'})\">\n        Icon message\n    </button>\n    <button class=\"ui button blue\" (click)=\"submitMessage($event, {type: 'info', text: 'Info, Info'})\">\n        Info message\n    </button>\n    <button class=\"ui button red\" (click)=\"submitMessage($event, {type: 'warning', text: 'Warning, Warning'})\">\n        Warning message\n    </button>\n    <button class=\"ui button positive\" (click)=\"submitMessage($event, {type: 'positive', text: 'Positive, Positive'})\">\n        Positive message\n    </button>\n\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"12\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-message duration=\"10000\"></sm-message> // 10 seconds\n\n<button class=\"ui button\" (click)=\"submitMessage($event, {type: 'info', icon: 'inbox', text: 'Icon, Icon'})\">Icon message</button>\n<button class=\"ui button blue\" (click)=\"submitMessage($event, {type: 'info', text: 'Info, Info'})\">Info message</button>\n<button class=\"ui button red\" (click)=\"submitMessage($event, {type: 'warning', text: 'Warning, Warning'})\">Warning message</button>\n<button class=\"ui button positive\" (click)=\"submitMessage($event, {type: 'positive', text: 'Positive, Positive'})\">Positive message</button>\n</textarea>\n        </div>\n      </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageComponent);
                return MessageComponent;
            })();
            exports_1("MessageComponent", MessageComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbIk1lc3NhZ2VDb21wb25lbnQiLCJNZXNzYWdlQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFrRElBO2dCQUFnQkMsQ0FBQ0E7Z0JBbERyQkQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsU0FBU0E7d0JBQ25CQSxTQUFTQSxFQUFFQSxDQUFDQSx5QkFBY0EsQ0FBQ0E7cUJBQzlCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFtQkEsRUFBRUEsOEJBQW1CQSxDQUFDQTt3QkFDdERBLFFBQVFBLEVBQUVBLDA5REF1Q2JBO3FCQUNBQSxDQUFDQTs7cUNBVURBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0FBQ0EsQUF4REQsSUF3REM7WUF4REQsK0NBd0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUywgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibWVzc2FnZVwiLFxuICAgIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlXVxufSlcbkBWaWV3KHtcbiAgICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IGBcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5NZXNzYWdlPC9oMT5cbiAgICAgICAgPHA+U2VtYW50aWMgVUkgbWVzc2FnZSBlbGVtZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVzc2FnZS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgTWVzc2FnZTwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW88L2g0PlxuICAgIDxwPk9uY2UgY3JlYXRlZCwgbWVzc2FnZSB3aWxsIGV4cGlyZSBmb3IgMTAgc2Vjb25kcy48L3A+XG4gICAgPHNtLW1lc3NhZ2UgZHVyYXRpb249XCIxMDAwMFwiPjwvc20tbWVzc2FnZT48YnIvPlxuICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b25cIiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHtpY29uOiAnaW5ib3gnLCB0ZXh0OiAnSWNvbiwgSWNvbid9KVwiPlxuICAgICAgICBJY29uIG1lc3NhZ2VcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIGJsdWVcIiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHt0eXBlOiAnaW5mbycsIHRleHQ6ICdJbmZvLCBJbmZvJ30pXCI+XG4gICAgICAgIEluZm8gbWVzc2FnZVxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gcmVkXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ3dhcm5pbmcnLCB0ZXh0OiAnV2FybmluZywgV2FybmluZyd9KVwiPlxuICAgICAgICBXYXJuaW5nIG1lc3NhZ2VcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIHBvc2l0aXZlXCIgKGNsaWNrKT1cInN1Ym1pdE1lc3NhZ2UoJGV2ZW50LCB7dHlwZTogJ3Bvc2l0aXZlJywgdGV4dDogJ1Bvc2l0aXZlLCBQb3NpdGl2ZSd9KVwiPlxuICAgICAgICBQb3NpdGl2ZSBtZXNzYWdlXG4gICAgPC9idXR0b24+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiMTJcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20tbWVzc2FnZSBkdXJhdGlvbj1cIjEwMDAwXCI+PC9zbS1tZXNzYWdlPiAvLyAxMCBzZWNvbmRzXG5cbjxidXR0b24gY2xhc3M9XCJ1aSBidXR0b25cIiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHt0eXBlOiAnaW5mbycsIGljb246ICdpbmJveCcsIHRleHQ6ICdJY29uLCBJY29uJ30pXCI+SWNvbiBtZXNzYWdlPC9idXR0b24+XG48YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIGJsdWVcIiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHt0eXBlOiAnaW5mbycsIHRleHQ6ICdJbmZvLCBJbmZvJ30pXCI+SW5mbyBtZXNzYWdlPC9idXR0b24+XG48YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIHJlZFwiIChjbGljayk9XCJzdWJtaXRNZXNzYWdlKCRldmVudCwge3R5cGU6ICd3YXJuaW5nJywgdGV4dDogJ1dhcm5pbmcsIFdhcm5pbmcnfSlcIj5XYXJuaW5nIG1lc3NhZ2U8L2J1dHRvbj5cbjxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gcG9zaXRpdmVcIiAoY2xpY2spPVwic3VibWl0TWVzc2FnZSgkZXZlbnQsIHt0eXBlOiAncG9zaXRpdmUnLCB0ZXh0OiAnUG9zaXRpdmUsIFBvc2l0aXZlJ30pXCI+UG9zaXRpdmUgbWVzc2FnZTwvYnV0dG9uPlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICAvKlxuICAgIHN1Ym1pdE1lc3NhZ2UoZXZlbnQ6IEV2ZW50LCBtZXNzYWdlOiBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5tcy5lbWl0TWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG4gICAgKi9cbn1cbiJdfQ==