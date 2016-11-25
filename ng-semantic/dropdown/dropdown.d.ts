import { AfterViewInit, ElementRef, EventEmitter } from "@angular/core";
export declare class SemanticDropdownComponent implements AfterViewInit {
    class: string;
    title: string;
    icon: string;
    items: Array<{}>;
    options: {};
    onChange: EventEmitter<string | number>;
    dropdown: ElementRef;
    ngAfterViewInit(): void;
}
