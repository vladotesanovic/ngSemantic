import { ElementRef, OnInit } from "@angular/core";
export declare class SemanticAccordionComponent implements OnInit {
    element: ElementRef;
    class: string;
    options: string;
    constructor(element: ElementRef);
    ngOnInit(): void;
}
export declare class SemanticAccordionItemComponent {
    class: string;
}
