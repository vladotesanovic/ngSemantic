import { EventEmitter, AfterViewInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import "rxjs/add/operator/distinct";
import "rxjs/add/operator/debounceTime";
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
