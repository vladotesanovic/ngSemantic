import { AfterViewInit, ElementRef } from "angular2/core";
export declare class SemanticAccordion implements AfterViewInit {
    elementRef: ElementRef;
    accordionOptions: {};
    private _accordionOptions;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
}
export declare class SemanticAccordionTitle {
}
export declare class SemanticAccordionContent {
}
