import { ElementRef } from "@angular/core";
export declare class SemanticPopupComponent {
    popup: ElementRef;
    private visible;
    private element;
    show(element: Event, data?: {
        position?: string;
    }): void;
    hide(): void;
}
