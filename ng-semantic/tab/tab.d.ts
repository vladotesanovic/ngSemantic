import { QueryList, AfterViewInit, ElementRef } from "@angular/core";
export declare class SemanticTab {
    dataTab: string;
    title: string;
    class: string;
}
export declare class SemanticTabs implements AfterViewInit {
    elementRef: ElementRef;
    tabs: QueryList<SemanticTab>;
    constructor(tabs: QueryList<SemanticTab>, elementRef: ElementRef);
    ngAfterViewInit(): void;
}
