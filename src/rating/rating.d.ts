import { AfterViewInit, ElementRef, EventEmitter, SimpleChanges, OnChanges } from "@angular/core";
export declare class SemanticRatingComponent implements AfterViewInit, OnChanges {
    class: string;
    initialRating: number;
    maxRating: number;
    onRate: EventEmitter<number>;
    rating: ElementRef;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
