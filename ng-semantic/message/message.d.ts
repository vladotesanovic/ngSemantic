import { AfterViewInit } from "angular2/core";
import { EventEmitter } from "angular2/core";
export declare class MessageService {
    _emitter: EventEmitter<any>;
    _rx: any;
    constructor();
    emitMessage(data: any): void;
}
export declare class SemanticMessage implements AfterViewInit {
    ms: MessageService;
    messages: Array<string>;
    duration: number;
    private LENGTH;
    constructor(ms: MessageService);
    ngAfterViewInit(): void;
}
