/// <reference path="../../typings/main.d.ts" />
import { ElementRef } from "angular2/core";
import "semantic-ui/dist/components/popup.min";
import "semantic-ui/dist/components/transition.min";
export declare class SMTooltipDirective {
    element: ElementRef;
    text: string;
    constructor(element: ElementRef);
    onMouseEnter(): void;
}
