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
require("semantic-ui/dist/components/modal.min");
require("semantic-ui/dist/components/dimmer.min");
var SMModalDirective = (function () {
    function SMModalDirective() {
    }
    SMModalDirective.prototype.onClick = function () {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }
        if (!this.data.hasOwnProperty("selector")) {
            console.log("target selector missing for modal");
            return;
        }
        jQuery(".ui.modal." + this.data.selector).modal("show");
    };
    SMModalDirective = __decorate([
        core_1.Directive({
            host: {
                "(click)": "onClick()"
            },
            inputs: [
                "data: sm-dir-modal"
            ],
            selector: "[sm-dir-modal]"
        }), 
        __metadata('design:paramtypes', [])
    ], SMModalDirective);
    return SMModalDirective;
})();
exports.SMModalDirective = SMModalDirective;
var SemanticModal = (function () {
    function SemanticModal() {
    }
    __decorate([
        core_1.Input("selector"), 
        __metadata('design:type', String)
    ], SemanticModal.prototype, "selector", void 0);
    __decorate([
        core_1.Input("title"), 
        __metadata('design:type', String)
    ], SemanticModal.prototype, "title", void 0);
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticModal.prototype, "class", void 0);
    SemanticModal = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-modal"
        }),
        core_1.View({
            template: "<div class=\"ui modal {{selector}} {{class}}\">\n    <i class=\"close icon\"></i>\n    <div class=\"ui icon header\">\n      {{title}}\n    </div>\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticModal);
    return SemanticModal;
})();
exports.SemanticModal = SemanticModal;
