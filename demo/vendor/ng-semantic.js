System.registerDynamic("ng-semantic/menu/menu", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SemanticMenu = (function() {
    function SemanticMenu() {}
    __decorate([core_1.Input("logo"), __metadata('design:type', String)], SemanticMenu.prototype, "logo", void 0);
    SemanticMenu = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-menu",
      template: "\n<a href=\"#/\" *ngIf=\"logo\" class=\"header item\">\n    <img class=\"logo\" alt=\"{{title}}\" src=\"{{logo}}\">\n</a>\n\n<ng-content></ng-content>\n"
    }), __metadata('design:paramtypes', [])], SemanticMenu);
    return SemanticMenu;
  }());
  exports.SemanticMenu = SemanticMenu;
  return module.exports;
});

System.registerDynamic("ng-semantic/message/message", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SemanticMessage = (function() {
    function SemanticMessage() {}
    __decorate([core_1.Input("icon"), __metadata('design:type', String)], SemanticMessage.prototype, "icon", void 0);
    SemanticMessage = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-message",
      template: "<i *ngIf=\"icon\" class=\"icon {{icon}}\"></i>\n  <p><ng-content></ng-content></p>",
      styles: ["sm-message { display: block; }"],
      encapsulation: core_1.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [])], SemanticMessage);
    return SemanticMessage;
  }());
  exports.SemanticMessage = SemanticMessage;
  return module.exports;
});

System.registerDynamic("ng-semantic/popup/tooltip", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SMTooltipDirective = (function() {
    function SMTooltipDirective(element) {
      this.element = element;
    }
    SMTooltipDirective.prototype.onMouseEnter = function() {
      if (typeof jQuery === "undefined") {
        console.log("jQuery is not loaded");
        return;
      }
      jQuery(this.element.nativeElement).popup({
        content: this.text,
        exclusive: true,
        lastResort: true
      }).popup("show");
    };
    SMTooltipDirective = __decorate([core_1.Directive({
      host: {"(mouseenter)": "onMouseEnter()"},
      inputs: ["text: sm-dir-tooltip"],
      selector: "[sm-dir-tooltip]"
    }), __metadata('design:paramtypes', [core_1.ElementRef])], SMTooltipDirective);
    return SMTooltipDirective;
  }());
  exports.SMTooltipDirective = SMTooltipDirective;
  return module.exports;
});

System.registerDynamic("ng-semantic/popup/popup", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SMPopupDirective = (function() {
    function SMPopupDirective(element) {
      this.element = element;
    }
    SMPopupDirective.prototype.onClick = function() {
      if (typeof jQuery === "undefined") {
        console.log("jQuery is not loaded");
        return;
      }
      if (!this.data.hasOwnProperty("position") || !this.data.hasOwnProperty("selector")) {
        console.log("position or target selector missing for popup");
        return;
      }
      jQuery(this.element.nativeElement).popup({
        closable: true,
        exclusive: true,
        lastResort: true,
        on: "click",
        popup: "." + this.data.selector + ".popup",
        position: this.data.position,
        preserve: true
      }).popup("show");
    };
    SMPopupDirective = __decorate([core_1.Directive({
      host: {"(click)": "onClick()"},
      inputs: ["data: sm-dir-popup"],
      selector: "[sm-dir-popup]"
    }), __metadata('design:paramtypes', [core_1.ElementRef])], SMPopupDirective);
    return SMPopupDirective;
  }());
  exports.SMPopupDirective = SMPopupDirective;
  var SemanticPopup = (function() {
    function SemanticPopup() {}
    __decorate([core_1.Input("selector"), __metadata('design:type', String)], SemanticPopup.prototype, "selector", void 0);
    SemanticPopup = __decorate([core_1.Component({
      selector: "sm-popup",
      template: "<div class=\"ui popup very wide {{selector}}\">\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>"
    }), __metadata('design:paramtypes', [])], SemanticPopup);
    return SemanticPopup;
  }());
  exports.SemanticPopup = SemanticPopup;
  return module.exports;
});

