import {
    Component, ChangeDetectionStrategy, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter
} from "@angular/core";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-dropdown",
    template: `
    <div class="ui {{class}} dropdown item" #dropdown>
    <div *ngIf="title" class="text">{{title}}</div>
    <i class="dropdown icon"></i>
    <div class="menu">
        <ng-content></ng-content>
    </div>
  </div>
`
})
export class SemanticDropdownComponent implements AfterViewInit {
    @Input() class: string;
    @Input() title: string;
    @Input() items: Array<{}>;
    @Input() options: {} = {};
    @Output() onChange: EventEmitter<string|number> = new EventEmitter<string|number>();
    @ViewChild("dropdown") dropdown: ElementRef;

    ngAfterViewInit(): void {

        const options: {} = Object.assign(this.options, {
            onChange: (value: string|number) => this.onChange.emit(value)
        });

        jQuery(this.dropdown.nativeElement)
            .dropdown(options);
    }
}
