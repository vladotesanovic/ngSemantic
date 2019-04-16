import { AfterViewInit, ElementRef, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
export declare class SemanticSelectComponent implements AfterViewInit {
    control: FormControl;
    class: string;
    label: string;
    disabled: boolean;
    options: {};
    placeholder: string;
    modelChange: EventEmitter<string | number>;
    onChange: EventEmitter<string | number>;
    select: ElementRef;
    model: string | number;
    private multiple;
    ngAfterViewInit(): void;
}