System.registerDynamic("ng-semantic/modal/modal", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SMModalDirective = (function() {
    function SMModalDirective() {}
    SMModalDirective.prototype.onClick = function() {
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
    SMModalDirective = __decorate([core_1.Directive({
      host: {"(click)": "onClick()"},
      inputs: ["data: sm-dir-modal"],
      selector: "[sm-dir-modal]"
    }), __metadata('design:paramtypes', [])], SMModalDirective);
    return SMModalDirective;
  }());
  exports.SMModalDirective = SMModalDirective;
  var SemanticModal = (function() {
    function SemanticModal() {}
    __decorate([core_1.Input("selector"), __metadata('design:type', String)], SemanticModal.prototype, "selector", void 0);
    __decorate([core_1.Input("title"), __metadata('design:type', String)], SemanticModal.prototype, "title", void 0);
    __decorate([core_1.Input("class"), __metadata('design:type', String)], SemanticModal.prototype, "class", void 0);
    SemanticModal = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-modal",
      template: "<div class=\"ui modal {{selector}} {{class}}\">\n    <i class=\"close icon\"></i>\n    <div class=\"ui icon header\">\n      {{title}}\n    </div>\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>"
    }), __metadata('design:paramtypes', [])], SemanticModal);
    return SemanticModal;
  }());
  exports.SemanticModal = SemanticModal;
  return module.exports;
});

System.registerDynamic("ng-semantic/segment/segment", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SemanticSegment = (function() {
    function SemanticSegment() {}
    __decorate([core_1.Input("class"), __metadata('design:type', String)], SemanticSegment.prototype, "class", void 0);
    SemanticSegment = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-segment",
      template: "<div class=\"ui segment {{class}}\">\n  <p><ng-content></ng-content></p>\n</div>"
    }), __metadata('design:paramtypes', [])], SemanticSegment);
    return SemanticSegment;
  }());
  exports.SemanticSegment = SemanticSegment;
  return module.exports;
});

System.registerDynamic("ng-semantic/list/list", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SemanticList = (function() {
    function SemanticList() {}
    SemanticList = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-list",
      template: "<ng-content></ng-content>",
      styles: ["sm-list { display: block; }"],
      encapsulation: core_1.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [])], SemanticList);
    return SemanticList;
  }());
  exports.SemanticList = SemanticList;
  return module.exports;
});

System.registerDynamic("ng-semantic/button/button", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SemanticButton = (function() {
    function SemanticButton() {
      this.disabled = false;
    }
    __decorate([core_1.Input("class"), __metadata('design:type', String)], SemanticButton.prototype, "class", void 0);
    __decorate([core_1.Input("icon"), __metadata('design:type', String)], SemanticButton.prototype, "icon", void 0);
    __decorate([core_1.Input("disabled"), __metadata('design:type', Boolean)], SemanticButton.prototype, "disabled", void 0);
    SemanticButton = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-button",
      template: "<button [ngClass]=\"{icon: icon}\" [attr.disabled]=\"disabled ? true : null\" class=\"ui {{class}} button\">\n  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n    <ng-content></ng-content>\n</button>"
    }), __metadata('design:paramtypes', [])], SemanticButton);
    return SemanticButton;
  }());
  exports.SemanticButton = SemanticButton;
  return module.exports;
});

System.registerDynamic("ng-semantic/item/item", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SemanticItem = (function() {
    function SemanticItem() {}
    __decorate([core_1.Input("icon"), __metadata('design:type', String)], SemanticItem.prototype, "icon", void 0);
    __decorate([core_1.Input("header"), __metadata('design:type', String)], SemanticItem.prototype, "header", void 0);
    __decorate([core_1.Input("image"), __metadata('design:type', String)], SemanticItem.prototype, "image", void 0);
    SemanticItem = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "a[sm-item], sm-item",
      template: "<i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n<img *ngIf=\"image\" class=\"ui avatar image\" src=\"{{image}}\">\n<div class=\"content\">\n  <div *ngIf=\"header\" class=\"header\">\n    {{header}}\n  </div>\n  <ng-content></ng-content>\n</div>"
    }), __metadata('design:paramtypes', [])], SemanticItem);
    return SemanticItem;
  }());
  exports.SemanticItem = SemanticItem;
  return module.exports;
});

