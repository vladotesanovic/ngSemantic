import { Component, Type, Renderer, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { IContextMenu } from "../../services/contextmenu";

declare var jQuery: any;

@Component({
    selector: "sm-page-contextmenu",
    styles: [`.full { height: 500px; border: 1px dashed gray }`],
    template: `
    <div class="ui masthead vertical segment">
        <div class="ui container">
            <h1>Conextmenu</h1>
            <p>Based on Semantic UI Dropdown module <i class="icon external"></i>
            <a href="http://semantic-ui.com/modules/dropdown.html" target="_blank">Semantic UI Dropdown</a></p>
        </div>
    </div>
    <div class="main ui container">
        <br/>
        <div class="full" #query>
            <sm-segment class="basic">
                <p>To activate contextmenu, press right click inside dotted box.</p>
           </sm-segment>
        </div>
        <sm-modal selector="modal" title="Simple modal" class="">
            You activated it trough context menu!
        </sm-modal>

        <sm-contextmenu [position]="menuPosition" [items]="menuItems"></sm-contextmenu>
    </div>
    `
})

export class ContextmenuComponent implements AfterViewInit {

    menuPosition: { x: number, y: number };
    menuItems: Array<IContextMenu> = [];
    @ViewChild("query") query: ElementRef;

    constructor(public renderer: Renderer) {

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
    }

    ngAfterViewInit(): void {

        this.renderer.listen(this.query.nativeElement, "contextmenu", (event: MouseEvent): void => {

            this.menuPosition = { x: event.clientX, y: event.clientY };

            // disable showing browser context menu
            event.preventDefault();
        });

        return undefined;
    }
}
