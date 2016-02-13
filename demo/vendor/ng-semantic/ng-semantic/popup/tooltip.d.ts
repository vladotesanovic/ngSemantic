/// <reference path="../../typings/main.d.ts" />
import { ElementRef } from "angular2/core";
export declare class SMTooltipDirective {
    element: ElementRef;
    text: string;
    constructor(element: ElementRef);
    onMouseEnter(): void;
}