System.registerDynamic("ng-semantic/loader/loader", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SemanticLoader = (function() {
    function SemanticLoader() {
      this.complete = false;
    }
    __decorate([core_1.Input("class"), __metadata('design:type', String)], SemanticLoader.prototype, "class", void 0);
    __decorate([core_1.Input("text"), __metadata('design:type', String)], SemanticLoader.prototype, "text", void 0);
    __decorate([core_1.Input("complete"), __metadata('design:type', Boolean)], SemanticLoader.prototype, "complete", void 0);
    SemanticLoader = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-loader",
      template: "<div *ngIf=\"!complete\" class=\"ui active dimmer {{class}}\">\n    <div [ngClass]=\"{text: text}\" class=\"ui loader\">{{text}}</div>\n  </div>"
    }), __metadata('design:paramtypes', [])], SemanticLoader);
    return SemanticLoader;
  }());
  exports.SemanticLoader = SemanticLoader;
  return module.exports;
});

System.registerDynamic("ng-semantic/card/card", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SemanticCard = (function() {
    function SemanticCard() {}
    __decorate([core_1.Input("image"), __metadata('design:type', String)], SemanticCard.prototype, "image", void 0);
    __decorate([core_1.Input("title"), __metadata('design:type', String)], SemanticCard.prototype, "title", void 0);
    __decorate([core_1.Input("subtitle"), __metadata('design:type', String)], SemanticCard.prototype, "subtitle", void 0);
    SemanticCard = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-card",
      template: "<div class=\"image\">\n    <img src=\"{{image}}\">\n  </div>\n  <div class=\"content\">\n    <a class=\"header\">{{title}}</a>\n    <div class=\"meta\">\n      <span class=\"date\">{{subtitle}}</span>\n    </div>\n    <div class=\"description\">\n      <ng-content select=\"conntent\"></ng-content>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <ng-content select=\"extra\"></ng-content>\n  </div>"
    }), __metadata('design:paramtypes', [])], SemanticCard);
    return SemanticCard;
  }());
  exports.SemanticCard = SemanticCard;
  return module.exports;
});

System.registerDynamic("ng-semantic/input/input", ["angular2/core", "angular2/common"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var SemanticInput = (function() {
    function SemanticInput() {}
    __decorate([core_1.Input("control"), __metadata('design:type', common_1.Control)], SemanticInput.prototype, "control", void 0);
    __decorate([core_1.Input("label"), __metadata('design:type', String)], SemanticInput.prototype, "label", void 0);
    __decorate([core_1.Input("placeholder"), __metadata('design:type', String)], SemanticInput.prototype, "placeholder", void 0);
    SemanticInput = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-input",
      template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty) }\">\n  <label *ngIf=\"label\">{{label}}</label>\n  <input type=\"text\" [ngFormControl]=\"control\" placeholder=\"{{placeholder}}\">\n</div>"
    }), __metadata('design:paramtypes', [])], SemanticInput);
    return SemanticInput;
  }());
  exports.SemanticInput = SemanticInput;
  var SemanticCheckbox = (function() {
    function SemanticCheckbox() {}
    __decorate([core_1.Input("control"), __metadata('design:type', common_1.Control)], SemanticCheckbox.prototype, "control", void 0);
    __decorate([core_1.Input("label"), __metadata('design:type', String)], SemanticCheckbox.prototype, "label", void 0);
    SemanticCheckbox = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-checkbox",
      template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid) }\">\n    <div class=\"ui checkbox\">\n      <input type=\"checkbox\" tabindex=\"0\" [ngFormControl]=\"control\">\n      <label *ngIf=\"label\">{{label}}</label>\n    </div>\n  </div>"
    }), __metadata('design:paramtypes', [])], SemanticCheckbox);
    return SemanticCheckbox;
  }());
  exports.SemanticCheckbox = SemanticCheckbox;
  var SemanticTextarea = (function() {
    function SemanticTextarea() {}
    __decorate([core_1.Input("control"), __metadata('design:type', common_1.Control)], SemanticTextarea.prototype, "control", void 0);
    __decorate([core_1.Input("label"), __metadata('design:type', String)], SemanticTextarea.prototype, "label", void 0);
    __decorate([core_1.Input("rows"), __metadata('design:type', String)], SemanticTextarea.prototype, "rows", void 0);
    SemanticTextarea = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-textarea",
      template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty) }\">\n    <label *ngIf=\"label\">{{label}}</label>\n    <textarea rows=\"{{rows}}\" [ngFormControl]=\"control\"></textarea>\n  </div>"
    }), __metadata('design:paramtypes', [])], SemanticTextarea);
    return SemanticTextarea;
  }());
  exports.SemanticTextarea = SemanticTextarea;
  var SemanticForm = (function() {
    function SemanticForm() {}
    SemanticForm = __decorate([core_1.Component({
      directives: [common_1.FORM_DIRECTIVES],
      providers: [common_1.FORM_PROVIDERS],
      selector: "form[sm-form]",
      template: "<ng-content></ng-content>"
    }), __metadata('design:paramtypes', [])], SemanticForm);
    return SemanticForm;
  }());
  exports.SemanticForm = SemanticForm;
  return module.exports;
});

