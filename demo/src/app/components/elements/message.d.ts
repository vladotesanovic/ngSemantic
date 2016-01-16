import { MessageService } from "../../services/message";
export declare class MessageComponent {
    ms: MessageService;
    constructor(ms: MessageService);
    submitMessage(event: Event, message: Object): void;
}
