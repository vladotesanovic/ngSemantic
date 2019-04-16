import { ViewContainerRef, OnInit, EventEmitter } from "@angular/core";
export declare class SMVisibilityDirective implements OnInit {
    element: ViewContainerRef;
    smDirVisibility: {};
    onTopVisible: EventEmitter<{}>;
    onTopPassed: EventEmitter<{}>;
    onUpdate: EventEmitter<{}>;
    constructor(element: ViewContainerRef);
    ngOnInit(): void;
}
export declare class SMDeviceVisibilityDirective implements OnInit {
    element: ViewContainerRef;
    smDeviceVisibility: string;
    constructor(element: ViewContainerRef);
    ngOnInit(): void;
}