System.registerDynamic("ng-semantic/sidebar/sidebar", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  jQuery.fn.fixSidebar = function() {
    var allModules = jQuery(this);
    allModules.each(function() {
      var selector = {pusher: '.pusher'},
          module = jQuery(this),
          context = jQuery('body');
      if (module.nextAll(selector.pusher).length === 0) {
        module.detach().prependTo(context);
      }
    });
    return this;
  };
  var SemanticSidebar = (function() {
    function SemanticSidebar() {}
    __decorate([core_1.Input("class"), __metadata('design:type', String)], SemanticSidebar.prototype, "class", void 0);
    SemanticSidebar = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-sidebar",
      template: "<div class=\"ui sidebar {{class}}\"><ng-content></ng-content></div>"
    }), __metadata('design:paramtypes', [])], SemanticSidebar);
    return SemanticSidebar;
  }());
  exports.SemanticSidebar = SemanticSidebar;
  var SMSidebarDirective = (function() {
    function SMSidebarDirective() {}
    SMSidebarDirective.prototype.toggleSidebar = function() {
      if (typeof jQuery === "undefined") {
        console.log("jQuery is not loaded");
        return;
      }
      jQuery(".ui.sidebar." + this.data).fixSidebar().sidebar({
        transition: "overlay",
        verbose: false
      }).sidebar("toggle");
    };
    SMSidebarDirective = __decorate([core_1.Directive({
      host: {"(click)": "toggleSidebar()"},
      inputs: ["data: sm-dir-sidebar"],
      selector: "[sm-dir-sidebar]"
    }), __metadata('design:paramtypes', [])], SMSidebarDirective);
    return SMSidebarDirective;
  }());
  exports.SMSidebarDirective = SMSidebarDirective;
  return module.exports;
});

