import { AfterViewInit, ElementRef, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
export declare class SemanticDropdownComponent implements AfterViewInit {
    control: FormControl;
    class: string;
    placeholder: string;
    multiple: boolean;
    items: {
        [key: string]: string;
    };
    onChange: EventEmitter<string | number>;
    dropdown: ElementRef;
    ngAfterViewInit(): void;
}
