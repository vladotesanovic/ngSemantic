/// <reference path="../../typings/main.d.ts" />
import { ElementRef } from "angular2/core";
import "semantic-ui/dist/components/dropdown.min";
import "semantic-ui/dist/components/dimmer.min";
export declare class SMDropdownDirective {
    private el;
    constructor(el: ElementRef);
    onClick(): void;
}
export declare class SemanticDropdown {
    selector: string;
    title: string;
}
