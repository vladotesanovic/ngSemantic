import { AfterViewInit } from "angular2/core";
import { MessageService } from "../../../services/message";
export declare class SemanticMessage implements AfterViewInit {
    ms: MessageService;
    messages: Array<string>;
    duration: number;
    private LENGTH;
    constructor(ms: MessageService);
    ngAfterViewInit(): void;
}
