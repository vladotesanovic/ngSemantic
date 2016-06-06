import { QueryList, AfterViewInit, ElementRef } from "@angular/core";
export declare class SemanticTabComponent {
    dataTab: string;
    title: string;
    class: string;
}
export declare class SemanticTabsComponent implements AfterViewInit {
    elementRef: ElementRef;
    tabs: QueryList<SemanticTabComponent>;
    constructor(tabs: QueryList<SemanticTabComponent>, elementRef: ElementRef);
    ngAfterViewInit(): void;
}
