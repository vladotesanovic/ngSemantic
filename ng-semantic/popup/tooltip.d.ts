import { ViewContainerRef, OnInit } from "@angular/core";
export declare class SMTooltipDirective implements OnInit {
    element: ViewContainerRef;
    smDirTooltip: string;
    smDirPosition: string;
    constructor(element: ViewContainerRef);
    ngOnInit(): void;
}
