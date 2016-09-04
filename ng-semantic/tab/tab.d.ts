import { QueryList, AfterViewInit, ElementRef } from "@angular/core";
export declare class SemanticTabComponent implements AfterViewInit {
    tab: number;
    title: string;
    active: boolean;
    tabEl: ElementRef;
    ngAfterViewInit(): void;
}
export declare class SemanticTabsComponent implements AfterViewInit {
    elementRef: ElementRef;
    tabs: QueryList<SemanticTabComponent>;
    menu: ElementRef;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    init(): void;
}
