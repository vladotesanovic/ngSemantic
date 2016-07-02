import { ElementRef } from "@angular/core";
export declare class SemanticPopupComponent {
    popup: ElementRef;
    show(element: Event, data?: {
        position?: string;
    }): void;
}
