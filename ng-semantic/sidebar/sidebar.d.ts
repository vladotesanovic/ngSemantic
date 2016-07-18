import { ElementRef, OnInit, OnDestroy, Renderer } from "@angular/core";
export declare class SemanticSidebarComponent implements OnInit, OnDestroy {
    renderer: Renderer;
    class: string;
    sidebar: ElementRef;
    constructor(renderer: Renderer);
    show(options?: {}): void;
    hide(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
