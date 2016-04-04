import { QueryList, AfterViewInit, ElementRef } from "angular2/core";
import "semantic-ui/dist/components/tab.min";
export declare class SemanticTab {
    dataDatab: string;
    title: string;
    class: string;
}
export declare class SemanticTabs implements AfterViewInit {
    elementRef: ElementRef;
    tabs: QueryList<SemanticTab>;
    constructor(tabs: QueryList<SemanticTab>, elementRef: ElementRef);
    ngAfterViewInit(): void;
}