System.registerDynamic("ng-semantic/tab/tab", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var SemanticTab = (function() {
    function SemanticTab() {}
    __decorate([core_1.Input("tab"), __metadata('design:type', String)], SemanticTab.prototype, "dataDatab", void 0);
    __decorate([core_1.Input("title"), __metadata('design:type', String)], SemanticTab.prototype, "title", void 0);
    __decorate([core_1.Input("class"), __metadata('design:type', String)], SemanticTab.prototype, "class", void 0);
    SemanticTab = __decorate([core_1.Component({
      selector: "sm-tab",
      template: "<ng-content></ng-content>"
    }), __metadata('design:paramtypes', [])], SemanticTab);
    return SemanticTab;
  }());
  exports.SemanticTab = SemanticTab;
  var SemanticTabs = (function() {
    function SemanticTabs(tabs, elementRef) {
      this.elementRef = elementRef;
      this.tabs = tabs;
    }
    SemanticTabs.prototype.ngAfterViewInit = function() {
      if (typeof jQuery === "undefined") {
        console.log("jQuery is not loaded");
        return;
      }
      jQuery(".menu.tabular .item").tab({
        childrenOnly: true,
        context: jQuery(this.elementRef.nativeElement)
      });
    };
    SemanticTabs = __decorate([core_1.Component({
      selector: "sm-tabs",
      template: "<div class=\"ui top attached tabular menu\">\n  <a class=\"item\" [ngClass]=\"{active: i === 0}\" *ngFor=\"#tab of tabs; #i = index\" attr.data-tab=\"{{tab.dataDatab}}\">{{tab.title}}</a>\n</div>\n<ng-content></ng-content>\n"
    }), __param(0, core_1.Query(SemanticTab)), __metadata('design:paramtypes', [core_1.QueryList, core_1.ElementRef])], SemanticTabs);
    return SemanticTabs;
  }());
  exports.SemanticTabs = SemanticTabs;
  return module.exports;
});

System.registerDynamic("ng-semantic/flag/flag", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SemanticFlag = (function() {
    function SemanticFlag() {}
    __decorate([core_1.Input('flag'), __metadata('design:type', String)], SemanticFlag.prototype, "flag", void 0);
    SemanticFlag = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-flag",
      template: "<i class=\"{{flag}} flag\"></i>"
    }), __metadata('design:paramtypes', [])], SemanticFlag);
    return SemanticFlag;
  }());
  exports.SemanticFlag = SemanticFlag;
  return module.exports;
});

System.registerDynamic("ng-semantic/progress/progress", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SemanticProgress = (function() {
    function SemanticProgress() {
      this._progress = 0;
    }
    Object.defineProperty(SemanticProgress.prototype, "progress", {
      set: function(value) {
        this._progress = (value >= 100) ? 100 : value;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input("label"), __metadata('design:type', String)], SemanticProgress.prototype, "label", void 0);
    __decorate([core_1.Input("class"), __metadata('design:type', String)], SemanticProgress.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number), __metadata('design:paramtypes', [Number])], SemanticProgress.prototype, "progress", null);
    SemanticProgress = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-progress",
      template: "<div [ngClass]=\"{'success': _progress === 100}\" class=\"ui {{class}} progress\">\n  <div class=\"bar\" [ngStyle]=\"{'width': _progress + '%'}\">\n    <div class=\"progress\">{{_progress}}%</div>\n  </div>\n  <div class=\"label\" *ngIf=\"label\">{{label}}</div>\n</div>"
    }), __metadata('design:paramtypes', [])], SemanticProgress);
    return SemanticProgress;
  }());
  exports.SemanticProgress = SemanticProgress;
  return module.exports;
});

System.registerDynamic("ng-semantic/dimmer/dimmer", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var SemanticDimmer = (function() {
    function SemanticDimmer() {}
    __decorate([core_1.Input("selector"), __metadata('design:type', String)], SemanticDimmer.prototype, "selector", void 0);
    SemanticDimmer = __decorate([core_1.Component({
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      selector: "sm-dimmer",
      template: "<div class=\"ui {{selector}} dimmer\">\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>"
    }), __metadata('design:paramtypes', [])], SemanticDimmer);
    return SemanticDimmer;
  }());
  exports.SemanticDimmer = SemanticDimmer;
  var SMDimmerDirective = (function() {
    function SMDimmerDirective() {}
    SMDimmerDirective.prototype.toggleDimmer = function() {
      if (typeof jQuery === "undefined") {
        console.log("jQuery is not loaded");
        return;
      }
      jQuery(".ui.dimmer." + this.data).dimmer('toggle');
    };
    SMDimmerDirective = __decorate([core_1.Directive({
      host: {"(click)": "toggleDimmer()"},
      inputs: ["data: sm-dir-dimmer"],
      selector: "[sm-dir-dimmer]"
    }), __metadata('design:paramtypes', [])], SMDimmerDirective);
    return SMDimmerDirective;
  }());
  exports.SMDimmerDirective = SMDimmerDirective;
  return module.exports;
});

