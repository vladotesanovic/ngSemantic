import { Component, Input, ChangeDetectionStrategy, Directive, HostListener } from "@angular/core";

declare var jQuery: any;

// because a of lot of shadow dom elements, we must create this fixSidebar
// function, to move elements to proper location before sidebar run.
jQuery.fn.fixSidebar = function() {
    let allModules = jQuery(this);

    allModules
        .each(function() {
            let
                selector = { pusher: ".pusher" },
                module = jQuery(this),
                context = jQuery("body");

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
export class SemanticSidebarComponent {
    @Input("class") class: string;
}

/**
 * Directive which trigger sidebar.
 * 
 * @link semantic-ui.com/modules/sidebar.html
 */
@Directive({
    selector: "[smDirSidebar]"
})
export class SMSidebarDirective {

    @Input() smDirSidebar: string;

    @HostListener("click", ["$event.target"])
    toggleSidebar() {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }

        jQuery(".ui.sidebar." + this.smDirSidebar)
            .fixSidebar()
            .sidebar({
                transition: "overlay",
                verbose: false
            })
            .sidebar("toggle");
    }

}
