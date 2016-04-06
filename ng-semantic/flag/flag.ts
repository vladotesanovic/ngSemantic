import {Component, ChangeDetectionStrategy, Input} from "angular2/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-flag",
    template: `<i class="{{flag}} flag"></i>`
})
export class SemanticFlag {
    @Input('flag') flag: string;
}