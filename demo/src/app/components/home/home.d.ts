import { MessageService } from "../../services/message";
export declare class HomeComponent {
    ms: MessageService;
    constructor(ms: MessageService);
    submitMessage(): void;
}
