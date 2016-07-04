import { Component, ChangeDetectionStrategy, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { FormControl, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [REACTIVE_FORM_DIRECTIVES],
    selector: "sm-dropdown",
    template: `<select [formControl]="control" class="ui {{class}} dropdown"  #dropdown>
        <option value="">{{placeholder}}</option>
        <option *ngFor="let item of items">{{item}}</option>
      </select>`
})
export class SemanticDropdownComponent implements AfterViewInit {
    @Input("control") control: FormControl;
    @Input() class: string;
    @Input() placeholder: string;
    multiple: boolean = false;
    @Input() items: { [key: string ]: string };
    @Output() onChange: EventEmitter<string|number> = new EventEmitter<string|number>();
    @ViewChild("dropdown") dropdown: ElementRef;

    ngAfterViewInit(): void {
        this.multiple = this.class.search("multiple") >= 0;

        if (this.multiple) {
            this.dropdown.nativeElement.setAttribute("multiple", true);
        }

        jQuery(this.dropdown.nativeElement)
            .dropdown({
                onChange: (value: string|number) => this.onChange.emit(value)
            });
    }
}
