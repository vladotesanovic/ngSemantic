import { ElementRef } from "@angular/core";
export declare class SMTooltipDirective {
    element: ElementRef;
    smDirTooltip: string;
    constructor(element: ElementRef);
    onMouseEnter(): void;
}
