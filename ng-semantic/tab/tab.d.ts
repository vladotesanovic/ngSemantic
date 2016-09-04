import { QueryList, AfterViewInit, ElementRef, AfterViewChecked } from "@angular/core";
export declare class SemanticTabComponent implements AfterViewInit {
    tab: number;
    title: string;
    active: boolean;
    tabEl: ElementRef;
    ngAfterViewInit(): void;
}
export declare class SemanticTabsComponent implements AfterViewInit, AfterViewChecked {
    elementRef: ElementRef;
    tabs: QueryList<SemanticTabComponent>;
    menu: ElementRef;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    init(): void;
}
