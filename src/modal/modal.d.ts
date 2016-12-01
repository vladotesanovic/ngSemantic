import { ElementRef, EventEmitter, OnDestroy } from "@angular/core";
export declare class SemanticModalComponent implements OnDestroy {
    class: string;
    title: string;
    icon: string;
    modal: ElementRef;
    onModalShow: EventEmitter<boolean>;
    onModalHide: EventEmitter<boolean>;
    show(data?: {}): void;
    hide(): void;
    ngOnDestroy(): void;
}
export declare class SMModalTagsDirective {
}
