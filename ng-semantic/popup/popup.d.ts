import { ElementRef } from "@angular/core";
export declare class SMPopupDirective {
    element: ElementRef;
    smDirPopup: {
        selector: string;
        position: string;
    };
    constructor(element: ElementRef);
    onClick(): void;
}
export declare class SemanticPopupComponent {
    selector: string;
}
