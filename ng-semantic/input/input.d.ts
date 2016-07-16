import { FormControl } from "@angular/forms";
export declare class SemanticInputComponent {
    control: FormControl;
    label: string;
    placeholder: string;
}
export declare class SemanticCheckboxComponent {
    control: FormControl;
    label: string;
    disabled: boolean;
    value: string | number;
    name: string;
    type: string;
    private inputType;
    private classType;
}
export declare class SemanticTextareaComponent {
    control: FormControl;
    label: string;
    rows: string;
}
