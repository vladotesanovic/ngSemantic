System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ArrayFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArrayFilterPipe = (function () {
                function ArrayFilterPipe() {
                }
                ArrayFilterPipe.prototype.transform = function (array, text) {
                    var _this = this;
                    if (typeof text === "object" && typeof text[0] === "undefined") {
                        return array;
                    }
                    this._tmp = new Array();
                    if (text.length === 1) {
                        array.map(function (item) {
                            if (item.toLowerCase().search(text.toString().toLowerCase()) >= 0) {
                                _this._tmp.push(item);
                            }
                        });
                    }
                    else {
                        array.map(function (item) {
                            if (item[text[0]].toLowerCase().search(text[1].toString().toLowerCase()) >= 0) {
                                _this._tmp.push(item);
                            }
                        });
                    }
                    return this._tmp;
                };
                ArrayFilterPipe = __decorate([
                    core_1.Pipe({
                        name: "arrayFilter"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArrayFilterPipe);
                return ArrayFilterPipe;
            })();
            exports_1("ArrayFilterPipe", ArrayFilterPipe);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL3BpcGVzL2FycmF5LnRzIl0sIm5hbWVzIjpbIkFycmF5RmlsdGVyUGlwZSIsIkFycmF5RmlsdGVyUGlwZS5jb25zdHJ1Y3RvciIsIkFycmF5RmlsdGVyUGlwZS50cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUFBQTtnQkE4QkFDLENBQUNBO2dCQXhCQUQsbUNBQVNBLEdBQVRBLFVBQVVBLEtBQW9CQSxFQUFFQSxJQUFTQTtvQkFBekNFLGlCQXVCQ0E7b0JBdEJBQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxJQUFJQSxLQUFLQSxRQUFRQSxJQUFJQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDaEVBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO29CQUNkQSxDQUFDQTtvQkFFREEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsS0FBS0EsRUFBVUEsQ0FBQ0E7b0JBR2hDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDdkJBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLElBQUlBOzRCQUNiQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQ0FDbkVBLEtBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBOzRCQUN0QkEsQ0FBQ0E7d0JBQ0ZBLENBQUNBLENBQUNBLENBQUNBO29CQUNKQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ1BBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLElBQUlBOzRCQUNiQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQ0FDL0VBLEtBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBOzRCQUN0QkEsQ0FBQ0E7d0JBQ0ZBLENBQUNBLENBQUNBLENBQUNBO29CQUNKQSxDQUFDQTtvQkFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBQ2xCQSxDQUFDQTtnQkE3QkZGO29CQUFDQSxXQUFJQSxDQUFDQTt3QkFDTEEsSUFBSUEsRUFBRUEsYUFBYUE7cUJBQ25CQSxDQUFDQTs7b0NBNEJEQTtnQkFBREEsc0JBQUNBO1lBQURBLENBQUNBLEFBOUJELElBOEJDO1lBOUJELDZDQThCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8qKlxuICogRmlsdGVyIHRyb3VnaCBhcnJheSBpbiBBbmd1bGFyMlxuICpcbiAqIEltcGxlbWVudGF0aW9uOiBcbiAqIFxuICogIEZpbHRlciBzb3VyY2U6IFxuICogIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmctbW9kZWwpXT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGxpc3QuLi5cIj5cbiAqXG4gKiAgRm9yLUVhY2hcbiAqICA8YSBjbGFzcz1cIml0ZW1cIiAqbmctZm9yPVwidmFyIGl0ZW0gb2YgaXRlbXMgfCBhcnJheUZpbHRlcjogc2VhcmNoXCI+IHt7aXRlbX19PC9hPlxuICovXG5AUGlwZSh7XG5cdG5hbWU6IFwiYXJyYXlGaWx0ZXJcIlxufSlcbmV4cG9ydCBjbGFzcyBBcnJheUZpbHRlclBpcGUge1xuXHRwcml2YXRlIF90bXA6IEFycmF5PHN0cmluZz47XG5cblx0dHJhbnNmb3JtKGFycmF5OiBBcnJheTxzdHJpbmc+LCB0ZXh0OiBhbnkpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRpZiAodHlwZW9mIHRleHQgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHRleHRbMF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHJldHVybiBhcnJheTtcblx0XHR9XG5cblx0XHR0aGlzLl90bXAgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXHRcdC8vIDEgbWVhbiB0aGF0IGFycmF5IGlzIGZsYXRcblx0XHQvLyAyIG1lYW4gdGhhdCB3ZSBkZWFsIHdpdGggYXJyYXkgb2Ygb2JqZWN0c1xuXHRcdGlmICh0ZXh0Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0YXJyYXkubWFwKGl0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaXRlbS50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0ZXh0LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkgPj0gMCkge1xuXHRcdFx0XHRcdHRoaXMuX3RtcC5wdXNoKGl0ZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJyYXkubWFwKGl0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaXRlbVt0ZXh0WzBdXS50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0ZXh0WzFdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkgPj0gMCkge1xuXHRcdFx0XHRcdHRoaXMuX3RtcC5wdXNoKGl0ZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fdG1wO1xuXHR9XG59XG4iXX0=