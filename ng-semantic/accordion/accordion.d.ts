import { ElementRef, AfterViewInit } from "@angular/core";
export declare class SemanticAccordionComponent implements AfterViewInit {
    class: string;
    options: string;
    accordion: ElementRef;
    ngAfterViewInit(): void;
    inAccordion(el: HTMLDivElement, classname: string): boolean;
}
export declare class SemanticAccordionItemComponent {
    class: string;
}
