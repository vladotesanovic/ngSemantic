import { EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
export declare class SemanticSearchComponent {
    class: string;
    icon: boolean;
    loading: boolean;
    placeholder: string;
    onSearch: EventEmitter<string | number>;
    searchControl: FormControl;
    constructor();
}
