import { FormControl } from '@angular/forms';
import { AfterViewInit, ElementRef, EventEmitter } from "@angular/core";
export declare class SemanticDropdownComponent implements AfterViewInit {
    control: FormControl;
    class: string;
    title: string;
    icon: string;
    arrowIcon: string;
    name: string;
    items: Array<{}>;
    options: {};
    value: number;
    valueChange: EventEmitter<number>;
    onChange: EventEmitter<string | number>;
    onFocus: EventEmitter<FocusEvent>;
    onBlur: EventEmitter<FocusEvent>;
    dropdown: ElementRef;
    input: ElementRef;
    ngAfterViewInit(): void;
}
