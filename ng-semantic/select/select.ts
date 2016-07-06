import {
    Component, ChangeDetectionStrategy, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter
} from "@angular/core";
import { FormControl, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [REACTIVE_FORM_DIRECTIVES],
    selector: "sm-select",
    template: `<select [formControl]="control" class="ui {{class}} dropdown"  #select>
        <option value="">{{placeholder}}</option>
        <ng-content></ng-content>
      </select>`
})
export class SemanticSelectComponent implements AfterViewInit {
    @Input() control: FormControl;
    @Input() class: string;
    @Input() options: {};
    @Input() placeholder: string;
    multiple: boolean = false;
    @Output() onChange: EventEmitter<string|number> = new EventEmitter<string|number>();
    @ViewChild("select") select: ElementRef;

    ngAfterViewInit(): void {

        if (typeof this.class === "string" && this.class.search("multiple") >= 0) {
            this.select.nativeElement.setAttribute("multiple", true);
        }

        jQuery(this.select.nativeElement)
            .dropdown(this.options || {})
            .dropdown({
                onChange: (value: string|number) => this.onChange.emit(value)
            });
    }
}
