import {
    Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef, OnInit, OnDestroy
} from "@angular/core";

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
    template: `<div class="ui sidebar {{class}}" #sidebar>
<ng-content></ng-content>
</div>`
})
export class SemanticSidebarComponent implements OnInit, OnDestroy {
    @Input("class") class: string;
    @ViewChild("sidebar") sidebar: ElementRef;

    show(options?: {}) {
        jQuery(this.sidebar.nativeElement)
            .sidebar(options || {})
            .sidebar("show");
    }

    ngOnInit(): void {
        jQuery(this.sidebar.nativeElement)
            .fixSidebar();
    }

    ngOnDestroy(): void {
        const parent: Node = this.sidebar.nativeElement.parentNode;
        parent.removeChild(this.sidebar.nativeElement);
    }
}
