import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Rx";

export interface IContextMenu {
    action: Function;
    title: string;
    icon: string;
}

@Injectable()
export class ContextMenuService {
    public menu: Subject<IContextMenu> = new Subject<IContextMenu>();
}
