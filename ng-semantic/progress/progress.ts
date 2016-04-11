import {Component, Input, ChangeDetectionStrategy, ViewEncapsulation} from "angular2/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-progress",
    template: `<div [ngClass]="{'success': _progress === 100}" class="ui {{class}} progress">
  <div class="bar" [ngStyle]="{'width': _progress + '%'}">
    <div class="progress">{{_progress}}%</div>
  </div>
  <div class="label" *ngIf="label">{{label}}</div>
</div>`
})
export class SemanticProgress {
    @Input("label") label: string;
    @Input("class") class: string;
    _progress: number = 0;

    @Input()
    set progress(value: number) {
        this._progress = (value >= 100) ? 100: value;
    }
}