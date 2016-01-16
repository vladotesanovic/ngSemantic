import { Http } from "angular2/http";
import { Observable } from "rxjs/Rx";
export declare class DataServices {
    http: Http;
    constructor(http: Http);
    flatArray(): Observable<any>;
}
