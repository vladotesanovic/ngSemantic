import {
    Component, ChangeDetectionStrategy, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter
} from "@angular/core";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-dropdown",
    template: `
    <div class="ui pointing dropdown link item" #dropdown>
    <span class="text">{{title}}</span>
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item" *ngFor="let item of items">{{item}}</div>
    </div>
  </div>
`
})
export class SemanticDropdownComponent implements AfterViewInit {
    @Input() class: string;
    @Input() title: string;
    @Input() items: Array<{}>;
    @Input() options: {};
    @Output() onChange: EventEmitter<string|number> = new EventEmitter<string|number>();
    @ViewChild("dropdown") dropdown: ElementRef;

    ngAfterViewInit(): void {

        jQuery(this.dropdown.nativeElement)
            .dropdown(this.options || {})
            .dropdown({
                onChange: (value: string|number) => this.onChange.emit(value)
            });
    }
}
