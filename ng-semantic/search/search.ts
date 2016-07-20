import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, AfterViewInit } from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES, FormControl } from "@angular/forms";
import "rxjs/add/operator/distinct";
import "rxjs/add/operator/debounceTime";
import { Observable } from "rxjs/Rx";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [REACTIVE_FORM_DIRECTIVES],
    selector: "sm-search",
    template: `<div class="ui search" [ngClass]="{'loading': loading}">
 <div class="ui icon input {{class}} ">
  <input class="prompt" [formControl]="searchControl" type="text" [attr.placeholder]="placeholder">
  <i *ngIf="icon" class="search icon"></i>
  </div>
  <div class="results"></div>
</div>`
})
export class SemanticSearchComponent implements AfterViewInit {
    @Input() class: string;
    @Input() icon: boolean;
    @Input() loading: boolean;
    @Input() debounce: number = 0;
    @Input() placeholder: string;
    @Output() onSearch: EventEmitter<string|number> = new EventEmitter<string|number>();
    searchControl: FormControl = new FormControl();

    ngAfterViewInit() {
        this.searchControl
            .valueChanges
            .distinctUntilChanged()
            .debounceTime(this.debounce)
            .subscribe((data: string|number) => this.onSearch.emit(data));
    }
}
