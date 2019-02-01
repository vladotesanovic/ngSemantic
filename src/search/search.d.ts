import { AfterViewInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class SemanticSearchComponent implements AfterViewInit {
    class: string;
    icon: boolean;
    loading: boolean;
    debounce: number;
    placeholder: string;
    onSearch: EventEmitter<string | number>;
    searchControl: FormControl;
    ngAfterViewInit(): void;
}
