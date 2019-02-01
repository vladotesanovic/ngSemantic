import { AfterViewInit, ElementRef } from '@angular/core';
export declare class SemanticItemComponent implements AfterViewInit {
    icon: string;
    header: string;
    image: string;
    value: string;
    innerItemElement: ElementRef;
    ngAfterViewInit(): void;
}
