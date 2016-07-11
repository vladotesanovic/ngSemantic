import { ElementRef, OnInit, OnDestroy, Renderer } from "@angular/core";
export declare class SemanticSidebarComponent implements OnInit, OnDestroy {
    class: string;
    sidebar: ElementRef;
    private renderer;
    constructor(renderer: Renderer);
    show(options?: {}): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
