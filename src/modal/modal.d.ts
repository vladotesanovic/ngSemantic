import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { PlatformLocation } from '@angular/common';
export declare class SemanticModalComponent implements OnDestroy {
    private location;
    class: string;
    title: string;
    icon: string;
    modal: ElementRef;
    onModalShow: EventEmitter<boolean>;
    onModalHide: EventEmitter<boolean>;
    isShown: boolean;
    isHidden: boolean;
    constructor(location: PlatformLocation);
    show(data?: {}): void;
    hide(): void;
    ngOnDestroy(): void;
}
export declare class SMModalTagsDirective {
}
