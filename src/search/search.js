"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var SemanticSearchComponent = (function () {
    function SemanticSearchComponent() {
        this.debounce = 0;
        this.onSearch = new core_1.EventEmitter();
        this.searchControl = new forms_1.FormControl();
    }
    SemanticSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.searchControl
            .valueChanges
            .distinctUntilChanged()
            .debounceTime(this.debounce)
            .subscribe(function (data) { return _this.onSearch.emit(data); });
    };
    return SemanticSearchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticSearchComponent.prototype, "class", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SemanticSearchComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SemanticSearchComponent.prototype, "loading", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SemanticSearchComponent.prototype, "debounce", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SemanticSearchComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SemanticSearchComponent.prototype, "onSearch", void 0);
SemanticSearchComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-search",
        template: "<div class=\"ui search\" [ngClass]=\"{'loading': loading}\">\n <div class=\"ui icon input {{class}} \">\n  <input class=\"prompt\" [formControl]=\"searchControl\" type=\"text\" [attr.placeholder]=\"placeholder\">\n  <i *ngIf=\"icon\" class=\"search icon\"></i>\n  </div>\n  <div class=\"results\"></div>\n</div>"
    }),
    __metadata("design:paramtypes", [])
], SemanticSearchComponent);
exports.SemanticSearchComponent = SemanticSearchComponent;
