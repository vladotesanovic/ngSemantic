import { ElementRef, OnInit, OnDestroy, Renderer } from "@angular/core";
export declare class SemanticSidebarComponent implements OnInit, OnDestroy {
    private renderer;
    class: string;
    sidebar: ElementRef;
    private visible;
    constructor(renderer: Renderer);
    show(options?: {}): void;
    hide(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
