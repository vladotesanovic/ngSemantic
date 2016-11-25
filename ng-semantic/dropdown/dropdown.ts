import {
    Component, ChangeDetectionStrategy, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter
} from "@angular/core";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-dropdown",
    template: `
    <div class="ui {{class}} dropdown item" #dropdown>
        <i *ngIf="icon" class="{{icon}} icon"></i>
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
    @Input() icon: string;
    @Input() items: Array<{}>;
    @Input() options: {} = {};
    @Output() onChange: EventEmitter<string|number> = new EventEmitter<string|number>();
    @ViewChild("dropdown") dropdown: ElementRef;

    ngAfterViewInit(): void {

        const options: {} = Object.assign({
            onChange: (value: string|number, a: string|number, b: Array<HTMLElement>) => {
                if (b != null && b.length) {
                    this.onChange.emit(b[0].innerText);
                }
            }
        }, this.options);

        jQuery(this.dropdown.nativeElement)
            .dropdown(options);
    }
}
