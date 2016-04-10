System.register(["angular2/core", "ng-semantic", "ng2-prism/codeblock", "ng2-prism/languages"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, codeblock_1, languages_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (codeblock_1_1) {
                codeblock_1 = codeblock_1_1;
            },
            function (languages_1_1) {
                languages_1 = languages_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        directives: [codeblock_1.Codeblock, languages_1.Markup, languages_1.Bash, languages_1.Typescript, ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES],
                        selector: "home",
                        template: "\n<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Getting Started</h1>\n        <p>Angular2 building blocks based on Semantic UI</p>\n        <ul class=\"\">\n            <li class=\"item\">Angular 2 <a href=\"https://angular.io/\" target=\"_blank\">angular.io</a></li>\n            <li class=\"item\">Semantic UI <a href=\"http://semantic-ui.com/\" target=\"_blank\">semantic-ui.com</a></li>\n            <li class=\"item\"><b>GitHub repository</b> <a href=\"https://github.com/vladotesanovic/ngSemantic\"> \n            https://github.com/vladotesanovic/ngSemantic</a> ( If you like it, give it a star <i class=\"icon star\"></i> )</li>\n          </ul>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h2 class=\"header\">Installation</h2>\n<sm-segment class=\"raised\">\n<codeblock bash>\n$ npm install ng-semantic --save\n</codeblock>\n</sm-segment>\n    <p></p>\n    <p>In your index.html ( entry file )</p>\n    <codeblock markup>\n&lt;script src=&quot;node_modules/ng-semantic/bundles/ng-semantic.js&quot;&gt;&lt;/script&gt;\n</codeblock>\n    <p></p>\n    \n    <p>Semantic css and js ( with jQuery are required )</p>\n        <codeblock markup>\n&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; \nsrc=&quot;https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css&quot;&gt;&lt;/link&gt;\n\n<!-- JS -->\n&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.j&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js&quot;&gt;&lt;/script&gt;\n</codeblock>\n\n\n    <p></p>\n    <h2 class=\"header\">Use</h2>\n       <codeblock typescript>\nimport {Component} from 'angular2/core';\nimport { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from \"ng-semantic\";\n\n@Component({\nselector: 'demo-cmp',\ndirectives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],\ntemplate: '&lt;sm-segment class=\"raised\">Hello&lt;/sm-segment>'\n})\nexport class DemoComponent {}\n    </codeblock>\n\n    <h2>Starter project</h2>\n        <p>SystemJS: <i class=\"icon external\"></i> \n        <a href=\"https://github.com/vladotesanovic/angular2-express-starter\" target=\"_blank\">Express app with included ng-semantic</a></p>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrRUE7Z0JBQUE7Z0JBQTRCLENBQUM7Z0JBN0Q3QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLHFCQUFTLEVBQUUsa0JBQU0sRUFBRSxnQkFBSSxFQUFFLHNCQUFVLEVBQUUsaUNBQW1CLEVBQUUsaUNBQW1CLENBQUM7d0JBQzNGLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixRQUFRLEVBQUUsOHZFQXdEYjtxQkFDQSxDQUFDOztpQ0FBQTtnQkFDMEIsb0JBQUM7WUFBRCxDQUFDLEFBQTdCLElBQTZCO1lBQTdCLHlDQUE2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xyXG5pbXBvcnQgeyBDb2RlYmxvY2sgfSBmcm9tIFwibmcyLXByaXNtL2NvZGVibG9ja1wiO1xyXG5pbXBvcnQgeyBNYXJrdXAsIFR5cGVzY3JpcHQsIEJhc2ggfSBmcm9tIFwibmcyLXByaXNtL2xhbmd1YWdlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBkaXJlY3RpdmVzOiBbQ29kZWJsb2NrLCBNYXJrdXAsIEJhc2gsIFR5cGVzY3JpcHQsIFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxyXG4gICAgc2VsZWN0b3I6IFwiaG9tZVwiLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+R2V0dGluZyBTdGFydGVkPC9oMT5cclxuICAgICAgICA8cD5Bbmd1bGFyMiBidWlsZGluZyBibG9ja3MgYmFzZWQgb24gU2VtYW50aWMgVUk8L3A+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj5Bbmd1bGFyIDIgPGEgaHJlZj1cImh0dHBzOi8vYW5ndWxhci5pby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5hbmd1bGFyLmlvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj5TZW1hbnRpYyBVSSA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5zZW1hbnRpYy11aS5jb208L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxiPkdpdEh1YiByZXBvc2l0b3J5PC9iPiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWNcIj4gXHJcbiAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljPC9hPiAoIElmIHlvdSBsaWtlIGl0LCBnaXZlIGl0IGEgc3RhciA8aSBjbGFzcz1cImljb24gc3RhclwiPjwvaT4gKTwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibWFpbiB1aSBjb250YWluZXJcIj5cclxuICAgIDxoMiBjbGFzcz1cImhlYWRlclwiPkluc3RhbGxhdGlvbjwvaDI+XHJcbjxzbS1zZWdtZW50IGNsYXNzPVwicmFpc2VkXCI+XHJcbjxjb2RlYmxvY2sgYmFzaD5cclxuJCBucG0gaW5zdGFsbCBuZy1zZW1hbnRpYyAtLXNhdmVcclxuPC9jb2RlYmxvY2s+XHJcbjwvc20tc2VnbWVudD5cclxuICAgIDxwPjwvcD5cclxuICAgIDxwPkluIHlvdXIgaW5kZXguaHRtbCAoIGVudHJ5IGZpbGUgKTwvcD5cclxuICAgIDxjb2RlYmxvY2sgbWFya3VwPlxyXG4mbHQ7c2NyaXB0IHNyYz0mcXVvdDtub2RlX21vZHVsZXMvbmctc2VtYW50aWMvYnVuZGxlcy9uZy1zZW1hbnRpYy5qcyZxdW90OyZndDsmbHQ7L3NjcmlwdCZndDtcclxuPC9jb2RlYmxvY2s+XHJcbiAgICA8cD48L3A+XHJcbiAgICBcclxuICAgIDxwPlNlbWFudGljIGNzcyBhbmQganMgKCB3aXRoIGpRdWVyeSBhcmUgcmVxdWlyZWQgKTwvcD5cclxuICAgICAgICA8Y29kZWJsb2NrIG1hcmt1cD5cclxuJmx0O2xpbmsgcmVsPSZxdW90O3N0eWxlc2hlZXQmcXVvdDsgdHlwZT0mcXVvdDt0ZXh0L2NzcyZxdW90OyBcclxuc3JjPSZxdW90O2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMS44L3NlbWFudGljLm1pbi5jc3MmcXVvdDsmZ3Q7Jmx0Oy9saW5rJmd0O1xyXG5cclxuPCEtLSBKUyAtLT5cclxuJmx0O3NjcmlwdCBzcmM9JnF1b3Q7aHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzIuMS40L2pxdWVyeS5taW4uaiZxdW90OyZndDsmbHQ7L3NjcmlwdCZndDtcclxuJmx0O3NjcmlwdCBzcmM9JnF1b3Q7aHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4xLjgvc2VtYW50aWMubWluLmpzJnF1b3Q7Jmd0OyZsdDsvc2NyaXB0Jmd0O1xyXG48L2NvZGVibG9jaz5cclxuXHJcblxyXG4gICAgPHA+PC9wPlxyXG4gICAgPGgyIGNsYXNzPVwiaGVhZGVyXCI+VXNlPC9oMj5cclxuICAgICAgIDxjb2RlYmxvY2sgdHlwZXNjcmlwdD5cclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuc2VsZWN0b3I6ICdkZW1vLWNtcCcsXHJcbmRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcclxudGVtcGxhdGU6ICcmbHQ7c20tc2VnbWVudCBjbGFzcz1cInJhaXNlZFwiPkhlbGxvJmx0Oy9zbS1zZWdtZW50PidcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbW9Db21wb25lbnQge31cclxuICAgIDwvY29kZWJsb2NrPlxyXG5cclxuICAgIDxoMj5TdGFydGVyIHByb2plY3Q8L2gyPlxyXG4gICAgICAgIDxwPlN5c3RlbUpTOiA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+IFxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvYW5ndWxhcjItZXhwcmVzcy1zdGFydGVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RXhwcmVzcyBhcHAgd2l0aCBpbmNsdWRlZCBuZy1zZW1hbnRpYzwvYT48L3A+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHt9XHJcbiJdfQ==