import {
    Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef, OnInit, OnDestroy, Renderer
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
    @Input() class: string;
    @ViewChild("sidebar") sidebar: ElementRef;
    private visible: boolean = false;

    constructor(public renderer: Renderer) {}

    show(options?: {}) {

        if (!this.visible) {
            this.visible = true;

            jQuery(this.sidebar.nativeElement)
                .sidebar(options || {})
                .sidebar("toggle");
        }
    }

    hide() {
        if (this.visible) {
            this.visible = false;

            jQuery(this.sidebar.nativeElement)
                .sidebar("hide");
        }
    }

    ngOnInit(): void {
        jQuery(this.sidebar.nativeElement)
            .fixSidebar();
    }

    ngOnDestroy(): void {
        this.renderer.detachView([this.sidebar.nativeElement]);
    }
}
