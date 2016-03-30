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
var core_1 = require("angular2/core");
require("semantic-ui/dist/components/sidebar.min");
jQuery.fn.fixSidebar = function () {
    var allModules = jQuery(this);
    allModules
        .each(function () {
        var selector = { pusher: '.pusher' }, module = jQuery(this), context = jQuery('body');
        if (module.nextAll(selector.pusher).length === 0) {
            module.detach().prependTo(context);
        }
    });
    return this;
};
var SemanticSidebar = (function () {
    function SemanticSidebar() {
    }
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', String)
    ], SemanticSidebar.prototype, "class", void 0);
    SemanticSidebar = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-sidebar",
            template: "<div class=\"ui sidebar {{class}}\"><ng-content></ng-content></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticSidebar);
    return SemanticSidebar;
}());
exports.SemanticSidebar = SemanticSidebar;
var SMSidebarDirective = (function () {
    function SMSidebarDirective() {
    }
    SMSidebarDirective.prototype.toggleSidebar = function () {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }
        jQuery(".ui.sidebar." + this.data)
            .fixSidebar()
            .sidebar({
            transition: "overlay",
            verbose: false
        })
            .sidebar("toggle");
    };
    SMSidebarDirective = __decorate([
        core_1.Directive({
            host: {
                "(click)": "toggleSidebar()"
            },
            inputs: [
                "data: sm-dir-sidebar"
            ],
            selector: "[sm-dir-sidebar]"
        }), 
        __metadata('design:paramtypes', [])
    ], SMSidebarDirective);
    return SMSidebarDirective;
}());
exports.SMSidebarDirective = SMSidebarDirective;
