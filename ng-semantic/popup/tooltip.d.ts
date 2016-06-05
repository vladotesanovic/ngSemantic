import { ElementRef } from "@angular/core";
export declare class SMTooltipDirective {
    element: ElementRef;
    text: string;
    constructor(element: ElementRef);
    onMouseEnter(): void;
}
