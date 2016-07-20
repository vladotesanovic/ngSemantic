import { EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import "rxjs/add/operator/distinct";
import "rxjs/add/operator/debounceTime";
export declare class SemanticSearchComponent {
    class: string;
    icon: boolean;
    loading: boolean;
    debounceTime: number;
    placeholder: string;
    onSearch: EventEmitter<string | number>;
    searchControl: FormControl;
    constructor();
}
