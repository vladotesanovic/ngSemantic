import { ElementRef, OnInit } from "@angular/core";
export declare class SMAccordionDirective implements OnInit {
    element: ElementRef;
    smDirAccordion: string;
    constructor(element: ElementRef);
    ngOnInit(): void;
}
export declare class SemanticAccordionComponent {
    class: string;
    options: string;
}
export declare class SemanticAccordionItemComponent {
    class: string;
}
