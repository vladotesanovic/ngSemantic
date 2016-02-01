/// <reference path="../../typings/tsd.d.ts" />
import { ElementRef } from "angular2/core";
export declare class SMPopupDirective {
    element: ElementRef;
    data: any;
    constructor(element: ElementRef);
    onClick(): void;
}
export declare class SemanticPopup {
    selector: string;
}
