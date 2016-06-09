import { Component, Type, Renderer, ElementRef } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";
import { ContextMenuService, IContextMenu } from "../../services/contextmenu";

declare var jQuery: any;

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector: "sm-page-contextmenu",
    template: `
    <div class="ui masthead vertical segment">
        <div class="ui container">
            <h1>Conextmenu</h1>
            <p>Based on Semantic UI Dropdown module <i class="icon external"></i>
            <a href="http://semantic-ui.com/modules/dropdown.html" target="_blank">Semantic UI Dropdown</a></p>
        </div>
    </div>
    <div class="main ui container">
    
        <p>To activate contextmenu, press right click anywhere on the page.</p>
        
        <sm-modal selector="modal" title="Simple modal" class="">
            You activated it trough context menu!
        </sm-modal>
        
        <sm-contextmenu [position]="menuPosition" [items]="menuItems"></sm-contextmenu>
    </div>
    `
})

export class ContextmenuComponent {

    menuPosition: { x: number, y: number };
    menuItems: Array<IContextMenu> = [];

    constructor(renderer: Renderer, elementRef: ElementRef, contextmenu: ContextMenuService) {

        renderer.listenGlobal("body", "contextmenu", (event: MouseEvent): void => {

            this.menuPosition = { x: event.clientX, y: event.clientY };

            // disable showing browser context menu
            event.preventDefault();
        });

        this.menuItems = [...this.menuItems, {
            action: (): void => { location.assign("/#/elements/accordion"); },
            icon: "home",
            method: 1,
            title: "Go to Accordion Page",
        }];

        this.menuItems = [...this.menuItems, {
            action: (): void => { location.reload(); },
            icon: "refresh",
            method: 1,
            title: "Refresh window"
        }];

        this.menuItems = [...this.menuItems, {
            action: (): void => { jQuery(".ui.modal.modal")
                .modal("toggle"); },
            icon: "browser",
            method: 1,
            title: "Open modal Window"
        }];

        setTimeout(() => {
            this.menuItems = [...this.menuItems, {
                action: (): void => { jQuery(".ui.modal.modal")
                    .modal("toggle"); },
                icon: "browser",
                method: 0,
                title: "Test"
            }];
        }, 3000);

    }
}
