import { AfterViewInit, ElementRef, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
export declare class SemanticSelectComponent implements AfterViewInit {
    control: FormControl;
    class: string;
    options: {};
    placeholder: string;
    multiple: boolean;
    onChange: EventEmitter<string | number>;
    select: ElementRef;
    ngAfterViewInit(): void;
}
