import { Component, Input, ChangeDetectionStrategy, Directive } from "@angular/core";

declare var jQuery: any;

// Because a of lot of shadow dom elements, we must create this fixSidebar
// function, to move elements to proper location before sidebar run.
jQuery.fn.fixSidebar = function() {
    var allModules = jQuery(this);

    allModules
        .each(function() {
            var
                selector = { pusher: '.pusher' },
                module = jQuery(this),
                context = jQuery('body');

            if (module.nextAll(selector.pusher).length === 0) {
                module.detach().prependTo(context);
            }
        });

    return this;
};

/**
 * Implementation of Sidebar module
 * 
 * @link semantic-ui.com/modules/sidebar.html
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-sidebar",
    template: `<div class="ui sidebar {{class}}"><ng-content></ng-content></div>`
})
export class SemanticSidebar {
    @Input("class") class: string;
}

/**
 * Directive which trigger sidebar.
 * 
 * @link semantic-ui.com/modules/sidebar.html
 */
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
    }

}
