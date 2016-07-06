import { ElementRef, OnInit, OnDestroy } from "@angular/core";
export declare class SemanticSidebarComponent implements OnInit, OnDestroy {
    class: string;
    sidebar: ElementRef;
    show(options?: {}): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
