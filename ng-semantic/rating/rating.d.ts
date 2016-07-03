import { AfterViewInit, ElementRef, EventEmitter } from "@angular/core";
export declare class SemanticRatingComponent implements AfterViewInit {
    class: string;
    initialRating: number;
    maxRating: number;
    onRate: EventEmitter<number>;
    rating: ElementRef;
    ngAfterViewInit(): void;
}
