import { Http } from "angular2/http";
export declare class MenuServices {
    http: Http;
    private _subject;
    constructor(http: Http);
    getMenu(): any;
}
