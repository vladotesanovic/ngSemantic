import { ElementRef } from "@angular/core";
export declare class SemanticPopupComponent {
    popup: ElementRef;
    class: string;
    private visible;
    private element;
    show(element: Event, data?: {}): void;
    hide(): void;
}
