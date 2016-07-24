import { ElementRef, Renderer } from "@angular/core";
export declare class SemanticMessageComponent {
    private renderer;
    icon: string;
    class: string;
    message: ElementRef;
    constructor(renderer: Renderer);
    close(): void;
}
