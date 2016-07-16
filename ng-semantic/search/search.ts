import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-search",
    template: `<div class="ui search">
 <div class="ui icon input {{class}} ">
  <input class="prompt" #input (keydown)="onKeyDownPress(input.value)" type="text" [attr.placeholder]="placeholder">
  <i *ngIf="icon" class="search icon"></i>
  </div>
  <div class="results"></div>
</div>`
})
export class SemanticSearchComponent {
    @Input() class: string;
    @Input() icon: boolean;
    @Input() placeholder: string;
    @Output() onSearch: EventEmitter<string|number> = new EventEmitter<string|number>();

    onKeyDownPress(data: string|number) {
        this.onSearch.emit(data);
    }
}
