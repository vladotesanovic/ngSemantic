var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var SemanticHeader = (function () {
    function SemanticHeader() {
        this.items = [];
        this.items = [{
                "title": "Home",
                "link": "#/",
                "icon": "home"
            }, {
                "title": "About Us",
                "link": "#/"
            }, {
                "title": "Contact",
                "link": "#/"
            }];
    }
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticHeader.prototype, "class", void 0);
    __decorate([
        core_1.Input("items"), 
        __metadata('design:type', Array)
    ], SemanticHeader.prototype, "items", void 0);
    __decorate([
        core_1.Input("logo"), 
        __metadata('design:type', String)
    ], SemanticHeader.prototype, "logo", void 0);
    SemanticHeader = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-header"
        }),
        core_1.View({
            template: "<div class=\"ui menu {{class}}\">\n    <a href=\"#/\" *ngIf=\"logo\" class=\"header item\">\n            <img class=\"logo\" alt=\"{{title}}\" src=\"{{logo}}\">\n        </a>\n        <a *ngFor=\"#menu of items\" href=\"{{menu.link}}\" class=\"item\">\n            <i *ngIf=\"menu.icon\" class=\"{{menu.icon}} icon\"></i> {{menu.title}}\n        </a>\n        <div class=\"right menu\">\n            <a class=\"item\" href=\"https://github.com/vladotesanovic/ngSemantic\" target=\"_blank\">\n                <i class=\"github icon\"></i> GitHub repo\n            </a>\n            <div class=\"item\">\n                <div class=\"ui icon input\">\n                    <input type=\"text\" placeholder=\"Search...\">\n                    <i class=\"search link icon\"></i>\n                </div>\n            </div>\n        </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticHeader);
    return SemanticHeader;
})();
exports.SemanticHeader = SemanticHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVhZGVyLnRzIl0sIm5hbWVzIjpbIlNlbWFudGljSGVhZGVyIiwiU2VtYW50aWNIZWFkZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFnRSxlQUFlLENBQUMsQ0FBQTtBQVFoRjtJQThCSUE7UUFIZ0JDLFVBQUtBLEdBQWtCQSxFQUFFQSxDQUFDQTtRQUt0Q0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0E7Z0JBQ1ZBLE9BQU9BLEVBQUdBLE1BQU1BO2dCQUNoQkEsTUFBTUEsRUFBR0EsSUFBSUE7Z0JBQ2JBLE1BQU1BLEVBQUdBLE1BQU1BO2FBQ2xCQSxFQUFFQTtnQkFDQ0EsT0FBT0EsRUFBR0EsVUFBVUE7Z0JBQ3BCQSxNQUFNQSxFQUFHQSxJQUFJQTthQUNoQkEsRUFBRUE7Z0JBQ0NBLE9BQU9BLEVBQUdBLFNBQVNBO2dCQUNuQkEsTUFBTUEsRUFBR0EsSUFBSUE7YUFDaEJBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBakJERDtRQUFDQSxZQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTs7T0FBQ0EsaUNBQUtBLFVBQVNBO0lBQzlCQTtRQUFDQSxZQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTs7T0FBQ0EsaUNBQUtBLFVBQXFCQTtJQUMxQ0E7UUFBQ0EsWUFBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7O09BQUNBLGdDQUFJQSxVQUFTQTtJQTVCaENBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxlQUFlQSxFQUFFQSw4QkFBdUJBLENBQUNBLE1BQU1BO1lBQy9DQSxRQUFRQSxFQUFFQSxXQUFXQTtTQUN4QkEsQ0FBQ0E7UUFDREEsV0FBSUEsQ0FBQ0E7WUFDRkEsUUFBUUEsRUFBRUEsMjBCQWtCUEE7U0FDTkEsQ0FBQ0E7O3VCQW9CREE7SUFBREEscUJBQUNBO0FBQURBLENBQUNBLEFBNUNELElBNENDO0FBbkJZLHNCQUFjLGlCQW1CMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBNZW51IGNvbXBvbmVudFxuICogXG4gKiBAbGluayBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL21lbnUuaHRtbFxuICogQGxpbmsgaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9pY29uLmh0bWxcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc2VsZWN0b3I6IFwic20taGVhZGVyXCJcbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWkgbWVudSB7e2NsYXNzfX1cIj5cbiAgICA8YSBocmVmPVwiIy9cIiAqbmdJZj1cImxvZ29cIiBjbGFzcz1cImhlYWRlciBpdGVtXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibG9nb1wiIGFsdD1cInt7dGl0bGV9fVwiIHNyYz1cInt7bG9nb319XCI+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgKm5nRm9yPVwiI21lbnUgb2YgaXRlbXNcIiBocmVmPVwie3ttZW51Lmxpbmt9fVwiIGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJtZW51Lmljb25cIiBjbGFzcz1cInt7bWVudS5pY29ufX0gaWNvblwiPjwvaT4ge3ttZW51LnRpdGxlfX1cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQgbWVudVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJpdGVtXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnaXRodWIgaWNvblwiPjwvaT4gR2l0SHViIHJlcG9cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGljb24gaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJzZWFyY2ggbGluayBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY0hlYWRlciB7XG4gICAgQElucHV0KFwiY2xhc3NcIikgY2xhc3M6IHN0cmluZztcbiAgICBASW5wdXQoXCJpdGVtc1wiKSBpdGVtczogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgIEBJbnB1dChcImxvZ29cIikgbG9nbzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5pdGVtcyA9IFt7XG4gICAgICAgICAgICBcInRpdGxlXCIgOiBcIkhvbWVcIixcbiAgICAgICAgICAgIFwibGlua1wiIDogXCIjL1wiLFxuICAgICAgICAgICAgXCJpY29uXCIgOiBcImhvbWVcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcInRpdGxlXCIgOiBcIkFib3V0IFVzXCIsXG4gICAgICAgICAgICBcImxpbmtcIiA6IFwiIy9cIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcInRpdGxlXCIgOiBcIkNvbnRhY3RcIixcbiAgICAgICAgICAgIFwibGlua1wiIDogXCIjL1wiXG4gICAgICAgIH1dO1xuICAgIH1cbn1cbiJdfQ==