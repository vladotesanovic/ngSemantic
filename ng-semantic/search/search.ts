import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES, FormControl } from "@angular/forms";

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
export class SemanticSearchComponent {
    @Input() class: string;
    @Input() icon: boolean;
    @Input() loading: boolean;
    @Input() placeholder: string;
    @Output() onSearch: EventEmitter<string|number> = new EventEmitter<string|number>();
    searchControl: FormControl = new FormControl();

    constructor() {

        this.searchControl
            .valueChanges
            .distinctUntilChanged()
            .subscribe((data: string|number) => this.onSearch.emit(data));
    }
}
