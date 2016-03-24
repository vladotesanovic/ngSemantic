System.register(["angular2/core"], function(exports_1, context_1) {
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
            }());
            exports_1("ArrayFilterPipe", ArrayFilterPipe);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL3BpcGVzL2FycmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUFBO2dCQTJCQSxDQUFDO2dCQXhCQSxtQ0FBUyxHQUFULFVBQVUsS0FBb0IsRUFBRSxJQUFTO29CQUF6QyxpQkF1QkM7b0JBdEJBLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUNoRSxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNkLENBQUM7b0JBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO29CQUdoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJOzRCQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDbkUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3RCLENBQUM7d0JBQ0YsQ0FBQyxDQUFDLENBQUM7b0JBQ0osQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUCxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTs0QkFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQy9FLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUN0QixDQUFDO3dCQUNGLENBQUMsQ0FBQyxDQUFDO29CQUNKLENBQUM7b0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLENBQUM7Z0JBN0JGO29CQUFDLFdBQUksQ0FBQzt3QkFDTCxJQUFJLEVBQUUsYUFBYTtxQkFDbkIsQ0FBQzs7bUNBQUE7Z0JBNEJGLHNCQUFDO1lBQUQsQ0FBQyxBQTNCRCxJQTJCQztZQTNCRCw2Q0EyQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vKipcbiAqIEZpbHRlciB0cm91Z2ggYXJyYXkgaW4gQW5ndWxhcjJcbiAqXG4gKiBJbXBsZW1lbnRhdGlvbjogXG4gKiBcbiAqICBGaWx0ZXIgc291cmNlOiBcbiAqICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nLW1vZGVsKV09XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBsaXN0Li4uXCI+XG4gKlxuICogIEZvci1FYWNoXG4gKiAgPGEgY2xhc3M9XCJpdGVtXCIgKm5nLWZvcj1cInZhciBpdGVtIG9mIGl0ZW1zIHwgYXJyYXlGaWx0ZXI6IHNlYXJjaFwiPiB7e2l0ZW19fTwvYT5cbiAqL1xuQFBpcGUoe1xuXHRuYW1lOiBcImFycmF5RmlsdGVyXCJcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlGaWx0ZXJQaXBlIHtcblx0cHJpdmF0ZSBfdG1wOiBBcnJheTxzdHJpbmc+O1xuXG5cdHRyYW5zZm9ybShhcnJheTogQXJyYXk8c3RyaW5nPiwgdGV4dDogYW55KTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0aWYgKHR5cGVvZiB0ZXh0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB0ZXh0WzBdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRyZXR1cm4gYXJyYXk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdG1wID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblx0XHQvLyAxIG1lYW4gdGhhdCBhcnJheSBpcyBmbGF0XG5cdFx0Ly8gMiBtZWFuIHRoYXQgd2UgZGVhbCB3aXRoIGFycmF5IG9mIG9iamVjdHNcblx0XHRpZiAodGV4dC5sZW5ndGggPT09IDEpIHtcblx0XHRcdGFycmF5Lm1hcChpdGVtID0+IHtcblx0XHRcdFx0aWYgKGl0ZW0udG9Mb3dlckNhc2UoKS5zZWFyY2godGV4dC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpID49IDApIHtcblx0XHRcdFx0XHR0aGlzLl90bXAucHVzaChpdGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFycmF5Lm1hcChpdGVtID0+IHtcblx0XHRcdFx0aWYgKGl0ZW1bdGV4dFswXV0udG9Mb3dlckNhc2UoKS5zZWFyY2godGV4dFsxXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpID49IDApIHtcblx0XHRcdFx0XHR0aGlzLl90bXAucHVzaChpdGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX3RtcDtcblx0fVxufVxuIl19