/// <reference path="../../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var ArrayFilterPipe = (function () {
    function ArrayFilterPipe() {
    }
    ArrayFilterPipe.prototype.transform = function (array, text) {
        var _this = this;
        if (typeof text === "undefined") {
            return array;
        }
        this._tmp = new Array();
        array.map(function (item) {
            if (item.toLowerCase().search(text.toString().toLowerCase()) >= 0) {
                _this._tmp.push(item);
            }
        });
        return this._tmp;
    };
    ArrayFilterPipe = __decorate([
        angular2_1.Pipe({
            name: "arrayFilter"
        }), 
        __metadata('design:paramtypes', [])
    ], ArrayFilterPipe);
    return ArrayFilterPipe;
})();
exports.ArrayFilterPipe = ArrayFilterPipe;

//# sourceMappingURL=../pipes/array.js.map