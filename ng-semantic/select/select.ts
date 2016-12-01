import {
    Component, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, ChangeDetectionStrategy
} from "@angular/core";
import { FormControl } from "@angular/forms";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-select",
    template: `<div class="field" [ngClass]="{error: (!control?.valid && control?.touched) }">
  <label *ngIf="label">{{label}}</label>
<select [formControl]="control" class="ui {{class}} dropdown"  #select>
    <option value="">{{placeholder}}</option>
    <ng-content></ng-content>
</select>
</div>`
})
export class SemanticSelectComponent implements AfterViewInit {
    @Input() control: FormControl = new FormControl();
    @Input() class: string;
    @Input() label: string;

    @Input("disabled")
    set disabled(data: boolean) {
        setTimeout(() => {
            if (data) {
                jQuery(this.select.nativeElement.parentNode).addClass("disabled");
            } else {
                jQuery(this.select.nativeElement.parentNode).removeClass("disabled");
            }
        }, 1);
    };

    @Input() options: {} = {};
    @Input() placeholder: string;
    @Output() modelChange: EventEmitter<string|number> = new EventEmitter<string|number>();
    @Output() onChange: EventEmitter<string|number> = new EventEmitter<string|number>();
    @ViewChild("select") select: ElementRef;
    @Input("model")
    set model(data: string|number) {
        if (data) {
            setTimeout(() => {
                jQuery(this.select.nativeElement).dropdown("set selected", data);
            }, 1);
        }
    }

    private multiple: boolean = false;

    ngAfterViewInit(): void {

        if (typeof this.class === "string" && this.class.search("multiple") >= 0) {
            this.select.nativeElement.setAttribute("multiple", true);
        }

        const options: {} = Object.assign({
            onChange: (value: string|number) => {
                this.onChange.emit(value);
                this.modelChange.emit(value);
            },
            onHide: () => this.control.markAsTouched()
        }, this.options);

        jQuery(this.select.nativeElement)
            .dropdown(options);
    }
}
