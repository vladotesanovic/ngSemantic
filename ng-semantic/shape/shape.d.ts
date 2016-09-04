import { ElementRef, EventEmitter, AfterViewInit } from "@angular/core";
export declare class SemanticShapeComponent implements AfterViewInit {
    class: string;
    options: {};
    beforeChange: EventEmitter<boolean>;
    onChange: EventEmitter<boolean>;
    shape: ElementRef;
    ngAfterViewInit(): void;
    show(...args: string[]): void;
}
