import { QueryList, AfterViewInit, ElementRef } from "angular2/core";
export declare class SemanticTab {
    dataDatab: string;
}
export declare class SemanticTabs implements AfterViewInit {
    elementRef: ElementRef;
    tabs: QueryList<SemanticTab>;
    constructor(tabs: QueryList<SemanticTab>, elementRef: ElementRef);
    ngAfterViewInit(): void;
}
