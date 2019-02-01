import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class SemanticSelectComponent implements AfterViewInit {
    control: FormControl;
    class: string;
    label: string;
    silentOnChange: boolean;
    select: ElementRef;
    options: {};
    placeholder: string;
    modelChange: EventEmitter<string | number>;
    onChange: EventEmitter<string | number>;
    required: string;
    disabled: boolean;
    model: string | number;
    ngAfterViewInit(): void;
}
