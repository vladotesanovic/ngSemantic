import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

/**
 * A function that performs an error check returning true if in error.
 */
export type ErrorCheckFunction = () => boolean;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-progress",
  template: `
    <div [ngClass]="{'success': isSuccess(), 'error': isError()}" class="ui {{class}} progress" [attr.data-percent]="_progress">
      <div class="bar" [ngStyle]="{'width': _progress + '%'}">
        <div class="progress">{{_progress}}%</div>
      </div>
      <div class="label" *ngIf="label">{{label}}</div>
    </div>`
})
export class SemanticProgressComponent {
  @Input() label: string;
  @Input() class: string;
  @Input() errorCheckFn: ErrorCheckFunction;
  _progress: number = 0;

  @Input()
  set progress(value: number) {
    this._progress = (value >= 100) ? 100 : value;
  }

  /**
   * Success is 100% complete with no errors.
   * @returns {boolean}
   */
  isSuccess() {
    return this._progress === 100 && !this.isError()
  }

  /**
   * Error condition is determined by evaluating an optional user provided function.
   * @returns {boolean}
   */
  isError(): boolean {
    if (!!this.errorCheckFn) {
      return this.errorCheckFn();
    } else {
      return false;
    }
  }
}
