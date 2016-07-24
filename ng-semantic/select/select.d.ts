import { AfterViewInit, ElementRef, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
export declare class SemanticSelectComponent implements AfterViewInit {
    control: FormControl;
    class: string;
    label: string;
    options: {};
    placeholder: string;
    onChange: EventEmitter<string | number>;
    select: ElementRef;
    private multiple;
    ngAfterViewInit(): void;
}
