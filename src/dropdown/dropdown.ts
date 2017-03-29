import {
  Component, ChangeDetectionStrategy, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter
} from "@angular/core";

declare var jQuery: any;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-dropdown",
  template: `
    <div
      class="ui {{class}} dropdown"
      (focus)="onFocus.next($event)"
      (blur)="onBlur.next($event)"
      #dropdown>
        <input type="hidden" name="{{name}}" #input>
        <i *ngIf="icon" class="{{icon}} icon"></i>
        <div *ngIf="title" class="default text">{{title}}</div>
        <i class="{{arrowIcon}} icon"></i>
        <div class="menu">
            <ng-content></ng-content>
        </div>
    </div>
`
})
export class SemanticDropdownComponent implements AfterViewInit {
  @Input() class: string;
  @Input() title: string;
  @Input() icon: string;
  @Input() arrowIcon: string = "dropdown";
  @Input() name: string;
  @Input() items: Array<{}>;
  @Input() options: {} = {};
  @Input() value: number;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() onChange: EventEmitter<string|number> = new EventEmitter<string|number>();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @ViewChild("dropdown") dropdown: ElementRef;
  @ViewChild("input") input: ElementRef;

  ngAfterViewInit(): void {

    const options: {} = Object.assign({
      onChange: (value: string|number, a: string|number, b: Array<HTMLElement>) => {
        if (b != null && b.length) {
          this.value = parseInt(b[0].dataset.value);
          this.valueChange.emit(this.value);
          this.input.nativeElement.value = this.value;
          this.onChange.emit(b[0].innerText);
        }
      }
    }, this.options);

    jQuery(this.dropdown.nativeElement)
      .dropdown(options);
  }
}
