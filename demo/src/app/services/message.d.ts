import { EventEmitter } from "angular2/core";
export declare class MessageService {
    _emitter: EventEmitter<any>;
    _rx: any;
    constructor();
    emitMessage(data: any): void;
}
