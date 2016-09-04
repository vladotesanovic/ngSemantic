import { ViewContainerRef, EventEmitter, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
export declare class SemanticInputComponent implements OnInit {
    viewRef: ViewContainerRef;
    label: string;
    class: string;
    icon: string;
    type: string;
    placeholder: string;
    model: {};
    control: FormControl;
    modelChange: EventEmitter<string | number>;
    private isInsideForm;
    constructor(viewRef: ViewContainerRef);
    ngOnInit(): void;
    inForm(el: Node, classname: string): boolean;
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
