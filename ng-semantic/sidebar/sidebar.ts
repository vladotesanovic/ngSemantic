/// <reference path="../../typings/tsd.d.ts" />
import { Component, View, Input, ChangeDetectionStrategy, Directive } from "angular2/core";
import "semantic/sidebar.min";

jQuery.fn.fixSidebar = function() {
    var allModules     = jQuery(this);

    allModules
        .each(function() {
            var
                selector = { pusher: '.pusher' },
                module   = jQuery(this),
                context  = jQuery('body');

            if(module.nextAll(selector.pusher).length === 0) {
                module.detach().prependTo(context);
            }
        });

    return this;
};


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-sidebar"
})

@View({
  template: `<div class="ui sidebar {{class}}"><ng-content></ng-content></div>`
})
export class SemanticSidebar {
  @Input("class") class: string;
}

@Directive({
    host: {
        "(click)": "toggleSidebar()"
    },
    inputs: [
        "data: sm-dir-sidebar"
    ],
    selector: "[sm-dir-sidebar]"
})
export class SMSidebarDirective {

    public data: any;

    toggleSidebar() {

        jQuery(".ui.sidebar." + this.data)
            .fixSidebar()
            .sidebar({
                error: {
                    movedSidebar: "Sidebar moving."
                },
                transition: "overlay",
                verbose: false
            })
            .sidebar("toggle");
    }

}
