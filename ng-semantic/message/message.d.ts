import { ElementRef, Renderer } from "@angular/core";
export declare class SemanticMessageComponent {
    renderer: Renderer;
    icon: string;
    class: string;
    message: ElementRef;
    constructor(renderer: Renderer);
    close(): void;
}
