import { EventEmitter } from "@angular/core";
export declare class SemanticSearchComponent {
    class: string;
    icon: boolean;
    placeholder: string;
    onSearch: EventEmitter<string | number>;
    onKeyDownPress(data: string | number): void;
}