System.registerDynamic("ng-semantic", ["./ng-semantic/menu/menu", "./ng-semantic/message/message", "./ng-semantic/popup/tooltip", "./ng-semantic/popup/popup", "./ng-semantic/modal/modal", "./ng-semantic/segment/segment", "./ng-semantic/list/list", "./ng-semantic/button/button", "./ng-semantic/item/item", "./ng-semantic/loader/loader", "./ng-semantic/card/card", "./ng-semantic/input/input", "./ng-semantic/sidebar/sidebar", "./ng-semantic/tab/tab", "./ng-semantic/flag/flag", "./ng-semantic/progress/progress", "./ng-semantic/dimmer/dimmer"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var menu_1 = $__require('./ng-semantic/menu/menu');
  var message_1 = $__require('./ng-semantic/message/message');
  var tooltip_1 = $__require('./ng-semantic/popup/tooltip');
  var popup_1 = $__require('./ng-semantic/popup/popup');
  var modal_1 = $__require('./ng-semantic/modal/modal');
  var segment_1 = $__require('./ng-semantic/segment/segment');
  var list_1 = $__require('./ng-semantic/list/list');
  var button_1 = $__require('./ng-semantic/button/button');
  var item_1 = $__require('./ng-semantic/item/item');
  var loader_1 = $__require('./ng-semantic/loader/loader');
  var card_1 = $__require('./ng-semantic/card/card');
  var input_1 = $__require('./ng-semantic/input/input');
  var sidebar_1 = $__require('./ng-semantic/sidebar/sidebar');
  var tab_1 = $__require('./ng-semantic/tab/tab');
  var flag_1 = $__require('./ng-semantic/flag/flag');
  var progress_1 = $__require('./ng-semantic/progress/progress');
  var dimmer_1 = $__require('./ng-semantic/dimmer/dimmer');
  __export($__require('./ng-semantic/menu/menu'));
  __export($__require('./ng-semantic/message/message'));
  __export($__require('./ng-semantic/popup/tooltip'));
  __export($__require('./ng-semantic/popup/popup'));
  __export($__require('./ng-semantic/modal/modal'));
  __export($__require('./ng-semantic/segment/segment'));
  __export($__require('./ng-semantic/list/list'));
  __export($__require('./ng-semantic/button/button'));
  __export($__require('./ng-semantic/item/item'));
  __export($__require('./ng-semantic/loader/loader'));
  __export($__require('./ng-semantic/card/card'));
  __export($__require('./ng-semantic/input/input'));
  __export($__require('./ng-semantic/sidebar/sidebar'));
  __export($__require('./ng-semantic/tab/tab'));
  __export($__require('./ng-semantic/flag/flag'));
  __export($__require('./ng-semantic/progress/progress'));
  __export($__require('./ng-semantic/dimmer/dimmer'));
  exports.SEMANTIC_COMPONENTS = [card_1.SemanticCard, input_1.SemanticInput, input_1.SemanticTextarea, input_1.SemanticCheckbox, input_1.SemanticForm, menu_1.SemanticMenu, message_1.SemanticMessage, segment_1.SemanticSegment, dimmer_1.SemanticDimmer, popup_1.SemanticPopup, list_1.SemanticList, flag_1.SemanticFlag, item_1.SemanticItem, sidebar_1.SemanticSidebar, progress_1.SemanticProgress, modal_1.SemanticModal, tab_1.SemanticTabs, tab_1.SemanticTab, button_1.SemanticButton, loader_1.SemanticLoader];
  exports.SEMANTIC_DIRECTIVES = [tooltip_1.SMTooltipDirective, popup_1.SMPopupDirective, modal_1.SMModalDirective, sidebar_1.SMSidebarDirective, dimmer_1.SMDimmerDirective];
  return module.exports;
});

//# sourceMappingURL=ng-semantic.js.map